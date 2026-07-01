"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const BRAND_NAME = " NIRAYAM";
  const CURRENT_YEAR = new Date().getFullYear();

  const handleFooterScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const HEADER_OFFSET = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });


    }
  };

  const servicesLinks = [
    { name: "Web Development", href: "#services" },
    { name: "Mobile App Development", href: "#services" },
    { name: "AI Solutions", href: "#services" },
    { name: "Workflows Automation with AI", href: "#services" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full border-t border-border bg-background text-heading transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1.2fr] lg:gap-12">
          
          {/* Column 1: Brand Info & Social Vectors */}
          <div className="flex flex-col gap-4">
            <Link
              href="#hero"
              onClick={(e) => handleFooterScroll(e, "#hero")}
              className="flex items-center gap-3 group"
            >
              <Image
                src="/footer-logo.svg"
                alt={`${BRAND_NAME} Logo`}
                width={32}
                height={32}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col leading-none">
                <span className="font-heading tracking-[0.14em] font-bold text-base">{BRAND_NAME}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted mt-0.5">Technologies</span>
              </div>
            </Link>
            
            <p className="text-xs leading-relaxed text-muted max-w-[240px]">
              We build clean custom web applications, mobile applications, custom workflows Automation using AI, and AI Solutions to scale operational performance.
            </p>

            {/* Custom SVG Brand Social Row */}
            <div className="mt-2 flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nirayam-technologies-b4201941b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="rounded-full border border-border p-2.5 text-muted hover:bg-card hover:text-primary transition-colors flex items-center justify-center"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.73C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCMVZmf6vlu0SqCWBKvzL3kQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="rounded-full border border-border p-2.5 text-muted hover:bg-card hover:text-primary transition-colors flex items-center justify-center"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/nirayam.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="rounded-full border border-border p-2.5 text-muted hover:bg-card hover:text-primary transition-colors flex items-center justify-center"
              >
                <svg className="h-3.5 w-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Service Indexes */}
          <div className="w-full">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-heading mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleFooterScroll(e, link.href)}
                    className="text-sm text-muted hover:text-primary transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Sitemap */}
          <div className="w-full">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-heading mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleFooterScroll(e, link.href)}
                    className="text-sm text-muted hover:text-primary transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Dedicated Contact & Details Block */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-heading">Contact Details</h3>
            
            <address className="not-italic text-xs text-muted space-y-3">
              <div className="leading-relaxed">
                <span className="block font-medium text-heading">7th Street</span>
                <span className="block">Gandhipuram, Coimbatore,</span>
                <span className="block">Tamil Nadu, India</span>
              </div>

              <div className="space-y-2 pt-1 border-t border-border/40">
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone size={12} className="text-primary shrink-0" />
                  <span>+91 80722 71874.</span>
                </a>
                <a href="mailto:hello@nirayam.co\" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail size={12} className="text-primary shrink-0" />
                  <span>nirayamtechnologies@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-muted/80">
                  <Clock size={12} className="text-primary shrink-0" />
                  <span>SLA Response &lt; 24h</span>
                </div>
              </div>
            </address>
          </div>

          {/* Column 5: Google Map Iframe Layer */}
          <div className="flex flex-col w-full">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-heading mb-4">Location Map</h3>
            <div className="relative h-[120px] w-full overflow-hidden rounded-xl border border-border bg-card shadow-xs">
              <iframe
                title="7th Street Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.096096852331!2d76.9753733!3d11.0314166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855c4161a9b%3A0x972c4cbd634add05!2s7th%20St%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1782393942976!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0 grayscale invert dark:invert-0 dark:opacity-85"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

        </div>

        {/* Copyright Baseline Section */}
        <div className="mt-12 border-t border-border/60 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {CURRENT_YEAR} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted">
            <Link href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}