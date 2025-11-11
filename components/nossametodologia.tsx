"use client";

import { ClipboardCheck, Building2, Users2, FileSearch } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function MethodologySection() {
  const { ref, isVisible } = useScrollReveal();

  const steps = [
    {
      icon: ClipboardCheck,
      title: "Planejamento e Orçamento",
      text: "Cada obra começa com um estudo detalhado de viabilidade técnica e financeira, garantindo clareza desde o primeiro dia.",
    },
    {
      icon: Users2,
      title: "Gestão Compartilhada",
      text: "O grupo de condôminos acompanha as decisões em assembleia, com acesso transparente aos custos e cronogramas.",
    },
    {
      icon: FileSearch,
      title: "Governança com Prestação de contas",
      text: "A Realiza apresenta relatórios mensais completos, assegurando controle total dos investimentos realizados.",
    },
    {
      icon: Building2,
      title: "Execução e Entrega",
      text: "Acompanhamento técnico constante e cumprimento rigoroso de prazos, garantindo obras de qualidade e segurança.",
    },
  ];

  return (
    <section
      id="metodologia"
      className="relative bg-[#1B252C] py-12 sm:py-14 md:py-16 text-white overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <h2
          ref={ref}
          className={`text-2xl sm:text-3xl md:text-[32px] font-bold text-center uppercase tracking-wide transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Nossa Metodologia
        </h2>

        <div
          className={`mx-auto mt-3 mb-10 h-1 w-16 rounded-full bg-[#0d7a8f] transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />

        <p
          className={`text-center text-white/90 max-w-3xl mx-auto text-base sm:text-[15px] md:text-[16px] leading-relaxed mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Atuamos com base em um modelo de gestão transparente, técnico e
          participativo. Nosso método garante controle total dos custos,
          comunicação eficiente e excelência em cada etapa do processo
          construtivo.
        </p>

        {/* Cards de etapas */}
        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                style={{ transitionDelay: `${index * 100}ms` }}
                className="bg-[#24313B] border border-white/10 rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition-all duration-500"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d7a8f]/20 ring-1 ring-[#0d7a8f]/40">
                    <Icon className="h-6 w-6 text-[#2A98AA]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-white/80 text-center leading-relaxed">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`flex justify-center mt-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <a
            href="#contato"
            className="inline-block rounded-full bg-[#0d7a8f] px-8 py-3 text-white font-semibold uppercase tracking-wide shadow-md hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
          >
            Solicite um Atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
