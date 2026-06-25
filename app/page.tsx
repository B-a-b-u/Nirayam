import About from "@/components/sections/about";
import CaseStudies from "@/components/sections/case-studies";
import Contact from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Services from "@/components/sections/services";
import TrustAnchor from "@/components/sections/trush-anchor";
import WhyChooseUs from "@/components/sections/why-choose-us";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
const Home = () => {
  return (

    <main
      style={{
        background: "var(--background)",
        color: "var(--heading)",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <HeroSection/>
      <Services/>
      <WhyChooseUs/>
      <Process/>
      <CaseStudies/>
      <TrustAnchor/>
      <About/>
      <Contact/>
    </main>

  )
}

export default Home;