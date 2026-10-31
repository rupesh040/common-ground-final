"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PageBannerData } from "@/types/content";

interface PageBannerProps {
  data: PageBannerData;
  className?: string;
  image?: string;
}

function HeroCircleBadge({
  firstPart,
  secondPart,
  className = "",
  sizeClass = "w-28 h-28 sm:w-36 sm:h-36",
  iconSizeClass = "w-10 h-10 sm:w-12 sm:h-12",
}: {
  firstPart: string;
  secondPart?: string;
  className?: string;
  sizeClass?: string;
  iconSizeClass?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.06, rotate: 4 }}
      transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 180 }}
      className={`cursor-default select-none ${className}`}
    >
      <div
        className={`relative ${sizeClass} rounded-full bg-[#D4EAA2] p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-xl border-2 border-dashed border-[#143323]/25 transition-shadow hover:shadow-2xl`}
      >
        <div className="text-[#143323] mb-1 sm:mb-1.5 flex items-center justify-center" aria-hidden="true">
          <Image
            src="/images/sub-logo.png"
            alt=""
            width={48}
            height={48}
            className={`${iconSizeClass} object-contain shrink-0`}
            aria-hidden="true"
          />
        </div>
        <span className="text-[12px] sm:text-[13.5px] font-bold text-[#143323] leading-tight font-sans">
          {firstPart}
          {secondPart && (
            <>
              <br />
              <span className="italic font-serif font-normal text-[12px] sm:text-[13.5px]">
                {secondPart}
              </span>
            </>
          )}
        </span>
      </div>
    </motion.div>
  );
}

export default function PageBanner({ data, className = "", image }: PageBannerProps) {
  const breadcrumbParts = data.breadcrumb.split("/").map((p) => p.trim());
  const bannerImage = image || data.image || "/images/banner.png";

  const badgeText = data.circularBadgeText || "Good things grow together.";
  const words = badgeText.split(" ");
  const firstPart = words.slice(0, 2).join(" ");
  const secondPart = words.slice(2).join(" ");

  return (
    <section
      className={`relative bg-gradient-to-r from-[#EDF4E5] via-[#F2F6EA] to-[#F6FAF0] border-b border-[#E2EADA]/80 overflow-hidden ${className}`}
    >
      {/* Far-left decorative botanical leaf watermark silhouettes */}
      <svg
        className="absolute left-0 bottom-0 pointer-events-none w-48 sm:w-64 md:w-80 lg:w-88 h-auto text-[#B7D4AC]/30 -translate-x-6 translate-y-6 select-none"
        viewBox="0 0 280 320"
        fill="none"
        aria-hidden="true"
      >
        {/* Main stem */}
        <path
          d="M -20 340 C 30 280 60 190 70 120 C 75 80 85 40 100 10 C 95 30 90 70 85 110 C 75 190 40 280 -20 340 Z"
          fill="currentColor"
        />
        {/* Leaf 1 - left lower */}
        <path
          d="M 68 150 C 45 120 40 85 62 60 C 80 85 85 120 68 150 Z"
          fill="currentColor"
        />
        {/* Leaf 2 - right mid */}
        <path
          d="M 75 115 C 95 90 125 80 142 95 C 130 118 100 130 75 115 Z"
          fill="currentColor"
        />
        {/* Leaf 3 - left mid */}
        <path
          d="M 55 200 C 25 180 15 145 35 125 C 55 145 60 178 55 200 Z"
          fill="currentColor"
        />
        {/* Leaf 4 - upper right */}
        <path
          d="M 78 70 C 90 40 115 30 128 42 C 120 62 98 75 78 70 Z"
          fill="currentColor"
        />
        {/* Leaf 5 - top tip */}
        <path
          d="M 98 15 C 105 -5 125 -10 132 2 C 125 18 110 25 98 15 Z"
          fill="currentColor"
        />
        {/* Leaf 6 - bottom left broad */}
        <path
          d="M 38 260 C 5 250 -10 215 5 195 C 25 210 35 240 38 260 Z"
          fill="currentColor"
        />
      </svg>

      {/* Subtle ambient lighting glows */}
      <div
        className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#EAF5D0]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 left-10 w-80 h-80 rounded-full bg-[#DFECDE]/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* DESKTOP ONLY: Background photograph of hands planting the sapling, smoothly blending to the left */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-[58%] xl:w-[53%] pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <Image
          src={bannerImage}
          alt=""
          fill
          priority
          sizes="55vw"
          className="object-cover object-center"
        />

        {/* Soft horizontal gradient fade from the left background color */}
        <div className="absolute inset-y-0 left-0 w-44 lg:w-72 bg-gradient-to-r from-[#EDF4E5] via-[#EDF4E5]/80 to-transparent" />

        {/* Gentle vertical edge blending */}
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#EDF4E5]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#EDF4E5]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
        {/* Breadcrumb Navigation (Always on top) */}
        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          aria-label="Breadcrumb"
          className="mb-5 sm:mb-6"
        >
          <ol className="flex items-center flex-wrap gap-2 text-[13px] sm:text-[13.5px] font-medium text-[#4A5D50]">
            <li>
              <Link
                href="/"
                className="hover:text-[#143323] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded px-1 -mx-1"
              >
                {breadcrumbParts[0]}
              </Link>
            </li>
            {breadcrumbParts.slice(1).map((part, idx) => {
              const isLast = idx === breadcrumbParts.length - 2;
              return (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#96A89B]" aria-hidden="true">
                    /
                  </span>
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={`font-semibold ${
                      isLast ? "text-[#143323]" : "text-[#4A5D50]"
                    }`}
                  >
                    {part}
                  </span>
                </li>
              );
            })}
          </ol>
        </motion.nav>

        {/* Main Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column (Desktop) / Top Section (Mobile): Eyebrow, Heading, Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 xl:col-span-7 max-w-2xl"
          >
            {/* Pill Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EED5] border border-[#CCE0B2]/80 text-[#143323] text-[11.5px] sm:text-xs font-bold tracking-[0.16em] uppercase mb-4 shadow-2xs font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[#143323]" aria-hidden="true" />
              <span>{data.eyebrow}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-bold tracking-tight text-[#143323] leading-[1.08] mb-4 sm:mb-5">
              <span className="block font-bold">{data.headingPart1}</span>
              <span className="block italic font-serif font-normal text-[#143323]">
                {data.headingItalic}
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-[14.5px] sm:text-base text-[#4A5D50] leading-relaxed max-w-xl">
              {data.subtitle}
            </p>

            {/* MOBILE & TABLET ONLY: Dedicated Image Card shifted below the text (NO OVERLAP) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 sm:mt-9 relative w-full aspect-[16/10] sm:aspect-[2/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#DCE8D2] bg-[#E8EFE0] lg:hidden"
            >
              <Image
                src={bannerImage}
                alt="Hands gently planting green seedling in rich soil"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-[center_right] sm:object-center"
              />

              {/* Soft warm sun glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge in bottom-right corner over the soil */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-5 z-10">
                <HeroCircleBadge
                  firstPart={firstPart}
                  secondPart={secondPart}
                  sizeClass="w-26 h-26 sm:w-32 sm:h-32"
                  iconSizeClass="w-9 h-9 sm:w-11 sm:h-11"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* DESKTOP ONLY: Right Column with Floating Circular Badge over the background photo shifted to the right */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-end items-center pt-2 lg:pt-0 lg:translate-x-8 xl:translate-x-14 2xl:translate-x-20">
            <HeroCircleBadge
              firstPart={firstPart}
              secondPart={secondPart}
              sizeClass="w-32 h-32 sm:w-36 sm:h-36"
              iconSizeClass="w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
