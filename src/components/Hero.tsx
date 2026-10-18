"use client";

import { useCallback } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

// Bespoke SVG network/infrastructure illustration
function NetworkIllustration() {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
      role="img"
    >
      {/* Background grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a6db5" />
          <stop offset="100%" stopColor="#2a7ec8" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a9e6a" />
          <stop offset="100%" stopColor="#48b37a" />
        </linearGradient>
        <linearGradient id="mixedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a6db5" />
          <stop offset="100%" stopColor="#3a9e6a" />
        </linearGradient>
        <filter id="nodeShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.12" />
        </filter>
      </defs>

      <rect width="560" height="420" fill="url(#grid)" />

      {/* Connection lines */}
      {/* Central hub to satellites */}
      <motion.line
        x1="280" y1="210" x2="120" y2="100"
        stroke="#1a6db5" strokeWidth="1.5" strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
      />
      <motion.line
        x1="280" y1="210" x2="440" y2="100"
        stroke="#1a6db5" strokeWidth="1.5" strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
      />
      <motion.line
        x1="280" y1="210" x2="100" y2="300"
        stroke="#3a9e6a" strokeWidth="1.5" strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
      />
      <motion.line
        x1="280" y1="210" x2="460" y2="300"
        stroke="#3a9e6a" strokeWidth="1.5" strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 1.1, ease: "easeInOut" }}
      />
      <motion.line
        x1="280" y1="210" x2="280" y2="360"
        stroke="#1a6db5" strokeWidth="1.5" strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 1.3, ease: "easeInOut" }}
      />
      {/* Cross connections */}
      <motion.line
        x1="120" y1="100" x2="440" y2="100"
        stroke="#64748b" strokeWidth="1" strokeDasharray="4 6" opacity="0.25"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
      <motion.line
        x1="100" y1="300" x2="460" y2="300"
        stroke="#64748b" strokeWidth="1" strokeDasharray="4 6" opacity="0.25"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.7 }}
      />

      {/* Animated data packets */}
      <motion.circle
        r="3" fill="#1a6db5"
        animate={{
          cx: [280, 120, 280],
          cy: [210, 100, 210],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 2, ease: "easeInOut" }}
      />
      <motion.circle
        r="3" fill="#3a9e6a"
        animate={{
          cx: [280, 460, 280],
          cy: [210, 300, 210],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 3.5, ease: "easeInOut" }}
      />
      <motion.circle
        r="3" fill="#2a7ec8"
        animate={{
          cx: [280, 440, 280],
          cy: [210, 100, 210],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 5, ease: "easeInOut" }}
      />

      {/* Central hub */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ transformOrigin: "280px 210px" }}
        filter="url(#nodeShadow)"
      >
        <circle cx="280" cy="210" r="36" fill="url(#mixedGrad)" />
        <circle cx="280" cy="210" r="28" fill="white" opacity="0.15" />
        {/* Cloud icon */}
        <path
          d="M265 215 h30 M270 215 v-8 a8 8 0 0 1 16 0 v8 M262 215 a6 6 0 0 1 0-12 a8 8 0 0 1 16-3 a6 6 0 0 1 6 6"
          stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </motion.g>

      {/* Satellite nodes */}
      {/* Node: Cloud/Office top-left */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        style={{ transformOrigin: "120px 100px" }}
        filter="url(#nodeShadow)"
      >
        <rect x="94" y="74" width="52" height="52" rx="12" fill="url(#blueGrad)" />
        <rect x="100" y="80" width="40" height="40" rx="8" fill="white" opacity="0.12" />
        {/* Building icon */}
        <rect x="108" y="96" width="8" height="20" rx="1" fill="white" />
        <rect x="120" y="90" width="8" height="26" rx="1" fill="white" />
        <rect x="132" y="94" width="8" height="22" rx="1" fill="white" />
        <rect x="105" y="116" width="38" height="2" rx="1" fill="white" opacity="0.6" />
      </motion.g>

      {/* Node: Cloud top-right */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        style={{ transformOrigin: "440px 100px" }}
        filter="url(#nodeShadow)"
      >
        <rect x="414" y="74" width="52" height="52" rx="12" fill="url(#blueGrad)" />
        <rect x="420" y="80" width="40" height="40" rx="8" fill="white" opacity="0.12" />
        {/* Shield icon */}
        <path d="M440 90 l12 0 l0 16 l-12 6 l-12-6 l0-16 z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        <path d="M434 102 l4 4 l8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </motion.g>

      {/* Node: Device bottom-left */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }}
        style={{ transformOrigin: "100px 300px" }}
        filter="url(#nodeShadow)"
      >
        <rect x="74" y="274" width="52" height="52" rx="12" fill="url(#greenGrad)" />
        <rect x="80" y="280" width="40" height="40" rx="8" fill="white" opacity="0.12" />
        {/* Monitor icon */}
        <rect x="84" y="286" width="32" height="22" rx="3" fill="none" stroke="white" strokeWidth="2" />
        <line x1="100" y1="308" x2="100" y2="315" stroke="white" strokeWidth="2" />
        <line x1="93" y1="315" x2="107" y2="315" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </motion.g>

      {/* Node: Mobile bottom-right */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        style={{ transformOrigin: "460px 300px" }}
        filter="url(#nodeShadow)"
      >
        <rect x="434" y="274" width="52" height="52" rx="12" fill="url(#greenGrad)" />
        <rect x="440" y="280" width="40" height="40" rx="8" fill="white" opacity="0.12" />
        {/* Wifi icon */}
        <path d="M460 306 m-14-6 a20 20 0 0 1 28 0 M460 306 m-8-4 a12 12 0 0 1 16 0 M460 306 m-3-2 a6 6 0 0 1 6 0" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="460" cy="308" r="2" fill="white" />
      </motion.g>

      {/* Node: Bottom center */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        style={{ transformOrigin: "280px 360px" }}
        filter="url(#nodeShadow)"
      >
        <rect x="254" y="334" width="52" height="52" rx="12" fill="url(#blueGrad)" opacity="0.9" />
        <rect x="260" y="340" width="40" height="40" rx="8" fill="white" opacity="0.12" />
        {/* Database icon */}
        <ellipse cx="280" cy="350" rx="12" ry="5" stroke="white" strokeWidth="2" fill="none" />
        <line x1="268" y1="350" x2="268" y2="366" stroke="white" strokeWidth="2" />
        <line x1="292" y1="350" x2="292" y2="366" stroke="white" strokeWidth="2" />
        <ellipse cx="280" cy="366" rx="12" ry="5" stroke="white" strokeWidth="2" fill="none" />
        <line x1="268" y1="358" x2="292" y2="358" stroke="white" strokeWidth="1" opacity="0.5" />
      </motion.g>

      {/* Label ring around hub */}
      <motion.circle
        cx="280" cy="210" r="52"
        stroke="#1a6db5" strokeWidth="1" strokeDasharray="4 8"
        fill="none" opacity="0.25"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "280px 210px" }}
      />
    </svg>
  );
}

export default function Hero() {
  const handleScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className="relative pt-16 min-h-screen flex items-center bg-white overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(26,109,181,0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 30% 70%, rgba(58,158,106,0.04) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a6db5]/20 bg-blue-50 text-[#1a6db5] text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3a9e6a] animate-pulse" />
              Melbourne, Australia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#252d3a] leading-[1.12] tracking-tight mb-6"
            >
              Technology That Keeps Your Business{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1a6db5 0%, #3a9e6a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Moving.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-[#64748b] leading-relaxed mb-8"
            >
              Reliable IT systems, connected teams, and uninterrupted operations.
              Global IT Technology partners with Melbourne businesses to deliver
              technology infrastructure that supports growth and reduces downtime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1a6db5] text-white text-sm font-semibold hover:bg-[#155a97] transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6db5] focus-visible:ring-offset-2 group"
              >
                Get a Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => handleScrollTo("services")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#e2e8f0] bg-white text-[#252d3a] text-sm font-semibold hover:border-[#1a6db5] hover:text-[#1a6db5] transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6db5] focus-visible:ring-offset-2"
              >
                Explore Our Services
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 flex items-center gap-6 text-sm text-[#94a3b8]"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#3a9e6a]" />
                <span>Family-owned</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1a6db5]" />
                <span>20+ years experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#3a9e6a]" />
                <span>Melbourne-based</span>
              </div>
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative lg:flex items-center justify-center hidden"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] overflow-hidden shadow-[0_8px_32px_-4px_rgb(0_0_0/0.1)]">
              <NetworkIllustration />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => handleScrollTo("metrics")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#94a3b8] hover:text-[#1a6db5] transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
