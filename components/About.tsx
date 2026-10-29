"use client";

import React from "react";
import { motion } from "framer-motion";
import type { CommonGroundAbout1Data, AboutCardItem } from "@/types/content";
import { aboutData } from "@/lib/content";

interface AboutProps {
  data?: CommonGroundAbout1Data;
  className?: string;
}

export default function About({ data = aboutData, className = "" }: AboutProps) {
  const cards: AboutCardItem[] = data.cards || [];

  return (
    <section
      id="about"
      className={`py-6 bg-[#FAF9F5] border-y border-[#E8EDE2] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl pb-10 sm:pb-12 border-b border-[#E2E6DA]"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EED6] border border-[#CCE0B2] text-[#143323] text-[11px] font-bold tracking-[0.14em] uppercase mb-5 shadow-2xs font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#143323]" aria-hidden="true" />
            <span>{data.eyebrow}</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#1E5638] leading-[1.15]">
            {data.headingPart1} {data.headingPart2}{" "}
            <span className="relative inline-block italic font-serif font-normal text-[#2A6B45]">
              <span>{data.headingItalic}</span>
              <svg
                className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-[105%] h-3 sm:h-3.5 text-[#D4EAA2] pointer-events-none select-none"
                viewBox="0 0 170 14"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 3 8 C 50 3, 115 3.5, 167 7"
                  stroke="#D4EAA2"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-10 sm:pt-12">
          {cards.map((card, idx) => {
            const isLast = idx === cards.length - 1 && cards.length % 2 !== 0;
            return (
              <motion.div
                key={card.id || idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                className={`group relative overflow-hidden p-7 sm:p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-[#EAF2DC] hover:via-[#E4EED1] hover:to-[#D8E8BF] border border-[#E2E6DA] hover:border-[#B5CE9E] shadow-xs hover:shadow-xl hover:shadow-[#143323]/[0.08] transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between cursor-default ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#98BE76] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#143323]/60 uppercase group-hover:text-[#143323] transition-colors">
                      {card.tag}
                    </span>
                    {card.icon && (
                      <span className="w-8 h-8 rounded-full bg-[#E5EED6] text-[#143323] flex items-center justify-center text-xs font-bold font-sans transition-all duration-300 group-hover:bg-[#143323] group-hover:text-[#D4EAA2] group-hover:scale-110 group-hover:rotate-12 shadow-2xs">
                        {card.icon}
                      </span>
                    )}
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#1E5638] group-hover:text-[#143323] transition-colors mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#4A5D50] group-hover:text-[#2D4536] text-[15px] leading-relaxed font-sans transition-colors">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E6DA]/60 group-hover:border-[#B5CE9E] transition-colors">
                  {card.badges && card.badges.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {card.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-2.5 py-1 rounded-full bg-[#F4F6EE] group-hover:bg-white text-[10px] font-bold text-[#143323] tracking-wider uppercase border border-[#E2E6DA] group-hover:border-[#B5CE9E] shadow-2xs font-sans transition-all duration-200 group-hover:scale-105"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  ) : card.bottomTag ? (
                    <span className="text-xs font-semibold text-[#143323] flex items-center gap-2 font-sans">
                      <span className="w-2 h-2 rounded-full bg-[#143323] group-hover:bg-[#143323] transition-transform duration-300 group-hover:scale-125" />
                      {card.bottomTag}
                    </span>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
