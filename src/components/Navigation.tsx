"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
          if (rect.top <= 100 && rect.bottom >= 100) {
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
    (href: string) => {
      setMobileOpen(false);
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const offset = 64;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  // Close mobile menu on escape
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
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgb(0_0_0/0.06)]"
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
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? "text-[#1a6db5] bg-blue-50"
                      : "text-[#3a4556] hover:text-[#1a6db5] hover:bg-slate-50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 rounded-lg bg-[#1a6db5] text-white text-sm font-semibold hover:bg-[#155a97] transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6db5] focus-visible:ring-offset-2"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-[#3a4556] hover:text-[#1a6db5] hover:bg-slate-100 transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-[#e2e8f0]"
            >
              <div className="py-3 space-y-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-[#3a4556] hover:text-[#1a6db5] hover:bg-slate-50 rounded-md transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-[#e2e8f0] mt-2">
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="w-full py-3 rounded-lg bg-[#1a6db5] text-white text-sm font-semibold hover:bg-[#155a97] transition-colors cursor-pointer"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
