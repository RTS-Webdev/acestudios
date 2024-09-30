"use client"
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/_components/ui/carousel";

// Define the Slide interface
interface Slide {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
}

// Define the CarouselProps interface
interface CarouselProps {
  slides: Slide[];
}

// Carousel component
const CustomCarousel: React.FC<CarouselProps> = ({ slides }) => {
  // State to keep track of the current slide
  const [,setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Set up an interval to automatically go to the next slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 15000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Carousel>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="flex-shrink-0 w-full flex flex-col md:flex-row items-center p-4 bg-white rounded-lg">
              {/* Image section */}
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <img src={slide.imageUrl} alt={slide.title} className="w-full h-auto rounded-lg" />
              </div>

              {/* Text section */}
              <div className="w-full md:w-1/2 p-6 order-2 md:order-1">
                <p className="text-gray-500 text-sm mb-2">{slide.date}</p>
                <h3 className="text-2xl font-semibold mb-4">{slide.title}</h3>
                <p className="text-gray-700 mb-6">{slide.description}</p>
                <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition">
                  Læs mere
                </button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} />
      <CarouselNext onClick={goToNext} />
    </Carousel>
  );
};

export default CustomCarousel;