"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/app/api/nav-links";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const BRAND_NAME = "NIRAYAM";

  // 1. Core Scroll Event Handler for Floating Island
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Optimized Intersection Observer for Section Tracking
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
      { rootMargin: "-45% 0px -45% 0px" } // Centers detection focus directly in viewport center
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 3. Freeze Viewport Overflow on Active Mobile Drawer State
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // 4. Fluid Element Scroll Calculation (No Routing Hashing)
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMobileMenu = false
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");

    if (closeMobileMenu) setIsOpen(false);
    const delay = closeMobileMenu ? 250 : 0;

    setTimeout(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        // Dynamic Offset Calculation based on changing navbar forms
        const HEADER_OFFSET = isScrolled ? 100 : 120; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth", // Native smooth easing algorithm
        });

        setActiveSection(id);
      }
    }, delay);
  };

  return (
    <>
      {/* FIXED OUTER CONTAINER WRAPPER */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
          isScrolled ? "pt-5 px-4 sm:px-6 md:px-8" : "pt-0 px-0"
        }`}
      >
        {/* INTERACTIVE GLASS ISLAND CAPSULED COMPONENT */}
        <header
          className={`mx-auto w-full max-w-7xl transition-all duration-500 ease-in-out ${
            isScrolled
              ? "rounded-2xl border border-border/80 bg-background/70 backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] h-20" // Increased from h-16
              : "bg-transparent border-b border-transparent h-24" // Increased from h-20
          }`}
        >
          <nav className="h-full flex items-center justify-between px-6 lg:px-8">
            
            {/* BRAND LOGO LAYER */}
            <Link
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, "#hero")}
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="relative transition-transform duration-300 group-hover:scale-103">
                <Image
                  src="/logo.svg"
                  alt={`${BRAND_NAME} Logo`}
                  width={isScrolled ? 34 : 38} 
                  height={isScrolled ? 34 : 38}
                  priority
                  className="transition-all duration-500 ease-in-out"
                />
              </div>

              <div className="flex flex-col leading-none">
                <span className="font-heading tracking-wider text-lg font-bold text-heading tracking-tight transition-all duration-300">
                  {BRAND_NAME}
                </span>
                <span className="text-[9px] uppercase tracking-[0.17em] text-muted font-semibold mt-0.5">
                  Technologies
                </span>
              </div>
            </Link>

            {/* DESKTOP FLUID ANIMATED NAV LINKS */}
            <div className="hidden items-center gap-1 md:flex relative p-1.5 rounded-full bg-border/5 border border-border/10">
              {navLinks.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 rounded-full select-none ${
                      isActive ? "text-white" : "text-muted hover:text-heading"
                    }`}
                  >
                    {/* The Kinetic Sliding Sliding Background Pill */}
                    {isActive && (
                      <motion.span
                        layoutId="activeTabPill"
                        className="absolute inset-0 z-0 rounded-full bg-secondary dark:bg-accent border border-primary/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* DESKTOP ACTIONS CONTAINER */}
            <div className="hidden items-center gap-4 md:flex shrink-0">
              <ThemeToggle />

              <Button
                asChild
                size={isScrolled ? "default" : "lg"}
                className="bg-primary hover:bg-primary/95 text-xs font-bold uppercase tracking-wider rounded-full shadow-xs transition-all duration-500 ease-in-out"
              >
                <Link
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                >
                  Book a Call
                </Link>
              </Button>
            </div>

            {/* MOBILE INTERACTIVE CONTROLS CONTAINER */}
            <div className="flex items-center gap-2 md:hidden shrink-0">
              <ThemeToggle />

              <button
                aria-label="Toggle Menu Drawer"
                onClick={() => setIsOpen(true)}
                className="rounded-xl p-2.5 transition-colors text-heading hover:bg-card/60"
              >
                <Menu size={22} />
              </button>
            </div>

          </nav>
        </header>
      </div>

      {/* MOBILE FULL DRAWER CONTAINER */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex justify-end">
            
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-xs"
            />

            {/* Slide-out Panel Layer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="relative h-full w-[280px] border-l border-border bg-background shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-border/60 px-6 h-24 shrink-0">
                <span className="font-bold text-heading text-sm uppercase tracking-wider">{BRAND_NAME}</span>
                <button
                  aria-label="Close Drawer"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-muted hover:text-heading rounded-lg hover:bg-card transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col px-4 py-4 overflow-y-auto grow space-y-1">
                {navLinks.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeSection === id;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href, true)}
                      className={`px-4 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 ${
                        isActive 
                          ? "bg-primary/5 text-primary dark:bg-primary/10 border border-primary/10" 
                          : "text-heading/80 hover:bg-card border border-transparent"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                
                <div className="pt-6 px-4">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/95 rounded-full text-xs font-bold uppercase tracking-widest py-6"
                  >
                    <Link
                      href="#contact"
                      onClick={(e) => handleSmoothScroll(e, "#contact", true)}
                    >
                      Book a Call
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}