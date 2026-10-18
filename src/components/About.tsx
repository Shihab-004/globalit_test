import Image from "next/image";
import { MapPin, Clock, Users, Award } from "lucide-react";
import { FadeIn } from "@/components/ui/animations";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-20 lg:py-24 bg-[#252d3a]"
      aria-label="About Global IT Technology"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — visual */}
          <FadeIn direction="left">
            <div className="relative">
              {/* Main card */}
              <div className="rounded-2xl overflow-hidden bg-[#3a4556] border border-white/10 p-5 sm:p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <Image
                    src="/logo.webp"
                    alt="Global IT Technology"
                    width={180}
                    height={42}
                    className="h-9 sm:h-10 w-auto brightness-0 invert"
                  />
                </div>

                <blockquote className="text-white/90 text-base sm:text-lg leading-relaxed font-light mb-6 sm:mb-8 border-l-2 border-[#3a9e6a] pl-4 sm:pl-5">
                  &ldquo;We started Global IT Technology because businesses were
                  tired of being sold technology they didn&apos;t need. Our goal is to be
                  the IT partner that genuinely looks out for your operations.&rdquo;
                </blockquote>

                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#1a6db5] to-[#3a9e6a] flex items-center justify-center shrink-0">
                    <span className="text-white font-display font-bold text-base sm:text-lg">G</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Founder &amp; Director</div>
                    <div className="text-white/60 text-xs">Global IT Technology</div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-[#e2e8f0] hidden sm:block">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-[#1a6db5]" />
                  <span className="text-xs font-semibold text-[#252d3a]">ACMA Registered</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-[#e2e8f0] hidden sm:block">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#3a9e6a]" />
                  <span className="text-xs font-semibold text-[#252d3a]">Melbourne, VIC</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — content */}
          <FadeIn direction="right" delay={0.1}>
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#3a9e6a] mb-2 sm:mb-3">
              About Us
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight mb-4 sm:mb-6">
              An Australian Family Business Built on Honest Advice.
            </h2>

            <div className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              <p>
                Founded in Melbourne, Global IT Technology brings two decades of
                telecommunications and IT leadership to Victorian businesses. You
                communicate directly with experienced technical leads dedicated to
                system reliability and long-term business continuity.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: Users, label: "Direct Accountability", sub: "No layers of account managers" },
                { icon: Award, label: "20 Years Expertise", sub: "Telco & infrastructure depth" },
                { icon: Clock, label: "Long-Term Partnerships", sub: "Pragmatic, non-transactional" },
                { icon: MapPin, label: "Local Melbourne Team", sub: "Accessible on-site support" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-3.5 sm:p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <item.icon size={16} className="text-[#3a9e6a] mt-0.5 shrink-0" strokeWidth={1.75} />
                  <div>
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-xs text-white/50 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
