"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PreFooterCTAData } from "@/types/content";
import { preFooterCTAData } from "@/lib/content";

interface PreFooterCTAProps {
  data?: PreFooterCTAData;
  className?: string;
}

export default function PreFooterCTA({ data = preFooterCTAData, className = "" }: PreFooterCTAProps) {
  return (
    <section
      aria-label="Call to action"
      className={`relative bg-gradient-to-br from-[#163827] via-[#10271C] to-[#143323] text-[#FAFBF7] py-6 border-t border-[#1F4532] overflow-hidden ${className}`}
    >
      <div
        className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D0EA87]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 left-10 w-72 h-72 rounded-full bg-[#1C412E]/60 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute right-6 -bottom-12 w-64 h-64 lg:w-80 lg:h-80 text-[#D0EA87]/[0.06] pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M40 180 C40 110, 110 40, 180 40 C180 110, 110 180, 40 180 Z" />
          <path d="M40 180 C80 140, 130 90, 180 40" />
          <path d="M90 130 C120 130, 140 110, 150 90" />
          <path d="M70 150 C95 150, 115 135, 125 120" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D0EA87]/15 border border-[#D0EA87]/30 text-[#D0EA87] text-[13.5px] font-bold tracking-[0.16em] uppercase mb-4 shadow-xs font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D0EA87] animate-pulse" aria-hidden="true" />
              <span>{data.eyebrow}</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
              {data.headingPart1}
              <br />
              <span className="italic font-serif font-normal text-[#D4EAA2]">
                {data.headingItalic}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#FAFBF7]/85 leading-relaxed max-w-xl">
              {data.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3.5 shrink-0 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href={data.primaryButton.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[44px] rounded-full bg-[#D4EAA2] text-[#143323] font-semibold text-sm hover:bg-[#C2E073] transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0EA87] focus-visible:ring-offset-2 focus-visible:ring-offset-[#143323]"
              >
                <span>{data.primaryButton.text}</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href={data.secondaryLink.href}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/35 text-[13.5px] sm:text-sm font-semibold text-[#FAFBF7] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#143323]"
              >
                <span>{data.secondaryLink.text}</span>
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
