"use client";

import { useState } from "react";
import Image from "next/image";
import { services, Service } from "@/app/api/services-data";
import { CheckCircle2, Plus, Minus } from "lucide-react";

export default function Services() {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="w-full bg-background py-24 px-4 sm:px-6 lg:px-8 border-t border-border/40 text-heading transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div
          className="
    mx-auto
    max-w-3xl
    text-center
  "
        >
          <p
            className="
      text-sm
      font-semibold
      uppercase
      tracking-widest
      text-primary
    "
          >
            Our Services
          </p>

          <h2
            className="
      mt-4
      text-3xl
      font-bold
      text-heading
      md:text-5xl
    "
          >
            Innovative Technology Solutions
            <br />
            Tailored for Your Business
          </h2>

          <p
            className="
      mt-6
      text-body
      md:text-lg
    "
          >
            We design and develop scalable digital products, intelligent AI
            solutions, and modern web applications that help businesses automate
            workflows, accelerate growth, and deliver exceptional customer
            experiences.
          </p>
        </div>

        {/* ASYMMETRICAL BENTO GRID */}
        <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {services.map((service) => {
            const isExpanded = expandedCardId === service.id;

            return (
              <div
                key={service.id}
                className={`group flex flex-col justify-between rounded-3xl border p-6 sm:p-8 transition-all duration-500 overflow-hidden relative bg-background min-h-[280px] ${isExpanded
                    ? "border-primary bg-card shadow-xs"
                    : "border-border hover:border-border-hover hover:bg-card/40"
                  }`}
              >
                {/* Upper Content Frame */}
                <div className="w-full relative z-10">
                  
                  <h3 className={`font-heading font-extrabold text-xl tracking-tight mt-2 mb-3 ${isExpanded? "text-primary" : "text-heading"} `}>
                    {service.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-muted mb-6 pr-2">
                    {service.description}
                  </p>

                  {/* THE INLINE CAPABILITIES ACCORDION TRACK */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isExpanded
                        ? "grid-rows-[1fr] opacity-100 mb-6 pb-4 border-t border-border/40 pt-4"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-3">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2.5">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-heading/90">
                            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-md border border-border bg-background text-emerald-500 mt-0.5 shadow-3xs">
                              <CheckCircle2 className="text-success" />
                            </div>
                            <span className="leading-tight font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* THE BLENDED SVG ILLUSTRATION (bottom right) */}
                <div className={`absolute w-36 h-36 pointer-events-none transition-all duration-500 ease-in-out z-0 right-[-15px] bottom-[-15px] ${isExpanded
                    ? "opacity-5 scale-90 blur-xs"
                    : "opacity-20 dark:opacity-40 group-hover:opacity-100 group-hover:scale-103"
                  }`}>
                  <Image
                    src={service.image}
                    alt={`${service.title} Illustration`}
                    fill
                    priority
                    className="object-contain grayscale dark:invert group-hover:grayscale-0 group-hover:dark:invert-0 transition-all duration-500"
                  />
                </div>

                {/* BOTTOM-LEFT INTERACTIVE INTERACTION LAYER */}
                <div className="relative z-10 mt-auto pt-4 border-t border-border/5 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className={`h-9 px-4 rounded-xl border font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 transition-all duration-300 shadow-3xs w-auto ${isExpanded
                        ? "bg-error text-white border-error hover:bg-error/30"
                        : "bg-secondary border-border text-white backdrop-blur-xs hover:bg-card hover:text-primary hover:border-border-hover group-hover:border-primary/30"
                      }`}
                  >
                    <span>{isExpanded ? "Close" : "Explore"}</span>
                    <div className={`transition-transform duration-500 ${isExpanded ? "rotate-180" : "rotate-0"}`}>
                      {isExpanded ? <Minus size={10} /> : <Plus size={10} />}
                    </div>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}