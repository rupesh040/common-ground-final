import React from "react";
import { notFound } from "next/navigation";
import CauseDetailView from "@/components/CauseDetailView";
import PreFooterCTA from "@/components/PreFooterCTA";
import { getCauseBySlug, getAllCauses } from "@/lib/content";

export async function generateStaticParams() {
  const causes = getAllCauses();
  return causes.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cause = getCauseBySlug(slug);
  if (!cause) return { title: "Cause Not Found | Common Ground" };

  return {
    title: `${cause.title} | Common Ground`,
    description: cause.subtitle,
  };
}

export default async function CauseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cause = getCauseBySlug(slug);

  if (!cause) {
    notFound();
  }

  return (
    <>
      <CauseDetailView data={cause} />
      <PreFooterCTA />
    </>
  );
}

