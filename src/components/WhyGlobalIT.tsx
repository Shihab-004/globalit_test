"use client";

import { Users, Award, Handshake, Target } from "lucide-react";
import { WHY_GLOBAL_IT } from "@/lib/data";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/ui/animations";
import { motion } from "motion/react";

const ICON_MAP = { Users, Award, Handshake, Target } as const;
type IconName = keyof typeof ICON_MAP;

export default function WhyGlobalIT() {
  return (
    <section
      id="why"
      className="py-12 sm:py-20 lg:py-24 bg-[#f8fafc]"
      aria-label="Why Global IT Technology"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column — text */}
          <FadeIn direction="left">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#1a6db5] mb-2 sm:mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#252d3a] leading-tight mb-4 sm:mb-6">
              Technology Advice You Can Actually Trust.
            </h2>
            <div className="space-y-3 sm:space-y-4 text-[#64748b] text-sm sm:text-base leading-relaxed">
              <p>
                Global IT Technology is an Australian family-owned business founded
                in Melbourne. We work directly with you — no corporate layers or
                offshore helpdesks between your business and the engineers resolving your issues.
              </p>
              <p>
                With 20 years of hands-on telecommunications and IT leadership,
                we recommend what truly fits your business rather than selling
                oversized contracts.
              </p>
            </div>

            {/* Divider stat */}
            <div className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-[#e2e8f0] flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 justify-start">
              <div>
                <div className="font-display text-2xl sm:text-4xl font-bold text-[#1a6db5]">20+</div>
                <div className="text-xs sm:text-sm text-[#64748b] mt-0.5 sm:mt-1">Years experience</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-[#e2e8f0]" />
              <div>
                <div className="font-display text-2xl sm:text-4xl font-bold text-[#3a9e6a]">175+</div>
                <div className="text-xs sm:text-sm text-[#64748b] mt-0.5 sm:mt-1">Satisfied clients</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-[#e2e8f0]" />
              <div>
                <div className="font-display text-2xl sm:text-4xl font-bold text-[#1a6db5]">100%</div>
                <div className="text-xs sm:text-sm text-[#64748b] mt-0.5 sm:mt-1">Satisfaction rate</div>
              </div>
            </div>
          </FadeIn>

          {/* Right column — feature list */}
          <StaggerContainer className="space-y-3 sm:space-y-4" staggerDelay={0.12}>
            {WHY_GLOBAL_IT.map((item) => {
              const Icon = ICON_MAP[item.icon as IconName];
              return (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
                    },
                  }}
                  className="flex gap-3.5 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl border border-[#e2e8f0]"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 text-[#1a6db5] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#252d3a] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
