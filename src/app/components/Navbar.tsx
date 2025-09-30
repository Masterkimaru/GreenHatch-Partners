"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Navigation items configuration
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between py-6 px-8 shadow-sm bg-background/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className={`flex items-center gap-2 transform transition-all duration-700 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      }`}>
        <div className="relative overflow-hidden rounded-full">
          <Image
            src="/greenhatch_logo.png"
            alt="GreenHatch Partners Logo"
            width={40}
            height={40}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
        <Link 
          href="/" 
          className="font-display text-2xl text-greenhatch-500 font-bold hover:text-greenhatch-600 transition-colors duration-300"
        >
          GreenHatch Partners
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={`hidden md:flex gap-8 font-sans text-foreground transform transition-all duration-700 delay-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
      }`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:text-greenhatch-500 transition-colors duration-300 relative group ${
              pathname === item.href ? 'text-greenhatch-500' : ''
            }`}
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-greenhatch-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? 
            <Sun className="w-5 h-5 text-yellow-500" /> : 
            <Moon className="w-5 h-5 text-gray-600" />
          }
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? 
            <Sun className="w-5 h-5 text-yellow-500" /> : 
            <Moon className="w-5 h-5 text-gray-600" />
          }
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden animate-slideDown">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-greenhatch-500 transition-colors duration-300 py-2"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}