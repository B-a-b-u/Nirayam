"use client";

import { useState } from "react";
import Image from "next/image";
import { caseStudiesData, CaseStudy } from "@/app/api/case-studies";
import { ArrowUpRight, HelpCircle, Lightbulb, Sparkles } from "lucide-react";

export default function CaseStudies() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy>(caseStudiesData[0]);

  return (
    <section
      id="case-studies"
      className="relative w-full bg-background py-20 px-6 text-heading lg:px-8 border-t border-border/40 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto flex flex-col items-center text-center gap-3 md:max-w-2xl mb-16">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Case Studies
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Proven Impact
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted leading-relaxed">
            Click on our specialized agency projects below to reveal the operational breakthroughs and metrics details.
          </p>
        </div>

        {/* Master-Detail Structural Split */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* LEFT SIDE PANEL: Clean Clickable Project List (7 Columns) */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {caseStudiesData.map((project) => {
              const isActive = selectedProject.id === project.id;
              
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`w-full text-left flex flex-col sm:flex-row items-center gap-5 p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? "border-primary bg-card shadow-xs"
                      : "border-border bg-background hover:bg-card/40 hover:border-border-hover"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-primary" />
                  )}

                  {/* Micro Screenshot Cover */}
                  <div className="relative h-[90px] w-full sm:w-[140px] shrink-0 overflow-hidden rounded-xl bg-muted border border-border/40 shadow-xs">
                    <Image
                      src={project.imageSrc}
                      alt={`${project.title} Thumbnail`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>

                  {/* Brief Meta Header text info */}
                  <div className="flex flex-col gap-1 w-full">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary/90">
                      {project.category}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-base text-heading group-hover:text-primary transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <ArrowUpRight size={15} className="text-muted/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="text-xs leading-relaxed text-muted line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE PANEL: Dedicated Your-Format Preview Container (5 Columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col gap-6 transition-all duration-200">
              
              {/* Header Title & Tagline Block */}
              <div className="border-b border-border/60 pb-4 space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Active Case Review</span>
                </div>
                <h4 className="font-heading font-bold text-xl text-heading tracking-tight">
                  {selectedProject.rightTitle}
                </h4>
                <span className="block text-sm font-semibold text-primary/90 tracking-tight">
                  {selectedProject.tagline}
                </span>
              </div>

              {/* Challenge and Solution Blocks */}
              <div className="space-y-4">
                {/* Challenge Card Element */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-background text-destructive">
                    <HelpCircle size={13} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted block">
                      Challenge
                    </span>
                    <p className="text-xs leading-relaxed text-heading/90">
                      {selectedProject.challenge}
                    </p>
                  </div>
                </div>

                {/* Solution Card Element */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-background text-primary">
                    <Lightbulb size={13} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted block">
                      Solution
                    </span>
                    <p className="text-xs leading-relaxed text-heading/90">
                      {selectedProject.solutionSummary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Core 4-Column / Balanced Grid Statistics Matrix */}
              <div className="grid grid-cols-2 gap-3 pt-5 border-t border-border/60">
                {selectedProject.stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="rounded-xl border border-border/60 bg-background/50 p-3.5 text-center transition-all duration-200 hover:border-primary/20 hover:bg-background"
                  >
                    <span className="block font-heading text-lg font-bold text-primary tracking-tight">
                      {stat.value}
                    </span>
                    <span className="block text-[10px] font-medium text-muted uppercase tracking-wider mt-1 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}