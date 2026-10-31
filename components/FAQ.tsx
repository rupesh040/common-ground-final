"use client";

import React, { useState } from "react";
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
    <section id="faq" className={`py-10 sm:py-14 lg:py-16 bg-[#F4F3EE] overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
          
          {/* Left Heading & Action Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            {data?.eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EED6] border border-[#CCE0B2] text-[#143323] text-[12px] sm:text-[13.5px] font-bold tracking-[0.16em] uppercase mb-3.5 sm:mb-4 shadow-xs font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#143323]" aria-hidden="true" />
                <span>{data.eyebrow}</span>
              </div>
            )}

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#143323] leading-[1.15] mb-4 sm:mb-6">
              {data?.headingPart1}
              {data?.headingPart1 && <br />}
              <span className="italic font-serif font-normal text-[#143323]">
                {data?.headingItalic}
              </span>
            </h2>

            {data?.topLink?.href && (
              <Link
                href={data.topLink.href}
                className="group inline-flex items-center gap-1.5 text-[13.5px] sm:text-sm font-semibold text-[#143323] hover:text-[#235037] transition-colors border-b border-[#143323]/30 pb-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
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

          {/* Right Accordion Column */}
          <div className="lg:col-span-7 divide-y divide-[#E2E6DA]">
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
                  className="py-4 sm:py-5 first:pt-0 last:pb-0"
                >
                  <button
                    id={triggerId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between text-left gap-3 sm:gap-4 py-2 sm:py-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-lg px-2 -mx-2 cursor-pointer transition-colors"
                  >
                    <span className="text-[15px] sm:text-base lg:text-lg font-semibold text-[#143323] group-hover:text-[#235037] transition-colors pr-2">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#E5E8DF] flex items-center justify-center shrink-0 transition-colors shadow-2xs ${
                        isOpen
                          ? "bg-[#143323] text-[#D0EA87] border-[#143323]"
                          : "bg-white text-[#143323] group-hover:border-[#143323]"
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
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
                        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-3.5 sm:pb-4 pr-4 sm:pr-8 pl-2">
                          <p className="text-[13.5px] sm:text-sm lg:text-base text-[#4A5D50] leading-relaxed">
                            {item.answer}
                          </p>
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
