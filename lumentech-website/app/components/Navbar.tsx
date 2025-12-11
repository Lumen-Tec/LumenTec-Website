'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-indigo-700 group-hover:bg-indigo-600">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={32}
                height={32}
                className="transition-transform group-hover:scale-110"
              />
            </div>
            <span className="text-white font-bold text-xl hidden sm:block transition-colors group-hover:text-indigo-200">
              Lumentec
            </span>
          </Link>

          {/* Seccion de links para navegacion */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link
              href="/services"
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-200 ${
                pathname === '/services'
                  ? 'bg-white text-indigo-800 shadow-md'
                  : 'text-white hover:text-indigo-200 hover:bg-indigo-700'
              }`}
            >
              Servicios
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-200 ${
                pathname === '/about'
                  ? 'bg-white text-indigo-800 shadow-md'
                  : 'text-white hover:text-indigo-200 hover:bg-indigo-700'
              }`}
            >
              Sobre Nosotros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}