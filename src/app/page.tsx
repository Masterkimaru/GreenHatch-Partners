"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center px-6 py-20 bg-gradient-to-b from-greenhatch-50/50 to-background dark:from-gray-900/30 dark:to-background transition-colors duration-300">
      {/* Hero Section */}
      <div className="max-w-6xl w-full text-center mb-16">
        <h1 className={`font-display text-4xl sm:text-6xl font-bold text-greenhatch-700 dark:text-greenhatch-400 leading-tight transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Strategic Consulting for Sustainable Growth
        </h1>
        <p className={`mt-6 max-w-2xl mx-auto text-lg text-foreground/80 font-sans transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          At GreenHatch Partners, we help businesses unlock their potential with
          innovative strategies, financial insights, and sustainable solutions.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-4xl w-full mb-16">
        <div className={`bg-white/50 dark:bg-gray-800/30 p-8 rounded-lg shadow-sm backdrop-blur-sm transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="font-display text-3xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-6 text-center">
            About GreenHatch Partners
          </h2>
          <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
            At GreenHatch Partners, we believe in unlocking sustainable value. Founded on the conviction that economic growth and environmental responsibility can go hand in hand, we support African businesses through strategic funding, capacity building, and green innovation. Our team of experts draws on deep local insights and global best practices to deliver solutions that endure.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-greenhatch-600 dark:text-greenhatch-400 mb-4">Our Mission</h3>
              <p className="text-foreground/80">To accelerate the transition to green and inclusive growth globally.</p>
              
              <h3 className="font-display text-xl font-semibold text-greenhatch-600 dark:text-greenhatch-400 mt-6 mb-4">Our Vision</h3>
              <p className="text-foreground/80">A resilient future where sustainable enterprises thrive.</p>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-semibold text-greenhatch-600 dark:text-greenhatch-400 mb-4">Core Values</h3>
              <ul className="text-foreground/80 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-greenhatch-500 rounded-full mr-3"></span>
                  Integrity
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-greenhatch-500 rounded-full mr-3"></span>
                  Collaboration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-greenhatch-500 rounded-full mr-3"></span>
                  Impact
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-greenhatch-500 rounded-full mr-3"></span>
                  Innovation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-4xl w-full mb-16">
        <div className={`bg-white/50 dark:bg-gray-800/30 p-8 rounded-lg shadow-sm backdrop-blur-sm transform transition-all duration-1000 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="font-display text-3xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-6 text-center">
            Why Choose Us
          </h2>
          <p className="text-foreground/80 mb-8 text-lg leading-relaxed text-center">
            Choosing GreenHatch Partners means working with a partner that understands both the challenges and opportunities in Africa&apos;s evolving business landscape.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg border border-greenhatch-100 dark:border-greenhatch-800/30">
              <h3 className="font-display text-lg font-semibold text-greenhatch-600 dark:text-greenhatch-400 mb-3">Deep Local & Global Expertise</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">We bring on-the-ground experience across multiple African markets, combined with international best practices.</p>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg border border-greenhatch-100 dark:border-greenhatch-800/30">
              <h3 className="font-display text-lg font-semibold text-greenhatch-600 dark:text-greenhatch-400 mb-3">Sustainability + Profitability</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">We don&apos;t just consult; we design strategies that balance environmental responsibility with commercial success.</p>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg border border-greenhatch-100 dark:border-greenhatch-800/30">
              <h3 className="font-display text-lg font-semibold text-greenhatch-600 dark:text-greenhatch-400 mb-3">Investor & Partner Network</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">Our strong relationships with impact investors, development finance institutions, and industry leaders open doors for funding and collaboration.</p>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg border border-greenhatch-100 dark:border-greenhatch-800/30">
              <h3 className="font-display text-lg font-semibold text-greenhatch-600 dark:text-greenhatch-400 mb-3">Hands-On Delivery</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">Beyond strategy, we roll up our sleeves to implement, measure, and optimize real outcomes.</p>
            </div>
            
            <div className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg border border-greenhatch-100 dark:border-greenhatch-800/30 md:col-span-2 lg:col-span-1">
              <h3 className="font-display text-lg font-semibold text-greenhatch-600 dark:text-greenhatch-400 mb-3">Transparent & Ethical Practices</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">Trust and accountability are at the heart of how we work.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons - Moved to bottom */}
      <div className={`max-w-2xl w-full text-center transform transition-all duration-1000 delay-1300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-greenhatch-500 hover:bg-greenhatch-700 text-white font-medium px-8 py-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="border border-greenhatch-500 text-greenhatch-500 hover:bg-greenhatch-50 dark:hover:bg-greenhatch-900/20 font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-greenhatch-100 dark:bg-greenhatch-900/30 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-16 w-16 h-16 bg-accent dark:bg-accent/30 rounded-full opacity-20 animate-float-delay"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-greenhatch-300 dark:bg-greenhatch-700/30 rounded-full opacity-20 animate-float-slow"></div>
    </div>
  );
}