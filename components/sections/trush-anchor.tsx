"use client";

import React from "react";

export default function TrustAnchor() {
  const stats = [
    { value: "15+", label: "Projects Delivered" },
    { value: "4+", label: "Years Combined Experience" },
    { value: "3", label: "Countries Served" },
  ];

  // Grayscale Placeholder SVG Logos to represent past freelance systems cleanly
  const mockLogos = [
    "Acme Corp", "Pulse AI", "Apex Systems", "Vercel Labs", "CloudCraft", "Echo Studio"
  ];

  return (
    <section
      id="trust-anchor"
      className="w-full bg-background py-16 px-6 border-t border-border/40 text-heading transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Top Header Text Overlay */}
        <div className="w-full text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted/80">
            Trusted by founders and engineering teams globally.
          </p>
        </div>

        {/* INFINITE SCROLLING LOGO MARQUEE WRAPPER */}
        <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]">
          {/* Flex row container is duplicated inside to ensure the loop remains unbroken */}
          <div className="flex w-[200%] gap-16 items-center animate-marquee whitespace-nowrap">
            
            {/* Set 1 */}
            <div className="flex justify-around w-1/2 items-center gap-16 shrink-0">
              {mockLogos.map((logo, idx) => (
                <div 
                  key={`set1-${idx}`} 
                  className="text-base md:text-lg font-heading font-bold text-neutral-400 dark:text-neutral-500 tracking-wider uppercase opacity-75 select-none hover:text-primary transition-colors duration-200"
                >
                  {logo}
                </div>
              ))}
            </div>

            {/* Set 2 (Identical Duplicate for continuous scrolling seamlessness) */}
            <div className="flex justify-around w-1/2 items-center gap-16 shrink-0" aria-hidden="true">
              {mockLogos.map((logo, idx) => (
                <div 
                  key={`set2-${idx}`} 
                  className="text-base md:text-lg font-heading font-bold text-neutral-400 dark:text-neutral-500 tracking-wider uppercase opacity-75 select-none hover:text-primary transition-colors duration-200"
                >
                  {logo}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* SOLID METRICS MATRIX SUB-GRID BANNER */}
        <div className="mt-16 max-w-4xl mx-auto border-t border-border/40 pt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center p-4 text-center rounded-2xl bg-card border border-border/50 shadow-xs group hover:border-primary/20 hover:bg-background/40 transition-all duration-300"
              >
                <span className="block font-heading text-3xl font-extrabold text-primary tracking-tight md:text-4xl transition-transform duration-300 group-hover:scale-103">
                  {stat.value}
                </span>
                <span className="block text-xs font-semibold text-muted uppercase tracking-wider mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}