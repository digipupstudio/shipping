import Navbar from "@/components/Navbar";
import HeroCarouselSection from "@/components/HeroCarouselSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import WarehouseSection from "@/components/WarehouseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const servicesCarouselImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F52d12691b26b4ff6a8c4b734164f0ba1%2F58c987b83a1d4a92b2c11fe2d3228158?format=webp&width=800&height=1200",
    alt: "Shipping services showcase",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-dark-bg font-outfit">
      <Navbar />
      <main className="pt-16">
        <HeroCarouselSection
          carouselImages={servicesCarouselImages}
        />
        <ServicesSection />
        <PortfolioSection />
        <IntegrationsSection />
        <WarehouseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
