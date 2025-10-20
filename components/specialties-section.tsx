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
        {/* Cabeçalho compactado */}
        <div
          ref={ref}
          className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Nossas Especialidades</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Expertise em todas as áreas da construção civil
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <Card
                key={specialty.id}
                className={`overflow-hidden transition-all duration-500 transform hover:scale-[1.03] hover:shadow-xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <CardContent className="p-0">
                  {/* Imagem sem margem e bem enquadrada */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <img
                      src={specialty.image || "/placeholder.svg"}
                      alt={specialty.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="p-2.5 bg-[var(--color-primary)]/90 rounded-md shadow-sm ring-1 ring-black/5">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Texto */}
                  <div className="p-5 sm:p-6 bg-white">
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
