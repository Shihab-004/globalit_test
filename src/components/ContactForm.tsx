"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/data";
import { FadeIn } from "@/components/ui/animations";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid business email"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Please provide at least 20 characters describing your project"),
});

type FormData = z.infer<typeof schema>;

type SubmitState = "idle" | "loading" | "success" | "error" | "no-config";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 501) {
        // Email not configured — show fallback
        setSubmitState("no-config");
        return;
      }

      if (!res.ok) throw new Error("Submission failed");

      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  };

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-[#252d3a] bg-white placeholder-[#94a3b8]
    focus:outline-none focus:ring-2 focus:ring-[#1a6db5] focus:border-[#1a6db5] transition-colors
    ${hasError ? "border-red-400 bg-red-50" : "border-[#e2e8f0] hover:border-[#cbd5e1]"}`;

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#f8fafc]"
      aria-label="Contact and get a quote"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — contact info */}
          <FadeIn direction="left" className="lg:col-span-2">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#1a6db5] mb-3">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#252d3a] leading-tight mb-4">
              Let&apos;s Talk About Your Technology.
            </h2>
            <p className="text-[#64748b] leading-relaxed mb-10">
              Tell us about your business and current challenges. We&apos;ll
              respond promptly with honest, practical advice — no sales pressure,
              no commitment required.
            </p>

            <div className="space-y-5">
              <a
                href={`tel:${COMPANY.phoneIntl}`}
                className="flex items-start gap-4 group"
                aria-label={`Call us at ${COMPANY.phone}`}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1a6db5] flex items-center justify-center shrink-0 group-hover:bg-[#1a6db5] group-hover:text-white transition-colors">
                  <Phone size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide mb-0.5">Phone</div>
                  <div className="text-[#252d3a] font-medium group-hover:text-[#1a6db5] transition-colors">
                    {COMPANY.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-4 group"
                aria-label={`Email us at ${COMPANY.email}`}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1a6db5] flex items-center justify-center shrink-0 group-hover:bg-[#1a6db5] group-hover:text-white transition-colors">
                  <Mail size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide mb-0.5">Email</div>
                  <div className="text-[#252d3a] font-medium group-hover:text-[#1a6db5] transition-colors break-all">
                    {COMPANY.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-[#3a9e6a] flex items-center justify-center shrink-0">
                  <MapPin size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide mb-0.5">Address</div>
                  <div className="text-[#252d3a] font-medium">{COMPANY.address}</div>
                </div>
              </div>
            </div>

            {/* Response note */}
            <div className="mt-10 p-5 rounded-xl bg-white border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">
                <span className="font-semibold text-[#252d3a]">Typical response time:</span>{" "}
                We aim to respond to all enquiries within one business day.
              </p>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-[0_4px_24px_-4px_rgb(0_0_0/0.08)] p-8 sm:p-10">
              {submitState === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle size={32} className="text-[#3a9e6a]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#252d3a]">
                    Enquiry Received
                  </h3>
                  <p className="text-[#64748b] max-w-sm">
                    Thank you for getting in touch. We&apos;ll review your enquiry and
                    respond within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitState("idle")}
                    className="mt-2 text-sm text-[#1a6db5] hover:underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : submitState === "no-config" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center">
                    <AlertCircle size={32} className="text-amber-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#252d3a]">
                    Email Not Configured
                  </h3>
                  <p className="text-[#64748b] max-w-sm">
                    The contact form is not yet connected to an email service. Please
                    reach us directly:
                  </p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-[#1a6db5] font-medium hover:underline"
                  >
                    {COMPANY.email}
                  </a>
                  <a
                    href={`tel:${COMPANY.phoneIntl}`}
                    className="text-[#1a6db5] font-medium hover:underline"
                  >
                    {COMPANY.phone}
                  </a>
                  <button
                    onClick={() => setSubmitState("idle")}
                    className="mt-2 text-sm text-[#64748b] hover:text-[#1a6db5] cursor-pointer"
                  >
                    Back to form
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold text-[#252d3a] mb-6">
                    Submit an Enquiry
                  </h3>

                  {submitState === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 mb-6">
                      <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">
                        Something went wrong. Please try again, or contact us at{" "}
                        <a href={`mailto:${COMPANY.email}`} className="underline">
                          {COMPANY.email}
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-5"
                    aria-label="Contact enquiry form"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-semibold text-[#3a4556] uppercase tracking-wide mb-1.5">
                          Full Name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          autoComplete="name"
                          {...register("fullName")}
                          className={inputClass(!!errors.fullName)}
                          placeholder="Jane Smith"
                          aria-describedby={errors.fullName ? "fullName-error" : undefined}
                          aria-invalid={!!errors.fullName}
                        />
                        {errors.fullName && (
                          <p id="fullName-error" className="mt-1.5 text-xs text-red-600" role="alert">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      {/* Business Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-[#3a4556] uppercase tracking-wide mb-1.5">
                          Business Email <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          {...register("email")}
                          className={inputClass(!!errors.email)}
                          placeholder="jane@company.com.au"
                          aria-describedby={errors.email ? "email-error" : undefined}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-xs text-red-600" role="alert">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-[#3a4556] uppercase tracking-wide mb-1.5">
                          Company Name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="company"
                          type="text"
                          autoComplete="organization"
                          {...register("company")}
                          className={inputClass(!!errors.company)}
                          placeholder="Acme Pty Ltd"
                          aria-describedby={errors.company ? "company-error" : undefined}
                          aria-invalid={!!errors.company}
                        />
                        {errors.company && (
                          <p id="company-error" className="mt-1.5 text-xs text-red-600" role="alert">
                            {errors.company.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-[#3a4556] uppercase tracking-wide mb-1.5">
                          Phone Number <span className="text-[#94a3b8] font-normal normal-case">(optional)</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          {...register("phone")}
                          className={inputClass()}
                          placeholder="03 xxxx xxxx"
                        />
                      </div>
                    </div>

                    {/* Service of Interest */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-[#3a4556] uppercase tracking-wide mb-1.5">
                        Service of Interest <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="service"
                        {...register("service")}
                        className={`${inputClass(!!errors.service)} cursor-pointer`}
                        aria-describedby={errors.service ? "service-error" : undefined}
                        aria-invalid={!!errors.service}
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service…</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                        <option value="general">General enquiry</option>
                      </select>
                      {errors.service && (
                        <p id="service-error" className="mt-1.5 text-xs text-red-600" role="alert">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-[#3a4556] uppercase tracking-wide mb-1.5">
                        Project Details <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register("message")}
                        className={`${inputClass(!!errors.message)} resize-y min-h-[120px]`}
                        placeholder="Briefly describe your current setup, the challenges you're experiencing, and what you're hoping to achieve…"
                        aria-describedby={errors.message ? "message-error" : undefined}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-xs text-red-600" role="alert">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitState === "loading"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1a6db5] text-white text-sm font-semibold hover:bg-[#155a97] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6db5] focus-visible:ring-offset-2"
                      aria-live="polite"
                    >
                      {submitState === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Submit Enquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-[#94a3b8] text-center">
                      Your information is kept private and will only be used to respond to your enquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
