import React from "react";
import PageBanner from "@/components/PageBanner";
import Causes from "@/components/Causes";
import PreFooterCTA from "@/components/PreFooterCTA";
import { getPageBannerData, getPageMetadata } from "@/lib/content";

export const metadata = getPageMetadata("causes");

export default function CausesPage() {
  const bannerData = getPageBannerData("CausesPageBanner");

  return (
    <>
      <PageBanner data={bannerData} />
      <Causes hideTopLink />
      <PreFooterCTA />
    </>
  );
}
