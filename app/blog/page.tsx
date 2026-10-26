import React from "react";
import PageBanner from "@/components/PageBanner";
import Blog from "@/components/Blog";
import PreFooterCTA from "@/components/PreFooterCTA";
import { getPageBannerData, getPageMetadata } from "@/lib/content";

export const metadata = getPageMetadata("blog");

export default function BlogListingPage() {
  const bannerData = getPageBannerData("BlogPageBanner");

  return (
    <>
      <PageBanner data={bannerData} />
      <Blog />
      <PreFooterCTA />
    </>
  );
}
