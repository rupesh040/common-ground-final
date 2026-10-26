import React from "react";
import PageBanner from "@/components/PageBanner";
import FAQPageSection from "@/components/FAQPageSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import { getPageBannerData, getPageMetadata } from "@/lib/content";

export const metadata = getPageMetadata("faq");

export default function FAQPage() {
  const bannerData = getPageBannerData("FAQPageBanner");

  return (
    <>
      <PageBanner data={bannerData} />
      <FAQPageSection />
      <PreFooterCTA />
    </>
  );
}
