// app/portfolio/portfolio-client.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FinalCTASection from "@/components/final-cta-section";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Calendar,
  Ruler,
  Layers,
  Bed,
  ChevronLeft,
  ChevronRight,
  BriefcaseBusiness,
  Building2,
  Hammer,
  Home,
  ImageIcon,
  MapPin,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  getProjectStatus,
  isInvestmentProject,
  PROJECTS,
  Category,
  Project,
  TechnicalSheet,
} from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import { getWhatsappUrl } from "@/lib/site-content";

/* ==================== PÁGINA ==================== */

const VALID_TABS: Category[] = [
  "em_construcao",
  "breve_lancamento",
  "residenciais",
  "casas",
  "comerciais",
];

const TAB_ITEMS: Array<{
  value: Category;
  label: string;
  description: string;
  Icon: LucideIcon;
}> = [
  {
    value: "em_construcao",
    label: "Em construção",
    description: "Obras em andamento com oportunidade de investimento.",
    Icon: Hammer,
  },
  {
    value: "breve_lancamento",
    label: "Breve lançamento",
    description: "Projetos em fase de preparação comercial.",
    Icon: Sparkles,
  },
  {
    value: "residenciais",
    label: "Prédios residenciais",
    description: "Edifícios entregues pela REALIZA em Salvador.",
    Icon: Building2,
  },
  {
    value: "casas",
    label: "Casas",
    description: "Residências exclusivas e projetos sob medida.",
    Icon: Home,
  },
  {
    value: "comerciais",
    label: "Comerciais",
    description: "Empreendimentos corporativos, clínicas e hotelaria.",
    Icon: BriefcaseBusiness,
  },
];

export default function PortfolioPageClient() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollReveal<HTMLDivElement>();

  const params = useSearchParams();
  const router = useRouter();

  const rawTab = params.get("tab") as Category | null;
  const initialTab: Category = VALID_TABS.includes(rawTab as Category)
    ? (rawTab as Category)
    : "em_construcao";

  const highlightId = params.get("highlight") || undefined;

  const [tab, setTab] = useState<Category>(initialTab);
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
    title?: string;
  } | null>(null);

  // Atualiza o query param quando o usuário troca de aba
  useEffect(() => {
    const sp = new URLSearchParams(params.toString());
    sp.set("tab", tab);
    router.replace(`/portfolio?${sp.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const filtered = useMemo(
    () => PROJECTS.filter((p) => p.category === tab),
    [tab]
  );
  const tabCounts = useMemo(
    () =>
      VALID_TABS.reduce((acc, category) => {
        acc[category] = PROJECTS.filter(
          (project) => project.category === category
        ).length;
        return acc;
      }, {} as Record<Category, number>),
    []
  );
  const activeMeta = TAB_ITEMS.find((item) => item.value === tab) ?? TAB_ITEMS[0];
  const ActiveIcon = activeMeta.Icon;
  const coverProject = filtered[0] ?? PROJECTS[0];

  // Rola e destaca o card de highlight (se existir)
  useEffect(() => {
    if (!highlightId) return;
    const el = document.getElementById(`project-${highlightId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("ring-2", "ring-[#0891b2]");
      const t = setTimeout(() => {
        el.classList.remove("ring-2", "ring-[#0891b2]");
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [highlightId, tab]);

  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((prev) =>
          prev
            ? { ...prev, index: (prev.index + 1) % prev.images.length }
            : prev
        );
      if (e.key === "ArrowLeft")
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index: (prev.index - 1 + prev.images.length) % prev.images.length,
              }
            : prev
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F8F6]">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden bg-[#1E2A32] text-white">
          {coverProject?.images?.[0] && (
            <Image
              src={coverProject.images[0]}
              alt=""
              fill
              priority
              aria-hidden="true"
              quality={78}
              className="object-cover opacity-25"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#101A20] via-[#101A20]/88 to-[#101A20]/58" />
          <div
            ref={headerRef}
            className={`relative z-10 mx-auto grid w-full max-w-[358px] gap-8 px-4 py-14 transition-all duration-700 sm:max-w-7xl sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20 ${
              headerVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <div className="min-w-0 max-w-3xl">
              <p className="inline-flex rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/85">
                Portfólio REALIZA
              </p>
              <h1 className="mt-5 max-w-4xl break-words text-[28px] font-bold leading-tight sm:text-5xl lg:text-[56px]">
                <span className="block sm:inline">Empreendimentos</span>{" "}
                <span className="block sm:inline">com obra, gestão e</span>{" "}
                <span className="block sm:inline">entrega em foco</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                Explore residenciais, casas e projetos comerciais conduzidos pela
                REALIZA em Salvador e região.
              </p>
              <div className="mt-7 grid w-full max-w-xl grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3 sm:grid-cols-3">
                <PortfolioStat value={PROJECTS.length.toString()} label="projetos" />
                <PortfolioStat value="5" label="categorias" />
                <PortfolioStat value="15+" label="anos" />
              </div>
            </div>

            <div className="w-full min-w-0 self-end rounded-lg border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-md bg-[#2A98AA] text-white">
                  <ActiveIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#78C9D6]">
                    Seleção atual
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">{activeMeta.label}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    {activeMeta.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-white/85">
                {filtered.length}{" "}
                {filtered.length === 1 ? "empreendimento" : "empreendimentos"}{" "}
                nesta categoria
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-8 w-full max-w-[358px] px-4 pb-14 sm:max-w-7xl sm:px-6 sm:pb-16 lg:px-8">
          <Tabs tab={tab} onChange={setTab} counts={tabCounts} />

          <div className="mt-8 space-y-8 sm:mt-10">
          {filtered.length === 0 && (
            <p className="text-center text-sm sm:text-base text-gray-500">
              Em breve novos empreendimentos nesta categoria.
            </p>
          )}

          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              highlight={highlightId === project.id}
              onOpenLightbox={(startIndex) =>
                setLightbox({
                  images: project.images,
                  index: startIndex,
                  title: project.name,
                })
              }
            />
          ))}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <LightboxOverlay
          title={lightbox.title}
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onPrev={() =>
            setLightbox((prev) =>
              prev
                ? {
                    ...prev,
                    index: (prev.index - 1 + prev.images.length) % prev.images.length,
                  }
                : prev
            )
          }
          onNext={() =>
            setLightbox((prev) =>
              prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : prev
            )
          }
          onThumbClick={(i: number) =>
            setLightbox((prev) => (prev ? { ...prev, index: i } : prev))
          }
        />
      )}

      <FinalCTASection />
      <Footer />
    </div>
  );
}

/* ==================== COMPONENTES ==================== */

function PortfolioStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0 rounded-lg border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
      <div className="text-xl font-extrabold leading-none">{value}</div>
      <div className="mt-1 break-words text-[11px] font-bold uppercase tracking-[0.1em] text-white/65">
        {label}
      </div>
    </div>
  );
}

function Tabs({
  tab,
  onChange,
  counts,
}: {
  tab: Category;
  onChange: (t: Category) => void;
  counts: Record<Category, number>;
}) {
  return (
    <div className="w-full rounded-lg border border-black/10 bg-white p-2 shadow-[0_18px_45px_rgba(20,33,40,0.12)]">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {TAB_ITEMS.map(({ value, label, Icon }) => {
          const active = tab === value;

          return (
            <button
              key={value}
              type="button"
              className={`flex min-h-16 items-center gap-3 rounded-md px-3 py-3 text-left transition-all ${
                active
                  ? "bg-[#1E2A32] text-white shadow-md"
                  : "bg-[#F7F8F6] text-[#1E2A32] hover:bg-[#E9EEF0]"
              }`}
              onClick={() => onChange(value)}
            >
              <span
                className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-md ${
                  active ? "bg-white/12 text-[#78C9D6]" : "bg-white text-[#2A98AA]"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold leading-tight">{label}</span>
                <span
                  className={`mt-1 block text-xs ${
                    active ? "text-white/65" : "text-gray-500"
                  }`}
                >
                  {counts[value]} {counts[value] === 1 ? "projeto" : "projetos"}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---- CHIP ---- */

function Chip({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
      {icon}
      {children}
    </span>
  );
}

/* ---- CARD ---- */

function ProjectCard({
  project,
  onOpenLightbox,
  index,
  highlight,
}: {
  project: Project;
  onOpenLightbox: (startIndex: number) => void;
  index: number;
  highlight?: boolean;
}) {
  const { ref: cardRef, isVisible: cardVisible } =
    useScrollReveal<HTMLDivElement>();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);

  const mainImage = project.images[activeIdx] ?? project.images[0];
  const T = project.technicalSheet;
  const isHouse = project.category === "casas";

  const useContain = isHouse || isPortrait;
  const fitClass = useContain ? "object-contain" : "object-cover object-center";
  const bgClass = useContain ? "bg-white" : "bg-gray-100";

  const isInvestmentCategory = isInvestmentProject(project);

  const shouldPriority = isInvestmentCategory && index === 0;

  return (
    <div
      ref={cardRef}
      id={`project-${project.id}`}
      className={`transition-all duration-700 ${
        cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <article
        className={`overflow-hidden rounded-xl border bg-white shadow-[0_22px_60px_rgba(20,33,40,0.12)] transition-shadow hover:shadow-[0_28px_75px_rgba(20,33,40,0.16)] ${
          highlight ? "border-[#2A98AA] ring-2 ring-[#2A98AA]/25" : "border-black/10"
        }`}
      >
        <div className="border-b border-black/10 bg-white px-5 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2A98AA]">
                {isInvestmentCategory ? "Oportunidade" : "Empreendimento entregue"}
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-tight text-[#1E2A32] sm:text-3xl">
                {project.name}
              </h2>
              {T.address && (
                <p className="mt-3 flex max-w-3xl items-start gap-2 text-sm leading-6 text-gray-600">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2A98AA]" />
                  <span>{T.address}</span>
                </p>
              )}
            </div>
            <span
              className={`inline-flex w-fit rounded-md px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] ${
                isInvestmentCategory
                  ? "bg-[#2A98AA] text-white"
                  : "bg-[#EEF2F3] text-[#1E2A32]"
              }`}
            >
              {getProjectStatus(project)}
            </span>
          </div>
        </div>
        {/* Imagem principal */}
        <div className="bg-[#DDE5E8] p-3 sm:p-4 lg:p-5">
          <button
            type="button"
            onClick={() => onOpenLightbox(activeIdx)}
            className="group block w-full"
            aria-label={`Ampliar imagens de ${project.name}`}
          >
            <div
              className={`relative h-[310px] overflow-hidden rounded-lg shadow-inner sm:h-[390px] md:h-[460px] lg:h-[540px] ${bgClass}`}
            >
              <Image
                src={mainImage || "/placeholders/placeholder.svg"}
                alt={`${project.name} - imagem principal do empreendimento`}
                fill
                className={`${fitClass} transition-transform duration-500 group-hover:scale-[1.02]`}
                sizes="(min-width:1280px) 1100px, (min-width:1024px) 960px, 100vw"
                quality={86}
                priority={shouldPriority}
                onLoad={(event) => {
                  const img = event.currentTarget;
                  setIsPortrait(img.naturalHeight > img.naturalWidth);
                }}
              />
              <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md bg-black/55 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                <ImageIcon className="h-4 w-4" aria-hidden="true" />
                {activeIdx + 1}/{project.images.length}
              </span>
            </div>
          </button>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {project.images.map((src, i: number) => (
                <button
                  key={`${project.id}-${i}`}
                  onClick={() => setActiveIdx(i)}
                  className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-md ring-1 transition-all ${
                    activeIdx === i
                      ? "ring-[#0891b2]"
                      : "ring-gray-200 hover:ring-gray-300"
                  }`}
                  aria-label={`Trocar para imagem ${i + 1}`}
                >
                  <div className="relative h-full w-full bg-gray-100">
                    <Image
                      src={src}
                      alt={`${project.name} - miniatura ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                      quality={68}
                    />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Conteúdo (restante) */}
        <div className="bg-white px-5 py-5 sm:px-6 lg:px-8 lg:py-7">
          {/* Chips resumo */}
          <div className="rounded-lg border border-gray-200 bg-[#F7F8F6] p-4 sm:p-5">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#1E2A32]">
              Resumo do projeto
            </p>
            <div className="flex flex-wrap gap-2">
            {T.year && (
              <Chip icon={<Calendar className="h-3.5 w-3.5 text-[#4a5568]" />}>
                {T.year}
              </Chip>
            )}
            {T.totalArea && (
              <Chip icon={<Ruler className="h-3.5 w-3.5 text-[#4a5568]" />}>
                {T.totalArea}
              </Chip>
            )}
            {T.floors && (
              <Chip icon={<Layers className="h-3.5 w-3.5 text-[#4a5568]" />}>
                {T.floors} pav.
              </Chip>
            )}
            {T.bedrooms && (
              <Chip icon={<Bed className="h-3.5 w-3.5 text-[#4a5568]" />}>
                {T.bedrooms}
              </Chip>
            )}
            {T.unitArea && (
              <Chip icon={<Ruler className="h-3.5 w-3.5 text-[#4a5568]" />}>
                {T.unitArea}
              </Chip>
            )}
            </div>
          </div>

          {/* Ficha técnica: coluna única */}
          <div className="mt-5 rounded-lg border border-gray-200 bg-white p-4 shadow-[0_12px_30px_rgba(20,33,40,0.06)] sm:p-5">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#4a5568]">
              Ficha técnica
            </h3>
            <dl className="grid grid-cols-1 gap-y-2 text-sm">
              <InfoRows sheet={T} />
            </dl>
          </div>

          <div className="mt-5">
            {isInvestmentCategory ? (
              <Button
                asChild
                size="lg"
                className="w-full rounded-md bg-[#2A98AA] px-8 py-4 font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:scale-[1.01] hover:bg-[#217f8f] sm:w-auto sm:py-5"
              >
                <a
                  href={getWhatsappUrl(
                    `Olá, tenho interesse em investir no empreendimento ${project.name}. Poderia me enviar mais informações?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Quero investir no empreendimento ${project.name}`}
                >
                  Quero investir
                </a>
              </Button>
            ) : (
              <Button
                type="button"
                size="lg"
                onClick={() => onOpenLightbox(activeIdx)}
                className="w-full rounded-md bg-[#1E2A32] px-8 py-4 font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:scale-[1.01] hover:bg-[#2B3B45] sm:w-auto sm:py-5"
              >
                Ver galeria
              </Button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

/* ---- FICHA TÉCNICA ---- */

function InfoRows({ sheet: T }: { sheet: TechnicalSheet }) {
  return (
    <>
      {T.year && <Row label="Ano" value={T.year} />}
      {T.regime && <Row label="Regime" value={T.regime} />}
      {T.address && <Row label="Endereço" value={T.address} />}
      {T.architect && <Row label="Arquiteto" value={T.architect} />}
      {T.totalArea && <Row label="Área total" value={T.totalArea} />}
      {T.floors && <Row label="Pavimentos" value={T.floors} />}
      {T.bedrooms && <Row label="Dormitórios" value={T.bedrooms} />}
      {T.unitArea && <Row label="Área das unidades" value={T.unitArea} />}
      {T.infrastructure && <Row label="Infraestrutura" value={T.infrastructure} />}
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-2">
      <dt className="font-semibold text-gray-800">{label}</dt>
      <dd className="min-w-0 break-words text-gray-700">{value}</dd>
    </div>
  );
}

/* ---- LIGHTBOX ---- */

function LightboxOverlay({
  title,
  images,
  index,
  onClose,
  onPrev,
  onNext,
  onThumbClick,
}: {
  title?: string;
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onThumbClick: (i: number) => void;
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

        {/* Título */}
        {title && (
          <div className="absolute left-4 top-4 text-sm text-white/90 sm:text-base">
            {title}
          </div>
        )}

        {/* Controles */}
        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-4"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-4"
          aria-label="Próxima"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

        {/* Imagem principal */}
        <div className="flex h-full items-center justify-center px-3 sm:px-8">
          <div className="relative w-full max-w-6xl">
            <div className="relative h-[58vh] sm:h-[68vh] md:h-[72vh]">
              <Image
                src={images[index] || "/placeholders/placeholder.svg"}
                alt={`${title || "Empreendimento"} - imagem ampliada ${index + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
                priority
              />
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 mx-auto w-full max-w-6xl px-3 sm:px-8">
            <div className="flex gap-2 overflow-x-auto">
              {images.map((src, i: number) => (
                <button
                  key={`lightbox-thumb-${i}`}
                  onClick={() => onThumbClick(i)}
                  className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-md ring-2 transition-all ${
                    index === i ? "ring-white" : "ring-white/30 hover:ring-white/50"
                  }`}
                  aria-label={`Abrir imagem ${i + 1}`}
                >
                  <div className="relative h-full w-full bg-black/40">
                    <Image
                      src={src}
                      alt={`${title || "Empreendimento"} - miniatura ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                      quality={68}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
