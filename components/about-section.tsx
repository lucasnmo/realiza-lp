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
      className="relative py-16 sm:py-20 md:py-24 bg-[#4a5568] overflow-hidden"
    >
      {/* Imagem decorativa de fundo (opcional, sutil) */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/construction-bg.jpg"
          alt="Fundo Realiza Engenharia"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <h2
          ref={ref}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14 uppercase tracking-wide text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Quem Somos Nós
        </h2>

        {/* Layout dividido: imagem + texto */}
        <div
          className={`flex flex-col md:flex-row items-center gap-10 md:gap-14 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Imagem lateral */}
          <div className="relative w-full md:w-1/2 h-72 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/quemsomosfoto.png"
              alt="Equipe da Realiza Engenharia em obra"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Texto institucional */}
          <div className="w-full md:w-1/2 text-white/90 text-center md:text-left">
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Fundada em <strong>2009</strong> por <strong>Sérgio Farias</strong>,
              Engenheiro Civil graduado pela UFBA e especialista em Qualidade das
              Construções, a <strong>Realiza Engenharia</strong> nasceu com o
              propósito de unir técnica, transparência e compromisso para transformar
              projetos em realidade.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Ao longo de sua trajetória, a empresa consolidou-se como referência em
              <strong> construção civil e reformas prediais</strong>, com mais de{" "}
              <strong>150 unidades entregues</strong> entre empreendimentos
              residenciais e comerciais em Salvador e região metropolitana.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              Cada obra é conduzida com foco em qualidade, segurança e prazos rigorosos,
              refletindo os valores que sustentam nossa história:{" "}
              <strong>seriedade, competência técnica e credibilidade</strong>.
            </p>

            <Link href="/sobre">
              <Button
                variant="outline"
                size="lg"
                className="mt-2 border-2 border-white text-white font-semibold hover:bg-white hover:text-[#4a5568] hover:scale-105 uppercase tracking-wide px-6 sm:px-8 py-4 sm:py-5 rounded-full bg-transparent transition-all duration-300 ease-in-out"
              >
                Saiba Mais Sobre Nós
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
