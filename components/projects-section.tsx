// components/projects-section.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import useEmblaCarousel from "embla-carousel-react";
import { Calendar, Ruler, Layers, Bed, MapPin } from "lucide-react";
import { PROJECTS, Project, TechnicalSheet } from "@/lib/projects";

/* ---------------------------------------------
   Top 10: "Em construção" e "Breve lançamento"
   primeiro, depois mais recentes por ano
---------------------------------------------- */

// prioridade
function getPriority(p: Project): number {
  if (p.category === "em_construcao") return 2;
  if (p.category === "breve_lancamento") return 1;
  return 0;
}

const top10Projects: Project[] = [...PROJECTS]
  .sort((a, b) => {
    const pa = getPriority(a);
    const pb = getPriority(b);

    if (pa !== pb) return pb - pa;

    const ya = a.technicalSheet.year ? parseInt(a.technicalSheet.year) : 0;
    const yb = b.technicalSheet.year ? parseInt(b.technicalSheet.year) : 0;
    return yb - ya;
  })
  .slice(0, 10);

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: false,
  });

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
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase tracking-wide text-gray-800 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } mb-6 sm:mb-8 lg:mb-10`}
        >
          Nossos Empreendimentos
        </h2>

        <div className="-mx-6 sm:-mx-8">
          <div ref={emblaRef} className="overflow-hidden px-6 sm:px-2">
            <div className="flex">
              {top10Projects.map((project, index) => (
                <SlideCard
                  key={project.id}
                  project={project}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mt-8 sm:mt-10 lg:mt-12 flex flex-wrap justify-center gap-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
        </div>
      </div>
    </section>
  );
}

/* ========= Slide/Card (3 por vez no desktop) ========= */
function SlideCard({
  project,
  index,
  isVisible,
}: {
  project: Project;
  index: number;
  isVisible: boolean;
}) {
  let badgeLabel: string | null = null;
  if (project.category === "em_construcao") badgeLabel = "Em construção";
  if (project.category === "breve_lancamento") badgeLabel = "Breve lançamento";

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no empreendimento ${project.name}. Pode me enviar mais informações?`
  );
  const whatsappLink = `https://wa.me/5571992220164?text=${whatsappMessage}`;

  return (
    <div
      className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25.333%] px-3 sm:px-4 pb-4"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <article
        className={`h-full flex flex-col bg-white rounded-2xl border border-zinc-100 shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Link
          href={`/portfolio?tab=${encodeURIComponent(
            project.category
          )}&highlight=${encodeURIComponent(project.id)}`}
          className="block"
        >
          <div className="relative overflow-hidden rounded-t-2xl bg-gray-100 h-[460px] md:h-[380px] lg:h-[420px]">
            {badgeLabel && (
              <div className="absolute top-2 left-2 z-10 px-2.5 py-1 rounded-full bg-emerald-600/95 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow">
                {badgeLabel}
              </div>
            )}

            <Image
              src={project.images[0] || "/placeholder.svg"}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              style={{ objectPosition: "center bottom" }}
              sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
              priority={index < 2}
            />
          </div>

          <div className="p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-snug line-clamp-2">
              {project.name}
            </h3>

            <div className="mt-1 min-h-[40px]">
              {project.technicalSheet.address && (
                <p className="text-xs sm:text-sm text-gray-600 leading-snug line-clamp-2">
                  <span className="inline-flex items-start gap-1">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 text-slate-700 flex-shrink-0" />
                    <span>{project.technicalSheet.address}</span>
                  </span>
                </p>
              )}
            </div>

            <div className="mt-3 min-h-[64px] sm:min-h-[72px]">
              <Chips technicalSheet={project.technicalSheet} />
            </div>
          </div>
        </Link>

        {/* botão interno */}
        <div className="px-4 sm:px-5 pb-4 mt-auto">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              size="sm"
              className="w-full rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all flex items-center justify-center gap-2"
            >
              Quero investir
            </Button>
          </a>
        </div>
      </article>
    </div>
  );
}

/* ============ Chips ============ */
function Chips({ technicalSheet }: { technicalSheet: TechnicalSheet }) {
  const t = technicalSheet;
  return (
    <div className="flex flex-wrap gap-1.5">
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
    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 border border-gray-200 text-[10px] sm:text-[11px] font-medium text-slate-800">
      {children}
    </span>
  );
}
