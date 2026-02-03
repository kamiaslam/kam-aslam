'use client';

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Services from "@/components/home/Services";
import WorkList from "@/components/home/WorkList";
import Process from "@/components/home/Process";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
// import Pricing from "@/components/home/Pricing"; // Removed - not needed for Kam's portfolio
// import Blog from "@/components/home/Blog"; // Removed - no blog content
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Marquee from "@/components/home/Marquee";
import Footer from "@/components/home/Footer";
import Loading from "@/components/ui/Loading";
import useGSAPLoad from "@/hooks/useGSAPLoad";

export default function Home() {
  const gsapLoaded = useGSAPLoad();
  const [loadingComplete, setLoadingComplete] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // We can use this effect for other global animations if needed
    // But Hero animation is now controlled via prop
  }, [loadingComplete]);

  if (!gsapLoaded) {
    return null; // Or a simple spinner if needed, but Loading component handles it
  }

  return (
    <div ref={contentRef}>
      {!loadingComplete && <Loading onComplete={() => setLoadingComplete(true)} />}
      <main>
        <Hero startAnimation={loadingComplete} />
        <Manifesto />
        <Services />
        <WorkList />
        <Process />
        <Skills />
        <Testimonials />
        <FAQ />
        <CTA />
        <Marquee />
        <Footer />
      </main>
    </div>
  );
}
