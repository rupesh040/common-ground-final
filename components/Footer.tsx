"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CommonGroundFooter1Data, SocialLink } from "@/types/content";
import { footerData } from "@/lib/content";

interface FooterProps {
  data?: CommonGroundFooter1Data;
}

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "facebook":
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer({ data = footerData }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToTopLabel = (data.backToTopText || "Back to top").replace(/↑/g, "").trim();

  return (
    <footer className="bg-[#143323] text-[#FAFBF7] pt-16 pb-12 border-t border-[#1F4532] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 pb-14 border-b border-[#1F4532]">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start max-w-sm">
            <Link href="/" className="flex items-center gap-3 group mb-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0EA87] rounded-lg">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm border border-white/20 shrink-0 bg-[#F7F7F0] transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={data.logo?.image || "/images/logo-creative.svg"}
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
            <p className="text-xs text-[#A4BCAB] font-medium leading-relaxed mb-5">
              {data.logo?.tagline}
            </p>

            {/* Social Links */}
            {data.social && data.social.length > 0 && (
              <div className="flex items-center gap-2.5">
                {data.social.map((s: SocialLink) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Common Ground on ${s.name}`}
                    className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#FAFBF7]/80 hover:text-white hover:border-[#D0EA87] hover:bg-[#D0EA87]/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0EA87]"
                  >
                    <SocialIcon icon={s.icon} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Grouped Nav Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 sm:gap-16">
            {data.columns?.map((col, idx) => (
              <div key={idx} className="flex flex-col space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D0EA87] font-sans">
                  {col.title}
                </span>
                <ul className="space-y-2 text-xs sm:text-[13px] font-medium text-[#D8E4DC]">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0EA87] rounded px-1 -mx-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Back to Top */}
          <div className="self-start lg:self-center">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 bg-white/5 text-xs font-semibold text-[#FAFBF7] hover:text-white hover:border-[#D0EA87] hover:bg-[#D0EA87]/10 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0EA87]"
            >
              <span>{backToTopLabel}</span>
              <svg className="w-3.5 h-3.5 text-[#D0EA87]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#A4BCAB] leading-relaxed">
          <div>
            <p className="font-medium text-[#D8E4DC] mb-1">{data.copyright}</p>
            <p className="max-w-2xl text-[11px] text-[#A4BCAB]/90">
              {data.missionNote}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-4">
            {data.bottomLinks?.map((bLink) => (
              <Link
                key={bLink.name}
                href={bLink.href}
                className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D0EA87] rounded px-1 -mx-1 text-xs"
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
