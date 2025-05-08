import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');
  
  // In a real app, this would fetch from an API controlled by the dashboard
  const product = {
    id: productId,
    name: 'Mountain Pine Luxury Candle',
    price: 24.99,
    description: 'Our signature Mountain Pine candle brings the fresh scent of pine forests into your home. Made with 100% soy wax and premium essential oils for a clean, long-lasting burn. Perfect for creating a cozy atmosphere during any season.',
    details: [
      'Burn time: 50-60 hours',
      'Ingredients: 100% soy wax, cotton wick, premium essential oils',
      'Hand-poured in small batches',
      'Reusable glass container'
    ],
    sizes: [
      { id: 'small', name: 'Small (4 oz)', price: 14.99 },
      { id: 'medium', name: 'Medium (8 oz)', price: 24.99 },
      { id: 'large', name: 'Large (12 oz)', price: 34.99 }
    ],
    images: [
      'https://images.unsplash.com/photo-1603006939302-231f5b8b671d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1602910344008-22f323cc1817?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607602878511-7cd38b48e99e?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'signature',
    relatedProducts: [1, 2, 3]
  };
  
  const selectedSizeObj = product.sizes.find(s => s.id === selectedSize);
  
  return (
    <div className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="relative mb-4">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${product.name} view ${index + 1}`} 
                  className="rounded-lg cursor-pointer"
                />
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">4.9 (128 reviews)</span>
            </div>
            
            <p className="text-2xl font-bold text-bmw-blue mb-6">
              ${selectedSizeObj.price.toFixed(2)}
            </p>
            
            <p className="mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex gap-4">
                {product.sizes.map((size) => (
                  <button 
                    key={size.id}
                    className={`px-4 py-2 border rounded-md ${selectedSize === size.id ? 'border-bmw-blue bg-bmw-light-blue' : 'border-gray-200 hover:border-bmw-blue'}`}
                    onClick={() => setSelectedSize(size.id)}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex w-32 h-10">
                <button 
                  className="w-10 bg-gray-100 flex items-center justify-center border border-gray-200 rounded-l-md"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-12 text-center border-t border-b border-gray-200"
                />
                <button 
                  className="w-10 bg-gray-100 flex items-center justify-center border border-gray-200 rounded-r-md"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex gap-4 mb-8">
              <button className="btn btn-primary flex-grow">
                Add to Cart
              </button>
              <button className="btn btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-medium mb-4">Product Details</h3>
              <ul className="list-disc pl-5 space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-16030069393${30+id}2-231f5b8b671d?auto=format&fit=crop&q=80&w=600`}
                    alt="Related Product" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">Mountain Lavender Candle</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-bmw-blue">$24.99</span>
                    <button className="text-bmw-accent hover:text-bmw-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;