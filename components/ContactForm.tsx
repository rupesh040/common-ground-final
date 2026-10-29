"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ContactSectionData } from "@/types/content";
import { contactSectionData } from "@/lib/content";

interface ContactFormProps {
  data?: ContactSectionData;
  className?: string;
}

export default function ContactForm({ data = contactSectionData, className = "" }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(data.formSubjects[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    const draftContent = `COMMON GROUND - CONTACT INQUIRY DRAFT
==============================================
Date: ${new Date().toLocaleString()}
Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
==============================================
Thank you for connecting with Common Ground!`;

    const blob = new Blob([draftContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `common-ground-draft-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setStatus("Draft downloaded successfully! No external message was sent.");
  };

  return (
    <section className={`py-6 bg-[#F4F3EE] overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EED6] border border-[#CCE0B2] text-[#143323] text-[11px] font-bold tracking-[0.16em] uppercase mb-4 shadow-xs font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#143323]" aria-hidden="true" />
                <span>{data.leftEyebrow}</span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#143323] leading-tight mb-5">
                {data.leftHeadingPart1}
                <br />
                <span className="italic font-serif font-normal text-[#143323]">
                  {data.leftHeadingItalic}
                </span>
              </h2>

              <p className="text-base text-[#4A5D50] leading-relaxed mb-8">
                {data.leftDescription}
              </p>

              <div className="border-t border-[#E2E6DA] py-6 space-y-6">
                {data.features.map((feat, idx) => (
                  <div key={idx}>
                    <h3 className="text-base font-bold text-[#143323] mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-[#4A5D50] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <Link
                  href={data.faqLink.href}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#143323] hover:text-[#235037] transition-colors border-b border-[#143323]/30 pb-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] rounded-xs"
                >
                  <span>{data.faqLink.text}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden bg-[#E8EDE2] shadow-xs mt-4">
              <Image
                src={data.image}
                alt="Community members connecting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-xs font-medium text-white/90 italic">
                  {data.imageCaption}
                </p>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="bg-[#EAE8DF] rounded-[32px] p-8 sm:p-10 border border-[#DCDAD0] shadow-xs">
              
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4A5D50] block mb-2 font-sans">
                {data.formEyebrow}
              </span>

              <h3 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#143323] mb-5">
                {data.formHeadingPart1}{" "}
                <span className="italic font-serif font-normal">
                  {data.formHeadingItalic}
                </span>
              </h3>

              <div className="rounded-xl bg-[#E5EBDD] p-4 text-xs text-[#2F4434] leading-relaxed mb-6 border border-[#D5E3C7]">
                {data.formNotice}
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#143323] mb-1.5">
                      Your name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Taylor"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E6DA] text-sm text-[#143323] placeholder:text-[#7A8E80] focus:outline-none focus:ring-2 focus:ring-[#143323] focus:border-[#143323] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#143323] mb-1.5">
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E6DA] text-sm text-[#143323] placeholder:text-[#7A8E80] focus:outline-none focus:ring-2 focus:ring-[#143323] focus:border-[#143323] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#143323] mb-1.5">
                    What&apos;s on your mind? *
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E6DA] text-sm text-[#143323] focus:outline-none focus:ring-2 focus:ring-[#143323] focus:border-[#143323] transition-all"
                  >
                    {data.formSubjects.map((subj, idx) => (
                      <option key={idx} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#143323] mb-1.5">
                    Your message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your idea or how you'd like to get involved..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E6DA] text-sm text-[#143323] placeholder:text-[#7A8E80] focus:outline-none focus:ring-2 focus:ring-[#143323] focus:border-[#143323] transition-all"
                  />
                </div>

                <p className="text-[11px] text-[#4A5D50] font-medium">* Required fields</p>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                    className="p-3.5 rounded-xl bg-[#EAF2D7] text-xs font-semibold text-[#143323] border border-[#CCE0B2] shadow-2xs"
                  >
                    {status}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 min-h-[44px] rounded-full bg-[#143323] text-[#FAFBF7] font-semibold text-sm hover:bg-[#1C412E] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143323] focus-visible:ring-offset-2 cursor-pointer"
                >
                  <span>{data.submitButtonText}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
