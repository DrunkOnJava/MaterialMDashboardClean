import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-bold text-bmw-blue">
            Blue Mountain<span className="text-bmw-accent"> Wicks</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({isActive}) => isActive ? "font-medium text-bmw-accent" : "hover:text-bmw-accent"}>
              Home
            </NavLink>
            <NavLink to="/shop" className={({isActive}) => isActive ? "font-medium text-bmw-accent" : "hover:text-bmw-accent"}>
              Shop
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "font-medium text-bmw-accent" : "hover:text-bmw-accent"}>
              About
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "font-medium text-bmw-accent" : "hover:text-bmw-accent"}>
              Contact
            </NavLink>
            <Link to="/cart" className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-bmw-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden flex flex-col gap-4 pb-4">
            <NavLink to="/" className={({isActive}) => isActive ? "font-medium text-bmw-accent" : "hover:text-bmw-accent"}>
              Home
            </NavLink>
            <NavLink to="/shop" className={({isActive}) => isActive ? "font-medium text-bmw-accent" : "hover:text-bmw-accent"}>
              Shop
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "font-medium text-bmw-accent" : "hover:text-bmw-accent"}>
              About
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "font-medium text-bmw-accent" : "hover:text-bmw-accent"}>
              Contact
            </NavLink>
            <NavLink to="/cart" className={({isActive}) => isActive ? "font-medium text-bmw-accent" : "hover:text-bmw-accent"}>
              Cart (3)
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;