"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const projects = [
  {
    id: 1,
    name: "Giardino Loreto",
    location: "Graça, Salvador",
    image: "/modern-residential-building-giardino-loreto.jpg",
  },
  {
    id: 2,
    name: "Residencial dos Sombreiros",
    location: "Caminho das Árvores",
    image: "/residential-building-sombreiros.jpg",
  },
  {
    id: 3,
    name: "Pituba Paradiso",
    location: "Pituba, Salvador",
    image: "/apartment-building-pituba.jpg",
  },
  {
    id: 4,
    name: "Solar das Amendoeiras",
    location: "Pituba, Salvador",
    image: "/solar-amendoeiras-building.jpg",
  },
  {
    id: 5,
    name: "Edifício Palmeiras",
    location: "Caminho das Árvores",
    image: "/edificio-palmeiras-studios.jpg",
  },
  {
    id: 6,
    name: "Edifício Lagoas",
    location: "Canela, Salvador",
    image: "/edificio-lagoas-apartments.jpg",
  },
]

export default function ProjectsCarousel() {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setStartIndex((prev) => (prev + itemsPerView >= projects.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, projects.length - itemsPerView) : prev - 1))
  }

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Empreendimentos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que construímos com excelência e dedicação
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                transform: `translateX(-${startIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                        <p className="text-muted-foreground">{project.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white"
            asChild
          >
            <Link href="#portfolio">Ver todos os empreendimentos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
