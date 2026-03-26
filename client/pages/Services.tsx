import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import WarehouseSection from "@/components/WarehouseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-dark-bg font-outfit">
      <Navbar />
      <main className="pt-16">
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
