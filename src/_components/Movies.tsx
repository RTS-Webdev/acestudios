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
      <hr className="border-t-2 border-gray-100 my-8 dark:border-zinc-700"></hr>
      <h1 className="text-3xl font-bold mb-4 dark:text-white">MOVIES WE'VE HELPED PRODUCE</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 order-2 md:order-1">
          <p className="text-gray-500 dark:text-gray-200 text-sm mb-2">{movie.date}</p>
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">
            <span className='text-lime-500 bg-clip-text'>{movie.name};</span> {movie.title}
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
            className={`cursor-pointer w-3 h-3 mx-2 rounded-full hover:bg-neutral-700 transition mb-10 ${
              index === sliderValue ? 'bg-black dark:bg-white' : 'bg-gray-400 dark:bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
