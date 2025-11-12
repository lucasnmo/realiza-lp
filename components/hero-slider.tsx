"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const SLIDE_DURATION = 5500
const TEXT_DELAY = 280

const slides = [
  {
    id: 1,
    title: "Engenharia com Credibilidade",
    subtitle: "Mais de 15 anos transformando projetos em realidade",
    image: "/hortovlias.jpg",
  },
  {
    id: 2,
    title: "Empreendimentos Residenciais e Comerciais",
    subtitle: "Transparência, controle e compromisso",
    image: "/azure3.JPG",
  },
  {
    id: 3,
    title: "Regime de Condomínio a Preço de Custo",
    subtitle: "Gestão compartilhada, sem financiamento bancário",
    image: "/estreladomar2.jpg",
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [textVisible, setTextVisible] = useState(false)
  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const textTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartX = useRef<number | null>(null)

  const scheduleNext = () => {
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current)
    slideTimerRef.current = setTimeout(() => {
      setCurrent((i) => (i + 1) % slides.length)
    }, SLIDE_DURATION)
  }

  useEffect(() => {
    setTextVisible(false)
    if (textTimerRef.current) clearTimeout(textTimerRef.current)
    textTimerRef.current = setTimeout(() => setTextVisible(true), TEXT_DELAY)
    scheduleNext()
    return () => {
      if (textTimerRef.current) clearTimeout(textTimerRef.current)
    }
  }, [current])

  useEffect(() => {
    return () => {
      if (slideTimerRef.current) clearTimeout(slideTimerRef.current)
      if (textTimerRef.current) clearTimeout(textTimerRef.current)
    }
  }, [])

  const goTo = (index: number) => {
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current)
    if (textTimerRef.current) clearTimeout(textTimerRef.current)
    setCurrent(index)
  }

  const next = () => goTo((current + 1) % slides.length)
  const prev = () => goTo((current - 1 + slides.length) % slides.length)

  // 🧭 Controle de swipe no mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 60 // distância mínima em px para considerar swipe

    if (deltaX > threshold) prev()
    else if (deltaX < -threshold) next()

    touchStartX.current = null
  }

  const activeSlide = slides[current]

  return (
    <section
      id="home"
      className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-[#1E2A32]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide ativo */}
      <div className="absolute inset-0">
        <Image
          src={activeSlide.image}
          alt={activeSlide.title}
          fill
          priority={current === 0}
          loading={current === 0 ? "eager" : "lazy"}
          sizes="100vw"
          className="object-cover object-center transition-opacity duration-[800ms] ease-out"
        />
        <div className="absolute inset-0 bg-[#1E2A32]/55" />
      </div>

      {/* Texto central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`container mx-auto px-4 sm:px-6 md:px-8 text-center text-white
            ${textVisible ? "animate-[fadeUp_750ms_ease-out] opacity-100" : "opacity-0"}`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 uppercase tracking-wide">
            {activeSlide.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
            {activeSlide.subtitle}
          </p>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-2 sm:h-3 rounded-full transition-all
              ${i === current
                ? "bg-white w-8 sm:w-10"
                : "bg-white/50 hover:bg-white/75 w-2 sm:w-3"}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
