import React from "react";
import { getAllBlogPosts } from "@/lib/mdx";
import { BlogIndexUI } from "@/components/blog-index-ui";
import { Metadata } from "next"; // Import Metadata
import { RESUME_DATA } from "@/data/resume-data"; // Import resume data for base URL

export const dynamic = "force-static";

// Add generateMetadata function
export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = RESUME_DATA.personalWebsiteUrl; // Get base URL
  return {
    title: "Blog | Achala Nayak",
    description:
      "Read articles and insights on AI, technology, and research by Achala Nayak.",
    keywords: ["blog", "AI", "technology", "research", "Achala Nayak"],
    openGraph: {
      title: "Blog | Achala Nayak",
      description: "Articles and insights on AI, technology, and research.",
      url: `${siteUrl}/blog`,
      siteName: "Achala Nayak's Blog",
      images: [
        {
          url: `${siteUrl}/og-image.png`, 
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | Achala Nayak",
      description: "Articles and insights on AI, technology, and research.",
      images: [`${siteUrl}/og-image.png`],
    },
    alternates: {
      canonical: `${siteUrl}/blog`,
    },
  };
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  // Pass blog posts data to the client component
  return <BlogIndexUI posts={blogPosts} />;
}
