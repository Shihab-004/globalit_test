import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/data";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2233] text-white" role="contentinfo">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.webp"
              alt="Global IT Technology"
              width={180}
              height={42}
              className="h-9 w-auto brightness-0 invert mb-5"
            />
            <p className="text-sm text-white/60 leading-relaxed">
              An Australian family-owned IT and telecommunications company based
              in Melbourne. Delivering reliable technology solutions since day one.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.phoneIntl}`}
                  className="flex items-start gap-3 group"
                  aria-label={`Phone: ${COMPANY.phone}`}
                >
                  <Phone size={15} className="text-[#3a9e6a] shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                    {COMPANY.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 group"
                  aria-label={`Email: ${COMPANY.email}`}
                >
                  <Mail size={15} className="text-[#3a9e6a] shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors break-all">
                    {COMPANY.email}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-[#3a9e6a] shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span className="text-sm text-white/60">{COMPANY.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; 2026 Global IT Technology. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            PO Box 298 Batman, Melbourne, VIC 3058, Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
