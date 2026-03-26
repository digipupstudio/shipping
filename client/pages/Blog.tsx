import Navbar from "@/components/Navbar";
import HeroCarouselSection from "@/components/HeroCarouselSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const blogCarouselImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F52d12691b26b4ff6a8c4b734164f0ba1%2F58c987b83a1d4a92b2c11fe2d3228158?format=webp&width=800&height=1200",
    alt: "Blog content showcase",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-dark-bg font-outfit">
      <Navbar />
      <main className="pt-16">
        <HeroCarouselSection
          title="Insights & Resources"
          subtitle="Stay updated with industry trends and shipping strategies"
          carouselImages={blogCarouselImages}
        />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
