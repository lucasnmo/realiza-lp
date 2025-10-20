"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  { id: 1, name: "Horto Vilas", location: "Vilas do Atlântico, Lauro de Freitas", image: "/hortovlias4.jpg" },
  { id: 2, name: "Hotel Aram Yamí", location: "Santo Antônio Além do Carmo , Salvador", image: "/aranyammi.jpg" },
  { id: 3, name: "Solar das Amendoeiras", location: "Pituba, Salvador", image: "/solardasamendoeiras.jpg" },
  { id: 4, name: "Alphaville Estrela do Mar", location: "Alphaville, Salvador", image: "/estreladomar2.jpg" },
  { id: 5, name: "Bosque de Guarajuba", location: "Litoral Norte", image: "/bosquedeguarajuba3.jpg" },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: false, // loop contínuo sem “reset” visível
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
      className="bg-white mt-8 sm:mt-10 lg:mt-12 pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">
        <h2
          ref={ref}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase tracking-wide text-gray-800 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} mb-6 sm:mb-8 lg:mb-10`}
        >
          Exemplos de Obras
        </h2>

        {/* wrapper compensa o padding do viewport */}
        <div className="-mx-6 sm:-mx-8">
          {/* viewport com padding MAIOR que o dos slides -> nada “vaza” nas pontas */}
          <div ref={emblaRef} className="overflow-hidden px-6 sm:px-2">
            <div className="flex">
              {projects.map((project, index) => (
                // 1 por vez no mobile; 3 por vez no md+
                <div
                  key={project.id}
                  className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-4 sm:px-5 pb-4"
                >
                  <article
                    className={`h-full bg-white rounded-2xl border border-zinc-100
                      shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                      transition-all duration-300
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <div className="relative overflow-hidden rounded-t-2xl aspect-[4/3] bg-gray-100">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-snug">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-gray-600">{project.location}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`flex justify-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } mt-8 sm:mt-10 lg:mt-12`}
        >
          <Link href="/portfolio">
            <Button
              variant="outline"
              size="lg"
              className="font-bold border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white hover:scale-105 uppercase tracking-wide px-8 py-4 sm:py-5 rounded-full bg-transparent transition-all duration-300"
            >
              Veja Mais Empreendimentos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
