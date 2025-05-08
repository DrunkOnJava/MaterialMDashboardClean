import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  // In a real app, this would be managed with state management like Redux
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Mountain Pine Luxury Candle',
      price: 24.99,
      quantity: 2,
      size: 'Medium (8 oz)',
      image: 'https://images.unsplash.com/photo-1603006939302-231f5b8b671d?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 2,
      name: 'Lavender Fields Candle',
      price: 19.99,
      quantity: 1,
      size: 'Small (4 oz)',
      image: 'https://images.unsplash.com/photo-1602910344008-22f323cc1817?auto=format&fit=crop&q=80&w=300'
    }
  ]);
  
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 7.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;
  
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-bmw-light-blue p-8 rounded-lg text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-bmw-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/shop" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left pb-4">Product</th>
                        <th className="text-center pb-4">Quantity</th>
                        <th className="text-right pb-4">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id} className="border-b last:border-b-0">
                          <td className="py-4">
                            <div className="flex items-center">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-16 h-16 object-cover rounded-md mr-4"
                              />
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.size}</p>
                                <button 
                                  className="text-bmw-accent text-sm hover:underline mt-1"
                                  onClick={() => removeItem(item.id)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex justify-center">
                              <div className="flex w-24 h-8 border rounded-md">
                                <button 
                                  className="w-8 flex items-center justify-center"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                  </svg>
                                </button>
                                <input 
                                  type="number" 
                                  min="1" 
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                  className="w-8 text-center"
                                />
                                <button 
                                  className="w-8 flex items-center justify-center"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 text-right">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary w-full mt-6">
                    Proceed to Checkout
                  </button>
                  
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">or</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Link to="/shop" className="block text-center text-bmw-blue hover:text-bmw-accent">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                <h3 className="font-medium mb-4">Have a promo code?</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    className="flex-grow px-4 py-2 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-bmw-blue"
                    placeholder="Enter code"
                  />
                  <button className="bg-bmw-blue text-white px-4 py-2 rounded-r-md">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;