import React from 'react';

const AboutPage = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">Our Story</h1>
        <p className="mb-6">Blue Mountain Wicks was founded in 2020 with a passion for creating handcrafted candles that transform spaces and enhance well-being. Our journey began in a small mountain cabin, where our founder experimented with different wax blends, fragrances, and wicks to create the perfect candle.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605651531144-51381895e23d?auto=format&fit=crop&q=80&w=800" 
              alt="Candle Making Process" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              At Blue Mountain Wicks, our mission is to create high-quality, sustainable candles that bring comfort and joy to your home. We believe in the power of scent to transform spaces and elevate moods.
            </p>
            <p>
              Each candle is carefully crafted by hand in small batches, ensuring quality and attention to detail. We use only the finest ingredients, including 100% soy wax, cotton wicks, and premium fragrance oils.
            </p>
          </div>
        </div>
        
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6" id="sustainability">Our Commitment to Sustainability</h2>
          <p className="mb-6">
            We are committed to sustainable practices and minimizing our environmental impact. Here's how we make a difference:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-bmw-light-blue p-6 rounded-lg">
              <div className="text-bmw-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly Materials</h3>
              <p>
                We use 100% soy wax, which is renewable, biodegradable, and burns cleaner than paraffin wax.
              </p>
            </div>
            
            <div className="bg-bmw-light-blue p-6 rounded-lg">
              <div className="text-bmw-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Recyclable Packaging</h3>
              <p>
                All our packaging is made from recycled materials and is fully recyclable or reusable.
              </p>
            </div>
            
            <div className="bg-bmw-light-blue p-6 rounded-lg">
              <div className="text-bmw-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ethical Sourcing</h3>
              <p>
                We ethically source all ingredients and support local suppliers whenever possible.
              </p>
            </div>
          </div>
        </div>
        
        <div className="my-12" id="press">
          <h2 className="text-2xl font-bold mb-6">Press & Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img src="https://via.placeholder.com/200x100?text=Featured+In" alt="Press Logo" className="grayscale hover:grayscale-0 transition-all" />
            <img src="https://via.placeholder.com/200x100?text=Award+Winning" alt="Press Logo" className="grayscale hover:grayscale-0 transition-all" />
            <img src="https://via.placeholder.com/200x100?text=As+Seen+In" alt="Press Logo" className="grayscale hover:grayscale-0 transition-all" />
            <img src="https://via.placeholder.com/200x100?text=Top+Rated" alt="Press Logo" className="grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;