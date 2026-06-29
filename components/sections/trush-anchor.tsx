"use client";

import React from "react";

export default function TrustAnchor() {
  const stats = [
    { value: "15+", label: "Projects Delivered" },
    { value: "4+", label: "Years Combined Experience" },
    { value: "3", label: "Countries Served" },
  ];

  // Refined for a premium, clean agency feel without raw unstyled emojis
  const mockLogos = [
    "Modern Technology", 
    "Security First", 
    "Performance Focused", 
    "Transparent Process", 
    "Responsive Design", 
    "Custom Solutions"
  ];

  return (
    <section
      id="trust-anchor"
      className="w-full bg-background py-16 px-4 sm:px-6 md:py-20 lg:px-8 border-t border-border/40 text-heading transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Top Header Text Overlay */}
        

        {/* 🚀 FIXED INFINITE SCROLLING MARQUEE WRAPPER */}
        <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
          
          {/* Flex track utilizes exact fit requirements instead of percentage boxing */}
          <div className="flex w-max gap-12 sm:gap-16 items-center animate-marquee whitespace-nowrap will-change-transform">
            
            {/* Track Loop Set 1 */}
            <div className="flex items-center gap-12 sm:gap-16 shrink-0">
              {mockLogos.map((logo, idx) => (
                <div 
                  key={`track1-${idx}`} 
                  className="text-sm sm:text-base md:text-lg font-heading font-bold text-neutral-400/80 dark:text-neutral-500/80 tracking-wider uppercase opacity-80 select-none hover:text-primary transition-colors duration-200"
                >
                  {logo}
                </div>
              ))}
            </div>

            {/* Track Loop Set 2 (Identical seamless twin to eliminate spatial stutter) */}
            <div className="flex items-center gap-12 sm:gap-16 shrink-0" aria-hidden="true">
              {mockLogos.map((logo, idx) => (
                <div 
                  key={`track2-${idx}`} 
                  className="text-sm sm:text-base md:text-lg font-heading font-bold text-neutral-400/80 dark:text-neutral-500/80 tracking-wider uppercase opacity-80 select-none hover:text-primary transition-colors duration-200"
                >
                  {logo}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* SOLID METRICS MATRIX BANNER GRID */}
        

      </div>
    </section>
  );
}