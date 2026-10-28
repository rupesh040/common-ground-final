"use client";

import React from "react";
import { motion } from "framer-motion";
import type { CommonGroundRooted1Data } from "@/types/content";
import { rootedInCareData } from "@/lib/content";

interface RootedInCareProps {
  data?: CommonGroundRooted1Data;
}

export default function RootedInCare({ data = rootedInCareData }: RootedInCareProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F3EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative w-full aspect-square rounded-[36px] bg-[#D4EAA2] p-10 sm:p-14 flex flex-col justify-between overflow-hidden shadow-xs border border-[#C2DB91] hover:shadow-md transition-shadow">
              <div>
                <h2 className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#143323] leading-[1.05]">
                  {data.leftCard.word1}
                  <br />
                  <span className="italic font-serif font-normal text-[#143323]">
                    {data.leftCard.word2}
                  </span>
                </h2>
              </div>
              <p className="text-sm sm:text-base font-medium text-[#143323]/80 max-w-[240px] relative z-10 font-sans">
                {data.leftCard.tagline}
              </p>
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 0.45, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute -bottom-8 -right-8 w-64 h-64 pointer-events-none text-[#143323]"
              >
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-full h-full"
                >
                  <path d="M40 180 C40 110, 110 40, 180 40 C180 110, 110 180, 40 180 Z" />
                  <path d="M40 180 C80 140, 130 90, 180 40" />
                  <path d="M90 130 C120 130, 140 110, 150 90" />
                  <path d="M70 150 C95 150, 115 135, 125 120" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#55685A] block mb-3 font-sans"
            >
              {data.eyebrow}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#143323] leading-[1.15] mb-6"
            >
              {data.headingPart1}
              <br />
              <span className="italic font-serif font-normal text-[#143323]">
                {data.headingItalic}
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-[#55685A] leading-relaxed mb-10 max-w-xl"
            >
              {data.description}
            </motion.p>
            <div className="divide-y divide-[#E2E6DA]">
              {data.steps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.12 }}
                  className="py-6 first:pt-0 last:pb-0 flex items-start gap-4"
                >
                  <div className="w-5 h-5 rounded-full bg-[#143323] text-[#D4EAA2] flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#143323] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#55685A] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
