"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { companyStats, getWhatsappUrl, trustPillars } from "@/lib/site-content"

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const whatsappUrl = getWhatsappUrl(
    "Olá! Gostaria de conversar com a REALIZA Engenharia sobre um empreendimento."
  )

  return (
    <section id="quem-somos" className="bg-[#1E2A32] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white/10 shadow-[0_20px_52px_rgba(0,0,0,0.26)]">
              <Image
                src="/institutional/realizaquemsomos.webp"
                alt="Equipe da REALIZA Engenharia acompanhando obra"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111B20]/80 to-transparent p-5">
                <p className="text-sm font-semibold text-white/90">
                  Gestão próxima, técnica e transparente em cada etapa.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#78C9D6]">
              Quem Somos Nós
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Engenharia com presença técnica e responsabilidade de gestão
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-white/80">
              <p>
                A REALIZA Engenharia tem sede em Salvador/BA e reúne mais de
                15 anos de experiência na construção civil, atuando com solidez,
                transparência e gestão próxima dos clientes.
              </p>
              <p>
                A empresa desenvolve empreendimentos residenciais e comerciais,
                com forte experiência no regime de condomínio a preço de custo,
                em que planejamento, acompanhamento financeiro e prestação de
                contas dão mais clareza ao investimento.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {companyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/10 p-4"
                >
                  <strong className="block text-2xl font-extrabold text-white">
                    {stat.value}
                  </strong>
                  <span className="mt-1 block text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-white/70">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {trustPillars.map((pillar) => {
                const Icon = pillar.icon

                return (
                  <div key={pillar.label} className="flex items-center gap-3 text-white/90">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-[#2A98AA]/20 text-[#78C9D6]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold">{pillar.label}</span>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-md bg-[#2A98AA] px-6 text-base font-bold text-white hover:bg-[#238799]"
              >
                <Link href="/sobre" aria-label="Conhecer mais sobre a REALIZA Engenharia">
                  Saiba mais sobre nós
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-md border-white/60 bg-transparent px-6 text-base font-bold text-white hover:bg-white hover:text-[#1E2A32]"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Entrar em contato com a REALIZA Engenharia pelo WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                  Entrar em contato
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
