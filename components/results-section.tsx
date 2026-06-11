"use client"

import { companyStats } from "@/lib/site-content"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function ResultsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-white py-12 text-[#1E2A32] sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {companyStats.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-lg border border-gray-200 bg-[#F7F8F6] p-5 text-center"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="text-3xl font-extrabold leading-none sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-bold leading-5 text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
