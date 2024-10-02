import { useEffect } from 'react';
import { products } from '../_constants';
import Product from './Product';

export const Store = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">Our Store</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {products.map((product) => (
                    <Product 
                        key={product.id} 
                        {...product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Store;