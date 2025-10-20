"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function SobrePage() {
  const { ref: ref1, isVisible: isVisible1 } = useScrollReveal()
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal()
  const { ref: ref3, isVisible: isVisible3 } = useScrollReveal()
  const { ref: ref4, isVisible: isVisible4 } = useScrollReveal()

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-[#4a5568] font-serif">
              Sobre a REALIZA Engenharia
            </h1>
            <p className="text-lg sm:text-xl text-center text-gray-600 max-w-3xl mx-auto">
              Uma história construída com muito trabalho e valores sólidos
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div
              ref={ref1}
              className={`transition-all duration-1000 ${
                isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-[#4a5568] font-serif text-center">
                Nossa Trajetória
              </h2>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    A <span className="text-[#0d7a8f] font-semibold">REALIZA ENGENHARIA</span> foi fundada em{" "}
                    <span className="font-semibold">2009</span> por seu diretor{" "}
                    <span className="font-semibold">Sérgio Farias</span> - Engenheiro Civil graduado pela UFBA e
                    especialista em Qualidade das Construções pela UNIFACS.
                  </p>

                  <p>
                    Após mais de 20 anos de atuação em tradicional empresa do mercado baiano, tendo participado no
                    desenvolvimento e construção de mais de 15 empreendimentos, sob os regimes de administração e
                    condomínio, e tendo conduzido diversas obras de reformas prediais, era chegada a hora de buscar
                    novos desafios e empreender.
                  </p>

                  <p>
                    Desde então, a <span className="text-[#0d7a8f] font-semibold">REALIZA ENGENHARIA</span> cresceu e se
                    consolidou no mercado como uma empresa séria e competente. Neste período, lançou e concluiu a
                    entrega de <span className="font-semibold">08 prédios e 150 unidades habitacionais</span>, além de
                    casas de alto padrão, construídas sob regime de administração e diversas obras de reformas prediais.
                  </p>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <Image
                      src="/s-rgio-farias-em-evento-com-cond-minos.jpg"
                      alt="Sérgio Farias em evento com condôminos"
                      width={600}
                      height={450}
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-[#0d7a8f] text-white p-6 rounded-xl shadow-xl max-w-xs">
                      <p className="text-sm font-semibold">Sérgio Farias em evento com condôminos do Giardino Loreto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div
              ref={ref2}
              className={`transition-all duration-1000 ${
                isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-[#4a5568] font-serif text-center">
                Construção Civil
              </h2>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                  <Image
                    src="/giardino-loreto-empreendimento-moderno.jpg"
                    alt="Giardino Loreto - empreendimento da Realiza"
                    width={600}
                    height={450}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>

                <div className="order-1 lg:order-2 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    A <span className="text-[#0d7a8f] font-semibold">REALIZA</span> é uma empresa especializada em
                    engenharia, na área da construção civil, atuando no planejamento, gerenciamento e na execução de
                    obras residenciais e comerciais, especialmente através do sistema de construção em regime de
                    condomínio.
                  </p>

                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#0d7a8f]">
                    <p className="font-semibold text-[#4a5568] mb-3">Nosso trabalho prima sempre por:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#0d7a8f] mr-2">✓</span>
                        <span>Organização e transparência</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0d7a8f] mr-2">✓</span>
                        <span>Rigoroso controle de recursos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#0d7a8f] mr-2">✓</span>
                        <span>Observância de prazos e condições</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-[#0d7a8f] font-semibold text-lg">
                    Sinônimo de competência técnica, compromisso e credibilidade em tudo o que fazemos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div
              ref={ref3}
              className={`transition-all duration-1000 ${
                isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-[#4a5568] font-serif text-center">
                Reforma Predial
              </h2>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Sempre atenta às necessidades do mercado, a{" "}
                    <span className="text-[#0d7a8f] font-semibold">REALIZA ENGENHARIA</span> coloca sua expertise à
                    disposição de seus clientes também para a realização de reformas e manutenções prediais, sejam
                    empreendimentos com características comerciais ou residenciais.
                  </p>

                  <div className="bg-[#0d7a8f]/5 p-6 rounded-xl border border-[#0d7a8f]/20">
                    <p className="font-semibold text-[#4a5568] mb-3">Nosso objetivo:</p>
                    <p>
                      Proporcionar serviços de qualidade, com{" "}
                      <span className="text-[#0d7a8f] font-semibold">segurança, agilidade e custos controlados</span>,
                      garantindo que o patrimônio dos nossos clientes se mantenha sempre valorizado e nas melhores
                      condições de utilização.
                    </p>
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

        <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-[#4a5568] to-[#2d3748] text-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div
              ref={ref4}
              className={`transition-all duration-1000 ${
                isVisible4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center font-serif">
                Nossos Serviços
              </h2>
              <p className="text-center text-gray-300 mb-16 text-lg max-w-2xl mx-auto">
                Expertise completa em reformas e manutenções prediais
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-xl mb-4 text-[#0d7a8f]">Fachadas</h3>
                  <ul className="space-y-3 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">•</span>
                      <span>Recuperação e impermeabilização</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">•</span>
                      <span>Lavagem profissional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">•</span>
                      <span>Revitalização de pastilhas</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-xl mb-4 text-[#0d7a8f]">Estrutura</h3>
                  <ul className="space-y-3 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">•</span>
                      <span>Recuperação estrutural</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">•</span>
                      <span>Tratamento de fissuras</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">•</span>
                      <span>Aplicação de manta asfáltica</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
                  <h3 className="font-bold text-xl mb-4 text-[#0d7a8f]">Acabamentos</h3>
                  <ul className="space-y-3 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">•</span>
                      <span>Pintura acrílica durável</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0d7a8f] mr-2">•</span>
                      <span>Recuperação de mármores</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
