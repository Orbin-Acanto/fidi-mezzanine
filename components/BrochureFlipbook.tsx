"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist";
import React from "react";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const Page = React.forwardRef<
  HTMLDivElement,
  { src: string; pageNumber: number }
>(function Page({ src, pageNumber }, ref) {
  return (
    <div ref={ref} className="bg-white">
      <img
        src={src}
        alt={`Brochure page ${pageNumber}`}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
});

export default function BrochureFlipbook() {
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 550, height: 733 });
  const [isMobile, setIsMobile] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const bookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function renderPDF() {
      try {
        const pdf = await pdfjsLib.getDocument("/Brochure.pdf").promise;
        setTotalPages(pdf.numPages);

        const firstPage = await pdf.getPage(1);
        const firstViewport = firstPage.getViewport({ scale: 1 });
        const ratio = firstViewport.height / firstViewport.width;
        setAspectRatio(ratio);

        const rendered: string[] = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const scale = 2.5;
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext("2d")!;
          await page.render({ canvasContext: ctx, viewport }).promise;
          rendered.push(canvas.toDataURL("image/png"));
        }

        setPages(rendered);
        setLoading(false);
      } catch (error) {
        console.error("Error rendering PDF:", error);
        setLoading(false);
      }
    }

    renderPDF();
  }, []);

  useEffect(() => {
    if (aspectRatio === null) return;

    function updateSize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const availableH = h - 96 - 56;
      const mobile = w < 768;
      setIsMobile(mobile);

      if (mobile) {
        const pageWidth = w - 32;
        const pageHeight = Math.round(pageWidth * aspectRatio!);
        if (pageHeight > availableH) {
          const fitWidth = Math.round(availableH / aspectRatio!);
          setDimensions({ width: fitWidth, height: availableH });
        } else {
          setDimensions({ width: pageWidth, height: pageHeight });
        }
      } else if (w < 1024) {
        const navSpace = 120;
        const spreadWidth = w - navSpace;
        const pageWidth = Math.round(spreadWidth / 2);
        const pageHeight = Math.round(pageWidth * aspectRatio!);
        if (pageHeight > availableH) {
          const fitWidth = Math.round(availableH / aspectRatio!);
          setDimensions({ width: fitWidth, height: availableH });
        } else {
          setDimensions({ width: pageWidth, height: pageHeight });
        }
      } else {
        const navSpace = 160;
        const maxSpread = 1400;
        const spreadWidth = Math.min(w - navSpace, maxSpread);
        const pageWidth = Math.round(spreadWidth / 2);
        const pageHeight = Math.round(pageWidth * aspectRatio!);
        if (pageHeight > availableH) {
          const fitWidth = Math.round(availableH / aspectRatio!);
          setDimensions({ width: fitWidth, height: availableH });
        } else {
          setDimensions({ width: pageWidth, height: pageHeight });
        }
      }
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [aspectRatio]);

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const goNext = () => bookRef.current?.pageFlip()?.flipNext();
  const goPrev = () => bookRef.current?.pageFlip()?.flipPrev();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (loading) {
    return (
      <div
        className="flex items-center justify-center bg-neutral-900"
        style={{ height: "calc(100vh - 6rem)" }}
      >
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60 text-lg">Loading brochure...</p>
        </div>
      </div>
    );
  }

  if (pages.length === 0) {
    return (
      <div
        className="flex items-center justify-center bg-neutral-900"
        style={{ height: "calc(100vh - 6rem)" }}
      >
        <p className="text-white/60 text-lg">Failed to load brochure.</p>
      </div>
    );
  }

  const displayPage = isMobile
    ? currentPage + 1
    : currentPage === 0
      ? 1
      : Math.min(currentPage + 1, totalPages);

  return (
    <section
      className="relative bg-neutral-900 overflow-hidden "
      style={{ height: "calc(100vh - 6rem)" }}
    >
      <a
        href="/Brochure.pdf"
        download
        className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/20 transition-all"
        aria-label="Download Brochure"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </a>
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center h-full select-none"
      >
        <div className="relative flex items-center justify-center flex-1 w-full">
          <button
            onClick={goPrev}
            className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Previous page"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center justify-center">
            <HTMLFlipBook
              ref={bookRef}
              width={dimensions.width}
              height={dimensions.height}
              size="fixed"
              minWidth={dimensions.width}
              maxWidth={dimensions.width}
              minHeight={dimensions.height}
              maxHeight={dimensions.height}
              showCover={true}
              maxShadowOpacity={0.6}
              mobileScrollSupport={false}
              onFlip={onFlip}
              className=""
              style={{}}
              startPage={0}
              drawShadow={true}
              flippingTime={800}
              usePortrait={isMobile}
              startZIndex={0}
              autoSize={false}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {pages.map((src, i) => (
                <Page key={i} src={src} pageNumber={i + 1} />
              ))}
            </HTMLFlipBook>
          </div>

          <button
            onClick={goNext}
            className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Next page"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 py-3">
          <button
            onClick={goPrev}
            className="md:hidden w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Previous page"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <span className="text-white/60 text-sm font-medium tracking-wider">
            {displayPage} / {totalPages}
          </span>

          <button
            onClick={goNext}
            className="md:hidden w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Next page"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
