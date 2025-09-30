// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenHatch Partners",
  description: "Strategic Consulting for Sustainable Growth",
  icons: {
    icon: "/greenhatch_logo.png",
    shortcut: "/greenhatch_logo.png",
    apple: "/greenhatch_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
            <Navbar />
            <main className="flex-1">{children}</main>

            {/* Professional Footer */}
            <footer className="bg-greenhatch-700 dark:bg-gray-900 text-white py-12 px-6 transition-colors duration-300">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Company Info */}
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-bold text-greenhatch-300">
                      GreenHatch Partners
                    </h3>
                    <p className="text-greenhatch-100/80 text-sm leading-relaxed">
                      Strategic consulting for sustainable growth and business
                      transformation.
                    </p>
                  </div>

                  {/* Location */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-greenhatch-300 text-lg">
                      Location
                    </h4>
                    <address className="not-italic text-greenhatch-100/90 leading-relaxed">
                      <p className="flex items-start gap-2">
                        <span className="inline-block mt-0.5">📍</span>
                        <span>
                          Pax Mayfair, Westlands
                          <br />
                          Nairobi, Kenya
                        </span>
                      </p>
                    </address>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-greenhatch-300 text-lg">
                      Contact
                    </h4>
                    <div className="space-y-2 text-greenhatch-100/90">
                      <p className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                        <span>📱</span>
                        <a href="tel:+254734755202" className="hover:underline">
                          +254 734 755 202
                        </a>
                      </p>
                      <p className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                        <span>📱</span>
                        <a href="tel:+254755772635" className="hover:underline">
                          +254 755 772 635
                        </a>
                      </p>
                      <p className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                        <span>✉️</span>
                        <a
                          href="mailto:info@greenhatchpartners.com"
                          className="hover:underline break-words"
                        >
                          info@greenhatchpartners.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-greenhatch-300 text-lg">
                      Quick Links
                    </h4>
                    <div className="space-y-2">
                      <Link
                        href="/"
                        className="block text-greenhatch-100/90 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="block text-greenhatch-100/90 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        About
                      </Link>
                      <Link
                        href="/services"
                        className="block text-greenhatch-100/90 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        Services
                      </Link>
                      <Link
                        href="/contact"
                        className="block text-greenhatch-100/90 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-greenhatch-600/50 mt-10 pt-6 text-center">
                  <p className="text-greenhatch-200/80 text-sm hover:text-greenhatch-100 transition-colors duration-200">
                    © {new Date().getFullYear()} GreenHatch Partners. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
