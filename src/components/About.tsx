import Image from "next/image";
import { MapPin, Clock, Users, Award } from "lucide-react";
import { FadeIn } from "@/components/ui/animations";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-[#252d3a]"
      aria-label="About Global IT Technology"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <FadeIn direction="left">
            <div className="relative">
              {/* Main card */}
              <div className="rounded-2xl overflow-hidden bg-[#3a4556] border border-white/10 p-8 sm:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <Image
                    src="/logo.webp"
                    alt="Global IT Technology"
                    width={180}
                    height={42}
                    className="h-10 w-auto brightness-0 invert"
                  />
                </div>

                <blockquote className="text-white/90 text-lg leading-relaxed font-light mb-8 border-l-2 border-[#3a9e6a] pl-5">
                  &ldquo;We started Global IT Technology because we saw how often
                  businesses were sold technology they didn&apos;t need, or left without
                  proper support when things went wrong. Our goal is to be the IT
                  partner that actually looks out for your interests.&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a6db5] to-[#3a9e6a] flex items-center justify-center">
                    <span className="text-white font-display font-bold text-lg">G</span>
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
            <p className="text-sm font-semibold tracking-widest uppercase text-[#3a9e6a] mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              An Australian Family Business Built on Honest Advice.
            </h2>

            <div className="space-y-4 text-white/70 leading-relaxed mb-8">
              <p>
                Global IT Technology was founded in Melbourne by a director who
                spent 20 years working across telecommunications and technology in
                different industries. That first-hand experience across both sides
                of the technology relationship shaped the company&apos;s approach: give
                clients the same advice you would give a family member.
              </p>
              <p>
                We are a family-owned business, and that means the people you
                speak to are the same people responsible for the outcomes. We do
                not have layers of account managers or offshore helpdesks — just a
                focused team of experienced professionals who take direct
                accountability for the work we do.
              </p>
              <p>
                Our client relationships are designed to last. We measure our
                success not by the size of individual engagements, but by whether
                our clients&apos; technology genuinely serves their business over the
                long term.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Users, label: "Family-Owned Business", sub: "Founded in Melbourne" },
                { icon: Award, label: "20 Years Experience", sub: "Telecoms & technology" },
                { icon: Clock, label: "Long-Term Relationships", sub: "Not one-off transactions" },
                { icon: MapPin, label: "Melbourne-Based Team", sub: "Local, accessible support" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
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
