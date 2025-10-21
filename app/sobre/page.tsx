"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function SobrePage() {
  const { ref: ref1, isVisible: isVisible1 } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();
  const { ref: ref3, isVisible: isVisible3 } = useScrollReveal();
  const { ref: ref4, isVisible: isVisible4 } = useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* HERO */}
        <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-3 sm:mb-4 text-[#4a5568] font-serif">
              Sobre a REALIZA Engenharia
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
              Uma história construída com trabalho, transparência e prazos cumpridos.
            </p>

            {/* Métricas principais */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto">
              <StatCard value="2009" label="Fundação" />
              <StatCard value="8" label="Prédios entregues" />
              <StatCard value="150+" label="Unidades habitacionais" />
            </div>
          </div>
        </section>

        {/* TRAJETÓRIA */}
        <section className="py-14 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div
              ref={ref1}
              className={`transition-all duration-1000 ${
                isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-[#4a5568] font-serif text-center">
                Nossa Trajetória
              </h2>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    A <span className="text-[#0d7a8f] font-semibold">REALIZA ENGENHARIA</span> foi fundada em{" "}
                    <span className="font-semibold">2009</span> por{" "}
                    <span className="font-semibold">Sérgio Farias</span>, Engenheiro Civil (UFBA) e especialista em
                    Qualidade das Construções (UNIFACS).
                  </p>

                  <p>
                    Após mais de duas décadas em uma tradicional empresa baiana — participando do desenvolvimento e
                    construção de mais de 15 empreendimentos, além de diversas reformas prediais — surgiu o passo
                    natural de empreender com um modelo mais próximo dos clientes.
                  </p>

                  <p>
                    Desde então, a REALIZA consolidou-se como empresa séria e competente: foram{" "}
                    <span className="font-semibold">8 prédios</span> e{" "}
                    <span className="font-semibold">150 unidades</span> habitacionais entregues, além de casas de alto
                    padrão em regime de administração e inúmeras obras de reforma.
                  </p>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <Image
                      src="/s-rgio-farias-em-evento-com-cond-minos.jpg"
                      alt="Sérgio Farias em evento com condôminos do Giardino Loreto"
                      width={600}
                      height={450}
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-[#0d7a8f] text-white p-4 sm:p-5 rounded-xl shadow-xl max-w-xs">
                      <p className="text-xs sm:text-sm font-semibold">
                        Evento com condôminos do Giardino Loreto
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Como trabalhamos */}
              <div className="mt-10 sm:mt-12">
                <div className="bg-white p-6 sm:p-7 rounded-xl shadow-lg border-l-4 border-[#0d7a8f]">
                  <p className="font-semibold text-[#4a5568] mb-3">Como trabalhamos</p>
                  <ul className="grid sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">✓</span> Organização e transparência na gestão
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">✓</span> Rigoroso controle de recursos e custos
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">✓</span> Observância de prazos e condições acordadas
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">✓</span> Comunicação próxima com condôminos e parceiros
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONSTRUÇÃO CIVIL */}
        <section className="py-14 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div
              ref={ref2}
              className={`transition-all duration-1000 ${
                isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-[#4a5568] font-serif text-center">
                Construção Civil
              </h2>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                  <Image
                    src="/giardino-loreto-empreendimento-moderno.jpg"
                    alt="Giardino Loreto — empreendimento em regime de condomínio"
                    width={600}
                    height={450}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>

                <div className="order-1 lg:order-2 space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Atuamos no planejamento, gerenciamento e execução de obras residenciais e comerciais, com forte
                    especialização em <span className="font-semibold">regime de condomínio</span> — modelo que garante
                    participação ativa, prestação de contas e decisões compartilhadas.
                  </p>

                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#0d7a8f]">
                    <p className="font-semibold text-[#4a5568] mb-3">Nossos pilares</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#0d7a8f] mr-2">✓</span>
                        <span>Organização, transparência e controle de recursos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0d7a8f] mr-2">✓</span>
                        <span>Evitar desperdícios e garantir prazos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0d7a8f] mr-2">✓</span>
                        <span>Qualidade de execução e acompanhamento próximo</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-[#0d7a8f] font-semibold">
                    Competência técnica, compromisso e credibilidade do começo ao fim da obra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REFORMA PREDIAL */}
        <section className="py-14 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div
              ref={ref3}
              className={`transition-all duration-1000 ${
                isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-[#4a5568] font-serif text-center">
                Reforma Predial
              </h2>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Colocamos nossa expertise também em reformas e manutenções prediais — comerciais e residenciais —
                    com segurança, agilidade e custos controlados, preservando e valorizando o patrimônio do cliente.
                  </p>

                  <div className="bg-[#0d7a8f]/5 p-6 rounded-xl border border-[#0d7a8f]/20">
                    <p className="font-semibold text-[#4a5568] mb-3">Serviços</p>
                    <ul className="grid sm:grid-cols-2 gap-y-2 text-sm sm:text-base">
                      <li className="flex items-start"><span className="text-[#0d7a8f] mr-2">•</span>Recuperação e impermeabilização de fachadas</li>
                      <li className="flex items-start"><span className="text-[#0d7a8f] mr-2">•</span>Lavagem de fachadas</li>
                      <li className="flex items-start"><span className="text-[#0d7a8f] mr-2">•</span>Revitalização/assentamento de pastilhas</li>
                      <li className="flex items-start"><span className="text-[#0d7a8f] mr-2">•</span>Recuperação estrutural</li>
                      <li className="flex items-start"><span className="text-[#0d7a8f] mr-2">•</span>Tratamento de fissuras</li>
                      <li className="flex items-start"><span className="text-[#0d7a8f] mr-2">•</span>Recuperação de mármores</li>
                      <li className="flex items-start"><span className="text-[#0d7a8f] mr-2">•</span>Pintura acrílica de grande durabilidade</li>
                      <li className="flex items-start"><span className="text-[#0d7a8f] mr-2">•</span>Aplicação de manta asfáltica</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <Image
                    src="/obra-de-reforma-de-fachada-de-edif-cio.jpg"
                    alt="Obra de reforma do Edifício Cidade Mar"
                    width={600}
                    height={450}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NOSSOS SERVIÇOS (cards) */}
        <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-br from-[#4a5568] to-[#2d3748] text-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div
              ref={ref4}
              className={`transition-all duration-1000 ${
                isVisible4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 text-center font-serif">
                Nossos Serviços
              </h2>
              <p className="text-center text-gray-300 mb-10 text-base sm:text-lg max-w-2xl mx-auto">
                Engenharia completa para construir, reformar e manter
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <ServiceCard
                  title="Fachadas"
                  items={[
                    "Recuperação e impermeabilização",
                    "Lavagem profissional",
                    "Revitalização de pastilhas",
                  ]}
                />
                <ServiceCard
                  title="Estrutura"
                  items={["Recuperação estrutural", "Tratamento de fissuras", "Aplicação de manta asfáltica"]}
                />
                <ServiceCard
                  title="Acabamentos"
                  items={["Pintura acrílica durável", "Recuperação de mármores"]}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ========= Componentes auxiliares ========= */

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
      <div className="text-2xl sm:text-3xl font-extrabold text-[#0d7a8f]">{value}</div>
      <div className="text-xs sm:text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}

function ServiceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-7 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
      <h3 className="font-bold text-lg sm:text-xl mb-4 text-[#31b3c5]">{title}</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        {items.map((it, i) => (
          <li key={i} className="flex items-start">
            <span className="text-[#31b3c5] mr-2">•</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
