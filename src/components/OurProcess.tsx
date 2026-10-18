"use client";

import { PROCESS_STEPS } from "@/lib/data";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/ui/animations";
import { motion } from "motion/react";

export default function OurProcess() {
  return (
    <section
      id="process"
      className="py-12 sm:py-20 lg:py-24 bg-white"
      aria-label="Our process"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#1a6db5] mb-2 sm:mb-3">
            How We Work
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#252d3a] leading-tight mb-3 sm:mb-4">
            A Clear Path from Problem to Solution.
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg leading-relaxed">
            Every engagement follows a deliberate 4-step process to ensure
            reliable, tested outcomes.
          </p>
        </FadeIn>

        {/* Process steps — horizontal timeline on desktop, vertical on mobile */}
        <StaggerContainer staggerDelay={0.15}>
          {/* Desktop timeline */}
          <div className="hidden lg:grid grid-cols-4 gap-0 relative">
            {/* Connector line */}
            <div className="absolute top-[2.375rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#1a6db5] via-[#2a7ec8] to-[#3a9e6a]" aria-hidden="true" />

            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                variants={staggerItemVariants}
                className="flex flex-col items-center text-center px-6"
              >
                {/* Step circle */}
                <div
                  className="relative z-10 w-[4.75rem] h-[4.75rem] rounded-full border-2 flex flex-col items-center justify-center mb-6 bg-white"
                  style={{
                    borderColor: index < 2 ? "#1a6db5" : "#3a9e6a",
                    boxShadow: `0 0 0 4px #f8fafc, 0 0 0 5px ${index < 2 ? "#1a6db5" : "#3a9e6a"}22`,
                  }}
                >
                  <span
                    className="font-display text-lg font-bold leading-none"
                    style={{ color: index < 2 ? "#1a6db5" : "#3a9e6a" }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-sm font-semibold text-[#252d3a] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile — vertical list */}
          <div className="lg:hidden space-y-0 relative">
            {/* Connector */}
            <div className="absolute left-[1.25rem] sm:left-[1.625rem] top-6 bottom-6 w-px bg-gradient-to-b from-[#1a6db5] to-[#3a9e6a]" aria-hidden="true" />

            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                variants={staggerItemVariants}
                className="relative flex gap-3.5 sm:gap-6 pb-6 sm:pb-10 last:pb-0"
              >
                {/* Circle */}
                <div
                  className="relative z-10 w-10 h-10 sm:w-[3.25rem] sm:h-[3.25rem] shrink-0 rounded-full border-2 flex items-center justify-center bg-white"
                  style={{
                    borderColor: index < 2 ? "#1a6db5" : "#3a9e6a",
                  }}
                >
                  <span
                    className="font-display text-xs sm:text-sm font-bold"
                    style={{ color: index < 2 ? "#1a6db5" : "#3a9e6a" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="font-display text-sm sm:text-base font-semibold text-[#252d3a] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
