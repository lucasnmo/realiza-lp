"use client"

import Link from "next/link"
import { ArrowRight, Building2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsappUrl } from "@/lib/site-content"

export default function FinalCTASection() {
  const whatsappUrl = getWhatsappUrl(
    "Olá! Quero investir ou construir com mais segurança com a REALIZA Engenharia."
  )

  return (
    <section className="bg-[#F7F8F6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg bg-[#1E2A32] p-6 text-white shadow-[0_18px_48px_rgba(20,33,40,0.18)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Quer investir ou construir com mais segurança?
            </h2>
            <p className="mt-4 text-base leading-8 text-white/80">
              Fale com a equipe da REALIZA Engenharia e conheça nossos
              empreendimentos, metodologia de gestão e oportunidades no regime
              de condomínio a preço de custo.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-md bg-[#2A98AA] px-6 text-base font-bold text-white hover:bg-[#238799]"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a REALIZA Engenharia pelo WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                Falar pelo WhatsApp
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-md border-white/60 bg-white/10 px-6 text-base font-bold text-white hover:bg-white hover:text-[#1E2A32]"
            >
              <Link href="/portfolio" aria-label="Ver empreendimentos da REALIZA Engenharia">
                <Building2 className="h-5 w-5" />
                Ver empreendimentos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
