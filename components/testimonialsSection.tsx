"use client";
import React from "react";
import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/** Depoimentos condensados a partir dos PDFs enviados */
const testimonials = [
  { id: 1, quote: "Competência técnica, lisura e transparência na administração do empreendimento. Investiria novamente e recomendo sem hesitar.", author: "André Magalhães", meta: "Condômino • Residencial dos Sombreiros" },
  { id: 2, quote: "Solicitações pós-entrega atendidas com rapidez. Atendimento digno de nota 10; experiência muito positiva como condômino e engenheiro.", author: "Clodoaldo Freitas", meta: "Eng. Estrutural • Sombreiros / Pituba Paradiso / Giardino Loreto" },
  { id: 3, quote: "Prazos cumpridos, imprevistos solucionados e retorno financeiro alcançado. Seriedade na condução dos empreendimentos.", author: "Arnaldo Freire Franco", meta: "Investidor • Solar das Amendoeiras / Sombreiros" },
  { id: 4, quote: "Transparência nas reuniões e planilhas, escolha discutida de materiais e obra entregue no prazo. Senti segurança do início ao fim.", author: "Cristina Jesuíno", meta: "Condômina • Solar das Amendoeiras" },
  { id: 5, quote: "Organização, transparência e comunicação clara no dia a dia. Entrega no prazo acordado e assembleias objetivas.", author: "Jayme Bulhões", meta: "Executivo • Sombreiros / Pituba Paradiso" },
  { id: 6, quote: "Escolhem materiais com cuidado, valorizam o cliente e honram contratos. Qualidade e prazos que dão confiança à parceria.", author: "Telma Santos", meta: "Representante • Giardino Loreto" },
  { id: 7, quote: "Planta inteligente, soluções de espaço e mobilidade que não vi em outros imóveis. Projeto e localização excelentes.", author: "Carlos Victor", meta: "Condômino • Giardino Loreto" },
  { id: 8, quote: "Relatórios claros, documentação fotográfica e gráficos que acompanham a obra. Organização e correção impecáveis.", author: "Flávio Siqueira Lopes", meta: "Cliente • Giardino Loreto" },
  { id: 9, quote: "Qualidade acima do padrão do mercado, com excelência técnica em todos os empreendimentos.", author: "Mário Figueiredo", meta: "Arquiteto • Vários empreendimentos" },
  { id: 10, quote: "Construir com a Realiza é optar por um imóvel de alta qualidade a preço justo, com cronograma e orçamento cumpridos.", author: "Lígia Pimenta", meta: "Condômina • Pituba Paradiso" },
  { id: 11, quote: "Uma das decisões mais acertadas: acabamento excelente e atenção aos mínimos detalhes do projeto.", author: "André Luis Chukr", meta: "Condômino • Giardino Loreto" },
  { id: 12, quote: "Transparência financeira e técnica, facilidade de acesso e comunicação, obra impecável. Excelente.", author: "Nathanael Pinheiro", meta: "Cliente • Regime de condomínio" },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const DURATION = 80;

  const Row = () => (
    <div className="flex gap-4 sm:gap-6 md:gap-8">
      {testimonials.map((t) => (
        <div
          key={`t-${t.id}`}
          className="shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[33vw] px-4 sm:px-5 pb-6"
        >
          <article className="h-full bg-white rounded-2xl border border-zinc-100 shadow-[0_12px_28px_rgba(0,0,0,0.10)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-300">
            <div className="p-5 sm:p-6">
              <Quote className="h-6 w-6 text-cyan-700 mb-3 opacity-80" />
              <p className="text-gray-800 text-[15px] sm:text-base md:text-lg leading-relaxed">
                “{t.quote}”
              </p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  {t.author}
                </p>
                {t.meta && (
                  <p className="text-gray-600 text-xs sm:text-sm">{t.meta}</p>
                )}
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="testemunhos"
      className="relative isolate z-10 bg-white mt-8 sm:mt-10 lg:mt-12 pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">
        <h2
          ref={ref}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase tracking-wide text-gray-800 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } mb-6 sm:mb-8 lg:mb-10`}
        >
          Quem Viveu a Experiência Realiza
        </h2>

        <div className="-mx-6 sm:-mx-8">
          {/* viewport */}
          <div className="relative overflow-hidden px-6 sm:px-2 py-6">
            {/* overlays de borda */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-20 bg-linear-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-20 bg-linear-to-l from-white to-transparent" />

            {/* track animado */}
            <div
              className="will-change-transform"
              style={
                {
                  display: "flex",
                  width: "max-content",
                  animation: `marquee var(--dur, ${DURATION}s) linear infinite`,
                  transform: "translateZ(0)",
                } as React.CSSProperties
              }
            >
              <Row />
              <Row />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Em vez de travar, só desacelera para quem usa "reduzir movimento" */
        @media (prefers-reduced-motion: reduce) {
          div[style*="marquee"] {
            animation: marquee 120s linear infinite !important;
            opacity: 0.85;
          }
        }
      `}</style>
    </section>
  );
}
