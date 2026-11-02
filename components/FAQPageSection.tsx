"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQPageSectionData } from "@/types/content";
import { faqPageSectionData } from "@/lib/content";

interface FAQPageSectionProps {
  data?: FAQPageSectionData;
  className?: string;
}

export default function FAQPageSection({
  data = faqPageSectionData,
  className = "",
}: FAQPageSectionProps) {
  const groups = data?.groups || [];
  const firstItemId = groups[0]?.items?.[0]?.id || "faq-inv-1";

  // Single open item state: opening one question automatically closes any open question
  const [openId, setOpenId] = useState<string | null>(firstItemId);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`relative py-14 sm:py-18 lg:py-20 bg-[#FAF9F5] border-t border-[#E8EDE2] overflow-hidden ${className}`}>
      {/* Decorative botanical watermark matching the Common Ground brand identity */}
      <div
        className="absolute -right-12 -bottom-16 pointer-events-none text-[#B7D4AC]/25 select-none overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-72 h-72 sm:w-96 sm:h-96">
          <path d="M40 180 C40 110, 110 40, 180 40 C180 110, 110 180, 40 180 Z" />
          <path d="M40 180 C80 140, 130 90, 180 40" />
          <path d="M90 130 C120 130, 140 110, 150 90" />
          <path d="M70 150 C95 150, 115 135, 125 120" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {groups.map((group, groupIdx) => (
          <motion.section
            key={group.id}
            id={group.id}
            aria-labelledby={`faq-group-heading-${group.id}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
            className="scroll-mt-24 sm:scroll-mt-28"
          >
            {/* Theme-matched category title with botanical border divider */}
            <div className="mb-6 border-b border-[#E2E6DA] pb-4">
              <h2
                id={`faq-group-heading-${group.id}`}
                className="font-editorial text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#143323] tracking-tight"
              >
                {group.categoryTitle}
              </h2>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {(group.items || []).map((item) => {
                const isOpen = openId === item.id;
                const triggerId = `faq-page-trigger-${item.id}`;
                const panelId = `faq-page-panel-${item.id}`;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? "bg-white border-[#B5CE9E] shadow-md shadow-[#143323]/[0.06] ring-2 ring-[#D4EAA2]/50"
                        : "bg-white hover:bg-[#F2F7E8]/40 border-[#E2E6DA] hover:border-[#B5CE9E] shadow-2xs hover:shadow-xs"
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

                      {/* Circular Toggle Button with rotated plus/cross */}
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
          </motion.section>
        ))}
      </div>
    </section>
  );
}
