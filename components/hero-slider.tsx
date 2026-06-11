"use client"

import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyStats, getWhatsappUrl } from "@/lib/site-content"

const SLIDE_DURATION = 5200

const slides = [
  {
    id: 1,
    image: "/hortovlias.jpg",
    alt: "Casa de alto padrão construída pela REALIZA Engenharia",
    position: "center center",
  },
  {
    id: 2,
    image: "/azure3.jpg",
    alt: "Empreendimento Azure Beach Living da REALIZA Engenharia",
    position: "center center",
  },
  {
    id: 3,
    image: "/estreladomar2.jpg",
    alt: "Residência entregue pela REALIZA Engenharia",
    position: "center center",
  },
]

const loopSlides = [...slides, { ...slides[0], id: "loop-start" }]

export default function HeroSlider() {
  const consultorUrl = getWhatsappUrl(
    "Olá! Gostaria de falar com um consultor sobre os empreendimentos da REALIZA Engenharia."
  )
  const loopDuration = `${SLIDE_DURATION * slides.length}ms`

  return (
    <section
      id="home"
      className="relative isolate min-h-[520px] overflow-hidden bg-[#1E2A32] sm:min-h-[590px] lg:min-h-[620px]"
      aria-label="Apresentação da REALIZA Engenharia"
      style={{ "--hero-loop-duration": loopDuration } as CSSProperties}
    >
      <div className="absolute inset-0">
        <div className="hero-slider-track flex h-full will-change-transform">
          {loopSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative h-full w-full flex-[0_0_100%]"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : "eager"}
                sizes="100vw"
                className="object-cover object-center"
                style={{ objectPosition: slide.position }}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[#111B20]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111B20]/70 via-[#111B20]/40 to-[#111B20]/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-14 sm:min-h-[590px] sm:px-6 lg:min-h-[620px] lg:px-8">
        <div className="min-w-0 max-w-2xl text-white">
          <p className="mb-4 inline-flex rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
            Engenharia e incorporação em Salvador
          </p>

          <h1 className="max-w-[21rem] break-words text-[28px] font-bold leading-[1.16] sm:max-w-full sm:text-5xl lg:text-[56px]">
            Engenharia com credibilidade, transparência e resultado
          </h1>

          <p className="mt-5 max-w-[21rem] break-words text-base leading-8 text-white/80 sm:max-w-xl sm:text-lg">
            Empreendimentos em Salvador com gestão técnica, transparência e
            compromisso em cada etapa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-auto min-h-12 w-full whitespace-normal rounded-md bg-[#2A98AA] px-5 py-3 text-base font-bold text-white shadow-lg shadow-black/20 hover:bg-[#238799] sm:w-auto"
            >
              <Link href="/portfolio" aria-label="Conhecer empreendimentos da REALIZA">
                <Building2 className="h-5 w-5" />
                Conhecer empreendimentos
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-auto min-h-12 w-full whitespace-normal rounded-md border-white/70 bg-white/10 px-5 py-3 text-base font-bold text-white hover:bg-white hover:text-[#1E2A32] sm:w-auto"
            >
              <a
                href={consultorUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com um consultor da REALIZA Engenharia pelo WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                Falar com um consultor
              </a>
            </Button>
          </div>

          <div className="mt-6 flex max-w-full flex-wrap items-center gap-2 text-sm font-semibold text-white/80">
            {companyStats.map((stat, index) => (
              <span key={stat.label} className="contents">
                {index > 0 && (
                  <span aria-hidden="true" className="text-[#78C9D6]">
                    |
                  </span>
                )}
                <span>
                  {stat.value} {stat.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
        aria-hidden="true"
      >
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`hero-slider-dot hero-slider-dot-${index + 1}`}
          />
        ))}
      </div>

      <Link
        href="/portfolio"
        className="absolute bottom-6 right-4 z-20 hidden items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 lg:flex"
      >
        Ver portfólio
        <ArrowRight className="h-4 w-4" />
      </Link>

      <style jsx>{`
        .hero-slider-track {
          animation: heroSlide var(--hero-loop-duration) ease-in-out infinite;
        }

        .hero-slider-dot {
          display: block;
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.5);
          animation-duration: var(--hero-loop-duration);
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .hero-slider-dot-1 {
          animation-name: heroDot1;
        }

        .hero-slider-dot-2 {
          animation-name: heroDot2;
        }

        .hero-slider-dot-3 {
          animation-name: heroDot3;
        }

        @keyframes heroSlide {
          0%,
          28% {
            transform: translateX(0);
          }
          33%,
          61% {
            transform: translateX(-100%);
          }
          66%,
          93% {
            transform: translateX(-200%);
          }
          99.99% {
            transform: translateX(-300%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes heroDot1 {
          0%,
          28%,
          100% {
            width: 2.25rem;
            background: white;
          }
          33%,
          94% {
            width: 0.5rem;
            background: rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes heroDot2 {
          0%,
          28%,
          66%,
          100% {
            width: 0.5rem;
            background: rgba(255, 255, 255, 0.5);
          }
          33%,
          61% {
            width: 2.25rem;
            background: white;
          }
        }

        @keyframes heroDot3 {
          0%,
          61%,
          100% {
            width: 0.5rem;
            background: rgba(255, 255, 255, 0.5);
          }
          66%,
          94% {
            width: 2.25rem;
            background: white;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-slider-track,
          .hero-slider-dot {
            animation: none;
          }

          .hero-slider-dot-1 {
            width: 2.25rem;
            background: white;
          }
        }
      `}</style>
    </section>
  )
}
