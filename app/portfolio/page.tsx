"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import {
  Calendar,
  Ruler,
  Layers,
  Bed,
  MapPin,
  User2,
  Building2,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react"

/* =========================================================
   DADOS
   ========================================================= */

type Category = "residenciais" | "casas" | "comerciais"

const projects = [
  {
    id: "solar-amendoeiras",
    category: "residenciais" as Category,
    name: "Solar das Amendoeiras",
    images: ["/solardasamendoeiras3.png", "/solardasamendoeiras.jpg", "/solardasamendoeiras2.jpg"],
    technicalSheet: {
      year: "2010",
      regime: "Obra em regime de condomínio",
      address: "R. Carmen Miranda, 372, Pituba",
      architect: "Mário Figueiredo",
      totalArea: "3.070 m²",
      floors: "14",
      bedrooms: "2/4 (1 suíte)",
      unitArea: "73 m²",
      infrastructure:
        "Piscina com deck, academia, sauna, salão de festas, salão de jogos, parque infantil e guarita de segurança.",
    },
  },
  {
    id: "bosque-guarajuba",
    category: "residenciais" as Category,
    name: "Condomínio Bosque de Guarajuba",
    images: ["/bosquedeguarajuba.jpg", "/bosquedeguarajuba2.jpg", "/bosquedeguarajuba3.jpg"],
    technicalSheet: {
      year: "2012",
      regime: "Obra em regime de administração",
      address: "Litoral Norte, Guarajuba",
      architect: "",
      totalArea: "4.750 m²",
      floors: "01 torre de 4 pavimentos e outra de 10 pavimentos",
      bedrooms: "",
      unitArea: "",
      infrastructure:
        "Guarita de acesso, espaço gourmet, salão de jogos, quadra poliesportiva, 2 piscinas (adulto e infantil), área de convivência, academia.",
    },
  },
  {
    id: "hotel-aram-yami",
    category: "comerciais" as Category,
    name: "Hotel Aram Yamí",
    images: ["/aranyammi.jpg", "/aranyammi3.JPG", "/aranyammi4.jpg"],
    technicalSheet: {
      year: "2009",
      regime: "Empreendimento hoteleiro",
      address: "Rua Direita de Santo Antônio – Santo Antônio Além do Carmo",
      architect: "",
      totalArea: "1.600 m²",
      floors: "",
      bedrooms: "",
      unitArea: "",
      infrastructure:
        "Arquitetura colonial no Centro Histórico de Salvador; piscinas individuais, cafeteria e suítes com vista panorâmica da Baía de Todos os Santos.",
    },
  },
  {
    id: "residencial-sombreiros",
    category: "residenciais" as Category,
    name: "Residencial dos Sombreiros",
    images: ["/residencialdossombreiros2.jpg", "/residencialdossombreiros.jpg", "/residencialdossombreiros3.jpg"],
    technicalSheet: {
      year: "2013",
      regime: "Obra em regime de condomínio",
      address: "Alameda dos Sombreiros, Caminho das Árvores",
      architect: "Mário Figueiredo",
      totalArea: "4.050 m²",
      floors: "16",
      bedrooms: "3/4 (2 suítes)",
      unitArea: "93 m²",
      infrastructure:
        "Fachadas principais pastilhadas; piscina, parque infantil, deck, varanda gourmet, sauna, salão de festas, salão de jogos, guarita de segurança, academia e churrasqueira.",
    },
  },
  // ——— Casas de alto padrão ———
  {
    id: "horto-vilas",
    category: "casas" as Category,
    name: "Condomínio Horto Vilas",
    images: ["/hortovlias.jpg", "/hortovlias2.jpg", "/hortovlias3.jpg", "/hortovlias4.jpg"],
    technicalSheet: {
      year: "",
      regime: "Residencial exclusivo",
      address: "Vilas do Atlântico, Lauro de Freitas",
      architect: "",
      totalArea: "620 m² (residência)",
      floors: "",
      bedrooms: "5 suítes",
      unitArea: "",
      infrastructure: "4 vagas de garagem e elevador social.",
    },
  },
  {
    id: "alphaville-estrela-do-mar",
    category: "casas" as Category,
    name: "Alphaville Estrela do Mar",
    images: ["/estreladomar.jpg", "/estreladomar2.jpg", "/estreladomar3.jpg", "/estreladomar4.jpg"],
    technicalSheet: {
      year: "",
      regime: "Residencial exclusivo",
      address: "Alphaville, Salvador",
      architect: "",
      totalArea: "830 m² (residência)",
      floors: "",
      bedrooms: "5 suítes",
      unitArea: "",
      infrastructure: "6 vagas de garagem e piscina aquecida.",
    },
  },
]

/* =========================================================
   PÁGINA
   ========================================================= */

export default function PortfolioPage() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()
  const [tab, setTab] = React.useState<Category>("residenciais")

  const [lightbox, setLightbox] = React.useState<{
    open: boolean
    images: string[]
    index: number
    title?: string
  }>({ open: false, images: [], index: 0 })

  const filtered = React.useMemo(
    () => projects.filter((p) => p.category === tab),
    [tab]
  )

  // fecha lightbox com ESC
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox.open) return
      if (e.key === "Escape") setLightbox((s) => ({ ...s, open: false }))
      if (e.key === "ArrowRight") setLightbox((s) => ({ ...s, index: (s.index + 1) % s.images.length }))
      if (e.key === "ArrowLeft") setLightbox((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox.open, lightbox.images.length])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-14 sm:py-16">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className={`mb-8 sm:mb-10 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 uppercase tracking-wide text-gray-800">
            Nossos Empreendimentos
          </h1>
          <p className="font-sans text-center text-gray-600 text-base sm:text-lg md:text-xl mb-6 max-w-4xl mx-auto leading-relaxed px-4">
            Conheça os projetos que construímos com qualidade, transparência e compromisso.
          </p>
          <div className="w-20 h-1 bg-[#0891b2] mx-auto rounded-full" />
        </div>

        {/* Abas */}
        <Tabs tab={tab} onChange={setTab} />

        {/* Lista (1 coluna, ficha aberta) */}
        <div className="mt-8 space-y-10 sm:space-y-12">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenLightbox={(startIndex: number) =>
                setLightbox({ open: true, images: project.images, index: startIndex, title: project.name })
              }
            />
          ))}
        </div>
      </main>

      {/* Lightbox simples, sem dependências */}
      {lightbox.open && (
        <LightboxOverlay
          title={lightbox.title}
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox((s) => ({ ...s, open: false }))}
          onPrev={() =>
            setLightbox((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }))
          }
          onNext={() =>
            setLightbox((s) => ({ ...s, index: (s.index + 1) % s.images.length }))
          }
          onThumbClick={(i) => setLightbox((s) => ({ ...s, index: i }))}
        />
      )}

      <Footer />
    </div>
  )
}

/* =========================================================
   COMPONENTES
   ========================================================= */

function Tabs({
  tab,
  onChange,
}: {
  tab: Category
  onChange: (t: Category) => void
}) {
  const btn =
    "px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-all border"
  const active =
    "bg-[#0d7a8f] text-white border-[#0d7a8f] shadow-sm"
  const idle =
    "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      <button
        className={`${btn} ${tab === "residenciais" ? active : idle}`}
        onClick={() => onChange("residenciais")}
      >
        Prédios Residenciais
      </button>
      <button
        className={`${btn} ${tab === "casas" ? active : idle}`}
        onClick={() => onChange("casas")}
      >
        Casas
      </button>
      <button
        className={`${btn} ${tab === "comerciais" ? active : idle}`}
        onClick={() => onChange("comerciais")}
      >
        Comerciais
      </button>
    </div>
  )
}

function Chip({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
      {icon}
      {children}
    </span>
  )
}

/* ---------- Utils: construir variações de caminho/extension ---------- */
function buildCandidateSources(src: string): string[] {
  const lower = src.replace(/\.(jpg|jpeg|png|tif|tiff)$/i, (m) => m.toLowerCase())
  const extMatch = lower.match(/\.(jpg|jpeg|png|tif|tiff)$/i)
  const ext = extMatch ? extMatch[0].toLowerCase() : ""
  const base = ext ? lower.slice(0, -ext.length) : lower

  const candidates = new Set<string>()

  if (ext === ".tif" || ext === ".tiff") {
    candidates.add(base + ".jpg")
    candidates.add(base + ".jpeg")
    candidates.add(base + ".png")
  } else if (ext) {
    candidates.add(base + ext)
  } else {
    candidates.add(lower)
  }

  const common = [".jpg", ".jpeg", ".png"]
  for (const e of common) {
    candidates.add(base + e)
    candidates.add(base + e.toUpperCase())
  }

  return Array.from(candidates)
}

/* ---------- SmartImage: fallbacks + orientação ---------- */
function SmartImage({
  src,
  alt,
  fill,
  className,
  sizes,
  priority,
  onOrientationChange,
}: {
  src: string
  alt: string
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
  onOrientationChange?: (isPortrait: boolean) => void
}) {
  const candidates = React.useMemo(() => buildCandidateSources(src), [src])
  const [idx, setIdx] = React.useState(0)

  return (
    <Image
      src={candidates[idx]}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => {
        setIdx((prev) => (prev + 1 < candidates.length ? prev + 1 : prev))
      }}
      onLoadingComplete={(img) => {
        if (onOrientationChange) {
          const isPortrait = img.naturalHeight > img.naturalWidth
          onOrientationChange(isPortrait)
        }
      }}
    />
  )
}

/* ---------- Card (1 coluna, ficha aberta) ---------- */

function ProjectCard({
  project,
  onOpenLightbox,
}: {
  project: (typeof projects)[0]
  onOpenLightbox: (startIndex: number) => void
}) {
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal<HTMLDivElement>()
  const [activeIdx, setActiveIdx] = React.useState(0)
  const [isPortrait, setIsPortrait] = React.useState(false)

  const mainImage = project.images[activeIdx] ?? project.images[0]
  const T = project.technicalSheet

  // Ajuste inteligente do enquadramento
  const fitClass = isPortrait ? "object-contain" : "object-cover"
  const bgClass = isPortrait ? "bg-white" : "bg-gray-100"

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <article className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
        {/* Imagem — alturas responsivas, um pouco menores no desktop */}
        <div className="p-5 sm:p-6">
          <button
            type="button"
            onClick={() => onOpenLightbox(activeIdx)}
            className="group block w-full"
            aria-label={`Ampliar imagens de ${project.name}`}
          >
            <div
              className={`
                relative w-full overflow-hidden rounded-xl ${bgClass}
                h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[360px]
              `}
            >
              <SmartImage
                src={mainImage || "/placeholder.svg"}
                alt={project.name}
                fill
                className={`${fitClass} object-center transition-transform duration-500 group-hover:scale-[1.02]`}
                sizes="(min-width:1280px) 1100px, (min-width:1024px) 960px, 100vw"
                priority
                onOrientationChange={setIsPortrait}
              />
            </div>
          </button>

          {/* Thumbs */}
          {project.images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {project.images.map((src: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-md ring-1 transition-all ${
                    activeIdx === i ? "ring-[#0891b2]" : "ring-gray-200 hover:ring-gray-300"
                  }`}
                  aria-label={`Trocar para imagem ${i + 1}`}
                >
                  <div className="relative h-full w-full bg-gray-100">
                    <SmartImage src={src} alt={`${project.name} ${i + 1}`} fill className="object-cover" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="px-5 sm:px-6 pb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {project.name}
          </h2>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {T.year && <Chip icon={<Calendar className="h-3.5 w-3.5 text-[#4a5568]" />}>{T.year}</Chip>}
            {T.totalArea && <Chip icon={<Ruler className="h-3.5 w-3.5 text-[#4a5568]" />}>{T.totalArea}</Chip>}
            {T.floors && <Chip icon={<Layers className="h-3.5 w-3.5 text-[#4a5568]" />}>{T.floors} pav.</Chip>}
            {T.bedrooms && <Chip icon={<Bed className="h-3.5 w-3.5 text-[#4a5568]" />}>{T.bedrooms}</Chip>}
            {T.unitArea && <Chip icon={<Ruler className="h-3.5 w-3.5 text-[#4a5568]" />}>{T.unitArea}</Chip>}
          </div>

          {/* Resumo */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
            {T.address && (
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-[#4a5568]" />
                <span>{T.address}</span>
              </li>
            )}
            {T.regime && (
              <li className="flex items-start gap-2">
                <Building2 className="mt-0.5 h-4 w-4 text-[#4a5568]" />
                <span>{T.regime}</span>
              </li>
            )}
            {T.architect && (
              <li className="flex items-start gap-2">
                <User2 className="mt-0.5 h-4 w-4 text-[#4a5568]" />
                <span>Projeto: {T.architect}</span>
              </li>
            )}
          </ul>

          {/* Ficha técnica — ABERTA por padrão */}
          <div className="mt-5 rounded-xl border bg-white p-4 sm:p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#4a5568] mb-3">
              Ficha técnica
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {T.year && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 min-w-[140px]">Ano</dt>
                  <dd className="text-gray-700">{T.year}</dd>
                </div>
              )}
              {T.regime && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 min-w-[140px]">Regime</dt>
                  <dd className="text-gray-700">{T.regime}</dd>
                </div>
              )}
              {T.address && (
                <div className="flex gap-2 sm:col-span-2">
                  <dt className="font-semibold text-gray-800 min-w-[140px]">Endereço</dt>
                  <dd className="text-gray-700">{T.address}</dd>
                </div>
              )}
              {T.architect && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 min-w-[140px]">Arquiteto</dt>
                  <dd className="text-gray-700">{T.architect}</dd>
                </div>
              )}
              {T.totalArea && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 min-w-[140px]">Área total</dt>
                  <dd className="text-gray-700">{T.totalArea}</dd>
                </div>
              )}
              {T.floors && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 min-w-[140px]">Pavimentos</dt>
                  <dd className="text-gray-700">{T.floors}</dd>
                </div>
              )}
              {T.bedrooms && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 min-w-[140px]">Dormitórios</dt>
                  <dd className="text-gray-700">{T.bedrooms}</dd>
                </div>
              )}
              {T.unitArea && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-gray-800 min-w-[140px]">Área das unidades</dt>
                  <dd className="text-gray-700">{T.unitArea}</dd>
                </div>
              )}
              {T.infrastructure && (
                <div className="flex gap-2 sm:col-span-2">
                  <dt className="font-semibold text-gray-800 min-w-[140px]">Infraestrutura</dt>
                  <dd className="text-gray-700">{T.infrastructure}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </article>
    </div>
  )
}

/* ---------- Lightbox Overlay (sem libs) ---------- */
function LightboxOverlay({
  title,
  images,
  index,
  onClose,
  onPrev,
  onNext,
  onThumbClick,
}: {
  title?: string
  images: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onThumbClick: (i: number) => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative h-full w-full" onClick={(e) => e.stopPropagation()}>
        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Fechar"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Título (opcional) */}
        {title && (
          <div className="absolute left-4 top-4 text-white/90 text-sm sm:text-base">
            {title}
          </div>
        )}

        {/* Navegação */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Próxima"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

        {/* Imagem central com contain para evitar cortes */}
        <div className="flex h-full items-center justify-center px-3 sm:px-8">
          <div className="relative w-full max-w-6xl">
            <div className="relative h-[58vh] sm:h-[68vh] md:h-[72vh]">
              <Image
                src={images[index] || "/placeholder.svg"}
                alt={`Imagem ${index + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Thumbs */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 mx-auto w-full max-w-6xl px-3 sm:px-8">
            <div className="flex gap-2 overflow-x-auto">
              {images.map((src: string, i: number) => (
                <button
                  key={i}
                  onClick={() => onThumbClick(i)}
                  className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-md ring-2 transition-all ${
                    index === i ? "ring-white" : "ring-white/30 hover:ring-white/50"
                  }`}
                  aria-label={`Abrir imagem ${i + 1}`}
                >
                  <div className="relative h-full w-full bg-black/40">
                    <Image src={src} alt={`thumb ${i + 1}`} fill className="object-cover" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
