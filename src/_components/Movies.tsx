// SliderComponent.tsx
import { useState } from 'react';
import { Slider } from "@/_components/ui/slider";
import { Movies } from '../_constants';

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
  };

  const movie = Movies[sliderValue];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">MOVIES WE'VE HELPED PRODUCE</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 order-2 md:order-1">
          <p className="text-gray-500 dark:text-gray-200 text-sm mb-2">{movie.date}</p>
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">
            <span className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'>{movie.name};</span> {movie.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{movie.description}</p>
        </div>
      </div>
      <div className="slider mt-4">
        <Slider
          value={[sliderValue]}
          onValueChange={handleSliderChange}
          min={0}
          max={Movies.length - 1}
          step={1}
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex justify-center mt-4">
        {Movies.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setSliderValue(index)
            }}
            className={`w-3 h-3 rounded-full cursor-pointer ${sliderValue === index ? 'bg-neutral-800 dark:bg-slate-50' : 'bg-gray-300 dark:bg-gray-700'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
