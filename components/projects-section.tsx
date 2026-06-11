// components/projects-section.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bed, Calendar, Layers, MapPin, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import {
  getProjectStatus,
  isInvestmentProject,
  PROJECTS,
  Project,
  TechnicalSheet,
} from "@/lib/projects"
import { getWhatsappUrl } from "@/lib/site-content"

function getPriority(project: Project): number {
  if (project.category === "em_construcao") return 2
  if (project.category === "breve_lancamento") return 1
  return 0
}

const featuredProjects = [...PROJECTS]
  .sort((a, b) => {
    const priority = getPriority(b) - getPriority(a)
    if (priority !== 0) return priority

    const yearA = a.technicalSheet.year ? parseInt(a.technicalSheet.year) : 0
    const yearB = b.technicalSheet.year ? parseInt(b.technicalSheet.year) : 0
    return yearB - yearA
  })
  .slice(0, 6)

function getProjectImagePosition(project: Project): string {
  const positions: Record<string, string> = {
    "azure-beach-living": "center center",
    "egeu-pedra-do-sal": "center center",
    "facility-view": "center center",
    "facility-tower": "center center",
    "inoa-parque-bela-vista": "center center",
    "residencial-canela": "center center",
  }

  return positions[project.id] || "center center"
}

function getProjectImageFit(project: Project): "cover" | "contain" {
  const containProjects = new Set([
    "egeu-pedra-do-sal",
    "facility-view",
    "facility-tower",
    "inoa-parque-bela-vista",
    "residencial-canela",
  ])

  return containProjects.has(project.id) ? "contain" : "cover"
}

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="portfolio" className="bg-[#F7F8F6] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mx-auto mb-6 max-w-3xl text-center transition-all duration-700 sm:mb-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2A98AA]">
            Empreendimentos
          </p>
          <h2 className="mx-auto mt-3 max-w-[22rem] break-words text-[22px] font-bold leading-tight text-[#1E2A32] sm:max-w-full sm:text-4xl">
            Empreendimentos em destaque
          </h2>
          <p className="mx-auto mt-4 max-w-[22rem] break-words text-base leading-8 text-gray-600 sm:max-w-2xl">
            Gestão técnica e transparência na entrega.
          </p>
        </div>

        <div
          className={`relative -mx-4 pb-10 pt-2 transition-all duration-700 sm:-mx-6 sm:pt-4 lg:-mx-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
          }`}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F7F8F6] to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F7F8F6] to-transparent sm:w-28" />

          <Carousel
            opts={{
              align: "start",
              containScroll: false,
              dragFree: true,
              loop: true,
            }}
            className="projects-carousel px-10 sm:px-14 lg:px-16"
            aria-label="Empreendimentos em destaque"
          >
            <CarouselContent className="-ml-6 cursor-grab items-stretch py-8 active:cursor-grabbing">
              {featuredProjects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="flex basis-[82vw] pl-6 sm:basis-[360px] lg:basis-[390px]"
                >
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 z-20 hidden border-black/10 bg-white text-[#1E2A32] shadow-lg hover:bg-[#F7F8F6] sm:inline-flex" />
            <CarouselNext className="right-2 z-20 hidden border-black/10 bg-white text-[#1E2A32] shadow-lg hover:bg-[#F7F8F6] sm:inline-flex" />
          </Carousel>
        </div>

        <div
          className={`mt-10 flex justify-center transition-all delay-150 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-md bg-[#1E2A32] px-6 text-base font-bold text-white hover:bg-[#111B20]"
          >
            <Link href="/portfolio" aria-label="Ver todos os empreendimentos">
              Ver todos os empreendimentos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .projects-carousel [data-slot="carousel-content"] {
          margin: -1.75rem -2rem;
          padding: 1.75rem 2rem;
        }
      `}</style>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: Project
}) {
  const status = getProjectStatus(project)
  const investment = isInvestmentProject(project)
  const href = `/portfolio?tab=${project.category}&highlight=${project.id}`
  const imageFit = getProjectImageFit(project)
  const whatsappUrl = getWhatsappUrl(
    `Olá! Tenho interesse no empreendimento ${project.name}. Poderia me enviar mais informações?`
  )

  return (
    <article className="flex h-full w-full shrink-0 flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_16px_36px_rgba(20,33,40,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(20,33,40,0.18)]">
      <Link href={href} className="group relative block aspect-[4/3] overflow-hidden bg-[#DDE5E8]">
        {imageFit === "contain" && (
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1024px) 390px, (min-width: 640px) 360px, 82vw"
            className="scale-110 object-cover opacity-35 blur-xl transition-transform duration-700 group-hover:scale-[1.16]"
            style={{ objectPosition: getProjectImagePosition(project) }}
          />
        )}
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={`${project.name} - empreendimento da REALIZA Engenharia`}
          fill
          sizes="(min-width: 1024px) 390px, (min-width: 640px) 360px, 82vw"
          className={`transition-transform duration-700 group-hover:scale-105 ${
            imageFit === "contain" ? "object-contain p-3" : "object-cover"
          }`}
          style={{ objectPosition: getProjectImagePosition(project) }}
        />
        <span
          className={`absolute left-4 top-4 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] shadow-sm ${
            investment
              ? "bg-[#2A98AA] text-white"
              : "bg-white/90 text-[#1E2A32] backdrop-blur"
          }`}
        >
          {status}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div>
          <h3 className="break-words text-xl font-bold leading-snug text-[#1E2A32]">
            {project.name}
          </h3>

          {project.technicalSheet.address && (
            <p className="mt-3 flex min-w-0 items-start gap-2 break-words text-sm leading-6 text-gray-600">
              <MapPin className="mt-1 h-4 w-4 flex-none text-[#2A98AA]" />
              <span>{project.technicalSheet.address}</span>
            </p>
          )}
        </div>

        <ProjectFacts technicalSheet={project.technicalSheet} />

        <div className="mt-auto pt-5">
          <Button
            asChild
            className={`h-auto min-h-11 w-full whitespace-normal rounded-md px-4 py-3 font-bold ${
              investment
                ? "bg-[#2A98AA] text-white hover:bg-[#238799]"
                : "bg-[#1E2A32] text-white hover:bg-[#111B20]"
            }`}
          >
            {investment ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Quero investir no empreendimento ${project.name}`}
              >
                Quero investir
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link href={href} aria-label={`Ver detalhes do empreendimento ${project.name}`}>
                Ver detalhes
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </Button>
        </div>
      </div>
    </article>
  )
}

function ProjectFacts({ technicalSheet }: { technicalSheet: TechnicalSheet }) {
  const facts = [
    technicalSheet.totalArea && {
      icon: Ruler,
      label: "Área",
      value: technicalSheet.totalArea,
    },
    technicalSheet.bedrooms && {
      icon: Bed,
      label: "Tipologia",
      value: technicalSheet.bedrooms,
    },
    technicalSheet.unitArea && {
      icon: Ruler,
      label: "Metragem",
      value: technicalSheet.unitArea,
    },
    technicalSheet.floors && {
      icon: Layers,
      label: "Pavimentos",
      value: `${technicalSheet.floors} pav.`,
    },
    technicalSheet.year && {
      icon: Calendar,
      label: "Ano",
      value: technicalSheet.year,
    },
  ].filter(Boolean) as Array<{
    icon: typeof Ruler
    label: string
    value: string
  }>

  return (
    <dl className="mt-5 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
      {facts.slice(0, 4).map((fact) => {
        const Icon = fact.icon

        return (
          <div
            key={`${fact.label}-${fact.value}`}
            className="rounded-md border border-gray-200 bg-[#F7F8F6] px-3 py-2"
          >
            <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-gray-500">
              <Icon className="h-3.5 w-3.5 text-[#2A98AA]" />
              {fact.label}
            </dt>
            <dd className="mt-1 break-words text-sm font-semibold leading-5 text-[#1E2A32]">
              {fact.value}
            </dd>
          </div>
        )
      })}
    </dl>
  )
}
