"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/app/api/nav-links";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "../ui/button";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const BRAND_NAME = "NIRAYAM Technologies";

  // 1. Navbar Background Blur Toggle on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Active Section Detection via Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Triggers section highlight precisely as it passes down through the viewport focus bounds
        rootMargin: "-30% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 3. Prevent Body Window Scroll when Mobile Menu is Open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 4. Centralized Smooth Scroll Handler to prevent hash doubling bugs
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMobileMenu = false
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");

    if (closeMobileMenu) {
      setIsOpen(false);
    }

    // Delay scroll slightly on mobile to allow the drawer sliding layout transition to finish cleanly
    const delay = closeMobileMenu ? 300 : 0;

    setTimeout(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const HEADER_OFFSET = 80; // Matches navbar height (h-20 = 80px)
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Safely push standard structural window hash history state natively
        window.history.pushState(null, "", href);
        setActiveSection(id);
      }
    }, delay);
  };

  return (
    <>
      {/* Navbar Wrapper */}
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-300
          ${isScrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Brand Logo Stack */}
          <Link
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt={`${BRAND_NAME} Logo`}
                width={36}
                height={36}
                priority
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-heading tracking-wider text-lg font-bold text-heading tracking-tight">
                NIRAYAM
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted font-medium mt-0.5">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="relative py-2"
                >
                  <span
                    className={`
                      text-sm
                      font-medium
                      transition-colors
                      duration-200
                      ${isActive
                        ? "text-primary font-semibold"
                        : "text-muted hover:text-heading"
                      }
                    `}
                  >
                    {item.name}
                  </span>

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        h-1
                        w-1
                        -translate-x-1/2
                        rounded-full
                        bg-primary
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Call to Action Stack */}
          <div className="hidden items-center gap-5 md:flex">
            <ThemeToggle />

            <Button
              asChild
              size="lg"
              className="
                bg-primary
                hover:bg-primary/90
              ">
              <Link
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact", true)}
              >
                Book a Call
              </Link>
            </Button>
          </div>

          {/* Mobile Shell Menu Actions Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              aria-label="Open Menu"
              onClick={() => setIsOpen(true)}
              className="
                rounded-lg
                p-2
                transition-colors
                text-heading
                hover:bg-card
              "
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Global Sidebar Overlay Context Drawer */}
      <div
        className={`
          fixed
          inset-0
          z-[60]
          ${isOpen ? "visible" : "invisible"}
        `}
      >
        {/* Backdrop Fade Screen element */}
        <div
          className={`
            absolute
            inset-0
            bg-black/30
            dark:bg-black/50
            backdrop-blur-xs
            transition-opacity
            duration-300
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => setIsOpen(false)}
        />

        {/* Slidable Menu panel Container */}
        <div
          className={`
            absolute
            right-0
            top-0
            h-full
            w-[290px]
            border-l
            border-border
            bg-background
            shadow-2xl
            transition-transform
            duration-300
            ease-out
            flex
            flex-col
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Panel Close Header Element */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-border
              px-6
              py-5
            "
          >
            <span className="font-bold text-heading tracking-tight">
              {BRAND_NAME}
            </span>

            <button
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
              className="p-1 text-muted hover:text-heading rounded-md hover:bg-card transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Mobile Panel Scroll Links stack Container */}
          <div className="flex flex-col px-6 py-4 overflow-y-auto grow">
            {navLinks.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href, true)}
                  className={`
                    border-b
                    border-border/40
                    py-4
                    text-base
                    font-medium
                    transition-colors
                    ${isActive ? "text-primary font-semibold" : "text-heading/80"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
            <Button
              asChild
              size="lg"
              className="
                bg-primary
                hover:bg-primary/90
              ">
              <Link
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact", true)}
              >
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;