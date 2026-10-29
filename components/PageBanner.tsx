"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PageBannerData } from "@/types/content";

interface PageBannerProps {
  data: PageBannerData;
  className?: string;
}

export default function PageBanner({ data, className = "" }: PageBannerProps) {
  const breadcrumbParts = data.breadcrumb.split("/").map((p) => p.trim());

  return (
    <section className={`relative py-6 bg-gradient-to-b from-[#EDF4E5] via-[#F2F6EA] to-[#F7F7F0] border-b border-[#E2E6DA]/80 overflow-hidden ${className}`}>
      <div
        className="absolute top-0 right-12 -translate-y-1/3 w-96 h-96 rounded-full bg-[#D4EAA2]/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 left-10 w-80 h-80 rounded-full bg-[#DFECDE]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_0%,rgba(255,255,255,0.5),transparent)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#F7F7F0] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
          className="mb-6 sm:mb-8"
        >
          <ol className="flex items-center flex-wrap gap-2 text-[13.5px] font-medium text-[#4A5D50]">
            <li>
              <Link
                href="/"
                className="hover:text-[#143323] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded px-1 -mx-1"
              >
                {breadcrumbParts[0]}
              </Link>
            </li>
            {breadcrumbParts.slice(1).map((part, idx) => {
              const isLast = idx === breadcrumbParts.length - 2;
              return (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#96A89B]" aria-hidden="true">/</span>
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={`font-semibold ${isLast ? "text-[#143323]" : "text-[#4A5D50]"}`}
                  >
                    {part}
                  </span>
                </li>
              );
            })}
          </ol>
        </motion.nav>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EED0] border border-[#CCE0B2] text-[#143323] text-[13.5px] font-bold tracking-[0.16em] uppercase mb-4 shadow-xs font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[#143323]" aria-hidden="true" />
              <span>{data.eyebrow}</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#143323] leading-[1.1] mb-5">
              {data.headingPart1}
              <br />
              <span className="italic font-serif font-normal text-[#143323]">
                {data.headingItalic}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#4A5D50] leading-relaxed max-w-2xl">
              {data.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.06, rotate: 4 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 120 }}
            className="shrink-0 self-center sm:self-start lg:self-auto cursor-default mt-2 lg:mt-0"
          >
            <div className="relative w-36 h-36 rounded-full bg-[#D4EAA2] p-4 flex flex-col items-center justify-center text-center shadow-md border-2 border-dashed border-[#143323]/25 transition-shadow hover:shadow-lg">
              <div className="text-[#143323] mb-1.5" aria-hidden="true">
                <svg
                  className="w-6 h-6 stroke-[#143323] fill-none stroke-[2.2]"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21V11M12 11C12 7 9 4 5 4c0 4 3 7 7 7zm0 0c0-4 3-7 7-7 0 4-3 7-7 7z"
                  />
                </svg>
              </div>
              <span className="text-[13.5px] font-bold text-[#143323] leading-tight font-sans">
                {(() => {
                  const badgeText = data.circularBadgeText || "Good things grow together.";
                  const words = badgeText.split(" ");
                  const firstPart = words.slice(0, 2).join(" ");
                  const secondPart = words.slice(2).join(" ");
                  return (
                    <>
                      {firstPart}
                      {secondPart && (
                        <>
                          <br />
                          <span className="italic font-serif font-normal text-[13.5px]">
                            {secondPart}
                          </span>
                        </>
                      )}
                    </>
                  );
                })()}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
