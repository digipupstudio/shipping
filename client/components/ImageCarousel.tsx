import { useState, useEffect } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlayInterval?: number;
  isMoving?: boolean;
}

export default function ImageCarousel({
  images,
  autoPlayInterval = 5000,
  isMoving = false,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1 || isMoving) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval, isMoving]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  if (isMoving) {
    return (
      <div className="relative w-full">
        {/* Moving carousel container */}
        <div className="relative w-full overflow-hidden">
          {/* Animated track */}
          <div
            className="carousel-track flex gap-6"
            style={{
              animation: "carousel-scroll 40s linear infinite",
              width: `${images.length * 100}%`,
            }}
          >
            {/* Original images */}
            {images.map((image, index) => (
              <div
                key={`original-${index}`}
                className="flex-shrink-0"
                style={{ width: `${100 / images.length}%` }}
              >
                <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate images for seamless loop */}
            {images.map((image, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0"
                style={{ width: `${100 / images.length}%` }}
              >
                <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/30 via-transparent to-black/30 rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Carousel container */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        {/* Images */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      {/* Dots indicators */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-brand w-8" : "bg-white/30 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
