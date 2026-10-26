import React from "react";
import PageBanner from "@/components/PageBanner";
import GalleryView from "@/components/GalleryView";
import PreFooterCTA from "@/components/PreFooterCTA";
import { getPageBannerData, getPageMetadata } from "@/lib/content";

export const metadata = getPageMetadata("gallery");

export default function GalleryPage() {
  const bannerData = getPageBannerData("GalleryPageBanner");

  return (
    <>
      <PageBanner data={bannerData} />
      <GalleryView />
      <PreFooterCTA />
    </>
  );
}
