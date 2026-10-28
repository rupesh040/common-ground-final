"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PreFooterCTAData } from "@/types/content";
import { preFooterCTAData } from "@/lib/content";

interface PreFooterCTAProps {
  data?: PreFooterCTAData;
}

export default function PreFooterCTA({ data = preFooterCTAData }: PreFooterCTAProps) {
  return (
    <section className="bg-[#143323] text-[#FAFBF7] py-16 lg:py-24 border-t border-[#1C412E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D0EA87] block mb-3">
              {data.eyebrow}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-4">
              {data.headingPart1}
              <br />
              <span className="italic font-serif font-normal text-white">
                {data.headingItalic}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#FAFBF7]/80 leading-relaxed">
              {data.subtitle}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3.5 shrink-0"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={data.primaryButton.href}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#D4EAA2] text-[#143323] font-semibold text-sm hover:bg-[#C2E073] transition-colors shadow-md"
              >
                <span>{data.primaryButton.text}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
            <Link
              href={data.secondaryLink.href}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAFBF7]/85 hover:text-white transition-colors py-1 group"
            >
              <span>{data.secondaryLink.text}</span>
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M17 7H9M17 7v8" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
