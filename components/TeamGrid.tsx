"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { TeamSectionData } from "@/types/content";
import { teamSectionData } from "@/lib/content";

interface TeamGridProps {
  data?: TeamSectionData;
}

export default function TeamGrid({ data = teamSectionData }: TeamGridProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F7F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EED6] border border-[#CCE0B2] text-[#143323] text-[11px] font-bold tracking-[0.16em] uppercase mb-4 shadow-xs font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[#143323]" aria-hidden="true" />
              <span>{data.eyebrow}</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#143323] leading-tight">
              {data.headingPart1}
              <br />
              <span className="italic font-serif font-normal text-[#143323]">
                {data.headingItalic}
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#4A5D50] max-w-sm lg:text-right leading-relaxed font-medium">
            {data.subtitleNote}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {data.roles.map((role, idx) => {
            const bgClass =
              role.bgVariant === "sage"
                ? "bg-[#D8E6D3]"
                : role.bgVariant === "olive"
                ? "bg-[#DEE8BC]"
                : "bg-[#F1EBD6]";

            return (
              <motion.article
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="flex flex-col group transition-all"
              >
                <div
                  className={`relative w-full aspect-[16/10] rounded-2xl ${bgClass} overflow-hidden mb-5 select-none shadow-xs border border-black/5`}
                >
                  {role.image ? (
                    <Image
                      src={role.image}
                      alt={role.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full p-5 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none" aria-hidden="true">
                        <div className="w-48 h-48 rounded-full border border-[#143323]/35" />
                        <div className="w-32 h-32 rounded-full border border-[#143323]/35 -ml-16" />
                      </div>

                      <span className="relative z-10 font-editorial text-4xl sm:text-5xl font-light text-[#143323] tracking-widest">
                        {role.initials}
                      </span>
                    </div>
                  )}
                </div>

                <span className="text-[11px] font-bold tracking-[0.14em] text-[#4A5D50] uppercase block mb-1.5 font-sans">
                  {role.roleTag}
                </span>

                <h3 className="font-editorial text-xl font-bold text-[#143323] mb-2 leading-snug group-hover:text-[#235037] transition-colors">
                  {role.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#4A5D50] leading-relaxed">
                  {role.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[32px] bg-[#D4EAA2] p-8 sm:p-14 border border-[#C2DB91] shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="w-10 h-10 rounded-full border border-[#143323]/30 text-[#143323] flex items-center justify-center mb-4" aria-hidden="true">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#143323]/80 mb-2 font-sans">
                {data.calloutCard.eyebrow}
              </span>

              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143323] leading-tight mb-4">
                {data.calloutCard.headingPart1}{" "}
                <span className="italic font-serif font-normal">
                  {data.calloutCard.headingItalic}
                </span>
              </h3>

              <p className="text-sm sm:text-base text-[#143323]/85 leading-relaxed mb-6 max-w-xl">
                {data.calloutCard.description}
              </p>

              <Link
                href={data.calloutCard.button.href}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#143323] hover:text-[#0D2218] transition-colors border-b border-[#143323]/40 pb-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
              >
                <span>{data.calloutCard.button.text}</span>
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </Link>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="text-left lg:text-right max-w-xs -rotate-2 lg:rotate-0">
                <p className="font-editorial text-2xl sm:text-3xl text-[#143323] leading-snug">
                  {data.calloutCard.sideQuotePart1}
                  <br />
                  <span className="italic font-serif font-normal">
                    {data.calloutCard.sideQuoteItalic}
                  </span>
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
