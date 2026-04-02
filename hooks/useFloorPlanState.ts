import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  FloorPlanData,
  Wall,
  FurnitureItem,
  EventDetails,
  CanvasSettings,
  Room,
  HistoryState,
  Point,
} from '../types/floorplan.types';

const createInitialFloorPlan = (): FloorPlanData => ({
  id: uuidv4(),
  name: 'Untitled Floor Plan',
  version: '1.0.0',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  walls: [],
  rooms: [],
  furniture: [],
  eventDetails: {
    eventType: '',
    guestCount: 0,
    services: [],
  },
  canvasSettings: {
    width: 3200,
    height: 2400,
    scale: 20,
    gridSize: 20,
    showGrid: true,
    showDimensions: false,
    snapToGrid: true,
    backgroundColor: '#FFFFFF',
  },
  isLocked: false,
});

export const useFloorPlanState = () => {
  const [history, setHistory] = useState<HistoryState>({
    past: [],
    present: createInitialFloorPlan(),
    future: [],
  });

  const present = history.present;

  // ----------------------------
  //Canvas settings
  // ----------------------------
  const updateFloorPlan = useCallback(
    (updater: (prev: FloorPlanData) => FloorPlanData) => {
      setHistory((prev) => {
        const newPresent = updater(prev.present);
        return {
          past: [...prev.past, prev.present],
          present: { ...newPresent, updatedAt: new Date().toISOString() },
          future: [],
        };
      });
    },
    []
  );

  const updateCanvasSettings = useCallback(
    (updates: Partial<CanvasSettings>) => {
      updateFloorPlan((prev) => ({
        ...prev,
        canvasSettings: { ...prev.canvasSettings, ...updates },
      }));
    },
    [updateFloorPlan]
  );

  const toggleLock = useCallback(() => {
    updateFloorPlan((prev) => ({
      ...prev,
      isLocked: !prev.isLocked,
    }));
  }, [updateFloorPlan]);

  const loadFloorPlan = useCallback((data: FloorPlanData) => {
    setHistory({
      past: [],
      present: data,
      future: [],
    });
  }, []);

  const resetFloorPlan = useCallback(() => {
    if (
      window.confirm(
        'Are you sure you want to reset? All unsaved changes will be lost.'
      )
    ) {
      setHistory({
        past: [],
        present: createInitialFloorPlan(),
        future: [],
      });
    }
  }, []);

  // ----------------------------
  //Canvas settings
  // ----------------------------

  // Undo
  const undo = useCallback(() => {
    setHistory((prev) => {
      if (prev.past.length === 0) return prev;
      const previous = prev.past[prev.past.length - 1];
      const newPast = prev.past.slice(0, prev.past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [prev.present, ...prev.future],
      };
    });
  }, []);

  // Redo
  const redo = useCallback(() => {
    setHistory((prev) => {
      if (prev.future.length === 0) return prev;
      const next = prev.future[0];
      const newFuture = prev.future.slice(1);
      return {
        past: [...prev.past, prev.present],
        present: next,
        future: newFuture,
      };
    });
  }, []);

  // ----------------------------
  // Wall
  // ----------------------------
  const addWall = useCallback(
    (wall: Omit<Wall, 'id'>) => {
      updateFloorPlan((prev) => ({
        ...prev,
        walls: [...prev.walls, { ...wall, id: uuidv4() }],
      }));
    },
    [updateFloorPlan]
  );

  const updateWall = useCallback(
    (wallId: string, updates: Partial<Wall>) => {
      updateFloorPlan((prev) => ({
        ...prev,
        walls: prev.walls.map((wall) =>
          wall.id === wallId ? { ...wall, ...updates } : wall
        ),
      }));
    },
    [updateFloorPlan]
  );

  const deleteWall = useCallback(
    (wallId: string) => {
      updateFloorPlan((prev) => ({
        ...prev,
        walls: prev.walls.filter((wall) => wall.id !== wallId),
      }));
    },
    [updateFloorPlan]
  );
  // ----------------------------
  // Wall
  // ----------------------------

  // ----------------------------
  // Furniture
  // ----------------------------
  const addFurniture = useCallback(
    (f: Omit<FurnitureItem, 'id'>) => {
      const newId = uuidv4();
      updateFloorPlan((prev) => ({
        ...prev,
        furniture: [...prev.furniture, { ...f, id: newId }],
      }));
      return newId;
    },
    [updateFloorPlan]
  );

  const updateFurniture = useCallback(
    (furnitureId: string, updates: Partial<FurnitureItem>) => {
      updateFloorPlan((prev) => ({
        ...prev,
        furniture: prev.furniture.map((item) =>
          item.id === furnitureId ? { ...item, ...updates } : item
        ),
      }));
    },
    [updateFloorPlan]
  );

  const deleteFurniture = useCallback(
    (furnitureId: string) => {
      updateFloorPlan((prev) => ({
        ...prev,
        furniture: prev.furniture.filter((item) => item.id !== furnitureId),
      }));
    },
    [updateFloorPlan]
  );

  const moveFurniture = useCallback(
    (furnitureId: string, position: Point) => {
      updateFurniture(furnitureId, { position });
    },
    [updateFurniture]
  );

  const rotateFurniture = useCallback(
    (furnitureId: string, rotation: number) => {
      updateFurniture(furnitureId, { rotation });
    },
    [updateFurniture]
  );

  // Rotate a group of items as a single unit around their shared centroid.
  // Each item's position is orbited around the centroid by `angleDeg`, and
  // its own rotation is incremented by the same amount.
  const rotateGroup = useCallback(
    (ids: Set<string>, angleDeg: number) => {
      if (ids.size < 2) return;
      updateFloorPlan((prev) => {
        const targets = prev.furniture.filter((f) => ids.has(f.id));
        if (targets.length === 0) return prev;

        // Centroid of all selected items
        const cx = targets.reduce((s, f) => s + f.position.x, 0) / targets.length;
        const cy = targets.reduce((s, f) => s + f.position.y, 0) / targets.length;

        const rad = (angleDeg * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        const furniture = prev.furniture.map((item) => {
          if (!ids.has(item.id)) return item;
          const dx = item.position.x - cx;
          const dy = item.position.y - cy;
          return {
            ...item,
            position: {
              x: cx + dx * cos - dy * sin,
              y: cy + dx * sin + dy * cos,
            },
            rotation: ((item.rotation + angleDeg) % 360 + 360) % 360,
          };
        });

        return { ...prev, furniture };
      });
    },
    [updateFloorPlan]
  );

  // Set absolute rotation for the whole group (rotate all items so the group
  // lands at `targetDeg`, preserving relative orientations).
  const setGroupRotation = useCallback(
    (ids: Set<string>, targetDeg: number, currentGroupRotation: number) => {
      const delta = targetDeg - currentGroupRotation;
      rotateGroup(ids, delta);
    },
    [rotateGroup]
  );

  // Move all items in a group by the same delta.
  const nudgeGroup = useCallback(
    (ids: Set<string>, dx: number, dy: number) => {
      updateFloorPlan((prev) => ({
        ...prev,
        furniture: prev.furniture.map((item) =>
          ids.has(item.id)
            ? { ...item, position: { x: item.position.x + dx, y: item.position.y + dy } }
            : item
        ),
      }));
    },
    [updateFloorPlan]
  );

  // Move the group so its centroid lands at (targetX, targetY).
  const moveGroupCentroid = useCallback(
    (ids: Set<string>, targetX: number, targetY: number) => {
      updateFloorPlan((prev) => {
        const targets = prev.furniture.filter((f) => ids.has(f.id));
        if (targets.length === 0) return prev;
        const cx = targets.reduce((s, f) => s + f.position.x, 0) / targets.length;
        const cy = targets.reduce((s, f) => s + f.position.y, 0) / targets.length;
        const dx = targetX - cx;
        const dy = targetY - cy;
        return {
          ...prev,
          furniture: prev.furniture.map((item) =>
            ids.has(item.id)
              ? { ...item, position: { x: item.position.x + dx, y: item.position.y + dy } }
              : item
          ),
        };
      });
    },
    [updateFloorPlan]
  );

  // Set all selected items (must be same-name) to an identical dimension value.
  const setGroupDimension = useCallback(
    (ids: Set<string>, key: 'width' | 'height', value: number) => {
      updateFloorPlan((prev) => ({
        ...prev,
        furniture: prev.furniture.map((item) =>
          ids.has(item.id)
            ? { ...item, dimensions: { ...item.dimensions, [key]: value } }
            : item
        ),
      }));
    },
    [updateFloorPlan]
  );

  // Delete all items in the group.
  const deleteGroup = useCallback(
    (ids: Set<string>) => {
      updateFloorPlan((prev) => ({
        ...prev,
        furniture: prev.furniture.filter((item) => !ids.has(item.id)),
      }));
    },
    [updateFloorPlan]
  );

  // ----------------------------
  // Furniture
  // ----------------------------

  // ----------------------------
  // Room
  // ----------------------------
  const addRoom = useCallback(
    (room: Omit<Room, 'id'>) => {
      const id = uuidv4();
      updateFloorPlan((prev) => ({
        ...prev,
        rooms: [...prev.rooms, { ...room, id }],
      }));
      return id;
    },
    [updateFloorPlan]
  );

  const updateRoom = useCallback(
    (roomId: string, updates: Partial<Room>) => {
      updateFloorPlan((prev) => ({
        ...prev,
        rooms: prev.rooms.map((room) =>
          room.id === roomId ? { ...room, ...updates } : room
        ),
      }));
    },
    [updateFloorPlan]
  );

  const deleteRoom = useCallback(
    (roomId: string) => {
      updateFloorPlan((prev) => ({
        ...prev,
        rooms: prev.rooms.filter((room) => room.id !== roomId),
      }));
    },
    [updateFloorPlan]
  );
  // ----------------------------
  // Room
  // ----------------------------

  // ----------------------------
  // Event
  // ----------------------------
  const updateEventDetails = useCallback(
    (updates: Partial<EventDetails>) => {
      updateFloorPlan((prev) => ({
        ...prev,
        eventDetails: { ...prev.eventDetails, ...updates },
      }));
    },
    [updateFloorPlan]
  );
  // ----------------------------
  // Event
  // ----------------------------

  // ----------------------------
  // Window and Door delete Logic
  // ----------------------------
  const deleteDoor = useCallback(
    (doorId: string) => {
      updateFloorPlan((prev) => ({
        ...prev,
        walls: prev.walls.map((wall) => ({
          ...wall,
          doors: wall.doors.filter((d) => d.id !== doorId),
        })),
      }));
    },
    [updateFloorPlan]
  );

  const deleteWindow = useCallback(
    (windowId: string) => {
      updateFloorPlan((prev) => ({
        ...prev,
        walls: prev.walls.map((wall) => ({
          ...wall,
          windows: wall.windows.filter((w) => w.id !== windowId),
        })),
      }));
    },
    [updateFloorPlan]
  );
  // ----------------------------
  // Window and Door delete Logic
  // ----------------------------

  return {
    floorPlan: present,
    canUndo: history.past.length > 0,
    canRedo: history.future.length > 0,
    undo,
    redo,
    addWall,
    updateWall,
    deleteWall,
    deleteDoor,
    deleteWindow,
    addFurniture,
    updateFurniture,
    moveFurniture,
    rotateFurniture,
    rotateGroup,
    setGroupRotation,
    nudgeGroup,
    moveGroupCentroid,
    setGroupDimension,
    deleteGroup,
    deleteFurniture,
    addRoom,
    updateRoom,
    deleteRoom,
    updateEventDetails,
    updateCanvasSettings,
    toggleLock,
    loadFloorPlan,
    resetFloorPlan,
  };
};
