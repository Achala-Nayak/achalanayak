"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  BriefcaseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

interface WorkExperience {
  company: string;
  title: string;
  description: string;
  start: string;
  end?: string;
  link: string;
  badges: readonly string[] | string[];
}

// Map company names to their logo files
const companyLogos: Record<string, string> = {
  "Deloitte": "/deloitte_logo.jpg",
  "Hewlett Packard Enterprise (HPE)": "/hpe_logo.avif",
};

interface WorkTimelineItemProps {
  work: WorkExperience;
  index: number;
  isLast: boolean;
}

const WorkTimelineItem: React.FC<WorkTimelineItemProps> = ({
  work,
  index,
  isLast,
}) => {
  const logoSrc = companyLogos[work.company];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute bottom-0 left-5 top-10 w-px bg-muted" />
      )}

      {/* Timeline item */}
      <div className="group flex gap-4">
        {/* Timeline icon or logo */}
        <div className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-muted bg-background shadow-md">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={`${work.company} logo`}
              fill
              className="object-cover p-1"
            />
          ) : (
            <BriefcaseIcon className="h-5 w-5 text-primary/80 transition-colors duration-300 group-hover:text-primary" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-2">
          <div className="rounded-lg border border-muted bg-card p-4 shadow-sm transition-all duration-300 hover:bg-card/95 hover:shadow group-hover:border-muted/80">
              <div className="mb-1 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <h3 className="text-base font-semibold">
                  <Link
                    href={work.link}
                    className="transition-colors duration-300 hover:text-primary"
                  >
                    {work.company}
                  </Link>
                </h3>
                <div className="text-sm tabular-nums text-muted-foreground">
                  {work.start} - {work.end ?? "Present"}
                </div>
              </div>

              <div className="mb-2 flex flex-wrap gap-1">
                <span className="font-mono text-sm font-medium">
                  {work.title}
                </span>
                <div className="flex-1" />
                {work.badges.map((badge) => (
                  <Badge key={badge} variant="outline" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {work.description}
              </p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

interface WorkTimelineProps {
  experiences: readonly WorkExperience[] | WorkExperience[];
}

export const WorkTimeline: React.FC<WorkTimelineProps> = ({ experiences }) => {
  const [showAll, setShowAll] = useState(false);

  // Only show top 3 experiences initially
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);
  const hasMoreExperiences = experiences.length > 3;

  return (
    <div className="mt-6">
      <AnimatePresence>
        {visibleExperiences.map((work, index) => (
          <WorkTimelineItem
            key={`${work.company}-${work.start}`}
            work={work}
            index={index}
            isLast={
              showAll
                ? index === experiences.length - 1
                : index === visibleExperiences.length - 1
            }
          />
        ))}
      </AnimatePresence>

      {/* Show more/less button */}
      {hasMoreExperiences && (
        <motion.div
          className="mt-2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                Show less <ChevronUpIcon className="h-3 w-3" />
              </>
            ) : (
              <>
                Show more experiences <ChevronDownIcon className="h-3 w-3" />
              </>
            )}
          </Button>
        </motion.div>
      )}
    </div>
  );
};
