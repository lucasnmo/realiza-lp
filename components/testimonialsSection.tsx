"use client"

import { Quote } from "lucide-react"
import { testimonials } from "@/lib/site-content"

const carouselTestimonials = [...testimonials, ...testimonials]

export default function TestimonialsSection() {
  return (
    <section id="testemunhos" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2A98AA]">
            Depoimentos
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1E2A32] sm:text-4xl">
            Quem Viveu a Experiência REALIZA
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden py-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="flex w-max animate-[testimonialMarquee_70s_linear_infinite] gap-5 px-10 hover:[animation-play-state:paused] sm:px-16">
          {carouselTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.author}-${index}`}
              className="flex w-[82vw] max-w-[420px] shrink-0 flex-col rounded-lg border border-gray-200 bg-[#F7F8F6] p-6 shadow-[0_18px_45px_rgba(20,33,40,0.16)] sm:w-[420px]"
            >
              <Quote className="h-7 w-7 text-[#2A98AA]" aria-hidden="true" />
              <p className="mt-4 line-clamp-5 text-sm leading-7 text-gray-700">
                “{testimonial.quote}”
              </p>
              <div className="mt-5 border-t border-gray-200 pt-4">
                <h3 className="text-base font-bold text-[#1E2A32]">
                  {testimonial.author}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
                  {testimonial.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes testimonialMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div[class*="testimonialMarquee"] {
            animation-duration: 120s !important;
          }
        }
      `}</style>
    </section>
  )
}
