"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="quem-somos"
      className="relative overflow-hidden bg-[#1E2A32] py-14 sm:py-16 md:py-18"
    >
      {/* Fundo sutil */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/construction-bg.jpg"
          alt="Fundo Realiza Engenharia"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <h2
          ref={ref}
          className={`text-2xl sm:text-3xl md:text-[32px] font-bold text-center uppercase tracking-wide text-white transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } mb-4 sm:mb-5`}
        >
          Quem Somos Nós
        </h2>

        {/* filete/acento */}
        <div
          className={`mx-auto mb-8 h-1 w-16 rounded-full bg-[#0d7a8f] transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />

        {/* Grid 12 colunas */}
        <div
          className={`grid items-center gap-6 md:grid-cols-12 md:gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Imagem (5 colunas) */}
          <div className="md:col-span-5">
            <div className="group relative h-64 sm:h-72 md:h-[360px] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
              <Image
                src="/realizaquemsomos.jpeg"
                alt="Equipe da Realiza Engenharia em obra"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1E2A32]/60 to-transparent" />
            </div>
          </div>

          {/* Texto (7 colunas) */}
          <div className="md:col-span-7">
            <div className="text-white/90 text-base sm:text-[15px] md:text-[16px] leading-relaxed">
              <p className="mb-3">
                A <strong>Realiza Engenharia Ltda.</strong>, com sede em Salvador (BA),
                reúne <strong>15 anos</strong> de experiência na construção civil, marcada
                por solidez, transparência e gestão próxima dos clientes.
              </p>

              <p className="mb-3">
                Somos especializados no{" "}
                <strong>regime de condomínio a preço de custo</strong> — modelo em que os
                próprios condôminos financiam a obra, sem necessidade de financiamento
                bancário. O resultado é um investimento mais acessível e participativo,
                com <strong>prestação de contas rigorosa</strong>.
              </p>

              <p className="mb-5">
                Desde a fundação, entregamos <strong>10 edifícios residenciais</strong>,
                somando <strong>quase 500 unidades</strong>, sempre com{" "}
                <strong>transparência, segurança e cumprimento de prazos</strong>.
              </p>

              {/* Mini “modelo de atuação” — linha, elegante */}
              <ul className="flex flex-col sm:flex-row sm:items-center sm:divide-x sm:divide-white/15 gap-3 sm:gap-0 mb-6">
                <li className="flex items-center gap-2 pr-0 sm:pr-4">
                  <CheckCircle2 className="h-5 w-5 text-[#2A98AA]" />
                  <span className="text-white/90">Gestão compartilhada</span>
                </li>
                <li className="flex items-center gap-2 sm:px-4">
                  <CheckCircle2 className="h-5 w-5 text-[#2A98AA]" />
                  <span className="text-white/90">Sem juros bancários</span>
                </li>
                <li className="flex items-center gap-2 sm:pl-4">
                  <CheckCircle2 className="h-5 w-5 text-[#2A98AA]" />
                  <span className="text-white/90">Transparência e controle</span>
                </li>
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/sobre">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-2 border-white bg-transparent px-5 py-2 font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:text-[#1E2A32]"
                  >
                    Saiba Mais Sobre Nós
                  </Button>
                </Link>

                <a
                  href="https://wa.me/5571992220164?text=Olá%2C%20tenho%20interesse%20em%20falar%20com%20a%20Realiza%20Engenharia."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="rounded-full bg-[#2A98AA] px-5 py-2 font-semibold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
                  >
                    Entre em Contato
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* espaçador mínimo */}
      <div className="h-6 sm:h-8 md:h-10" />
    </section>
  );
}
