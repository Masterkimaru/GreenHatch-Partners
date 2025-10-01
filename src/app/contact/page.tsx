// app/contact/page.tsx
"use client";

import { useState } from "react";
//import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const phoneNumbers = [
    
    { number: '+254 734 755 202', display: '+254 734 755 202' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: result.message });
        // Reset form after successful submission
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Something went wrong' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = (phoneNumber: string) => {
    // Remove spaces and plus sign for WhatsApp URL
    const cleanNumber = phoneNumber.replace(/\s+/g, '').replace('+', '');
    const message = "Hello! I'd like to get more information about your services.";
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const makeCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-greenhatch-50/50 to-background dark:from-gray-900/30 dark:to-background transition-colors duration-300">
      <div className="max-w-4xl w-full text-center">
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-greenhatch-700 dark:text-greenhatch-400 mb-6 leading-tight">
          Contact Us
        </h1>
        
        {/* Status Message */}
        {submitStatus && (
          <div className={`mb-6 p-4 rounded-lg text-center max-w-2xl mx-auto ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' 
              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Phone Contact Section */}
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-greenhatch-600 dark:text-greenhatch-400 mb-6">
            Call or Message Us Directly
          </h2>
          <div className="grid md:grid-cols-2 gap-6 justify-items-center md:justify-items-stretch">
            {phoneNumbers.map((phone, index) => (
              <div 
                key={index} 
                className={`bg-white/50 dark:bg-gray-800/30 p-6 rounded-lg shadow-sm backdrop-blur-sm ${
                  phoneNumbers.length === 1 ? 'md:col-span-2 md:max-w-md' : 'w-full'
                }`}
              >
                <p className="text-lg font-medium text-foreground mb-4">{phone.display}</p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => makeCall(phone.number)}
                    className="flex items-center justify-center bg-greenhatch-500 hover:bg-greenhatch-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                    </svg>
                    Call
                  </button>
                  <button
                    onClick={() => openWhatsApp(phone.number)}
                    className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Contact Form */}
        <div className="bg-white/50 dark:bg-gray-800/30 p-8 rounded-lg shadow-sm max-w-2xl mx-auto backdrop-blur-sm">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-greenhatch-600 dark:text-greenhatch-400 mb-6">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/90 dark:bg-gray-800/70 text-foreground placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-greenhatch-500 transition-all duration-300"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/90 dark:bg-gray-800/70 text-foreground placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-greenhatch-500 transition-all duration-300"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/90 dark:bg-gray-800/70 text-foreground placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-greenhatch-500 transition-all duration-300"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/90 dark:bg-gray-800/70 text-foreground placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-greenhatch-500 transition-all duration-300"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-greenhatch-500 hover:bg-greenhatch-700 text-white font-medium py-4 px-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-greenhatch-100 dark:bg-greenhatch-900/30 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-16 w-16 h-16 bg-accent dark:bg-accent/30 rounded-full opacity-20 animate-float-delay"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-greenhatch-300 dark:bg-greenhatch-700/30 rounded-full opacity-20 animate-float-slow"></div>
    </div>
  );
}