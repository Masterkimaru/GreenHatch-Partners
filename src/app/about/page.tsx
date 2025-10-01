"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-greenhatch-50/50 to-background dark:from-gray-900/30 dark:to-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className={`font-display text-4xl sm:text-5xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            About GreenHatch Partners
          </h1>
          <p className={`text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            12 Years of Excellence in Strategic Consulting and Sustainable Business Solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Company Overview */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              GreenHatch Partners is a premier strategic consulting firm that has been transforming businesses for over 12 years. Based in the heart of Nairobi, Kenya at Pax Mayfair, Westlands, we are strategically positioned to serve clients across East Africa and beyond.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We are dedicated to helping businesses achieve sustainable growth through innovative solutions, comprehensive financial expertise, and unwavering commitment to environmental responsibility.
            </p>
          </div>

          {/* Location & Expertise */}
          <div className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-6">
              Our Expertise
            </h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              As a leading multi-sector consulting firm, we offer comprehensive expertise across various industries, including business strategy, financial advisory, legal compliance, market research, project management, and specialized fields such as renewable energy and sustainable development.
            </p>
            <div className="bg-greenhatch-50 dark:bg-greenhatch-900/20 p-6 rounded-lg">
              <h3 className="font-semibold text-greenhatch-700 dark:text-greenhatch-400 mb-2">Our Location</h3>
              <p className="text-gray-700 dark:text-gray-300">
                📍 Pax Mayfair, Westlands<br />
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-8 text-center">
            Why Choose GreenHatch Partners?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-greenhatch-100 dark:bg-greenhatch-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-display text-xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-3">
                Proven Track Record
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With 12 years of successful operations, we have consistently delivered exceptional results for our clients across diverse industries and market conditions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-greenhatch-100 dark:bg-greenhatch-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-display text-xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-3">
                Sustainability Focus
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We integrate environmental responsibility into every strategy, helping businesses grow while contributing positively to sustainable development goals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="w-12 h-12 bg-greenhatch-100 dark:bg-greenhatch-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-display text-xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-3">
                Innovation-Driven
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our forward-thinking approach and ability to adapt to dynamic market trends ensures cutting-edge solutions that drive sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className={`bg-gradient-to-r from-greenhatch-500/10 to-greenhatch-600/10 dark:from-greenhatch-900/20 dark:to-greenhatch-800/20 p-8 rounded-lg mb-16 transform transition-all duration-1000 delay-1300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-6 text-center">
            Our Commitment to Excellence
          </h2>
          <p className="text-lg text-foreground/80 text-center max-w-4xl mx-auto leading-relaxed mb-6">
            At GreenHatch Partners, we pride ourselves on having a team of highly qualified professionals with extensive experience across multiple disciplines. Our consultancy is built on a foundation of professionalism, integrity, and an unwavering commitment to excellence, making us the preferred partner for businesses seeking expert guidance and strategic solutions.
          </p>
          <p className="text-lg text-foreground/80 text-center max-w-4xl mx-auto leading-relaxed">
            We provide our clients with precise, research-backed, and innovative solutions tailored to their specific needs, ensuring they can navigate complex challenges, enhance operations, and achieve sustainable growth in today&apos;s dynamic business environment.
          </p>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the countless organizations that have trusted GreenHatch Partners to drive their success. Let&apos;s work together to create sustainable solutions for your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-greenhatch-500 hover:bg-greenhatch-700 text-white font-medium px-8 py-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="border border-greenhatch-500 text-greenhatch-500 hover:bg-greenhatch-50 dark:hover:bg-greenhatch-900/20 font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-greenhatch-100 dark:bg-greenhatch-900/30 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-16 w-16 h-16 bg-accent dark:bg-accent/30 rounded-full opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-greenhatch-300 dark:bg-greenhatch-700/30 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-1/2 right-10 w-14 h-14 bg-greenhatch-200 dark:bg-greenhatch-800/30 rounded-full opacity-20 animate-float"></div>
      </div>
    </div>
  );
}