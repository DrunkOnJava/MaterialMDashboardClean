import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  
  // This would be fetched from an API controlled by the dashboard
  const products = Array(12).fill(null).map((_, index) => ({
    id: index + 1,
    name: `Mountain ${['Pine', 'Lavender', 'Vanilla', 'Cedar', 'Sandalwood', 'Citrus'][index % 6]} Candle`,
    price: Math.floor(Math.random() * 20) + 15.99,
    image: `https://images.unsplash.com/photo-16030069393${30+index}2-231f5b8b671d?auto=format&fit=crop&q=80&w=600`,
    category: ['signature', 'seasonal', 'gift-sets'][index % 3]
  }));
  
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);
  
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-3xl font-bold mb-2">Shop Our Collection</h1>
        <p className="mb-8">Find the perfect candle for every mood and occasion.</p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <Link 
            to="/shop" 
            className={`px-4 py-2 rounded-full ${category === 'all' ? 'bg-bmw-blue text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            All Products
          </Link>
          <Link 
            to="/shop?category=signature" 
            className={`px-4 py-2 rounded-full ${category === 'signature' ? 'bg-bmw-blue text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            Signature Collection
          </Link>
          <Link 
            to="/shop?category=seasonal" 
            className={`px-4 py-2 rounded-full ${category === 'seasonal' ? 'bg-bmw-blue text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            Seasonal Collection
          </Link>
          <Link 
            to="/shop?category=gift-sets" 
            className={`px-4 py-2 rounded-full ${category === 'gift-sets' ? 'bg-bmw-blue text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            Gift Sets
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.id % 5 === 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-bmw-accent text-white text-xs px-2 py-1 rounded-full">
                      Bestseller
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-bmw-blue">${product.price.toFixed(2)}</span>
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
  );
};

export default ShopPage;