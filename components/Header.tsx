'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import siteConfig from '@/config/siteConfig';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-serif font-bold text-gray-900">
                THE <span className="text-primary">MEZZANINE</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {siteConfig.navigation.map((item) => {
              const isExternal = item.href.startsWith('/');
              
              if (isExternal) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                      pathname === item.href ? 'text-primary' : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-primary"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Secure Your Date
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {siteConfig.navigation.map((item) => {
              const isExternal = item.href.startsWith('/');
              
              if (isExternal) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-medium tracking-wide transition-colors hover:text-primary ${
                      pathname === item.href ? 'text-primary' : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl font-medium tracking-wide text-gray-700 transition-colors hover:text-primary"
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary mt-8"
            >
              Secure Your Date
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
