import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CoverageCalculator } from "@/components/CoverageCalculator";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CoverageCalculator />
      <ExpertiseSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
