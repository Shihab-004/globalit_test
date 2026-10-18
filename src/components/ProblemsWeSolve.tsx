"use client";

import {
  PhoneOff,
  Router,
  Wifi,
  Phone,
  Globe,
  Database,
  LayoutGrid,
  HardDrive,
} from "lucide-react";
import { PROBLEMS } from "@/lib/data";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/ui/animations";
import { motion } from "motion/react";

const ICON_MAP = {
  PhoneOff,
  Router,
  Wifi,
  Phone,
  Globe,
  Database,
  LayoutGrid,
  HardDrive,
} as const;

type IconName = keyof typeof ICON_MAP;

export default function ProblemsWeSolve() {
  return (
    <section
      id="problems"
      className="py-20 sm:py-28 bg-white"
      aria-label="Problems we solve"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#1a6db5] mb-3">
            Common Challenges
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#252d3a] leading-tight mb-4">
            We Understand Real Business Problems.
          </h2>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Most technology frustrations follow recognisable patterns. Our experience
            across many Melbourne businesses means we&apos;ve likely encountered —
            and resolved — challenges similar to yours.
          </p>
        </FadeIn>

        {/* Problems grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROBLEMS.map((problem) => {
            const Icon = ICON_MAP[problem.icon as IconName];
            return (
              <motion.div
                key={problem.title}
                variants={staggerItemVariants}
                className="group p-6 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] hover:bg-white hover:border-[#1a6db5]/20 hover:shadow-[0_4px_20px_-2px_rgb(0_0_0/0.08)] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center mb-4 text-[#1a6db5] group-hover:bg-[#1a6db5] group-hover:text-white group-hover:border-[#1a6db5] transition-all duration-200">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-sm font-semibold text-[#252d3a] mb-2 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* CTA strip */}
        <FadeIn className="mt-12 p-8 rounded-xl bg-gradient-to-r from-[#1a6db5] to-[#155a97] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-1">
              Not sure where to start?
            </h3>
            <p className="text-blue-200 text-sm">
              Describe your situation and we&apos;ll work through it with you.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 64;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="shrink-0 px-6 py-3 rounded-lg bg-white text-[#1a6db5] text-sm font-semibold hover:bg-blue-50 transition-colors cursor-pointer"
          >
            Talk to Us
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
