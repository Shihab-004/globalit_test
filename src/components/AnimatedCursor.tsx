"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

interface ClickShockwave {
  id: number;
  x: number;
  y: number;
}

export default function AnimatedCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverState, setHoverState] = useState<"default" | "button" | "text">("default");
  const [isClicking, setIsClicking] = useState(false);
  const [shockwaves, setShockwaves] = useState<ClickShockwave[]>([]);
  const hasMovedRef = useRef(false);

  // Exact real-time mouse coordinates (zero latency)
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Fluid physics spring for outer target ring
  const ringSpring = { damping: 24, stiffness: 320, mass: 0.35 };
  const smoothRingX = useSpring(rawX, ringSpring);
  const smoothRingY = useSpring(rawY, ringSpring);

  // Ambient floating light orb (relaxed spring)
  const orbSpring = { damping: 32, stiffness: 180, mass: 0.7 };
  const smoothOrbX = useSpring(rawX, orbSpring);
  const smoothOrbY = useSpring(rawY, orbSpring);

  const triggerShockwave = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    setShockwaves((prev) => [...prev.slice(-3), { id, x, y }]);
    setTimeout(() => {
      setShockwaves((prev) => prev.filter((item) => item.id !== id));
    }, 600);
  }, []);

  useEffect(() => {
    // Force native cursor to be hidden on html and body
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
      }
      setIsVisible(true);
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      triggerShockwave(e.clientX, e.clientY);
    };

    const onMouseUp = () => {
      setIsClicking(false);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      setHoverState("default");
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const onTouchStart = () => {
      // If user touches screen on mobile/tablet, hide cursor
      setIsVisible(false);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isText = Boolean(
        target.closest("input[type='text'], input[type='email'], input[type='tel'], input[type='search'], textarea")
      );
      if (isText) {
        setHoverState("text");
        return;
      }

      const isInteractive = Boolean(
        target.closest("a, button, [role='button'], select, label, .cursor-pointer, input[type='submit']")
      );
      if (isInteractive) {
        setHoverState("button");
        return;
      }

      setHoverState("default");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [rawX, rawY, triggerShockwave]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999999] overflow-hidden select-none hidden md:block"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.2s ease" }}
      aria-hidden="true"
    >
      {/* 1. Ambient Background Glow Light Orb */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: smoothOrbX,
          y: smoothOrbY,
        }}
      >
        <div
          className="rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
          style={{
            width: hoverState === "button" ? 140 : 84,
            height: hoverState === "button" ? 140 : 84,
            background:
              hoverState === "button"
                ? "radial-gradient(circle, rgba(58, 158, 106, 0.28) 0%, rgba(26, 109, 181, 0.15) 50%, transparent 70%)"
                : "radial-gradient(circle, rgba(26, 109, 181, 0.2) 0%, rgba(58, 158, 106, 0.1) 50%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </motion.div>

      {/* 2. Click Shockwaves */}
      <AnimatePresence>
        {shockwaves.map((wave) => (
          <motion.div
            key={wave.id}
            initial={{ scale: 0.15, opacity: 0.95 }}
            animate={{ scale: 3.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="fixed top-0 left-0 rounded-full pointer-events-none border-2 border-[#3a9e6a]"
            style={{
              left: wave.x,
              top: wave.y,
              width: 30,
              height: 30,
              marginLeft: -15,
              marginTop: -15,
              boxShadow: "0 0 16px rgba(58, 158, 106, 0.7), inset 0 0 10px rgba(26, 109, 181, 0.4)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* 3. Outer Reticle Ring (Fluid spring follower) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none flex items-center justify-center"
        style={{
          x: smoothRingX,
          y: smoothRingY,
        }}
      >
        <motion.div
          animate={{
            width: hoverState === "button" ? 56 : hoverState === "text" ? 28 : 36,
            height: hoverState === "button" ? 56 : hoverState === "text" ? 28 : 36,
            scale: isClicking ? 0.75 : hoverState === "button" ? 1.12 : 1,
            borderColor:
              hoverState === "button"
                ? "#3a9e6a"
                : hoverState === "text"
                ? "rgba(26, 109, 181, 0.6)"
                : "rgba(26, 109, 181, 0.45)",
            backgroundColor:
              hoverState === "button"
                ? "rgba(26, 109, 181, 0.08)"
                : hoverState === "text"
                ? "rgba(26, 109, 181, 0.03)"
                : "rgba(26, 109, 181, 0)",
            rotate: hoverState === "button" ? 90 : 0,
          }}
          transition={{
            width: { duration: 0.2, ease: "easeOut" },
            height: { duration: 0.2, ease: "easeOut" },
            scale: { duration: 0.12, ease: "easeOut" },
            rotate: { duration: 0.4, ease: "easeOut" },
            borderColor: { duration: 0.2 },
            backgroundColor: { duration: 0.2 },
          }}
          className="rounded-full border pointer-events-none relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{
            boxShadow:
              hoverState === "button"
                ? "0 0 14px rgba(58, 158, 106, 0.4), inset 0 0 10px rgba(26, 109, 181, 0.2)"
                : "0 0 8px rgba(26, 109, 181, 0.15)",
          }}
        >
          {/* Subtle spinning radar ticks when hovering interactive buttons */}
          {hoverState === "button" && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#3a9e6a]/40"
            />
          )}
        </motion.div>
      </motion.div>

      {/* 4. Instant Real-Time Precision Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none flex items-center justify-center"
        style={{
          x: rawX,
          y: rawY,
        }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          {hoverState === "text" ? (
            // Neon vertical text cursor indicator
            <motion.div
              initial={{ height: 6, opacity: 0 }}
              animate={{ height: 22, opacity: 1 }}
              exit={{ height: 6, opacity: 0 }}
              className="w-[2px] bg-[#1a6db5] rounded-full"
              style={{
                boxShadow: "0 0 10px #1a6db5, 0 0 4px #3a9e6a",
              }}
            />
          ) : (
            // Crisp precision target center dot
            <motion.div
              animate={{
                width: hoverState === "button" ? 7 : 6,
                height: hoverState === "button" ? 7 : 6,
                backgroundColor: hoverState === "button" ? "#3a9e6a" : "#1a6db5",
                scale: isClicking ? 1.6 : 1,
              }}
              transition={{
                scale: { duration: 0.1 },
                backgroundColor: { duration: 0.15 },
              }}
              className="rounded-full"
              style={{
                boxShadow:
                  hoverState === "button"
                    ? "0 0 12px #3a9e6a, 0 0 6px #ffffff"
                    : "0 0 10px #1a6db5, 0 0 4px #3a9e6a",
              }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
