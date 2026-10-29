"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CommonGroundVolunteerCTA1Data } from "@/types/content";
import { volunteerCTAData } from "@/lib/content";

interface VolunteerCTAProps {
  data?: CommonGroundVolunteerCTA1Data;
  className?: string;
}

export default function VolunteerCTA({ data = volunteerCTAData, className = "" }: VolunteerCTAProps) {
  return (
    <section aria-label="Volunteer" className={`bg-[#143323] text-[#FAFBF7] py-6 overflow-hidden relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D0EA87]/15 border border-[#D0EA87]/30 text-[#D0EA87] text-[11px] font-bold tracking-[0.16em] uppercase mb-4 shadow-xs font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D0EA87] animate-pulse" aria-hidden="true" />
              <span>{data.eyebrow}</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] mb-6">
              {data.headingPart1}
              <br />
            </h2>

            <p className="text-xs sm:text-sm tracking-wider uppercase text-[#FAFBF7]/90 font-semibold mb-9 font-sans">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  href={data.primaryButton.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[44px] rounded-full bg-[#D4EAA2] text-[#143323] font-semibold text-sm hover:bg-[#C2E073] transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0EA87] focus-visible:ring-offset-2 focus-visible:ring-offset-[#143323]"
                >
                  <span>{data.primaryButton.text}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  href={data.secondaryButton.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[44px] rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#143323]"
                >
                  <span>{data.secondaryButton.text}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-center justify-center text-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-44 h-44 text-[#D4EAA2] mb-4"
              aria-hidden="true"
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                <circle cx="50" cy="30" r="14" strokeDasharray="1 1" />
                <circle cx="70" cy="45" r="14" />
                <circle cx="62" cy="70" r="14" strokeDasharray="1 1" />
                <circle cx="38" cy="70" r="14" />
                <circle cx="30" cy="45" r="14" strokeDasharray="1 1" />
                <circle cx="50" cy="50" r="8" fill="#D4EAA2" fillOpacity="0.25" />
                <path d="M50 58 Q50 82 52 95" strokeWidth="2" strokeLinecap="round" />
                <path d="M50 75 Q65 70 70 76" strokeLinecap="round" />
                <path d="M50 82 Q35 77 30 83" strokeLinecap="round" />
              </svg>
            </motion.div>

            <p className="font-editorial italic text-base sm:text-lg text-[#D4EAA2] max-w-xs">
              &ldquo;{data.floralQuote}&rdquo;
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
