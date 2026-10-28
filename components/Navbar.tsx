"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { CommonGroundHeader1Data } from "@/types/content";
import { headerData } from "@/lib/content";

interface NavbarProps {
  data?: CommonGroundHeader1Data;
}

export default function Navbar({ data = headerData }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#F7F7F0]/95 backdrop-blur-md border-b border-[#E2E6DA] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm border border-[#D8DECF] shrink-0 bg-[#F7F7F0]"
            >
              <Image
                src={data.logo?.image || "/images/logo-creative.svg"}
                alt={data.logo?.name || "common ground"}
                width={40}
                height={40}
                priority
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex flex-col leading-[0.92] font-bold text-[#143323] tracking-tight font-sans text-[17px]">
              <span>{data.logo?.name?.split(" ")[0] || "common"}</span>
              <span>{(data.logo?.name?.split(" ")[1] || "ground") + (data.logo?.dot || ".")}</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {data.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13.5px] py-1 border-b-2 transition-all duration-200 ${
                    isActive
                      ? "text-[#143323] font-bold border-[#143323]"
                      : "text-[#55685A] border-transparent hover:text-[#143323] hover:border-[#143323]/40 font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href={data.button.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-[#D4EAA2] text-[#143323] text-sm font-semibold tracking-tight hover:bg-[#C5E18E] transition-colors shadow-xs"
              >
                <span>{data.button.text}</span>
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#143323] hover:bg-[#E2E6DA]/50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="lg:hidden overflow-hidden py-4 border-t border-[#E2E6DA] bg-[#F7F7F0] space-y-1"
            >
              {data.navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-[#D4EAA2]/50 text-[#143323] font-bold"
                        : "text-[#55685A] hover:bg-[#E2E6DA]/40 hover:text-[#143323]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 px-3">
                <Link
                  href={data.button.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#D4EAA2] text-[#143323] font-semibold text-sm"
                >
                  <span>{data.button.text}</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
