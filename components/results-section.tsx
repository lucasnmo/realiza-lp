"use client"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function ResultsSection() {
  const { ref, isVisible } = useScrollReveal()

  const stats = [
    { value: "15+", label: "Anos de Experiência" },
    { value: "150+", label: "Unidades Entregues" },
    { value: "08",  label: "Prédios Concluídos" },
    { value: "100%", label: "Satisfação dos Clientes" },
  ]

  return (
    <section className="bg-[#1E2A32] text-white py-10 sm:py-12 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
