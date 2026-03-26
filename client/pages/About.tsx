import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-dark-bg font-outfit">
      <Navbar />
      <main className="pt-16">
        <AboutSection />
        <MissionSection />
        <AwardsSection />
        <HowItWorksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
