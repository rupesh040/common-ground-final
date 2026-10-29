"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CommonGroundHero1Data } from "@/types/content";
import { heroData } from "@/lib/content";

interface HeroProps {
  data?: CommonGroundHero1Data;
}

export default function Hero({ data = heroData }: HeroProps) {
  const heroBgColor = data.bgColor || "#F7F7F0";

  return (
    <section
      className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#F7F7F0]"
      style={{ backgroundColor: heroBgColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EED6] border border-[#CCE0B2] text-[#143323] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs font-sans"
            >
              <span className="w-2 h-2 rounded-full bg-[#143323] animate-pulse" aria-hidden="true" />
              <span>{data.eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#143323] leading-[1.08] mb-6"
            >
              {data.headingPart1}
              <br />
              <span className="relative inline-block italic font-serif font-normal text-[#143323]">
                <span className="relative z-10">{data.headingPart2}</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  style={{ originX: 0 }}
                  className="absolute left-0 bottom-2 w-full h-3.5 bg-[#D0EA87]/80 -rotate-1 rounded-sm -z-0"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl text-[#4A5D50] leading-relaxed max-w-xl mb-9"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto"
            >
              <Link
                href={data.primaryButton.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[44px] rounded-full bg-[#143323] text-[#FAFBF7] font-semibold text-sm hover:bg-[#0D2218] transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] focus-visible:ring-offset-2"
              >
                <span>{data.primaryButton.text}</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href={data.secondaryButton.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[44px] rounded-full border border-[#143323]/30 text-[#143323] font-semibold text-sm hover:bg-[#143323]/5 transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] focus-visible:ring-offset-2"
              >
                <span>{data.secondaryButton.text}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-4 pt-4 border-t border-[#E2E6DA] w-full sm:w-auto"
            >
              <div className="flex -space-x-3">
                {data.socialProof.avatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="relative w-10 h-10 rounded-full border-2 border-[#F7F7F0] overflow-hidden shadow-xs bg-[#E2E6DA]"
                    style={{ borderColor: heroBgColor }}
                  >
                    <Image
                      src={avatar}
                      alt="Donor avatar"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#143323]">
                  {data.socialProof.donorsCount} Donors
                </span>
                <span className="text-xs text-[#4A5D50]">
                  {data.socialProof.donorsLabel}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-t-[200px] rounded-b-[32px] overflow-hidden shadow-2xl border-4 border-white/80 bg-[#E8EDE2]">
              <Image
                src={data.image}
                alt="Hands holding rich fertile soil with sprouting green seedling"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.06, rotate: 4 }}
              transition={{ duration: 0.6, delay: 0.45, type: "spring", stiffness: 180 }}
              className="absolute -bottom-6 -left-6 sm:bottom-4 sm:-left-8 z-20 cursor-default"
            >
              <div
                className="relative w-36 h-36 rounded-full bg-[#D4EAA2] p-4 flex flex-col items-center justify-center text-center shadow-xl border-2 border-dashed border-[#143323]/25"
              >
                <div className="text-[#143323] mb-1.5" aria-hidden="true">
                  <svg
                    className="w-6 h-6 stroke-[#143323] fill-none stroke-[2.2]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21V11M12 11C12 7 9 4 5 4c0 4 3 7 7 7zm0 0c0-4 3-7 7-7 0 4-3 7-7 7z"
                    />
                  </svg>
                </div>
                <span className="text-[12px] font-bold text-[#143323] leading-tight font-sans">
                  Good things
                  <br />
                  <span className="italic font-serif font-normal text-[13.5px]">
                    grow together.
                  </span>
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
