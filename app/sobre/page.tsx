"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function SobrePage() {
  const { ref: refHero, isVisible: visHero } = useScrollReveal();
  const { ref: refHistoria, isVisible: visHistoria } = useScrollReveal();
  const { ref: refAtuacao, isVisible: visAtuacao } = useScrollReveal();
  const { ref: refValores, isVisible: visValores } = useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/construction-bg.jpg"
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
            <div
              ref={refHero}
              className={`transition-all duration-700 ${
                visHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#4a5568] font-serif">
                Realiza Engenharia
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto">
                Engenharia com transparência, controle e compromisso — há mais de uma década transformando projetos em realidade.
              </p>

              {/* métricas */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Metric label="Fundação" value="2009" />
                <Metric label="Prédios entregues" value="8" />
                <Metric label="Unidades habitacionais" value="150+" />
                <Metric label="Anos de experiência" value="20+" />
              </div>
            </div>
          </div>
        </section>

        {/* HISTÓRIA */}
        <section className="py-10 sm:py-12 md:py-14 bg-white">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div
              ref={refHistoria}
              className={`transition-all duration-700 ${
                visHistoria ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#4a5568] mb-4">
                    Nossa História
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Fundada em <strong>2009</strong> por <strong>Sérgio Farias</strong>, engenheiro civil formado pela UFBA e especialista em Qualidade das Construções pela UNIFACS, a Realiza Engenharia nasceu após mais de <strong>20 anos de experiência</strong> em grandes obras na Bahia.
                  </p>
                  <p className="mt-3 text-gray-700 text-base leading-relaxed">
                    Desde então, a empresa consolidou-se como referência em <strong>construções residenciais e comerciais</strong>, atuando sob os regimes de administração e condomínio. Já são <strong>8 prédios e mais de 150 unidades</strong> entregues, além de casas de alto padrão e diversas reformas prediais.
                  </p>
                </div>

                <div className="md:col-span-6 relative">
                  <div className="group relative h-64 sm:h-72 md:h-[360px] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/s-rgio-farias-em-evento-com-cond-minos.jpg"
                      alt="Sérgio Farias, diretor da Realiza Engenharia"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d7a8f]/90 via-[#0d7a8f]/60 to-transparent p-4">
                      <p className="text-white text-sm sm:text-base font-semibold">
                        Liderança técnica e experiência de mais de duas décadas
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
                visAtuacao ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#4a5568] text-center mb-8">
                Nossa Atuação
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <HoverCard
                  title="Construção Civil"
                  description="Atuamos no planejamento, gerenciamento e execução de obras residenciais e comerciais, com destaque para o sistema de construção em regime de condomínio — modelo que garante participação ativa e decisões transparentes."
                  items={[
                    "Gestão de obras e orçamentos",
                    "Transparência e controle de custos",
                    "Cronogramas cumpridos com precisão",
                  ]}
                  icon="/construction-icon.svg"
                />
                <HoverCard
                  title="Reforma Predial"
                  description="Também realizamos reformas e manutenções prediais, comerciais e residenciais, com foco em segurança, agilidade e custos controlados."
                  items={[
                    "Recuperação e impermeabilização de fachadas",
                    "Revitalização e assentamento de pastilhas",
                    "Recuperação estrutural e tratamento de fissuras",
                    "Pintura acrílica e aplicação de manta asfáltica",
                  ]}
                  icon="/maintenance-icon.svg"
                />
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
                visValores ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#4a5568] mb-4">
                    Nossos Valores
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Nosso compromisso é com a <strong>qualidade técnica</strong> e a
                    <strong> transparência</strong> em cada etapa da obra.  
                    Valorizamos o <strong>relacionamento próximo</strong> com clientes, fornecedores e parceiros, garantindo confiança mútua e resultados consistentes.
                  </p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    <ValuePill text="Organização e planejamento" />
                    <ValuePill text="Transparência e ética" />
                    <ValuePill text="Cumprimento de prazos" />
                    <ValuePill text="Controle e eficiência" />
                  </div>
                </div>

                <div className="relative h-64 sm:h-72 md:h-[340px] rounded-2xl overflow-hidden shadow-xl group transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/giardino-loreto-empreendimento-moderno.jpg"
                    alt="Giardino Loreto — empreendimento entregue"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d7a8f]/80 via-[#0d7a8f]/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <p className="font-semibold text-sm sm:text-base">
                      Excelência técnica e resultados que geram confiança
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ==== Componentes auxiliares modernos ==== */

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-5 py-3 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="text-[#0d7a8f] text-xl sm:text-2xl font-extrabold">{value}</div>
      <div className="text-gray-600 text-xs sm:text-sm mt-1">{label}</div>
    </div>
  );
}

function HoverCard({
  title,
  description,
  items,
  icon,
}: {
  title: string;
  description: string;
  items: string[];
  icon?: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group">
      <div className="flex items-center gap-3 mb-3">
        {icon && (
          <Image src={icon} alt="" width={32} height={32} className="opacity-80 group-hover:opacity-100 transition" />
        )}
        <h3 className="text-xl font-semibold text-[#4a5568]">{title}</h3>
      </div>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{description}</p>
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

function ValuePill({ text }: { text: string }) {
  return (
    <div className="bg-gray-100 hover:bg-[#0d7a8f]/10 border border-gray-200 rounded-full px-4 py-2 text-sm sm:text-base text-gray-700 font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {text}
    </div>
  );
}
