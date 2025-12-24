'use client'
import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientBanner from "@/components/ClientBanner";
import AboutUsSection from "@/components/AboutUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { imageAssets } from "@/lib/imageAssets";

const MIN_LOADER_VISIBLE_MS = 250;

export default function Home() {
  const { isLoaded, progress } = useImagePreloader(imageAssets);
  const [showLoader, setShowLoader] = useState(true);
  const loaderStartRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof performance !== "undefined") {
      loaderStartRef.current = performance.now();
      return;
    }
    loaderStartRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    const now =
      typeof performance !== "undefined" ? performance.now() : Date.now();
    const start = loaderStartRef.current ?? now;
    const remaining = Math.max(0, MIN_LOADER_VISIBLE_MS - (now - start));
    const timeout = window.setTimeout(() => setShowLoader(false), remaining);
    return () => window.clearTimeout(timeout);
  }, [isLoaded]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    const { documentElement } = document;
    if (showLoader) {
      const previousHtmlOverflow = documentElement.style.overflow;
      const previousBodyOverflow = document.body.style.overflow;
      documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      return () => {
        documentElement.style.overflow = previousHtmlOverflow;
        document.body.style.overflow = previousBodyOverflow;
      };
    }

    documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }, [showLoader]);

  return (
    <>
      {showLoader && (
        <LoadingOverlay progress={progress} isComplete={isLoaded} />
      )}
      <div
        className={`app-shell w-full overflow-x-hidden scroll-smooth ${
          showLoader ? "app-shell--hidden" : "app-shell--visible"
        }`}
        aria-busy={showLoader}
        aria-hidden={showLoader}
      >
        <Navbar />
        <section id="home">
          <HeroSection />
        </section>
        <ClientBanner />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="about">
          <WhoWeAreSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="team">
          <AboutUsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </div>
      <style jsx global>{`
        .app-shell {
          opacity: 1;
          transition: opacity 0.5s ease;
          will-change: opacity;
        }
        .app-shell--hidden {
          opacity: 0;
          pointer-events: none;
        }
        .app-shell--visible {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
