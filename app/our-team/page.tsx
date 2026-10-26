import React from "react";
import PageBanner from "@/components/PageBanner";
import TeamGrid from "@/components/TeamGrid";
import PreFooterCTA from "@/components/PreFooterCTA";
import { getPageBannerData, getPageMetadata } from "@/lib/content";

export const metadata = getPageMetadata("our-team");

export default function OurTeamPage() {
  const bannerData = getPageBannerData("TeamPageBanner");

  return (
    <>
      <PageBanner data={bannerData} />
      <TeamGrid />
      <PreFooterCTA />
    </>
  );
}
