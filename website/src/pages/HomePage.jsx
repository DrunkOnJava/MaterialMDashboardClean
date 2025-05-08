import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-bmw-light-blue py-24">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bmw-blue mb-6">
              Handcrafted Luxury Candles
            </h1>
            <p className="text-lg mb-8 text-bmw-dark max-w-lg">
              Transform your space with our premium soy wax candles, carefully crafted with natural essential oils and sustainable materials.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/about" className="btn btn-outline">
                Our Story
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-bmw-accent rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1603006939302-231f5b8b671d?auto=format&fit=crop&q=80&w=800" 
                alt="Blue Mountain Wicks Premium Candles" 
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-bmw-blue rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bestselling Candles</h2>
            <p className="text-bmw-dark max-w-2xl mx-auto">
              Our customers' favorites, made with premium soy wax and natural essential oils for a clean, long-lasting burn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* This would be mapped from product data */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-16030069393${30+item}2-231f5b8b671d?auto=format&fit=crop&q=80&w=600`}
                    alt="Product" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-bmw-accent text-white text-xs px-2 py-1 rounded-full">
                      Bestseller
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">Mountain Pine Candle</h3>
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
          
          <div className="text-center mt-12">
            <Link to="/shop" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-bmw-light-blue">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1602910344008-22f323cc1817?auto=format&fit=crop&q=80&w=800" 
                alt="Handcrafting candles" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-bmw-blue">Crafted With Care</h2>
            <p className="mb-6">
              At Blue Mountain Wicks, we handcraft each candle with care and attention to detail. Using only the finest ingredients, our candles are made with 100% soy wax, cotton wicks, and premium fragrance oils.
            </p>
            <p className="mb-6">
              We're committed to sustainability, which is why all our packaging is recyclable and our ingredients are ethically sourced.
            </p>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Collection Categories */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop By Collection</h2>
            <p className="text-bmw-dark max-w-2xl mx-auto">
              Explore our specially curated collections for every mood and occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1607602878511-7cd38b48e99e?auto=format&fit=crop&q=80&w=600" 
                alt="Signature Collection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark/80 to-transparent"></div>
              <div className="absolute bottom-6 left-0 w-full text-center">
                <h3 className="text-white text-2xl font-bold mb-2">Signature Collection</h3>
                <Link to="/shop?category=signature" className="inline-block bg-white text-bmw-blue px-4 py-2 rounded-full font-medium hover:bg-bmw-blue hover:text-white transition-colors">
                  Shop Now
                </Link>
              </div>
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1612198526331-fc007fb61795?auto=format&fit=crop&q=80&w=600" 
                alt="Seasonal Collection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark/80 to-transparent"></div>
              <div className="absolute bottom-6 left-0 w-full text-center">
                <h3 className="text-white text-2xl font-bold mb-2">Seasonal Collection</h3>
                <Link to="/shop?category=seasonal" className="inline-block bg-white text-bmw-blue px-4 py-2 rounded-full font-medium hover:bg-bmw-blue hover:text-white transition-colors">
                  Shop Now
                </Link>
              </div>
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1541696432-7a70d69e0506?auto=format&fit=crop&q=80&w=600" 
                alt="Gift Sets" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bmw-dark/80 to-transparent"></div>
              <div className="absolute bottom-6 left-0 w-full text-center">
                <h3 className="text-white text-2xl font-bold mb-2">Gift Sets</h3>
                <Link to="/shop?category=gift-sets" className="inline-block bg-white text-bmw-blue px-4 py-2 rounded-full font-medium hover:bg-bmw-blue hover:text-white transition-colors">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-bmw-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Get 10% Off Your First Order</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive updates on new products, special offers, and candle care tips.
          </p>
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-md text-bmw-dark focus:outline-none"
              required
            />
            <button type="submit" className="bg-bmw-accent px-6 py-3 rounded-r-md font-medium hover:bg-opacity-90">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;