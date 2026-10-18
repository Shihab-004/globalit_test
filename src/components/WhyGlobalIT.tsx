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
      className="py-20 sm:py-28 bg-[#f8fafc]"
      aria-label="Why Global IT Technology"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column — text */}
          <FadeIn direction="left">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#1a6db5] mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#252d3a] leading-tight mb-6">
              Technology Advice You Can Actually Trust.
            </h2>
            <div className="space-y-4 text-[#64748b] leading-relaxed">
              <p>
                Global IT Technology is an Australian family-owned business founded
                in Melbourne. We work directly with the businesses we support —
                there is no account manager layer or offshore helpdesk between you
                and the people resolving your issues.
              </p>
              <p>
                Our founder and director brings 20 years of experience across
                telecommunications and technology in a range of industries. That
                experience allows us to give practical, informed advice rather than
                generic recommendations.
              </p>
              <p>
                We are not in the business of selling you the most expensive
                solution available. We recommend what is appropriate for your
                situation — and we will tell you honestly when the answer is
                simpler than you might expect.
              </p>
            </div>

            {/* Divider stat */}
            <div className="mt-10 pt-8 border-t border-[#e2e8f0] flex items-center gap-8">
              <div>
                <div className="font-display text-4xl font-bold text-[#1a6db5]">20+</div>
                <div className="text-sm text-[#64748b] mt-1">Years experience</div>
              </div>
              <div className="w-px h-12 bg-[#e2e8f0]" />
              <div>
                <div className="font-display text-4xl font-bold text-[#3a9e6a]">175+</div>
                <div className="text-sm text-[#64748b] mt-1">Satisfied clients</div>
              </div>
              <div className="w-px h-12 bg-[#e2e8f0]" />
              <div>
                <div className="font-display text-4xl font-bold text-[#1a6db5]">100%</div>
                <div className="text-sm text-[#64748b] mt-1">Satisfaction rate</div>
              </div>
            </div>
          </FadeIn>

          {/* Right column — feature list */}
          <StaggerContainer className="space-y-4" staggerDelay={0.12}>
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
                  className="flex gap-4 p-5 bg-white rounded-xl border border-[#e2e8f0]"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1a6db5] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#252d3a] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">
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
