"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CommonGroundAbout1Data } from "@/types/content";
import { aboutData } from "@/lib/content";

interface AboutProps {
  data?: CommonGroundAbout1Data;
}

export default function About({ data = aboutData }: AboutProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F7F0] border-b border-[#E2E6DA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EED6] border border-[#CCE0B2] text-[#143323] text-[11px] font-bold tracking-[0.16em] uppercase shadow-xs font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#143323]" aria-hidden="true" />
            <span>{data.eyebrow}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#143323] leading-[1.12]">
                {data.headingPart1}
                <br />
                {data.headingPart2}{" "}
                <span className="italic font-serif font-normal text-[#143323]">
                  {data.headingItalic}
                </span>
              </h2>
            </div>

            {/* Editorial Mission Anchor Card */}
            <div className="mt-8 sm:mt-12 p-6 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#E2E6DA] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D4EAA2] flex items-center justify-center shrink-0 text-[#143323] shadow-xs" aria-hidden="true">
                <svg className="w-5 h-5 fill-none stroke-current stroke-[2.2]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11M12 11C12 7 9 4 5 4c0 4 3 7 7 7zm0 0c0-4 3-7 7-7 0 4-3 7-7 7z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm text-[#4A5D50] leading-relaxed font-medium">
                Rooted in transparency, our community initiatives nurture long-term stability and sustainable local stewardship across rural regions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 pt-1"
          >
            {data.paragraphs.map((p, idx) => (
              <p key={idx} className="text-base sm:text-lg text-[#4A5D50] leading-relaxed">
                {p}
              </p>
            ))}

            <div className="flex flex-wrap items-center gap-4 pt-6">
              {data.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#143323]/25 bg-white/60 hover:bg-white hover:border-[#143323] text-xs sm:text-sm font-semibold text-[#143323] transition-all duration-200 shadow-2xs hover:shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] focus-visible:ring-offset-2"
                >
                  <span>{link.text}</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

