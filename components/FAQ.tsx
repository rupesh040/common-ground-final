"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { CommonGroundFAQ1Data } from "@/types/content";
import { faqData } from "@/lib/content";

interface FAQProps {
  data?: CommonGroundFAQ1Data;
  className?: string;
}

export default function FAQ({ data = faqData, className = "" }: FAQProps) {
  const items = data?.items || [];
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className={`relative py-14 sm:py-18 lg:py-20 bg-[#FAF9F5] border-t border-[#E8EDE2] overflow-hidden ${className}`}>
      {/* Decorative botanical watermark matching the Common Ground brand identity */}
      <div
        className="absolute -right-12 -bottom-16 pointer-events-none text-[#B7D4AC]/20 select-none overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-72 h-72 sm:w-96 sm:h-96">
          <path d="M40 180 C40 110, 110 40, 180 40 C180 110, 110 180, 40 180 Z" />
          <path d="M40 180 C80 140, 130 90, 180 40" />
          <path d="M90 130 C120 130, 140 110, 150 90" />
          <path d="M70 150 C95 150, 115 135, 125 120" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Heading & Action Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            {data?.eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EED6] border border-[#CCE0B2] text-[#143323] text-xs font-bold tracking-[0.14em] uppercase mb-4 shadow-xs font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#143323]" aria-hidden="true" />
                <span>{data.eyebrow}</span>
              </div>
            )}

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#143323] leading-[1.15] mb-5 sm:mb-6">
              {data?.headingPart1}
              {data?.headingPart1 && <br />}
              <span className="italic font-serif font-normal text-[#143323]">
                {data?.headingItalic}
              </span>
            </h2>

            {data?.topLink?.href && (
              <Link
                href={data.topLink.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#143323] hover:text-[#235037] transition-colors border-b border-[#143323]/30 pb-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
              >
                <span>{data.topLink.text}</span>
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
            )}
          </motion.div>

          {/* Right Accordion Column with Theme-Matched Cards */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {items.map((item, idx) => {
              const isOpen = openId === item.id;
              const triggerId = `faq-home-trigger-${item.id}`;
              const panelId = `faq-home-panel-${item.id}`;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-white border-[#B5CE9E] shadow-md shadow-[#143323]/[0.06] ring-2 ring-[#D4EAA2]/50"
                      : "bg-white/90 hover:bg-[#F2F7E8]/40 border-[#E2E6DA] hover:border-[#B5CE9E] shadow-2xs hover:shadow-xs"
                  }`}
                >
                  <button
                    id={triggerId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between text-left gap-3.5 sm:gap-4 p-5 sm:p-6 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-2xl"
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4 pr-2">
                      {/* Black and white sub-logo */}
                      <span
                        className={`mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#143323] scale-105 shadow-xs"
                            : "bg-[#E5EED6] group-hover:bg-[#143323] group-hover:scale-105"
                        }`}
                        aria-hidden="true"
                      >
                        <Image
                          src="/images/sub-logo-bw.png"
                          alt=""
                          width={20}
                          height={20}
                          className={`w-4 h-4 object-contain transition-all duration-300 ${
                            isOpen
                              ? "invert brightness-125"
                              : "grayscale contrast-125 group-hover:invert"
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                      <span
                        className={`font-editorial text-lg sm:text-xl font-bold tracking-tight transition-colors leading-snug ${
                          isOpen
                            ? "text-[#143323]"
                            : "text-[#143323] group-hover:text-[#1E5638]"
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    {/* Circular Animated Toggle Button */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center shrink-0 transition-colors shadow-2xs ${
                        isOpen
                          ? "bg-[#143323] text-[#D0EA87] border-[#143323]"
                          : "bg-[#F7F7F0] text-[#143323] border-[#E2E6DA] group-hover:border-[#143323] group-hover:bg-[#143323] group-hover:text-[#D0EA87]"
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-0">
                          <div className="pt-4 border-t border-[#E8EDE2] pl-11.5 sm:pl-12">
                            <p className="text-[15px] sm:text-base text-[#4A5D50] leading-relaxed font-sans">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
