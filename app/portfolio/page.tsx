"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

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
    images: ["/beach-resort-building.jpg", "/resort-pool-area.jpg", "/sports-court.jpg"],
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
    id: "edificio-palmeiras",
    name: "Edifício Palmeiras",
    images: ["/modern-apartment-building.png", "/building-pool-deck.jpg", "/apartment-facade.jpg"],
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
        "Fachadas principais pastilhadas; Piscina, pq. infantil, deck, varanda gourmet, sauna, salão de festas, salão de jogos, guarita de segurança, academia e churrasqueira.",
    },
  },
  {
    id: "edificio-lagoas",
    name: "Edifício Lagoas",
    images: ["/modern-studio-building.jpg", "/modern-coworking-space.png", "/rooftop-pool.jpg"],
    technicalSheet: {
      year: "2022",
      regime: "Obra em regime de condomínio",
      address: "R. Marechal Floriano, 570 Canela",
      architect: "Mário Figueiredo",
      totalArea: "5.934,75 m²",
      floors: "16",
      bedrooms: "1 e 2/4",
      unitArea: "42 e 56 m²",
      infrastructure:
        "Fachadas em pastilha. Play coberto e descoberto, Salão de festas, espaço gourmet, academia, piscina, deck e bar da piscina.",
    },
  },
  {
    id: "giardino-loreto",
    name: "Giardino Loreto",
    images: ["/luxury-residential-building.png", "/modern-lobby.png", "/amenities-area.jpg"],
    technicalSheet: {
      year: "2023",
      regime: "Obra em regime de condomínio",
      address: "Alameda das Mongubas, 136 Caminho das Árvores",
      architect: "Alessandro Grimaldi",
      totalArea: "4.252,19 m²",
      floors: "17",
      bedrooms: "96 studios",
      unitArea: "22,40 m²",
      infrastructure:
        "Fachadas em pastilha. Salão de festas, espaço gourmet, coworking, lavanderia, deck e bar da piscina.",
    },
  },
  {
    id: "hotel-aram-yami",
    name: "Hotel Aram Yamí",
    images: ["/colonial-hotel-architecture.jpg", "/hotel-pool-bay-view.jpg", "/luxury-hotel-suite.png"],
    technicalSheet: {
      year: "2009",
      regime: "Empreendimento hoteleiro",
      address: "Rua Direita de Santo Antônio - Santo Antônio Além do Carmo",
      architect: "",
      totalArea: "1.600 m²",
      floors: "",
      bedrooms: "",
      unitArea: "",
      infrastructure:
        "Empreendimento hoteleiro com arquitetura colonial, localizado no Centro Histórico de Salvador. Possui infraestrutura com piscinas individuais, cafeteria e suítes exclusivas com vista panorâmica da Baía de Todos os Santos.",
    },
  },
]

export default function PortfolioPage() {
  // ✅ use o ref correto: desestruture { ref, isVisible }
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24">
        <div
          ref={headerRef}
          className={`mb-16 sm:mb-20 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 uppercase tracking-wide text-gray-800">
            Nossos Empreendimentos
          </h1>
          <p className="font-sans text-center text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Conheça os projetos que construímos com excelência, qualidade e compromisso ao longo de nossa trajetória.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-[#0891b2] mx-auto"></div>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  // ✅ um hook por bloco, sempre desestruturando { ref, isVisible }
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: techSheetRef, isVisible: techSheetVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div className="border-b border-gray-200 pb-24 sm:pb-32 last:border-b-0">
      <div
        ref={titleRef}
        className={`transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 uppercase tracking-wide text-gray-800">
          {project.name}
        </h2>
      </div>

      <div
        ref={imagesRef}
        className={`mb-12 sm:mb-16 transition-all duration-700 ${
          imagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {project.images.map((image, imgIndex) => (
            <div
              key={imgIndex}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.name} - Foto ${imgIndex + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                priority={imgIndex === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        ref={techSheetRef}
        className={`transition-all duration-700 ${
          techSheetVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-md">
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 text-center uppercase tracking-wide text-[#0891b2]">
            Ficha Técnica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 sm:gap-y-6 font-sans text-sm sm:text-base">
            {project.technicalSheet.year && (
              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-bold text-gray-800 mb-1 md:mb-0 md:min-w-[180px]">Ano de Realização:</span>
                <span className="text-gray-600">{project.technicalSheet.year}</span>
              </div>
            )}
            {project.technicalSheet.regime && (
              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-bold text-gray-800 mb-1 md:mb-0 md:min-w-[180px]">Regime:</span>
                <span className="text-gray-600">{project.technicalSheet.regime}</span>
              </div>
            )}
            {project.technicalSheet.address && (
              <div className="md:col-span-2 flex flex-col md:flex-row md:items-start">
                <span className="font-bold text-gray-800 mb-1 md:mb-0 md:min-w-[180px]">Endereço:</span>
                <span className="text-gray-600">{project.technicalSheet.address}</span>
              </div>
            )}
            {project.technicalSheet.architect && (
              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-bold text-gray-800 mb-1 md:mb-0 md:min-w-[180px]">Projeto Arquitetônico:</span>
                <span className="text-gray-600">{project.technicalSheet.architect}</span>
              </div>
            )}
            {project.technicalSheet.totalArea && (
              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-bold text-gray-800 mb-1 md:mb-0 md:min-w-[180px]">Área Total Construída:</span>
                <span className="text-gray-600">{project.technicalSheet.totalArea}</span>
              </div>
            )}
            {project.technicalSheet.floors && (
              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-bold text-gray-800 mb-1 md:mb-0 md:min-w-[180px]">Número de Pavimentos:</span>
                <span className="text-gray-600">{project.technicalSheet.floors}</span>
              </div>
            )}
            {project.technicalSheet.bedrooms && (
              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-bold text-gray-800 mb-1 md:mb-0 md:min-w-[180px]">Número de Dormitórios:</span>
                <span className="text-gray-600">{project.technicalSheet.bedrooms}</span>
              </div>
            )}
            {project.technicalSheet.unitArea && (
              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-bold text-gray-800 mb-1 md:mb-0 md:min-w-[180px]">Área das Unidades:</span>
                <span className="text-gray-600">{project.technicalSheet.unitArea}</span>
              </div>
            )}
            {project.technicalSheet.infrastructure && (
              <div className="md:col-span-2 flex flex-col md:flex-row md:items-start">
                <span className="font-bold text-gray-800 mb-1 md:mb-0 md:min-w-[180px]">Infraestrutura:</span>
                <span className="text-gray-600 leading-relaxed">{project.technicalSheet.infrastructure}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
