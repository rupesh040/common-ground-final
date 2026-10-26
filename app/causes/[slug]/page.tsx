import React, { Suspense } from "react";
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

async function CauseContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cause = getCauseBySlug(slug);

  if (!cause) {
    notFound();
  }

  return <CauseDetailView data={cause} />;
}

export default function CauseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <>
      <Suspense
        fallback={
          <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
            <div className="h-4 bg-[#E2E6DA] rounded w-32 mb-8" />
            <div className="h-6 bg-[#E2E6DA] rounded-full w-28 mb-4" />
            <div className="h-12 bg-[#E2E6DA] rounded-xl w-3/4 mb-6" />
            <div className="h-4 bg-[#E2E6DA] rounded w-full mb-3" />
            <div className="h-4 bg-[#E2E6DA] rounded w-2/3 mb-10" />
            <div className="aspect-[16/9] bg-[#E2E6DA] rounded-[28px] w-full" />
          </div>
        }
      >
        <CauseContent params={params} />
      </Suspense>
      <PreFooterCTA />
    </>
  );
}

