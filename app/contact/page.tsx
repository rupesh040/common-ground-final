import React from "react";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import MarqueeBannerSmall from "@/components/MarqueeBannerSmall";
import { getPageBannerData, getPageMetadata } from "@/lib/content";

export const metadata = getPageMetadata("contact");

export default function ContactPage() {
  const bannerData = getPageBannerData("ContactPageBanner");

  return (
    <>
      <PageBanner data={bannerData} />
      <ContactForm />
      <MarqueeBannerSmall />
    </>
  );
}
