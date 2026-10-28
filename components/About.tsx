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
    <section id="about" className="py-20 lg:py-28 bg-[#F7F7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#55685A] font-sans">
            {data.eyebrow}
          </span>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#143323] leading-[1.15]">
              {data.headingPart1}
              <br />
              {data.headingPart2}{" "}
              <span className="italic font-serif font-normal text-[#143323]">
                {data.headingItalic}
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 pt-2"
          >
            {data.paragraphs.map((p, idx) => (
              <p key={idx} className="text-base sm:text-lg text-[#55685A] leading-relaxed">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {data.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#143323] hover:text-[#3B651B] transition-colors border-b border-[#143323]/30 pb-0.5"
                >
                  <span>{link.text}</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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

