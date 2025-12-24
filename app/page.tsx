'use client'
import { useEffect, useState } from "react";
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

export default function Home() {
  const { isLoaded, progress } = useImagePreloader(imageAssets);
  const [showLoader, setShowLoader] = useState(true);
  const [canRenderApp, setCanRenderApp] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    const timeout = setTimeout(() => setShowLoader(false), 600);
    return () => clearTimeout(timeout);
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

  useEffect(() => {
    if (!showLoader) {
      setCanRenderApp(true);
    }
  }, [showLoader]);

  return (
    <>
      {showLoader && (
        <LoadingOverlay progress={progress} isComplete={isLoaded} />
      )}
      {canRenderApp && (
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
      )}
      <style jsx global>{`
        .app-shell {
          opacity: 1;
          transform: none;
        }
        .app-shell--hidden,
        .app-shell--visible {
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
      `}</style>
    </>
  );
}
