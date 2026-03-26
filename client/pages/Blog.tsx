import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen bg-dark-bg font-outfit">
      <Navbar />
      <main className="pt-16">
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
