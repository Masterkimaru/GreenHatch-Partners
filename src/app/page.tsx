"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-greenhatch-50/50 to-background dark:from-gray-900/30 dark:to-background transition-colors duration-300">
      <h1 className={`font-display text-4xl sm:text-6xl font-bold text-greenhatch-700 dark:text-greenhatch-400 leading-tight transform transition-all duration-1000 delay-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        Strategic Consulting for Sustainable Growth
      </h1>
      <p className={`mt-6 max-w-2xl text-lg text-foreground/80 font-sans transform transition-all duration-1000 delay-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        At GreenHatch Partners, we help businesses unlock their potential with
        innovative strategies, financial insights, and sustainable solutions.
      </p>
      <div className={`mt-8 flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
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

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-greenhatch-100 dark:bg-greenhatch-900/30 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-16 w-16 h-16 bg-accent dark:bg-accent/30 rounded-full opacity-20 animate-float-delay"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-greenhatch-300 dark:bg-greenhatch-700/30 rounded-full opacity-20 animate-float-slow"></div>
    </div>
  );
}