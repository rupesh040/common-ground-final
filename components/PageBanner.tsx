"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PageBannerData } from "@/types/content";

interface PageBannerProps {
  data: PageBannerData;
}

export default function PageBanner({ data }: PageBannerProps) {
  const breadcrumbParts = data.breadcrumb.split("/").map((p) => p.trim());

  return (
    <section className="pt-8 pb-10 lg:pt-10 lg:pb-14 bg-[#f1f4e8] border-[1px] border-[#E5E8DF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-medium text-[#55685A] mb-8"
        >
          <Link href="/" className="hover:text-[#143323] transition-colors">
            {breadcrumbParts[0]}
          </Link>
          {breadcrumbParts.slice(1).map((part, idx) => (
            <React.Fragment key={idx}>
              <span className="text-[#A3B1A7]">/</span>
              <span className="text-[#143323] font-semibold">{part}</span>
            </React.Fragment>
          ))}
        </motion.nav>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#55685A] block mb-3.5">
              {data.eyebrow}
            </span>

            <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#143323] leading-[1.08] mb-5">
              {data.headingPart1}
              <br />
              <span className="italic font-serif font-normal text-[#143323]">
                {data.headingItalic}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#55685A] leading-relaxed max-w-2xl">
              {data.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 120 }}
            className="shrink-0 self-center lg:self-auto cursor-default"
          >
            <div className="relative w-36 h-36 rounded-full bg-[#D4EAA2] p-4 flex flex-col items-center justify-center text-center shadow-xs">
              <div className="text-[#143323] mb-1.5">
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
              <span className="text-[12.5px] font-bold text-[#143323] leading-tight font-sans">
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
