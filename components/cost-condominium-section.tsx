import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { costCondominiumBenefits } from "@/lib/site-content"

export default function CostCondominiumSection() {
  return (
    <section className="bg-[#F7F8F6] py-16 sm:py-20 lg:py-24" id="preco-de-custo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg bg-white shadow-[0_24px_70px_rgba(20,33,40,0.14)] lg:grid-cols-[0.95fr_1.35fr]">
          <div className="bg-[#1E2A32] p-6 text-white sm:p-8 lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#78C9D6]">
              Diferencial REALIZA
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
              Regime de condomínio a preço de custo
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/82">
              Um modelo em que os condôminos participam do financiamento da
              obra, acompanham custos e contam com prestação de contas
              transparente.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/78">
              A REALIZA conduz esse processo com planejamento técnico,
              governança e proximidade em cada etapa.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 h-auto min-h-12 whitespace-normal rounded-md bg-[#2A98AA] px-6 py-3 text-base font-bold text-white hover:bg-[#238799]"
            >
              <Link
                href="/sobre"
                aria-label="Entender como funciona o regime de condomínio a preço de custo"
              >
                Entenda como funciona
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6 lg:p-8">
            {costCondominiumBenefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <article
                  key={benefit.title}
                  className="rounded-lg border border-gray-200 bg-[#F7F8F6] p-5 shadow-[0_12px_34px_rgba(20,33,40,0.10)]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#2A98AA]/10 text-[#2A98AA]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1E2A32]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {benefit.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
