import React from "react";
import PageBanner from "@/components/PageBanner";
import About from "@/components/About";
import RootedInCare from "@/components/RootedInCare";
import PreFooterCTA from "@/components/PreFooterCTA";
import { getPageBannerData, getPageMetadata } from "@/lib/content";

export const metadata = getPageMetadata("about-us");

export default function AboutUsPage() {
  const bannerData = getPageBannerData("AboutPageBanner");

  return (
    <>
      <PageBanner data={bannerData} />
      <About />
      <RootedInCare />
      <PreFooterCTA />
    </>
  );
}
