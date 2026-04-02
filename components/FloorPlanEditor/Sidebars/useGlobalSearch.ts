import { useMemo } from 'react';
import { FURNITURE_LIBRARY } from '@/constants/furnitureLibrary';
import { AV_EQUIPMENT_LIBRARY } from '@/constants/avEquipment';
import { CATERING_LIBRARY } from '@/constants/cateringStations';
import { DECOR_LIBRARY } from '@/constants/decorLibrary';
import { DraggableLibraryItem } from '@/types/floorplan.types';

export type LibrarySource = 'Furniture' | 'Audio/Visual' | 'Catering' | 'Decor/Props';

export interface CrossLibraryGroup {
  source: LibrarySource;
  items: DraggableLibraryItem[];
}

const OTHER_LIBRARIES: { source: LibrarySource; items: DraggableLibraryItem[] }[] = [
  { source: 'Furniture', items: FURNITURE_LIBRARY },
  { source: 'Audio/Visual', items: AV_EQUIPMENT_LIBRARY },
  { source: 'Catering', items: CATERING_LIBRARY },
  { source: 'Decor/Props', items: DECOR_LIBRARY },
];

export function useGlobalSearch(
  currentSource: LibrarySource,
  searchQuery: string
): CrossLibraryGroup[] {
  return useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();

    return OTHER_LIBRARIES
      .filter((lib) => lib.source !== currentSource)
      .map((lib) => ({
        source: lib.source,
        items: lib.items.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [currentSource, searchQuery]);
}
