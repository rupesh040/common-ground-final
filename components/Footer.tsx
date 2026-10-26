"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CommonGroundFooter1Data } from "@/types/content";
import { footerData } from "@/lib/content";

interface FooterProps {
  data?: CommonGroundFooter1Data;
}

export default function Footer({ data = footerData }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#143323] text-[#FAFBF7] pt-16 pb-12 border-t border-[#1C412E] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-12">
          
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 group mb-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm border border-white/20 shrink-0 bg-[#F7F7F0] transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={data.logo?.image || "/images/logo-mark.jpg"}
                  alt={data.logo?.name || "common ground"}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-[0.92] font-bold text-white tracking-tight font-sans text-[17px]">
                <span>{data.logo?.name?.split(" ")[0] || "common"}</span>
                <span>{(data.logo?.name?.split(" ")[1] || "ground") + (data.logo?.dot || ".")}</span>
              </div>
            </Link>
            <p className="text-xs text-[#8DA494] font-medium">
              {data.logo.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 sm:gap-x-12 gap-y-3.5 text-xs sm:text-[13px] font-medium text-[#FAFBF7]/80">
            {data.columns?.flatMap((col) => col.links).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="self-end lg:self-center">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAFBF7]/80 hover:text-white transition-colors cursor-pointer"
            >
              <span>{data.backToTopText}</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>

        </div>

        <div className="pt-8 border-t border-[#1C412E] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10.5px] text-[#FAFBF7]/50 leading-relaxed">
          <div>
            <p className="mb-1">{data.copyright}</p>
            <p className="max-w-3xl text-[#FAFBF7]/40 text-[10px]">
              {data.missionNote}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-4">
            {data.bottomLinks?.map((bLink) => (
              <Link
                key={bLink.name}
                href={bLink.href}
                className="hover:text-white transition-colors"
              >
                {bLink.name}
              </Link>
            ))}
          </div>
        </div>

      </motion.div>
    </footer>
  );
}
