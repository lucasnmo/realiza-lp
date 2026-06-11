"use client"

import { ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { methodologySteps } from "@/lib/site-content"

export default function MethodologySection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="metodologia" className="bg-[#1B252C] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#78C9D6]">
            Nossa Metodologia
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Uma condução técnica para dar clareza do planejamento à entrega
          </h2>
          <p className="mt-4 text-base leading-8 text-white/80">
            O método da REALIZA organiza orçamento, decisões, prestação de
            contas e execução em etapas claras, com acompanhamento próximo dos
            clientes e foco no resultado da obra.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {methodologySteps.map((step, index) => {
            const Icon = step.icon

            return (
              <article
                key={step.title}
                className={`relative rounded-lg border border-white/10 bg-white/10 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.16)] transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#2A98AA]/20 text-[#78C9D6]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold text-white/50">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{step.text}</p>

                {index < methodologySteps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-10 hidden h-6 w-6 text-[#78C9D6]/50 xl:block" />
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
