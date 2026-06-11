"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FinalCTASection from "@/components/final-cta-section";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Building2, Home } from "lucide-react";

export default function SobrePage() {
  const { ref: refHero, isVisible: visHero } = useScrollReveal();
  const { ref: refHistoria, isVisible: visHistoria } = useScrollReveal();
  const { ref: refAtuacao, isVisible: visAtuacao } = useScrollReveal();
  const { ref: refModelo, isVisible: visModelo } = useScrollReveal();
  const { ref: refValores, isVisible: visValores } = useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/background1.png"
              alt="Imagem de fundo institucional da REALIZA Engenharia"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20">
            <div
              ref={refHero}
              className={`transition-all duration-700 ${
                visHero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#4a5568]">
                Realiza Engenharia Ltda.
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto">
                Engenharia com{" "}
                <strong>transparência, controle e compromisso</strong> — há
                mais de 15 anos transformando projetos em realidade.
              </p>
            </div>
          </div>
        </section>

        {/* HISTÓRIA */}
        <section className="py-10 sm:py-12 md:py-14 bg-white">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div
              ref={refHistoria}
              className={`transition-all duration-700 ${
                visHistoria
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a5568] mb-4">
                    Nossa História
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Fundada em <strong>2009</strong> por{" "}
                    <strong>Sérgio Farias</strong>, engenheiro civil (UFBA) e
                    especialista em Qualidade das Construções (UNIFACS), a
                    Realiza Engenharia nasceu com a proposta de unir técnica e
                    gestão próxima aos clientes, conduzindo cada obra com
                    seriedade e clareza.
                  </p>
                  <p className="mt-3 text-gray-700 text-base leading-relaxed">
                    Ao longo da trajetória, entregamos{" "}
                    <strong>10 edifícios</strong> e{" "}
                    <strong>quase 500 unidades</strong>, com foco em qualidade,
                    segurança e cumprimento rigoroso de prazos.
                  </p>
                </div>

                <div className="md:col-span-6 relative">
                  <div className="group relative h-64 sm:h-72 md:h-[360px] rounded-lg overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/sergiorealiza1.JPG"
                      alt="Sérgio Farias, diretor da Realiza Engenharia"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d7a8f]/90 via-[#0d7a8f]/60 to-transparent p-4">
                      <p className="text-white text-sm sm:text-base font-semibold">
                        Liderança técnica e experiência de 35+ anos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ATUAÇÃO */}
        <section className="py-10 sm:py-12 md:py-14 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div
              ref={refAtuacao}
              className={`transition-all duration-700 ${
                visAtuacao
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a5568] text-center mb-8">
                Nossa Atuação
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <HoverCard
                  title="Construção Civil"
                  description="Planejamento, gerenciamento e execução de empreendimentos residenciais e comerciais, com forte especialização no regime de condomínio a preço de custo — participação ativa, prestação de contas e decisões transparentes."
                  items={[
                    "Gestão de obras, orçamentos e cronograma",
                    "Transparência e controle de custos",
                    "Qualidade técnica do projeto à entrega",
                  ]}
                />
                <HoverCard
                  title="Casas de Alto Padrão"
                  description="Projetos sob medida, alto nível de acabamento e condução técnica minuciosa, do executivo à entrega final — sempre com prazos e especificações respeitados."
                  items={[
                    "Arquitetura autoral e compatibilização",
                    "Execução cuidadosa de acabamentos",
                    "Acompanhamento próximo e criterioso",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* MODELO DE ATUAÇÃO */}
        <section className="py-10 sm:py-12 md:py-14 bg-white">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div
              ref={refModelo}
              className={`transition-all duration-700 ${
                visModelo
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#4a5568] mb-2">
                  Modelo de Atuação
                </h3>
                <p className="text-gray-700">
                  Especialistas em{" "}
                  <strong>condomínio a preço de custo</strong> (Lei Federal n.º
                  4.591/1964), conduzimos a obra com gestão técnica e
                  administrativa, prestação de contas rigorosa e taxa de
                  administração previamente aprovada em assembleia.
                </p>

                <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d7a8f] mt-1">•</span>
                    <span>
                      <strong>Sem financiamento bancário:</strong> aportes
                      mensais do grupo, sem juros.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d7a8f] mt-1">•</span>
                    <span>
                      <strong>Baixo custo de comercialização:</strong> estrutura
                      enxuta que otimiza o valor final.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0d7a8f] mt-1">•</span>
                    <span>
                      <strong>Sem margem de incorporadora:</strong> custos
                      rateados com total transparência.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="py-10 sm:py-12 md:py-14 bg-white">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div
              ref={refValores}
              className={`transition-all duration-700 ${
                visValores
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a5568] mb-4">
                    Nossos Valores
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Nosso compromisso é com a{" "}
                    <strong>qualidade técnica</strong>, a{" "}
                    <strong>transparência</strong> e o{" "}
                    <strong>cumprimento de prazos</strong>. Mantemos uma relação
                    próxima com clientes e parceiros, sustentada por controle,
                    organização e ética.
                  </p>

                  <div className="mt-6 text-gray-800/90">
                    <ul className="space-y-2">
                      {[
                        "Organização e planejamento",
                        "Transparência e ética",
                        "Controle e eficiência",
                        "Compromisso com prazos",
                      ].map((v, i) => (
                        <li
                          key={v}
                          className="group flex items-center gap-3 text-sm sm:text-base"
                          style={{ transitionDelay: `${i * 60}ms` }}
                        >
                          <span className="h-[2px] w-6 bg-[#0d7a8f]/60 group-hover:w-8 group-hover:bg-[#0d7a8f] transition-all duration-300" />
                          <span className="group-hover:text-[#0d7a8f] transition-colors duration-300">
                            {v}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-64 sm:h-72 md:h-[340px] rounded-lg overflow-hidden shadow-xl group transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/realizavalores.JPG"
                    alt="Giardino Loreto — empreendimento entregue"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d7a8f]/90 via-[#0d7a8f]/60 to-transparent p-8" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <p className="font-semibold text-sm sm:text-base">
                      Credibilidade que constrói resultados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FinalCTASection />
      <Footer />
    </div>
  );
}

/* ==== Componentes auxiliares ==== */

function HoverCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  const Icon = title.includes("Casas") ? Home : Building2;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0d7a8f]/10 text-[#0d7a8f]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-[#4a5568]">{title}</h3>
      </div>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
      <ul className="mt-3 space-y-1 text-gray-600 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-[#0d7a8f] text-lg">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
