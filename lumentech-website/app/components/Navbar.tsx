'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-indigo-800/50 backdrop-blur-md shadow-lg'
          : 'bg-indigo-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              scrolled 
            ? 'bg-indigo-800/1'
            : 'bg-indigo-800'
               }`}>
                      <img
                        src="/favicon.ico"
                        alt="Logo"
                        className="w-8 h-8"
                        style={{ display: 'block' }}
                      />
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              Lumentec
            </span>
          </Link>

          {/* Seccion de links para navegacion */}
          <div className="flex items-center space-x-8">
            <Link
              href="/services"
              className="text-white hover:text-purple-200 transition-colors duration-200 font-medium"
            >
              Servicios
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-purple-200 transition-colors duration-200 font-medium"
            >
              Sobre Nosotros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}