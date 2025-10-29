"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="quem-somos"
      className="relative overflow-hidden bg-[#1E2A32] py-10 sm:py-12 md:py-14"
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
          className={`mx-auto mb-6 h-1 w-16 rounded-full bg-[#0d7a8f] transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />

        {/* Grid compacto: 12 colunas */}
        <div
          className={`grid items-center gap-6 md:grid-cols-12 md:gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Imagem (5 colunas) */}
          <div className="md:col-span-5">
            <div className="relative h-56 sm:h-64 md:h-[320px] overflow-hidden rounded-xl ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
              <Image
                src="/quemsomosfoto.png"
                alt="Equipe da Realiza Engenharia em obra"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Texto (7 colunas) */}
          <div className="md:col-span-7">
            <div className="text-white/90 text-base sm:text-[15px] md:text-[16px] leading-relaxed">
              <p className="mb-3">
                Fundada em <strong>2009</strong> por <strong>Sérgio Farias</strong>,
                Engenheiro Civil (UFBA) e especialista em Qualidade das Construções,
                a <strong>Realiza Engenharia</strong> une técnica, transparência e
                compromisso para transformar projetos em realidade.
              </p>
              <p className="mb-3">
                Ao longo da trajetória, consolidou-se como referência em
                <strong> construção civil e reformas prediais</strong>, com mais de{" "}
                <strong>150 unidades entregues</strong> entre empreendimentos
                residenciais e comerciais na RMS.
              </p>
              <p className="mb-4">
                Cada obra é conduzida com foco em qualidade, segurança e prazos,
                refletindo nossos valores:
                <strong> seriedade, competência técnica e credibilidade</strong>.
              </p>

              <Link href="/sobre">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-2 border-white bg-transparent px-5 py-2 font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:text-[#4a5568]"
                >
                  Saiba Mais Sobre Nós
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* espaçador mínimo para não “colar” na seção seguinte */}
      <div className="h-2" />
    </section>
  );
}
