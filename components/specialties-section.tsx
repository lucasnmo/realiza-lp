"use client"
import { Building, Wrench, Home, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const specialties = [
  {
    id: 1,
    icon: Home,
    title: "Obras Residenciais",
    description: "Construção de empreendimentos residenciais de alto padrão, desde apartamentos até casas exclusivas.",
    image: "/residential-construction.jpg",
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Obras Comerciais",
    description: "Desenvolvimento de projetos comerciais com infraestrutura completa e acabamento de excelência.",
    image: "/commercial-construction.jpg",
  },
  {
    id: 3,
    icon: Wrench,
    title: "Reformas",
    description: "Serviços especializados em reformas e manutenções prediais com qualidade e agilidade.",
    image: "/building-renovation.jpg",
  },
  {
    id: 4,
    icon: Building,
    title: "Fundações",
    description: "Expertise em fundações e estruturas, garantindo segurança e durabilidade para seus projetos.",
    image: "/foundation-construction.jpg",
  },
]

export default function SpecialtiesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="especialidades" className="py-10 sm:py-12 md:py-14 bg-[var(--color-surface)]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* cabeçalho mais compacto */}
        <div
          ref={ref}
          className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">NOSSAS ESPECIALIDADES</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Expertise em todas as áreas da construção civil
          </p>
        </div>

        {/* grid com respiro um pouco menor */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <Card
                key={specialty.id}
                className={`overflow-hidden hover:shadow-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <CardContent className="p-0">
                  {/* imagem com proporção fixa, sem “corte” indesejado */}
                  <div className="relative overflow-hidden rounded-t-xl aspect-[16/10]">
                    <img
                      src={specialty.image || "/placeholder.svg?height=300&width=400"}
                      alt={specialty.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="p-2.5 rounded-md bg-[var(--color-primary)]/90 shadow-sm ring-1 ring-black/5">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* conteúdo */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2.5">{specialty.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
