"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLIDE_DURATION = 4200; // ms — velocidade mais lenta entre trocas
const TEXT_DELAY = 220;      // ms — pequeno atraso antes do texto aparecer

const slides = [
  {
    id: 1,
    title: "Excelência em Construção Civil",
    subtitle: "Mais de 15 anos transformando sonhos em realidade",
    image: "/hortovlias.jpg",
  },
  {
    id: 2,
    title: "Obras Residenciais de Alto Padrão",
    subtitle: "Qualidade, transparência e compromisso",
    image: "/aranyammi3.JPG",
  },
  {
    id: 4,
    title: "Regime de Condomínio",
    subtitle: "Transparência total do início ao fim",
    image: "/estreladomar2.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleNext = () => {
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    slideTimerRef.current = setTimeout(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    setTextVisible(false);
    if (textTimerRef.current) clearTimeout(textTimerRef.current);
    textTimerRef.current = setTimeout(() => setTextVisible(true), TEXT_DELAY);

    scheduleNext();
    return () => {
      if (textTimerRef.current) clearTimeout(textTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  useEffect(() => {
    return () => {
      if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
      if (textTimerRef.current) clearTimeout(textTimerRef.current);
    };
  }, []);

  const next = () => {
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    if (textTimerRef.current) clearTimeout(textTimerRef.current);
    setCurrent((i) => (i + 1) % slides.length);
  };

  const prev = () => {
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    if (textTimerRef.current) clearTimeout(textTimerRef.current);
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-[#1E2A32]"
    >
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#1E2A32]/50" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`container mx-auto px-4 sm:px-6 md:px-8 text-center text-white
                          ${textVisible ? "animate-[fadeUp_700ms_ease-out] opacity-100" : "opacity-0"}`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 uppercase tracking-wide">
                {s.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
                {s.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Controles */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 text-white hover:bg-white/20"
        onClick={prev}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 text-white hover:bg-white/20"
        onClick={next}
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
      </Button>

      {/* Indicadores */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
              if (textTimerRef.current) clearTimeout(textTimerRef.current);
              setCurrent(i);
            }}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-2 sm:h-3 rounded-full transition-all ${
              i === current ? "bg-white w-8 sm:w-10" : "bg-white/50 hover:bg-white/75 w-2 sm:w-3"
            }`}
          />
        ))}
      </div>

      {/* keyframes locais */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
