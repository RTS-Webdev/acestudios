import React, { useState, useEffect } from 'react';

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
const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  // State to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Set up an interval to automatically go to the next slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 30000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex flex-col md:flex-row items-center p-4 bg-white rounded-lg"
          >
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
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`cursor-pointer w-3 h-3 mx-2 rounded-full hover:bg-neutral-700 transition ${
              index === currentSlide ? 'bg-black' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;