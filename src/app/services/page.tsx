"use client";

import { useEffect, useState } from "react";
import { type FC, type SVGProps } from "react";
import Link from "next/link";
import {
  Briefcase,
  BarChart2,
  Globe,
  Zap,
  Truck,
  ShieldCheck,
  Archive,
  Search,
  Layers,
} from "lucide-react";

type Service = {
  id: string;
  title: string;
  description: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

const SERVICES: Service[] = [
  {
    id: "strategy",
    title: "Business Strategy & Advisory",
    description:
      "We develop robust strategies for growth, sustainability and competitive advantage tailored to your goals.",
    Icon: Briefcase,
  },
  {
    id: "financial",
    title: "Financial Consulting",
    description:
      "Financial planning, investment guidance, project & business funding support, and risk management strategies.",
    Icon: BarChart2,
  },
  {
    id: "market",
    title: "Market Research & Analysis",
    description:
      "Data-driven market intelligence and consumer insights to inform product, pricing and go-to-market decisions.",
    Icon: Search,
  },
  {
    id: "solar",
    title: "Solar Energy (EPC Support)",
    description:
      "Feasibility studies, developer representation, and recommendations for engineers & contractors on renewables projects.",
    Icon: Zap,
  },
  {
    id: "mining",
    title: "Mineral Mining & Exportation Consulting",
    description:
      "Advisory on mining operations, compliance, environmental & social safeguards and international export logistics.",
    Icon: Archive,
  },
  {
    id: "freight",
    title: "Freight & Forwarding",
    description:
      "End-to-end logistics, customs clearance coordination and freight forwarding solutions for global trade.",
    Icon: Truck,
  },
  {
    id: "insurance",
    title: "Business Insurance & Risk",
    description:
      "Risk assessment and insurance brokerage services to protect assets and business continuity through trusted partners.",
    Icon: ShieldCheck,
  },
  {
    id: "warehousing",
    title: "Warehousing & Inventory Solutions",
    description:
      "Storage strategy, inventory optimisation and secure warehousing solutions designed for cost-efficiency and reliability.",
    Icon: Layers,
  },
  {
    id: "investigation",
    title: "Global Investigation & Compliance",
    description:
      "Regulatory investigations, due diligence and compliance support to help you navigate legal and cross-border risks.",
    Icon: Globe,
  },
];

export default function ServicesPage() {
  // editable summary numbers — change these to match your real stats
  const yearsInOperation = 12;
  const projectsCompleted = 240;
  const awards = 15;

  // animation control (match home page styling)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // small delay to allow page paint, then trigger entrance
    const t = setTimeout(() => setIsVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative py-20 px-6 bg-greenhatch-50/30 dark:bg-gray-800/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-12 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-greenhatch-700 dark:text-greenhatch-400">
            Our Services
          </h1>
          <p className="mt-4 text-gray-900 dark:text-gray-500 text-lg font-sans">
            GreenHatch Partners provides specialist consulting across strategy,
            finance, renewable energy, mining, logistics and compliance — we
            partner with organisations to deliver measurable outcomes.
          </p>

          {/* stats */}
          <div className="mt-8 flex items-stretch justify-center gap-6">
            <div
              className={`flex flex-col items-center px-4 py-3 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "120ms" : "0ms" }}
            >
              <div className="text-greenhatch-700 dark:text-greenhatch-300 font-bold text-2xl">
                {yearsInOperation}+
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Years in operation</div>
            </div>

            <div
              className={`flex flex-col items-center px-4 py-3 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              <div className="text-greenhatch-700 dark:text-greenhatch-300 font-bold text-2xl">
                {projectsCompleted}+
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Projects completed</div>
            </div>

            <div
              className={`flex flex-col items-center px-4 py-3 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? "280ms" : "0ms" }}
            >
              <div className="text-greenhatch-700 dark:text-greenhatch-300 font-bold text-2xl">
                {awards}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Awards & recognitions</div>
            </div>
          </div>
        </div>

        {/* services grid */}
        <section aria-labelledby="services-heading" className="transform transition-all duration-700">
          <h2 id="services-heading" className="sr-only">
            Services listing
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <article
                key={s.id}
                className={`bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-lg  ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                aria-labelledby={`${s.id}-title`}
                style={{ transitionDelay: `${120 + i * 60}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-greenhatch-50 dark:bg-greenhatch-900/20">
                      {/* icon */}
                      <s.Icon className="w-6 h-6 text-greenhatch-600 dark:text-greenhatch-300" />
                    </div>
                  </div>

                  <div>
                    <h3 id={`${s.id}-title`} className="text-lg font-semibold text-greenhatch-700 dark:text-greenhatch-300">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* optional footer with CTA */}
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-greenhatch-600 dark:text-greenhatch-300 hover:text-greenhatch-700 dark:hover:text-greenhatch-200 hover:underline transition-colors"
                  >
                    Request consultation
                  </Link>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Learn more →</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* small CTA */}
        <div
          className={`mt-12 flex justify-center transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "620ms" : "0ms" }}
        >
          <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800/60 px-6 py-4 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-lg bg-greenhatch-50 dark:bg-greenhatch-900/20 flex items-center justify-center">
              <BarChart2 className="w-6 h-6 text-greenhatch-600 dark:text-greenhatch-300" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-greenhatch-700 dark:text-greenhatch-300">
                Ready to start a project?
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Tell us about your needs — we&apos;ll propose a tailored plan and next steps.
              </div>
            </div>
            <Link
              href="/contact"
              className="ml-6 inline-flex items-center gap-2 bg-greenhatch-500 hover:bg-greenhatch-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Floating decorative elements (subtle) */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-greenhatch-100 dark:bg-greenhatch-900/30 rounded-full opacity-20 animate-float" />
      <div className="absolute top-40 right-16 w-16 h-16 bg-accent dark:bg-accent/30 rounded-full opacity-20 animate-float-delay" />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-greenhatch-300 dark:bg-greenhatch-700/30 rounded-full opacity-20 animate-float-slow" />
    </div>
  );
}
