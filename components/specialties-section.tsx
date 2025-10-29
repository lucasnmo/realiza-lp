"use client"
import {
  Droplets, Hammer, Wrench, Shield,
  Building2, Paintbrush, Grid, Layers
} from "lucide-react"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  { icon: Droplets,  title: "Recuperação e impermeabilização de fachadas" },
  { icon: Hammer,    title: "Recuperação estrutural" },
  { icon: Wrench,    title: "Lavagem de fachadas" },
  { icon: Shield,    title: "Tratamento de fissuras" },
  { icon: Building2, title: "Recuperação de mármores" },
  { icon: Paintbrush,title: "Pintura acrílica de grande durabilidade" },
  { icon: Grid,      title: "Revitalização e assentamento de pastilhas" },
  { icon: Layers,    title: "Aplicação de manta asfáltica" },
]

export default function SpecialtiesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="especialidades" className="bg-[var(--color-surface)] py-12 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-center">
        <div className="w-full max-w-6xl">
          {/* Cabeçalho */}
          <div
            ref={ref}
            className={`text-center mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-gray-900">
              Nossos Serviços
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground">
              Expertise em recuperação, impermeabilização e manutenção predial
            </p>
          </div>

          {/* Lista de serviços */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-16 justify-items-center md:translate-x-6">
            {services.map((item, i) => {
              const Icon = item.icon
              return (
                <li
                  key={item.title}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  className={`w-full max-w-[500px] flex items-center gap-4 sm:gap-5 
                              group transition-all duration-500 ease-out
                              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                              hover:translate-x-2`}
                >
                  <span
                    className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center
                               rounded-lg bg-[#1E2A32] text-white shadow-md
                               ring-1 ring-[#1E2A32]/40 flex-shrink-0
                               group-hover:scale-110 group-hover:brightness-110 transition-transform duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className="text-[15px] sm:text-base font-extrabold uppercase tracking-wide text-gray-800
                               leading-tight group-hover:text-[#0d7a8f] transition-colors duration-300"
                  >
                    {item.title}
                  </span>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div
            className={`flex justify-center mt-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link href="/contato">
              <button
                className="px-4 py-2 sm:px-5 sm:py-2 rounded-full font-semibold uppercase tracking-wide
                           bg-[#1E2A32] text-white border-2 border-[#1E2A32]
                           hover:bg-transparent hover:text-[#1E2A32]
                           shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03]"
              >
                Fale com Nossa Equipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
