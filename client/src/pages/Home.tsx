import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechnologySection from "@/components/TechnologySection";
import LatestSection from "@/components/LatestSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TechnologySection />
      <LatestSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ProjectModal />
    </div>
  );
}
