import { useState } from 'react';
import type { Product } from '../_constants';

const Product: React.FC<Product> = ({ name, price, colors }) => {
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const getImageForColor = (color: string) => {
        if (name.includes('Exclusive')) {
            return 'merch/exclusive-merch.png';
        }
        return `merch/${color}-${name.toLowerCase().replace(/\s/g, '-')}.png`;
    };

    return (
        <div className="bg-white dark:bg-zinc-900 border dark:border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
            <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">{name}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-bold mb-4">${price.toFixed(2)}</p>
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                        src={getImageForColor(selectedColor)} 
                        alt={name} 
                        className="absolute inset-0 w-full h-full object-contain" 
                    />
                </div>
                {colors && colors.length > 0 && (
                    <div className="flex space-x-2 mb-4">
                        {colors.map((color, index) => {
                            const isWhite = color.toLowerCase() === 'white';
                            return (
                                <button
                                    key={index}
                                    className={`inline-block w-6 h-6 rounded-full ${isWhite ? 'border border-gray-400' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                ></button>
                            );
                        })}
                    </div>
                )}
            </div>
            <button className="w-full bg-blue-500 text-black py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors mt-4">
                Add to Cart
            </button>
        </div>
    );
};

export default Product;
