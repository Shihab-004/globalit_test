"use client";

import { motion } from "motion/react";
import {
  Monitor,
  Cloud,
  Wrench,
  Package,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { FadeIn, StaggerContainer, staggerItemVariants } from "@/components/ui/animations";

const ICON_MAP = {
  Monitor,
  Cloud,
  Wrench,
  Package,
  LineChart,
  ShieldCheck,
} as const;

type IconName = keyof typeof ICON_MAP;

export default function Services() {
  return (
    <section
      id="services"
      className="py-12 sm:py-20 lg:py-24 bg-[#f8fafc]"
      aria-label="Services"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#1a6db5] mb-2 sm:mb-3">
            What We Do
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#252d3a] leading-tight mb-3 sm:mb-4">
            A Complete Technology Partner for Your Business.
          </h2>
          <p className="text-[#64748b] text-base sm:text-lg leading-relaxed">
            From proactive IT management to long-term cloud strategy, we deliver
            the solutions modern businesses depend on.
          </p>
        </FadeIn>

        {/* Services grid — bento layout with feature emphasis */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon as IconName];
            const isFeatured = index === 0 || index === 4;

            return (
              <motion.article
                key={service.id}
                variants={staggerItemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                className={`group relative bg-white rounded-xl border border-[#e2e8f0] p-5 sm:p-7 flex flex-col gap-3.5 sm:gap-4 cursor-default
                  hover:border-[#1a6db5]/30 hover:shadow-[0_10px_30px_-5px_rgb(0_0_0/0.1)] transition-all duration-200
                  ${isFeatured ? "lg:col-span-1 ring-1 ring-[#1a6db5]/10" : ""}`}
                aria-label={service.title}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200
                    bg-blue-50 text-[#1a6db5] group-hover:bg-[#1a6db5] group-hover:text-white"
                >
                  <Icon size={19} strokeWidth={1.75} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5 sm:gap-2 flex-1">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-[#252d3a] group-hover:text-[#1a6db5] transition-colors duration-150">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#3a9e6a]">
                    {service.summary}
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mt-0.5">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#1a6db5] to-[#3a9e6a] transition-all duration-300 rounded-full" />
              </motion.article>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
