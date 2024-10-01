"use client"
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/_components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

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
  const [current ,setCurrentSlide] = useState(1);
  const [, setCount] = React.useState(0)
  const [api, setApi] = useState<CarouselApi>(undefined);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Set up an interval to automatically go to the next slide every 30 seconds
  useEffect(() => {
    if (!api) {
      return
    }
    console.log(current)

    setCount(api.scrollSnapList().length)
    setCurrentSlide(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap() + 1)
    })

  }, [api]);

  return (
    <>
    <Carousel setApi={setApi} opts={{ loop: true }} plugins={[Autoplay({delay: 15000})]}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="flex justify-center items-center">
            <div className="flex-shrink-0 w-full md:w-[65%] flex flex-col md:flex-row p-4 dark:text-white rounded-lg">
              {/* Image section */}
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <img src={slide.imageUrl} alt={slide.title} className="w-full h-auto rounded-lg" />
              </div>

              {/* Text section */}
              <div className="w-full md:w-1/2 p-6 order-2 md:order-1">
                <p className="text-gray-500 dark:text-gray-200 text-sm mb-2">{slide.date}</p>
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{slide.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{slide.description}</p>
                <button className="px-4 py-2 bg-neutral-800 dark:bg-slate-50 text-white dark:text-black rounded-lg hover:bg-neutral-700 dark:hover:bg-gray-200 transition">
                  Read more
                </button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} />
      <CarouselNext onClick={goToNext} />
    </Carousel>
    <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              api?.scrollTo(index)
            }}
            className={`cursor-pointer w-3 h-3 mx-2 rounded-full hover:bg-neutral-700 transition mb-10 ${
              index === current -1 ? 'bg-black dark:bg-white' : 'bg-gray-400 dark:bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default CustomCarousel;