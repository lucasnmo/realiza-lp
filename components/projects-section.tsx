"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import useEmblaCarousel from "embla-carousel-react";
import {
  Calendar,
  Ruler,
  Layers,
  Bed,
} from "lucide-react";
import {
  PROJECTS,
  Project,
  TechnicalSheet,
} from "@/lib/projects";

// Quais projetos entram no carrossel da home + posição da imagem
type CarouselConfig = {
  id: string;
  objectPosition?: string;
};

const carouselConfig: CarouselConfig[] = [
  {
    id: "azure-beach-living",
    objectPosition: "center center",
  },
  {
    id: "egeu-pedra-do-sal",
    objectPosition: "center center",
  },
  {
    id: "horto-vilas",
    objectPosition: "center center",
  },
  {
    id: "hotel-aram-yami",
    objectPosition: "center center",
  },
  {
    id: "alphaville-estrela-do-mar",
    objectPosition: "center center",
  },
];

// Monta a lista usando os dados do lib/projects.ts
const projects: (Project & { objectPosition?: string })[] = carouselConfig
  .map((cfg) => {
    const base = PROJECTS.find((p) => p.id === cfg.id);
    if (!base) return null;
    return { ...base, objectPosition: cfg.objectPosition };
  })
  .filter(Boolean) as (Project & { objectPosition?: string })[];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: false,
  });

  // autoplay suave
  const timer = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const start = React.useCallback(() => {
    if (timer.current) return;
    timer.current = setInterval(() => emblaApi?.scrollNext(), 3500);
  }, [emblaApi]);

  const stop = React.useCallback(() => {
    if (!timer.current) return;
    clearInterval(timer.current);
    timer.current = null;
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    start();
    emblaApi.on("pointerDown", stop);
    emblaApi.on("select", start);
    emblaApi.on("reInit", start);

    return () => {
      emblaApi.off("pointerDown", stop);
      emblaApi.off("select", start);
      emblaApi.off("reInit", start);
      stop();
    };
  }, [emblaApi, start, stop]);

  return (
    <section
      id="portfolio"
      className="mt-2 sm:mt-4 lg:mt-8 pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16">
        <h2
          ref={ref}
          style={{ textShadow: "0 3px 10px rgba(0,0,0,0.18)" }}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase tracking-wide text-gray-800 transition-all duration-700
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            } mb-6 sm:mb-8 lg:mb-10`}
        >
          Nossos Empreendimentos
        </h2>

        {/* wrapper compensa o padding do viewport */}
        <div className="-mx-6 sm:-mx-8">
          {/* viewport */}
          <div ref={emblaRef} className="overflow-hidden px-6 sm:px-2">
            <div className="flex">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-4 sm:px-5 pb-4"
                >
                  <article
                    className={`h-full bg-white rounded-2xl border border-zinc-100
                      shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                      transition-all duration-300
                      ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    {/* Imagem */}
                    <div className="relative overflow-hidden rounded-t-2xl aspect-[4/3] bg-gray-100">
                      {project.category === "breve" && (
                        <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-emerald-600/95 text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.12em] text-white shadow-md">
                          Obra em andamento
                        </div>
                      )}

                      <Image
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        style={{
                          objectPosition:
                            project.objectPosition || "center center",
                        }}
                      />
                    </div>

                    {/* Conteúdo */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-snug mb-3">
                        {project.name}
                      </h3>

                      {/* Chips técnicos (substituem o endereço) */}
                      <Chips technicalSheet={project.technicalSheet} />
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`mt-8 sm:mt-10 lg:mt-12 flex flex-wrap justify-center gap-3 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <Link href="/portfolio">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-gray-800 bg-transparent px-8 py-4 sm:py-5 font-bold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white"
            >
              Conheça Nossos Projetos
            </Button>
          </Link>

          <a
            href="https://wa.me/5571992220164?text=Ol%C3%A1,%20gostaria%20de%20avaliar%20as%20oportunidades%20de%20investimento%20com%20a%20Realiza%20Engenharia."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="rounded-full border-2 border-gray-800 bg-transparent px-8 py-4 sm:py-5 font-bold uppercase tracking-wide text-gray-800 transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white"
            >
              Quero Investir
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================== Chips ================== */

function Chips({ technicalSheet }: { technicalSheet: TechnicalSheet }) {
  const t = technicalSheet;

  return (
    <div className="flex flex-wrap gap-2">
      {t.year && (
        <Chip>
          <Calendar className="h-3.5 w-3.5 text-slate-700" />
          {t.year}
        </Chip>
      )}
      {t.totalArea && (
        <Chip>
          <Ruler className="h-3.5 w-3.5 text-slate-700" />
          {t.totalArea}
        </Chip>
      )}
      {t.floors && (
        <Chip>
          <Layers className="h-3.5 w-3.5 text-slate-700" />
          {t.floors} pav.
        </Chip>
      )}
      {t.bedrooms && (
        <Chip>
          <Bed className="h-3.5 w-3.5 text-slate-700" />
          {t.bedrooms}
        </Chip>
      )}
      {t.unitArea && (
        <Chip>
          <Ruler className="h-3.5 w-3.5 text-slate-700" />
          {t.unitArea}
        </Chip>
      )}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1 border border-gray-200 text-[10px] sm:text-xs font-medium text-slate-800">
      {children}
    </span>
  );
}
