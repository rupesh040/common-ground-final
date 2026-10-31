"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogDetailData } from "@/types/content";

interface BlogDetailViewProps {
  data: BlogDetailData;
  className?: string;
}

export default function BlogDetailView({ data, className = "" }: BlogDetailViewProps) {
  return (
    <article className={`py-10 bg-[#F7F7F0] overflow-hidden ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              <Link href="/blog" className="hover:text-[#143323] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded px-1 -mx-1">
                Blog
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
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EED6] border border-[#CCE0B2] text-[#143323] text-[13.5px] font-bold tracking-[0.16em] uppercase mb-4 shadow-xs font-sans">
            <span>{data.category}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#143323] leading-[1.12] mb-4">
            {data.title}
          </h1>

          <p className="text-base sm:text-lg text-[#4A5D50] leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 pb-8 mb-8 border-b border-[#E2E6DA]"
        >
          <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#E8EDE2] border border-[#D5E3C7]">
            <Image
              src={data.author.avatar}
              alt={data.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-bold text-[#143323] block">
              {data.author.name}
            </span>
            <span className="text-[13.5px] text-[#4A5D50]">
              {data.author.role}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full aspect-[16/9] rounded-[28px] overflow-hidden mb-12 bg-[#E8EDE2] shadow-xs"
        >
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </motion.div>

        <div className="space-y-6 text-[#4A5D50] text-base sm:text-lg leading-relaxed mb-12 font-sans">
          {data.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-8 rounded-3xl bg-[#EAE8DF] border border-[#DCDAD0] mb-12 shadow-2xs"
        >
          <h3 className="font-editorial text-2xl font-bold text-[#143323] mb-4">
            {data.keyTakeawaysTitle || "Key Reflections & Takeaways"}
          </h3>
          <ul className="space-y-2.5">
            {data.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#143323]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#143323] mt-2 shrink-0" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="pt-6 border-t border-[#E2E6DA] flex items-center justify-between">
          <Link
            href={data.backLink?.href || "/blog"}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#143323] hover:text-[#235037] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>{data.backLink?.text || "Back to all articles"}</span>
          </Link>

          <Link
            href={data.contactLink?.href || "/contact"}
            className="text-[13.5px] font-bold text-[#143323] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs px-1 -mx-1"
          >
            {data.contactLink?.text || "Share an idea with us →"}
          </Link>
        </div>

      </div>
    </article>
  );
}
