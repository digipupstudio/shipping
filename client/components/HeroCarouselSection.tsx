import ImageCarousel from "./ImageCarousel";

interface HeroCarouselSectionProps {
  title: string;
  subtitle?: string;
  carouselImages: Array<{ src: string; alt: string }>;
}

export default function HeroCarouselSection({
  title,
  subtitle,
  carouselImages,
}: HeroCarouselSectionProps) {
  return (
    <section className="relative w-full bg-dark-bg overflow-hidden pt-20 md:pt-32 pb-0">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2F860f967385ba439e95705da6918e19f0%2Fa21241700aad4091a75d0addccf91932?format=webp&width=800&height=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg/90" />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 max-w-[1200px] mx-auto w-full pb-0">
        {/* Heading */}
        <h1
          className="font-medium leading-none tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-4"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,250,250,0.70) 0%, #FAFAFA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-1.92px",
            lineHeight: "1.2",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/70 text-lg md:text-xl mb-12">
            {subtitle}
          </p>
        )}
      </div>

      {/* Image Carousel - Full Width */}
      <div className="relative w-full px-4 py-0">
        <ImageCarousel images={carouselImages} isMoving={true} />
      </div>
    </section>
  );
}
