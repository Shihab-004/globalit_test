"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = ["services", "about", "process", "contact"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (href: string, e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
      }
      setMobileOpen(false);
      const id = href.replace("#", "");

      // Small delay so menu collapse doesn't cancel browser smooth scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.location.hash = href;
        }
      }, 80);
    },
    []
  );

  // Close mobile menu on escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileOpen
          ? "bg-white/98 backdrop-blur-md shadow-[0_2px_12px_0_rgb(0_0_0/0.06)]"
          : "bg-white/90 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6db5] rounded-md"
            aria-label="Global IT Technology — Home"
          >
            <Image
              src="/logo.webp"
              alt="Global IT Technology"
              width={180}
              height={42}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? "text-[#1a6db5] bg-blue-50"
                      : "text-[#3a4556] hover:text-[#1a6db5] hover:bg-slate-50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick("#contact", e)}
              className="px-5 py-2 rounded-lg bg-[#1a6db5] text-white text-sm font-semibold hover:bg-[#155a97] transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6db5] focus-visible:ring-offset-2"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#e2e8f0] bg-white text-[#252d3a] hover:text-[#1a6db5] hover:border-[#1a6db5]/40 active:scale-95 transition-all cursor-pointer"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="md:hidden overflow-hidden border-t border-[#e2e8f0] bg-white shadow-2xl rounded-b-2xl"
            >
              <div className="p-4 space-y-1.5">
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(link.href, e)}
                      className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-blue-50 text-[#1a6db5]"
                          : "text-[#252d3a] hover:bg-slate-50 hover:text-[#1a6db5] active:bg-blue-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        size={16}
                        className={`transition-transform ${
                          isActive ? "text-[#1a6db5] translate-x-1" : "text-[#94a3b8]"
                        }`}
                      />
                    </a>
                  );
                })}
                <div className="pt-3 border-t border-[#e2e8f0] mt-3">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick("#contact", e)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#1a6db5] active:bg-[#155a97] text-white text-base font-semibold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    Get a Quote
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
