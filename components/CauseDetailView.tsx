"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, animate, useInView } from "framer-motion";
import type { CauseDetailData } from "@/types/content";

function parseStatValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match) {
    return { prefix: "", target: 0, suffix: raw, hasCommas: false, decimals: 0 };
  }
  const prefix = match[1] || "";
  const numStr = match[2];
  const suffix = match[3] || "";
  const hasCommas = numStr.includes(",");
  const cleanNumStr = numStr.replace(/,/g, "");
  const target = parseFloat(cleanNumStr) || 0;
  const decimals = cleanNumStr.includes(".") ? cleanNumStr.split(".")[1].length : 0;
  return { prefix, target, suffix, hasCommas, decimals };
}

function formatStat(num: number, parsed: ReturnType<typeof parseStatValue>) {
  let formatted = parsed.decimals > 0 ? num.toFixed(parsed.decimals) : Math.round(num).toString();
  if (parsed.hasCommas) {
    const parts = formatted.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    formatted = parts.join(".");
  }
  return `${parsed.prefix}${formatted}${parsed.suffix}`;
}

interface AnimatedCountProps {
  value: string;
  inView?: boolean;
  delay?: number;
}

function AnimatedCount({ value, inView: externalInView, delay = 0 }: AnimatedCountProps) {
  const localRef = useRef<HTMLSpanElement>(null);
  const localInView = useInView(localRef, { once: true, amount: "some" });
  const inView = externalInView !== undefined ? externalInView : localInView;
  const parsed = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState(() => formatStat(0, parsed));

  useEffect(() => {
    if (!inView || parsed.target === 0) return;

    let controls: { stop: () => void } | null = null;
    const timeout = setTimeout(() => {
      controls = animate(0, parsed.target, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setDisplayValue(formatStat(latest, parsed));
        },
      });
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (controls) controls.stop();
    };
  }, [inView, parsed.target, delay]);

  return (
    <span ref={localRef} className="tabular-nums">
      {displayValue}
    </span>
  );
}

interface CauseDetailViewProps {
  data: CauseDetailData;
  className?: string;
}

export default function CauseDetailView({ data, className = "" }: CauseDetailViewProps) {
  return (
    <article className={`py-6 bg-[#F4F3EE] overflow-hidden ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
          className="mb-8 font-sans"
        >
          <ol className="flex items-center flex-wrap gap-2 text-[13.5px] font-medium text-[#4A5D50]">
            <li>
              <Link href="/" className="hover:text-[#143323] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded px-1 -mx-1">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#96A89B]" aria-hidden="true">/</span>
              <Link href="/causes" className="hover:text-[#143323] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded px-1 -mx-1">
                Our Causes
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#96A89B]" aria-hidden="true">/</span>
              <span aria-current="page" className="text-[#143323] font-semibold">{data.title}</span>
            </li>
          </ol>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EED6] border border-[#CCE0B2] text-[#143323] text-[13.5px] font-bold tracking-[0.16em] uppercase mb-4 shadow-xs font-sans">
            <span>{data.category}</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#143323] leading-[1.12] mb-4">
            {data.title}
          </h1>
          <p className="text-base sm:text-lg text-[#4A5D50] leading-relaxed max-w-2xl">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden mb-12 bg-[#E8EDE2] shadow-sm"
        >
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 p-8 rounded-3xl bg-white border border-[#E2E6DA] shadow-xs"
        >
          {data.stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#143323] block mb-1">
                <AnimatedCount value={stat.value} delay={idx * 0.15} />
              </span>
              <span className="text-[13.5px] sm:text-sm text-[#4A5D50] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="prose prose-lg max-w-none text-[#4A5D50] leading-relaxed mb-16">
          <h2 className="font-editorial text-3xl font-bold text-[#143323] mb-4">
            Our Approach &amp; Focus
          </h2>
          <p className="text-base sm:text-lg text-[#4A5D50] leading-relaxed">
            {data.mission}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="font-editorial text-3xl font-bold text-[#143323] mb-6">
            Key Programs in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.initiatives.map((init, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="p-6 rounded-2xl bg-white border border-[#E2E6DA] shadow-xs transition-shadow hover:shadow-md transform-gpu"
              >
                <h3 className="font-editorial text-xl font-bold text-[#143323] mb-2">
                  {init.title}
                </h3>
                <p className="text-sm text-[#4A5D50] leading-relaxed">
                  {init.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-8 sm:p-10 rounded-3xl bg-[#D4EAA2] border border-[#C2DB91] text-center mb-16 shadow-xs"
        >
          <blockquote className="font-editorial italic text-2xl sm:text-3xl text-[#143323] mb-3">
            &ldquo;{data.impactQuote}&rdquo;
          </blockquote>
          <cite className="text-[13.5px] font-bold text-[#143323]/70 uppercase tracking-widest not-italic font-sans">
            — {data.quoteAuthor}
          </cite>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-8 rounded-3xl bg-white border border-[#E2E6DA] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-editorial text-2xl font-bold text-[#143323] mb-3">
              How You Can Take Part
            </h3>
            <ul className="space-y-2">
              {data.waysToHelp.map((way, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-[#55685A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84A936]" />
                  <span>{way}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#143323] text-[#FAFBF7] font-semibold text-sm hover:bg-[#1A3E2E] transition-colors shrink-0"
            >
              <span>Get Involved Today</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </article>
  );
}
