import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import BlogDetailView from "@/components/BlogDetailView";
import PreFooterCTA from "@/components/PreFooterCTA";
import { getBlogBySlug, getAllBlogs } from "@/lib/content";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: "Article Not Found | Common Ground" };

  return {
    title: `${blog.title} | Common Ground`,
    description: blog.subtitle,
  };
}

async function BlogContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetailView data={blog} />;
}

export default function BlogDetailPage({
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
        <BlogContent params={params} />
      </Suspense>
      <PreFooterCTA />
    </>
  );
}

