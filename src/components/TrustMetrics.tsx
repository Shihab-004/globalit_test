import { METRICS } from "@/lib/data";
import { CountUp } from "@/components/ui/animations";
import { FadeIn, StaggerContainer } from "@/components/ui/animations";

export default function TrustMetrics() {
  return (
    <section
      id="metrics"
      className="bg-[#252d3a] py-12 sm:py-20"
      aria-label="Company metrics"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#3a9e6a] mb-2 sm:mb-3">
            By the Numbers
          </p>
          <h2 className="font-display text-xl sm:text-3xl font-bold text-white">
            Trusted by Melbourne businesses
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 rounded-xl overflow-hidden">
          {METRICS.map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-[#252d3a] p-5 sm:p-8 text-center flex flex-col items-center justify-center gap-1.5 sm:gap-2 ${
                index === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                <CountUp end={metric.value} />
              </div>
              <div className="text-xs sm:text-sm text-[#94a3b8] leading-snug text-center">
                {metric.label}
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
