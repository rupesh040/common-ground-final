"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MarqueeBannerSmallData } from "@/types/content";
import { marqueeBannerSmallData } from "@/lib/content";

interface MarqueeBannerSmallProps {
  data?: MarqueeBannerSmallData;
}

export default function MarqueeBannerSmall({
  data = marqueeBannerSmallData,
}: MarqueeBannerSmallProps) {
  return (
    <section className="bg-[#D4EAA2] py-10 border-y border-[#C5E18E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 text-center sm:text-left">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 text-[#143323] shrink-0 hidden sm:block"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" strokeLinecap="round" />
              </svg>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-base sm:text-lg font-bold text-[#143323] tracking-tight"
            >
              {data.textPart1}{" "}
              <span className="font-editorial italic font-normal text-xl sm:text-2xl">
                {data.textItalic}
              </span>
            </motion.p>
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={data.link.href}
              className="group inline-flex items-center gap-2 text-[13.5px] sm:text-sm font-bold text-[#143323] hover:text-[#0F281B] transition-colors whitespace-nowrap border-b border-[#143323]/40 pb-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] focus-visible:ring-offset-2 rounded-xs"
            >
              <span>{data.link.text}</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
