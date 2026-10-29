import React from "react";
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

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <BlogDetailView data={blog} />
      <PreFooterCTA />
    </>
  );
}

