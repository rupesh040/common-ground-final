"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CommonGroundHero1Data } from "@/types/content";
import { heroData } from "@/lib/content";

interface HeroProps {
  data?: CommonGroundHero1Data;
  className?: string;
}

export default function Hero({ data = heroData, className = "" }: HeroProps) {
  const heroBgColor = data.bgColor || "#F7F7F0";

  const badgeWords = (
    data.circularBadge?.badgeText || "Good things grow together."
  ).split(" ");
  const badgeFirstPart = badgeWords.slice(0, 2).join(" ");
  const badgeSecondPart = badgeWords.slice(2).join(" ");

  return (
    <section
      className={`relative overflow-hidden py-14 sm:py-18 lg:py-20 bg-[#F7F7F0] ${className}`}
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EED6] border border-[#CCE0B2] text-[#143323] text-xs font-bold tracking-[0.14em] uppercase mb-5 shadow-xs font-sans"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#143323] animate-pulse"
                aria-hidden="true"
              />
              <span>{data.eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#143323] leading-[1.08] mb-6 sm:mb-8"
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

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mt-4 sm:mt-6"
            >
              <Link
                href={data.primaryButton.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[44px] rounded-full bg-[#143323] text-[#FAFBF7] font-semibold text-sm hover:bg-[#0D2218] transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] focus-visible:ring-offset-2"
              >
                <span>{data.primaryButton.text}</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
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
              transition={{
                duration: 0.6,
                delay: 0.45,
                type: "spring",
                stiffness: 180,
              }}
              className="absolute -bottom-4 -left-2 sm:bottom-4 sm:-left-8 z-20 cursor-default"
            >
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#D4EAA2] p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-xl border-2 border-dashed border-[#143323]/25">
                <div
                  className="text-[#143323] mb-1 sm:mb-1.5"
                  aria-hidden="true"
                >
                  <Image
                    src="/images/sub-logo.png"
                    alt=""
                    width={16}
                    height={16}
                    className="w-12 h-12 object-contain shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#143323] leading-tight font-sans">
                  {badgeFirstPart}
                  {badgeSecondPart && (
                    <>
                      <br />
                      <span className="italic font-serif font-normal text-xs sm:text-sm">
                        {badgeSecondPart}
                      </span>
                    </>
                  )}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
