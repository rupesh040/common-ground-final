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

function ContactSupportCard({
  box,
  className = "",
}: {
  box: FAQPageSectionData["sidebarBox"];
  className?: string;
}) {
  if (!box) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
      className={`rounded-3xl bg-[#EAE8DF] p-6 sm:p-7 border border-[#DCDAD0] transition-shadow hover:shadow-md ${className}`}
    >
      <h3 className="font-editorial text-2xl font-bold text-[#143323] mb-2">
        {box.title}
      </h3>
      <p className="text-[13.5px] sm:text-sm text-[#4A5D50] leading-relaxed mb-5">
        {box.subtitle}
      </p>
      {box.linkHref && (
        <Link
          href={box.linkHref}
          className="group inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#143323] hover:text-[#0F281B] transition-colors border-b border-[#143323]/40 pb-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
        >
          <span>{box.linkText}</span>
          <svg
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M17 7H9M17 7v8" />
          </svg>
        </Link>
      )}
    </motion.div>
  );
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
    <section className={`py-10 sm:py-14 lg:py-16 bg-[#F4F3EE] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Quick Category Navigation (Chips) */}
        <div className="lg:hidden mb-8">
          {data?.sidebarTitle && (
            <span className="text-[11.5px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#55685A] block mb-3">
              {data.sidebarTitle}
            </span>
          )}
          <div className="flex flex-wrap gap-2">
            {groups.map((group, groupIdx) => {
              const numPrefix = group.numberPrefix || `${String(groupIdx + 1).padStart(2, "0")}.`;
              return (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/90 border border-[#DCDAD0] text-xs sm:text-[13px] font-semibold text-[#143323] hover:bg-[#143323] hover:text-[#D0EA87] hover:border-[#143323] transition-all shadow-2xs active:scale-95"
                >
                  <span className="opacity-60">{numPrefix}</span>
                  <span>{group.categoryTitle}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Desktop Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {data?.sidebarTitle && (
                <span className="text-[12.5px] font-bold uppercase tracking-[0.18em] text-[#55685A] block mb-3.5">
                  {data.sidebarTitle}
                </span>
              )}

              <nav className="space-y-1.5" aria-label="FAQ categories">
                {groups.map((group, groupIdx) => {
                  const numPrefix = group.numberPrefix || `${String(groupIdx + 1).padStart(2, "0")}.`;
                  return (
                    <a
                      key={group.id}
                      href={`#${group.id}`}
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-white text-[13.5px] sm:text-sm font-semibold text-[#143323] border border-transparent hover:border-[#DCDAD0] hover:shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323]"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[#55685A] group-hover:text-[#143323] transition-colors">{numPrefix}</span>
                        <span>{group.categoryTitle}</span>
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-[#55685A] group-hover:text-[#143323] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M17 7H9M17 7v8" />
                      </svg>
                    </a>
                  );
                })}
              </nav>
            </motion.div>

            {data?.sidebarBox && (
              <ContactSupportCard box={data.sidebarBox} />
            )}
          </aside>

          {/* Main FAQ Groups Content */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
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
                <div className="mb-4 sm:mb-6">
                  <h3
                    id={`faq-group-heading-${group.id}`}
                    className="font-editorial text-2xl sm:text-3xl font-bold text-[#143323] tracking-tight"
                  >
                    {group.categoryTitle}
                  </h3>
                </div>

                <div className="divide-y divide-[#E2E6DA] border-t border-b border-[#E2E6DA]">
                  {(group.items || []).map((item) => {
                    const isOpen = openId === item.id;
                    const triggerId = `faq-page-trigger-${item.id}`;
                    const panelId = `faq-page-panel-${item.id}`;

                    return (
                      <div key={item.id} className="py-3.5 sm:py-4">
                        <button
                          id={triggerId}
                          aria-controls={panelId}
                          aria-expanded={isOpen}
                          onClick={() => toggleItem(item.id)}
                          className="w-full flex items-center justify-between text-left gap-3 sm:gap-4 py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-lg px-2 -mx-2 cursor-pointer transition-colors"
                        >
                          <span className="text-[14.5px] sm:text-base font-semibold text-[#143323] group-hover:text-[#235037] transition-colors pr-2">
                            {item.question}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#DCDAD0] flex items-center justify-center shrink-0 transition-colors ${
                              isOpen
                                ? "bg-[#143323] text-[#D0EA87] border-[#143323]"
                                : "bg-white text-[#143323] group-hover:border-[#143323] group-hover:bg-[#F4F3EE]"
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
                              <div className="pt-2 pb-3.5 sm:pb-4 pr-4 sm:pr-6 pl-2 text-[13.5px] sm:text-sm text-[#4A5D50] leading-relaxed">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            ))}

            {/* Mobile Contact Support Card (Displayed naturally at bottom of FAQs on mobile) */}
            {data?.sidebarBox && (
              <div className="lg:hidden pt-4">
                <ContactSupportCard box={data.sidebarBox} />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
