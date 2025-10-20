"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import * as Accordion from "@radix-ui/react-accordion"
import {
  Calendar,
  Ruler,
  Layers,
  Bed,
  MapPin,
  User2,
  Building2,
} from "lucide-react"

const projects = [
  {
    id: "solar-amendoeiras",
    name: "Solar das Amendoeiras",
    images: ["/solardasamendoeiras3.png", "/solardasamendoeiras.jpg", "/solardasamendoeiras2.jpg"],
    technicalSheet: {
      year: "2010",
      regime: "Obra em regime de condomínio",
      address: "R. Carmen Miranda, 372, Pituba",
      architect: "Mário Figueiredo",
      totalArea: "3.070 m²",
      floors: "14",
      bedrooms: "2/4 (1 suíte)",
      unitArea: "73 m²",
      infrastructure:
        "Piscina com deck, academia, sauna, salão de festas, salão de jogos, parque infantil e guarita de segurança.",
    },
  },
  {
    id: "bosque-guarajuba",
    name: "Condomínio Bosque de Guarajuba",
    images: ["/bosquedeguarajuba.jpg", "/bosquedeguarajuba2.jpg", "/bosquedeguarajuba3.jpg"],
    technicalSheet: {
      year: "2012",
      regime: "Obra em regime de administração",
      address: "Litoral Norte, Guarajuba",
      architect: "",
      totalArea: "4.750 m²",
      floors: "01 torre de 4 pavimentos e outra de 10 pavimentos",
      bedrooms: "",
      unitArea: "",
      infrastructure:
        "Guarita de acesso, espaço gourmet, salão de jogos, quadra poliesportiva, 2 piscinas (adulto e infantil), área de convivência, academia.",
    },
  },
  {
    id: "hotel-aram-yami",
    name: "Hotel Aram Yamí",
    images: ["/aranyammi.jpg",  "/aranyammi3.JPG", "/aranyammi4.jpg"],
    technicalSheet: {
      year: "2009",
      regime: "Empreendimento hoteleiro",
      address: "Rua Direita de Santo Antônio – Santo Antônio Além do Carmo",
      architect: "",
      totalArea: "1.600 m²",
      floors: "",
      bedrooms: "",
      unitArea: "",
      infrastructure:
        "Arquitetura colonial no Centro Histórico de Salvador; piscinas individuais, cafeteria e suítes com vista panorâmica da Baía de Todos os Santos.",
    },
  },

  {
    id: "residencial-sombreiros",
    name: "Residencial dos Sombreiros",
    images: ["/residencialdossombreiros2.jpg","/residencialdossombreiros.jpg",   "/residencialdossombreiros3.jpg"],
    technicalSheet: {
      year: "2013",
      regime: "Obra em regime de condomínio",
      address: "Alameda dos Sombreiros, Caminho das Árvores",
      architect: "Mário Figueiredo",
      totalArea: "4.050,00 m²",
      floors: "16",
      bedrooms: "3/4 (2 suítes)",
      unitArea: "93 m²",
      infrastructure:
        "Fachadas principais pastilhadas; Piscina, pq. infantil, deck, varanda gourmet, sauna, salão de festas, salão de jogos, guarita de segurança, academia e churrasqueira",
    },
  },

  // ——— Residenciais Exclusivos (do PDF) ———
  {
    id: "horto-vilas",
    name: "Condomínio Horto Vilas",
    images: ["/hortovilas.jpg", "/hortovilas2.jpg", "/hortovilas3.jpg", "/hortovilas4.jpg"],
    technicalSheet: {
      year: "",
      regime: "Residencial exclusivo",
      address: "",
      architect: "",
      totalArea: "620 m² (residência)",
      floors: "",
      bedrooms: "5 suítes",
      unitArea: "",
      infrastructure: "4 vagas de garagem e elevador social.",
    },
  },
  {
    id: "alphaville-estrela-do-mar",
    name: "Alphaville Estrela do Mar",
    // ATENÇÃO: converta os .tif para .jpg/.png e ajuste abaixo:
    images: ["/estreladomar1.jpg", "/estreladomar2.jpg", "/estreladomar3.jpg", "/estreladomar4.jpg"],
    technicalSheet: {
      year: "",
      regime: "Residencial exclusivo",
      address: "",
      architect: "",
      totalArea: "830 m² (residência)",
      floors: "",
      bedrooms: "5 suítes",
      unitArea: "",
      infrastructure: "6 vagas de garagem e piscina aquecida.",
    },
  }
]

export default function PortfolioPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-14 sm:py-16">
        <div
          ref={headerRef}
          className={`mb-10 sm:mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 uppercase tracking-wide text-gray-800">
            Nossos Empreendimentos
          </h1>
          <p className="font-sans text-center text-gray-600 text-base sm:text-lg md:text-xl mb-6 max-w-4xl mx-auto leading-relaxed px-4">
            Conheça os projetos que construímos com excelência, qualidade e compromisso ao longo de nossa trajetória.
          </p>
          <div className="w-20 h-1 bg-[#0891b2] mx-auto rounded-full" />
        </div>

        <div className="space-y-10 sm:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

/* ---------- Components ---------- */

function Chip({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
      {icon}
      {children}
    </span>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0]; index: number }) {
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal<HTMLDivElement>()
  const [activeIdx, setActiveIdx] = React.useState(0)
  const mainImage = project.images[activeIdx] ?? project.images[0]
  const T = project.technicalSheet

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <article className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-5 sm:p-6">
          {/* Imagem + thumbs */}
          <div className="md:col-span-5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={mainImage || "/placeholder.svg"}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 480px, (min-width:768px) 60vw, 100vw"
                priority
              />
            </div>

            {project.images.length > 1 && (
              <div className="mt-3 flex gap-2">
                {project.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`relative h-14 w-20 overflow-hidden rounded-md ring-1 transition-all ${
                      activeIdx === i ? "ring-[#0891b2]" : "ring-gray-200 hover:ring-gray-300"
                    }`}
                    aria-label={`Trocar para imagem ${i + 1}`}
                  >
                    <Image src={src} alt={`${project.name} ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Conteúdo enxuto */}
          <div className="md:col-span-7 flex flex-col">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{project.name}</h2>

            {/* Chips: fatos rápidos */}
            <div className="flex flex-wrap gap-2 mb-4">
              {T.year && <Chip icon={<Calendar className="h-3.5 w-3.5 text-[#4a5568]" />}>{T.year}</Chip>}
              {T.totalArea && <Chip icon={<Ruler className="h-3.5 w-3.5 text-[#4a5568]" />}>{T.totalArea}</Chip>}
              {T.floors && <Chip icon={<Layers className="h-3.5 w-3.5 text-[#4a5568]" />}>{T.floors} pav.</Chip>}
              {T.bedrooms && <Chip icon={<Bed className="h-3.5 w-3.5 text-[#4a5568]" />}>{T.bedrooms}</Chip>}
              {T.unitArea && <Chip icon={<Ruler className="h-3.5 w-3.5 text-[#4a5568]" />}>{T.unitArea}</Chip>}
            </div>

            {/* Resumo objetivo */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {T.address && (
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#4a5568]" />
                  <span>{T.address}</span>
                </li>
              )}
              {T.regime && (
                <li className="flex items-start gap-2">
                  <Building2 className="mt-0.5 h-4 w-4 text-[#4a5568]" />
                  <span>{T.regime}</span>
                </li>
              )}
              {T.architect && (
                <li className="flex items-start gap-2">
                  <User2 className="mt-0.5 h-4 w-4 text-[#4a5568]" />
                  <span>Projeto: {T.architect}</span>
                </li>
              )}
            </ul>

            {/* Ficha técnica em acordeão */}
            <Accordion.Root type="single" collapsible className="mt-4">
              <Accordion.Item value="ficha">
                <Accordion.Trigger
                  className="group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-wide
                             hover:bg-gray-50 transition-colors"
                >
                  Ficha técnica
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-data-[state=open]:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.958a.75.75 0 111.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z" />
                  </svg>
                </Accordion.Trigger>
                <Accordion.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                  <div className="mt-4 rounded-xl border bg-white p-4 sm:p-5">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                      {T.year && (
                        <div className="flex gap-2">
                          <dt className="font-semibold text-gray-800 min-w-[140px]">Ano</dt>
                          <dd className="text-gray-700">{T.year}</dd>
                        </div>
                      )}
                      {T.regime && (
                        <div className="flex gap-2">
                          <dt className="font-semibold text-gray-800 min-w-[140px]">Regime</dt>
                          <dd className="text-gray-700">{T.regime}</dd>
                        </div>
                      )}
                      {T.address && (
                        <div className="flex gap-2 sm:col-span-2">
                          <dt className="font-semibold text-gray-800 min-w-[140px]">Endereço</dt>
                          <dd className="text-gray-700">{T.address}</dd>
                        </div>
                      )}
                      {T.architect && (
                        <div className="flex gap-2">
                          <dt className="font-semibold text-gray-800 min-w-[140px]">Arquiteto</dt>
                          <dd className="text-gray-700">{T.architect}</dd>
                        </div>
                      )}
                      {T.totalArea && (
                        <div className="flex gap-2">
                          <dt className="font-semibold text-gray-800 min-w-[140px]">Área total</dt>
                          <dd className="text-gray-700">{T.totalArea}</dd>
                        </div>
                      )}
                      {T.floors && (
                        <div className="flex gap-2">
                          <dt className="font-semibold text-gray-800 min-w-[140px]">Pavimentos</dt>
                          <dd className="text-gray-700">{T.floors}</dd>
                        </div>
                      )}
                      {T.bedrooms && (
                        <div className="flex gap-2">
                          <dt className="font-semibold text-gray-800 min-w-[140px]">Dormitórios</dt>
                          <dd className="text-gray-700">{T.bedrooms}</dd>
                        </div>
                      )}
                      {T.unitArea && (
                        <div className="flex gap-2">
                          <dt className="font-semibold text-gray-800 min-w-[140px]">Área das unidades</dt>
                          <dd className="text-gray-700">{T.unitArea}</dd>
                        </div>
                      )}
                      {T.infrastructure && (
                        <div className="flex gap-2 sm:col-span-2">
                          <dt className="font-semibold text-gray-800 min-w-[140px]">Infraestrutura</dt>
                          <dd className="text-gray-700">{T.infrastructure}</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </article>
    </div>
  )
}
