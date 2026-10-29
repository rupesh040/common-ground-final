"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { GallerySectionData } from "@/types/content";
import { gallerySectionData } from "@/lib/content";

interface GalleryViewProps {
  data?: GallerySectionData;
  className?: string;
}

export default function GalleryView({ data = gallerySectionData, className = "" }: GalleryViewProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? data.items
      : data.items.filter((item) => item.category === activeCategory);

  const handlePrev = useCallback(() => {
    setActiveImageIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    setActiveImageIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const handleClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeImageIndex, handlePrev, handleNext, handleClose]);

  const currentModalItem =
    activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <section className={`py-6 bg-[#F7F7F0] overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12"
        >
          
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter gallery by category">
            {data.categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    setActiveCategory(cat.value);
                    setActiveImageIndex(null);
                  }}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-[#143323] text-[#FAFBF7] shadow-xs scale-[1.02]"
                      : "bg-white text-[#4A5D50] border border-[#E2E6DA] hover:border-[#143323] hover:text-[#143323]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-bold ${isActive ? "text-[#D0EA87]" : "text-[#7B8F80]"}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <span className="text-xs text-[#4A5D50] font-medium self-end sm:self-auto">
            {filteredItems.length} {filteredItems.length === 1 ? "image" : "images"} to explore
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {filteredItems.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              layout
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveImageIndex(index)}
              className="group relative w-full aspect-[16/11] rounded-3xl overflow-hidden bg-[#E8EDE2] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#143323]/40"
              aria-label={`Open photo ${index + 1}: ${item.title || "Gallery image"} in popup`}
            >
              <Image
                src={item.image}
                alt={item.title || "Gallery photo"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-full bg-white/95 text-[#143323] text-xs font-semibold backdrop-blur-xs shadow-md">
                  View Photo
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <p className="text-xs text-[#4A5D50] text-center sm:text-left max-w-2xl border-t border-[#E2E6DA] pt-8 leading-relaxed">
          {data.footerNote}
        </p>

      </div>

      <AnimatePresence>
        {currentModalItem && activeImageIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          >
            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 z-30 flex items-center justify-between pointer-events-none">
              <div className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#FAFBF7] text-xs font-semibold tracking-wider pointer-events-auto shadow-sm">
                {activeImageIndex + 1} / {filteredItems.length}
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                aria-label="Close popup"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center shadow-md border border-white/20 pointer-events-auto cursor-pointer"
              >
                <svg className="w-5 h-5 stroke-white stroke-2" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20 cursor-pointer"
            >
              <svg className="w-6 h-6 stroke-white stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.div
              key={currentModalItem.id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[65vh] sm:h-[78vh] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/40 flex items-center justify-center select-none"
            >
              <Image
                src={currentModalItem.image}
                alt={currentModalItem.title || "Gallery image preview"}
                fill
                priority
                sizes="(max-width: 1200px) 90vw, 1200px"
                className="object-contain"
              />
            </motion.div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20 cursor-pointer"
            >
              <svg className="w-6 h-6 stroke-white stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
