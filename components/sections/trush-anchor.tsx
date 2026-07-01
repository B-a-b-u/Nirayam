"use client";

import React from "react";
import {
  Cpu,
  ShieldCheck,
  Layers3,
  Workflow,
  Rocket,
  Handshake,
} from "lucide-react";

export default function TrustAnchor() {
  const stats = [
    {
      value: "15+",
      label: "Projects Delivered",
    },
    {
      value: "3",
      label: "Core Services",
    },
    {
      value: "100%",
      label: "Custom Solutions",
    },
  ];

  const trustItems = [
    {
      icon: Cpu,
      title: "AI-Driven Innovation",
    },
    {
      icon: Layers3,
      title: "Custom Software Development",
    },
    {
      icon: Workflow,
      title: "Business Process Automation",
    },
    {
      icon: Rocket,
      title: "Scalable Digital Solutions",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable Systems",
    },
    {
      icon: Handshake,
      title: "Built Around Your Business",
    },
  ];

  return (
    <section
      id="trust-anchor"
      className="
        w-full
        overflow-hidden
        border-t
        border-border/40
        bg-background
        py-16
        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Why Businesses Choose Nirayam
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              tracking-tight
              text-heading
              md:text-4xl
            "
          >
            Engineering Reliable Digital Solutions
          </h2>

          <p
            className="
              mt-4
              text-body
            "
          >
            We combine modern engineering practices, AI technologies,
            and business-first thinking to build software that scales.
          </p>
        </div>

        {/* Marquee */}

        <div
          className="
            relative
            overflow-hidden
            py-6
            [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
          "
        >
          <div
            className="
              flex
              w-max
              items-center
              gap-16
              whitespace-nowrap
              animate-marquee
            "
          >
            {/* Loop 1 */}

            <div className="flex items-center gap-16 shrink-0">
              {trustItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`first-${index}`}
                    className="
                      flex
                      items-center
                      gap-3
                      text-muted
                      transition-colors
                      duration-300
                      hover:text-primary
                    "
                  >
                    <Icon
                      className="
                        h-6
                        w-6
                        text-primary
                      "
                    />

                    <span
                      className="
                        text-base
                        font-semibold
                        tracking-wide
                      "
                    >
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Loop 2 */}

            <div
              className="flex items-center gap-16 shrink-0"
              aria-hidden="true"
            >
              {trustItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`second-${index}`}
                    className="
                      flex
                      items-center
                      gap-3
                      text-muted
                      transition-colors
                      duration-300
                      hover:text-primary
                    "
                  >
                    <Icon
                      className="
                        h-6
                        w-6
                        text-primary
                      "
                    />

                    <span
                      className="
                        text-base
                        font-semibold
                        tracking-wide
                      "
                    >
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-3
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-2xl
                border
                border-border
                bg-card
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/30
              "
            >
              <h3
                className="
                  text-4xl
                  font-bold
                  text-primary
                "
              >
                {stat.value}
              </h3>

              <p
                className="
                  mt-2
                  text-body
                  font-medium
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}