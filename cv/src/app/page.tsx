"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import {
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  ArrowRight,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { PublishedWorkSection } from "@/components/published-work";
import { HoverNavbar } from "@/components/hover-navbar";
import Link from "next/link";
import { BlogPost, BlogCard } from "@/components/blog-card";
import { InteractiveSkills } from "@/components/interactive-skills";
import { WorkTimeline } from "@/components/work-timeline";
import { AboutMeMorph } from "@/components/about-me-morph";
import { GitHubStars } from "@/components/github-stars";
import { Metadata } from "next";

export default function Page() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // Command menu links
  const commandLinks = [
    {
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    },
    {
      url: "/blog",
      title: "Blog",
    },
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];

  useEffect(() => {
    // Load blog posts
    const loadBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        if (response.ok) {
          const posts = await response.json();
          setBlogPosts(posts);
        } else {
          console.error('Failed to fetch blog posts');
        }
      } catch (error) {
        console.error('Error loading blog posts:', error);
      }
    };

    loadBlogPosts();
  }, []);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <HoverNavbar links={commandLinks} />
      <section
        id="top"
        className="mx-auto w-full max-w-4xl space-y-8 bg-white print:space-y-6"
      >
              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-1.5">
                  <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
                  <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                    {RESUME_DATA.about}
                  </p>
                  <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                    {RESUME_DATA.contact.email ? (
                      <Button
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a href={`mailto:${RESUME_DATA.contact.email}`}>
                          <MailIcon className="size-4" />
                        </a>
                      </Button>
                    ) : null}
                    {RESUME_DATA.contact.social.map((social) => (
                      <Button
                        key={social.name}
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="size-4" />
                        </a>
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      className="flex h-8 items-center gap-2"
                      asChild
                    >
                      <a
                        href={RESUME_DATA.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <FileDown className="size-4" />
                        <span>CV</span>
                      </a>
                    </Button>
                  </div>
                  <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
                    {RESUME_DATA.contact.email ? (
                      <a href={`mailto:${RESUME_DATA.contact.email}`}>
                        <span className="underline">
                          {RESUME_DATA.contact.email}
                        </span>
                      </a>
                    ) : null}
                  </div>
                </div>

                <div>
                  <Avatar className="size-28">
                    <AvatarImage
                      alt={RESUME_DATA.name}
                      src={RESUME_DATA.avatarUrl}
                    />
                    <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <Section id="about">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">About</h2>
                </div>
                <p className="text-pretty font-mono text-sm text-muted-foreground">
                  {RESUME_DATA.summary}
                </p>
                <AboutMeMorph />
              </Section>

              <Section id="work" className="scroll-mt-16">
                <h2 className="text-xl font-bold">Work Experience</h2>
                <WorkTimeline experiences={RESUME_DATA.work} />
              </Section>

              {/* Published Work Section */}
              {RESUME_DATA.publications &&
                RESUME_DATA.publications.length > 0 && (
                  <div className="scroll-mt-16" id="publications">
                    <PublishedWorkSection
                      publications={RESUME_DATA.publications}
                    />
                  </div>
                )}

              {/* Featured Blog Posts Section */}
              <Section id="blog" className="scroll-mt-16">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Latest Blog Posts</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Recent articles and insights
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-sm font-medium"
                  >
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-1"
                    >
                      View all posts
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {blogPosts.slice(0, 2).map((post) => (
                    <div key={post.slug}>
                      <BlogCard post={post} />
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="skills" className="scroll-mt-16">
                <h2 className="text-xl font-bold">Skills</h2>
                <div className="mt-5">
                  <InteractiveSkills skills={Array.from(RESUME_DATA.skills)} />
                </div>
              </Section>

              <Section
                id="projects"
                className="print-force-new-page scroll-mt-16"
              >
                <h2 className="text-xl font-bold">Projects</h2>
                <div className="-mx-3 mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
                  {RESUME_DATA.projects.map((project, index) => (
                    <div key={project.title}>
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        tags={project.techStack}
                        link={project.link?.href}
                      />
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="education" className="scroll-mt-16">
                <h2 className="text-xl font-bold">Education</h2>
                <div className="mt-4 space-y-4">
                  {RESUME_DATA.education.map((education) => (
                    <Card
                      key={education.school}
                      className="overflow-hidden border border-muted p-4 transition-all hover:shadow-sm"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between gap-x-2 text-base">
                          <h3 className="font-semibold leading-none">
                            {education.school}
                          </h3>
                          <div className="text-sm tabular-nums text-gray-500">
                            {education.start} - {education.end}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="mt-2 space-y-2">
                        <div className="text-sm">
                          {education.degree}
                        </div>
                        {(education as any).specialization && (
                          <div className="text-sm text-gray-600">
                            Specialization: {(education as any).specialization}
                          </div>
                        )}
                        {(education as any).grade && (
                          <div className="text-sm text-gray-600 font-medium">
                            Grade: {(education as any).grade}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </Section>
      </section>
    </main>
  );
}
