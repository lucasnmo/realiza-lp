"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

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
    image: "/azure3.jpg",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  /* Swipe mobile */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 60

    if (deltaX > threshold) prev()
    else if (deltaX < -threshold) next()

    touchStartX.current = null
  }

  return (
    <section
      id="home"
      className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-[#1E2A32]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* CAMADA CLICÁVEL: clique no banner vai para /portfolio */}
      <Link
        href="/portfolio"
        aria-label="Ir para o portfólio"
        className="absolute inset-0 z-[5]"
      >
        <span className="sr-only">Ver portfólio</span>
      </Link>

      {/* Track horizontal */}
      <div
        className="flex h-full transition-transform duration-[900ms] ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#1E2A32]/55" />
          </div>
        ))}
      </div>

      {/* Texto */}
      <div className="absolute inset-0 z-[6] flex items-center justify-center pointer-events-none">
        <div
          className={`container text-center text-white
            ${textVisible ? "animate-[fadeUp_750ms_ease-out] opacity-100" : "opacity-0"}`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 uppercase tracking-wide">
            {slides[current].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
            {slides[current].subtitle}
          </p>
        </div>
      </div>

      {/* Indicadores (continuam clicáveis sem navegar) */}
      <div className="absolute bottom-4 left-1/2 z-[10] -translate-x-1/2 flex space-x-2 pointer-events-auto">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              goTo(i)
            }}
            className={`h-2 rounded-full transition-all
              ${i === current ? "bg-white w-10" : "bg-white/50 w-2"}`}
            aria-label={`Ir para o slide ${i + 1}`}
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
