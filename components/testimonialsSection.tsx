"use client";
import React from "react";
import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/** Depoimentos condensados a partir dos PDFs enviados */
const testimonials = [
  {
    id: 1,
    quote:
      "Competência técnica, lisura e transparência na administração do empreendimento. Investiria novamente e recomendo sem hesitar.",
    author: "André Magalhães",
    meta: "Condômino • Residencial dos Sombreiros", // :contentReference[oaicite:6]{index=6}
  },
  {
    id: 2,
    quote:
      "Solicitações pós-entrega atendidas com rapidez. Atendimento digno de nota 10; experiência muito positiva como condômino e engenheiro.",
    author: "Clodoaldo Freitas",
    meta: "Eng. Estrutural • Sombreiros / Pituba Paradiso / Giardino Loreto", // :contentReference[oaicite:7]{index=7}
  },
  {
    id: 3,
    quote:
      "Prazos cumpridos, imprevistos solucionados e retorno financeiro alcançado. Seriedade na condução dos empreendimentos.",
    author: "Arnaldo Freire Franco",
    meta: "Investidor • Solar das Amendoeiras / Sombreiros", // :contentReference[oaicite:8]{index=8}
  },
  {
    id: 4,
    quote:
      "Transparência nas reuniões e planilhas, escolha discutida de materiais e obra entregue no prazo. Senti segurança do início ao fim.",
    author: "Cristina Jesuíno",
    meta: "Condômina • Solar das Amendoeiras", // :contentReference[oaicite:9]{index=9}
  },
  {
    id: 5,
    quote:
      "Organização, transparência e comunicação clara no dia a dia. Entrega no prazo acordado e assembleias objetivas.",
    author: "Jayme Bulhões",
    meta: "Executivo • Sombreiros / Pituba Paradiso", // :contentReference[oaicite:10]{index=10} :contentReference[oaicite:11]{index=11}
  },
  {
    id: 6,
    quote:
      "Escolhem materiais com cuidado, valorizam o cliente e honram contratos. Qualidade e prazos que dão confiança à parceria.",
    author: "Telma Santos",
    meta: "Representante • Giardino Loreto", // :contentReference[oaicite:12]{index=12}
  },
  {
    id: 7,
    quote:
      "Planta inteligente, soluções de espaço e mobilidade que não vi em outros imóveis. Projeto e localização excelentes.",
    author: "Carlos Victor",
    meta: "Condômino • Giardino Loreto", // :contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14}
  },
  {
    id: 8,
    quote:
      "Relatórios claros, documentação fotográfica e gráficos que acompanham a obra. Organização e correção impecáveis.",
    author: "Flávio Siqueira Lopes",
    meta: "Cliente • Giardino Loreto", // :contentReference[oaicite:15]{index=15}
  },
  {
    id: 9,
    quote:
      "Qualidade acima do padrão do mercado, com excelência técnica em todos os empreendimentos.",
    author: "Mário Figueiredo",
    meta: "Arquiteto • Vários empreendimentos", // :contentReference[oaicite:16]{index=16}
  },
  {
    id: 10,
    quote:
      "Construir com a Realiza é optar por um imóvel de alta qualidade a preço justo, com cronograma e orçamento cumpridos.",
    author: "Lígia Pimenta",
    meta: "Condômina • Pituba Paradiso", // :contentReference[oaicite:17]{index=17}
  },
  {
    id: 11,
    quote:
      "Uma das decisões mais acertadas: acabamento excelente e atenção aos mínimos detalhes do projeto.",
    author: "André Luis Chukr",
    meta: "Condômino • Giardino Loreto", // :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19}
  },
  {
    id: 12,
    quote:
      "Transparência financeira e técnica, facilidade de acesso e comunicação, obra impecável. Excelente.",
    author: "Nathanael Pinheiro",
    meta: "Cliente • Regime de condomínio", // :contentReference[oaicite:20]{index=20}
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  // Duração da animação (segundos). Ajuste para mais lento/rápido.
  const DURATION = 45; // 45s para uma volta completa suave

  // Duplicamos a lista para o loop infinito (marquee)
  const items = React.useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <section
      id="testemunhos"
      className="bg-white mt-4 sm:mt-6 lg:mt-8 pt-6 sm:pt-7 lg:pt-8 pb-12 sm:pb-14 lg:pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">
        <h2
          ref={ref}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase tracking-wide text-gray-800 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} mb-5 sm:mb-6 lg:mb-8`}
        >
          Depoimentos
        </h2>

        {/* Viewport */}
        <div className="relative -mx-4 sm:-mx-6 md:-mx-10 lg:-mx-12">
          {/* gradientes nas bordas (fade) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          {/* faixa rolável */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 sm:gap-6 md:gap-8 will-change-transform animate-marquee [animation-play-state:running] hover:[animation-play-state:paused]"
              style={
                {
                  "--duration": `${DURATION}s`,
                } as React.CSSProperties
              }
            >
              {items.map((t, idx) => (
                <article
                  key={`${t.id}-${idx}`}
                  className="shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[33%] rounded-2xl border border-zinc-100 bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.10)] transition-shadow"
                >
                  <Quote className="h-6 w-6 text-cyan-700 mb-3 opacity-80" />
                  <p className="text-gray-800 text-[15px] sm:text-base md:text-lg leading-relaxed">
                    “{t.quote}”
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{t.author}</p>
                    {t.meta && <p className="text-gray-600 text-xs sm:text-sm">{t.meta}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes locais (Styled-JSX) */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }

        /* Acessibilidade: respeita usuários que preferem menos movimento */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
