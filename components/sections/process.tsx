"use client";

import { ProcessStep, processSteps } from "@/app/api/process-data";

export default function Process() {
  return (
    <section
      id="process"
      className="relative w-full bg-background py-20 px-6 text-heading lg:px-8 border-t border-border/40 transition-colors duration-300"
    >
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header Wrapper */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto mb-20">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Our Process Roadmap
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A transparent development process built for predictable results.
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted leading-relaxed">
            Every project follows a proven workflow that keeps communication
            transparent, development efficient, and delivery on schedule.
          </p>
        </div>

        {/* Dynamic Vertical Timeline Stack */}
        <div className="relative flex flex-col gap-12 md:gap-16">
          
          {/* Central Structural Tracking Line */}
          <div className="absolute left-[23px] top-2 bottom-2 w-[1.5px] bg-border/60 md:left-1/2 md:-translate-x-1/2" />

          {processSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={step.number}
                className={`group relative flex flex-col items-start gap-6 md:flex-row md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* 1. Timeline Center Node Badge */}
                <div className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background shadow-xs transition-all duration-300 group-hover:border-primary group-hover:scale-105 md:left-1/2 md:-translate-x-1/2">
                  <span className="text-xs font-bold text-muted transition-colors duration-200 group-hover:text-primary">
                    {step.number}
                  </span>
                </div>

                {/* 2. Content Box Panel Container */}
                <div className="w-full pl-16 md:w-[calc(50%-24px)] md:pl-0">
                  <div
                    className={`relative rounded-2xl border border-border bg-card p-6 shadow-[xs] transition-all duration-300 hover:border-border-hover hover:shadow-md md:text-left ${
                      isEven ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    {/* Floating Corner Utility Icon */}
                    <div
                      className={`hidden lg:flex absolute top-6 h-7 w-7 items-center justify-center rounded-lg border border-border/60 bg-background text-muted/80 shadow-xs ${
                        isEven ? "left-6" : "right-6"
                      }`}
                    >
                      {step.icon}
                    </div>

                    {/* Header Stack */}
                    <div className={`space-y-2 ${isEven ? "lg:pl-10" : "lg:pr-10"}`}>
                      <h3 className="font-heading font-bold text-base text-heading tracking-tight transition-colors duration-200 group-hover:text-primary">
                        {step.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Empty Balanced Grid Column */}
                <div className="hidden md:block md:w-[calc(50%-24px)]" />

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}