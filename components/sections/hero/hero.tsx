"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const services = [
    "Web Applications",
    "Mobile Applications",
    "AI Solutions",
    "AI Automations",
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    const target = document.getElementById(sectionId);

    if (!target) return;

    const NAVBAR_HEIGHT = 80;

    const offset =
      target.getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_HEIGHT;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

 };

  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        bg-background
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,var(--color-primary)_0%,transparent_55%)]
          opacity-[0.08]
        "
      />

      {/* Decorative Blur */}
      <div
        className="
          absolute
          left-1/2
          top-0
          -z-10
          h-[400px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <div
        className="
          mx-auto
          max-w-6xl
          px-6
          pt-35
          pb-20
          lg:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* Headline */}
          <h1
            className="
              max-w-5xl
              text-4xl
              font-bold
              tracking-tight
              text-heading
              sm:text-5xl
              lg:text-6xl
            "
          >
            Custom Software Development

            <span
              className="
                mt-2
                block
                text-primary
              "
            >
              for Growing Businesses
            </span>
          </h1>

          {/* Services */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            {services.map((service) => (
              <span
                key={service}
                className="
                  rounded-full
                  border
                  border-border
                  bg-card
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-heading
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-primary/30
                  hover:bg-primary/5
                "
              >
                {service}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-body
            "
          >
            We help startups and growing businesses build
            scalable web applications, mobile applications, AI-powered
            solutions and automation systems using AI that reduce manual
            work, improve efficiency and accelerate growth.
          </p>

          {/* CTA */}
          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >
            <Button
              asChild
              size="lg"
              className="
                bg-primary
                hover:bg-primary/90
              "
            >
              <Link
                href="#contact"
                onClick={(e) =>
                  scrollToSection(e, "contact")
                }
              >
                Get Free Consultation

                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <Link
                href="#services"
                onClick={(e) =>
                  scrollToSection(e, "services")
                }
              >
                View Services
              </Link>
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;