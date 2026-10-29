"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQPageSectionData } from "@/types/content";
import { faqPageSectionData } from "@/lib/content";

interface FAQPageSectionProps {
  data?: FAQPageSectionData;
  className?: string;
}

export default function FAQPageSection({ data = faqPageSectionData, className = "" }: FAQPageSectionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-inv-1": true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className={`py-6 bg-[#F4F3EE] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-4 sticky top-28 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#55685A] block mb-4">
                {data.sidebarTitle}
              </span>

              <div className="space-y-1.5">
                {data.groups.map((group) => (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/80 text-xs sm:text-sm font-semibold text-[#143323] border border-transparent hover:border-[#DCDAD0] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323]"
                  >
                    <span>
                      {group.numberPrefix} {group.categoryTitle}
                    </span>
                    <svg className="w-3.5 h-3.5 text-[#143323]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M17 7H9M17 7v8" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -3 }}
              className="rounded-3xl bg-[#EAE8DF] p-7 border border-[#DCDAD0] transition-shadow hover:shadow-md"
            >
              <h3 className="font-editorial text-2xl font-bold text-[#143323] mb-2">
                {data.sidebarBox.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5D50] leading-relaxed mb-5">
                {data.sidebarBox.subtitle}
              </p>
              <Link
                href={data.sidebarBox.linkHref}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#143323] hover:text-[#0F281B] transition-colors border-b border-[#143323]/40 pb-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
              >
                <span>{data.sidebarBox.linkText}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {data.groups.map((group, groupIdx) => (
              <motion.div
                key={group.id}
                id={group.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="scroll-mt-28"
              >
                <span className="text-[10.5px] font-bold tracking-[0.18em] text-[#4A5D50] uppercase block mb-1 font-sans">
                  {group.numberPrefix} / {group.categoryTag}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#143323] mb-6">
                  {group.categoryTitle}
                </h3>

                <div className="divide-y divide-[#E2E6DA] border-t border-b border-[#E2E6DA]">
                  {group.items.map((item) => {
                    const isOpen = !!openIds[item.id];
                    return (
                      <div key={item.id} className="py-4">
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full flex items-center justify-between text-left gap-4 py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-lg px-2 -mx-2 cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm sm:text-base font-semibold text-[#143323] group-hover:text-[#235037] transition-colors">
                            {item.question}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[#143323] text-xl font-light shrink-0"
                            aria-hidden="true"
                          >
                            {isOpen ? "−" : "+"}
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                              className="overflow-hidden"
                            >
                              <div className="pt-2 pb-3 pr-6 pl-2 text-xs sm:text-sm text-[#4A5D50] leading-relaxed">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
