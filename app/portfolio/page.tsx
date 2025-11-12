"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
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
  X,
} from "lucide-react";
import {
  PROJECTS,
  Category,
  Project,
  TechnicalSheet,
} from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";

/* ==================== PÁGINA ==================== */

export default function PortfolioPage() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollReveal<HTMLDivElement>();

  const params = useSearchParams();
  const router = useRouter();

  const urlTab = (params.get("tab") as Category) || "breve";
  const highlightId = params.get("highlight") || undefined;

  const [tab, setTab] = useState<Category>(urlTab);
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
    title?: string;
  } | null>(null);

  // Atualiza o query param quando o usuário troca de aba
  useEffect(() => {
    const sp = new URLSearchParams(params.toString());
    sp.set("tab", tab);
    // mantém highlight se já existir
    router.replace(`/portfolio?${sp.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const filtered = useMemo(
    () => PROJECTS.filter((p) => p.category === tab),
    [tab]
  );

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
                index:
                  (prev.index - 1 + prev.images.length) %
                  prev.images.length,
              }
            : prev
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-14 sm:py-16">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className={`mb-8 sm:mb-10 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 uppercase tracking-wide text-gray-800">
            Nossos Empreendimentos
          </h1>
          <p className="text-center text-gray-600 text-base sm:text-lg md:text-xl mb-6 max-w-4xl mx-auto leading-relaxed">
            Conheça os projetos que construímos com qualidade, transparência e compromisso.
          </p>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#0891b2]" />
        </div>

        {/* Abas */}
        <Tabs tab={tab} onChange={setTab} />

        {/* Lista */}
        <div className="mt-8 space-y-10 sm:space-y-12">
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
                    index:
                      (prev.index - 1 + prev.images.length) %
                      prev.images.length,
                  }
                : prev
            )
          }
          onNext={() =>
            setLightbox((prev) =>
              prev
                ? {
                    ...prev,
                    index:
                      (prev.index + 1) % prev.images.length,
                  }
                : prev
            )
          }
          onThumbClick={(i: number) =>
            setLightbox((prev) =>
              prev ? { ...prev, index: i } : prev
            )
          }
        />
      )}

      <Footer />
    </div>
  );
}

/* ==================== COMPONENTES ==================== */

function Tabs({
  tab,
  onChange,
}: {
  tab: Category;
  onChange: (t: Category) => void;
}) {
  const base =
    "px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-all border";
  const active = "bg-[#0d7a8f] text-white border-[#0d7a8f] shadow-sm";
  const idle = "bg-white text-gray-700 border-gray-200 hover:bg-gray-50";

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      <button
        className={`${base} ${tab === "breve" ? active : idle}`}
        onClick={() => onChange("breve")}
      >
        Obras em andamento
      </button>
      <button
        className={`${base} ${tab === "residenciais" ? active : idle}`}
        onClick={() => onChange("residenciais")}
      >
        Prédios Residenciais
      </button>
      <button
        className={`${base} ${tab === "casas" ? active : idle}`}
        onClick={() => onChange("casas")}
      >
        Casas
      </button>
      <button
        className={`${base} ${tab === "comerciais" ? active : idle}`}
        onClick={() => onChange("comerciais")}
      >
        Comerciais
      </button>
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
  const fitClass = useContain
    ? "object-contain"
    : "object-cover object-center";
  const bgClass = useContain ? "bg-white" : "bg-gray-100";

  const shouldPriority =
    project.category === "breve" && index === 0;

  const whatsappUrl =
    project.category === "breve"
      ? `https://wa.me/5571992220164?text=${encodeURIComponent(
          `Olá, tenho interesse em investir no empreendimento ${project.name}. Poderia me enviar mais informações?`
        )}`
      : "";

  return (
    <div
      ref={cardRef}
      id={`project-${project.id}`}
      className={`transition-all duration-700 ${
        cardVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
    >
      <article
        className={`rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow ${
          highlight ? "border-[#0891b2]" : "border-gray-100"
        }`}
      >
        {/* Imagem principal */}
        <div className="p-5 sm:p-6">
          <button
            type="button"
            onClick={() => onOpenLightbox(activeIdx)}
            className="group block w-full"
            aria-label={`Ampliar imagens de ${project.name}`}
          >
            <div
              className={`relative overflow-hidden rounded-xl ${bgClass}
                h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]`}
            >
              <Image
                src={mainImage || "/placeholder.svg"}
                alt={project.name}
                fill
                className={`${fitClass} transition-transform duration-500 group-hover:scale-[1.02]`}
                sizes="(min-width:1280px) 1100px, (min-width:1024px) 960px, 100vw"
                priority={shouldPriority}
                onLoadingComplete={(img) =>
                  setIsPortrait(
                    (img as HTMLImageElement).naturalHeight >
                      (img as HTMLImageElement).naturalWidth
                  )
                }
              />
            </div>
          </button>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto">
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
                      alt={`${project.name} ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="px-5 sm:px-6 pb-6">
          <h2 className="mb-3 font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            {project.name}
          </h2>

          {/* Chips resumo */}
          <div className="mb-4 flex flex-wrap gap-2">
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

          {/* Ficha técnica: coluna única */}
          <div className="mt-5 rounded-xl border bg-white p-4 sm:p-5">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#4a5568]">
              Ficha técnica
            </h3>
            <dl className="grid grid-cols-1 gap-y-2 text-sm">
              <InfoRows sheet={T} />
            </dl>
          </div>

          {/* CTA Breve */}
          {project.category === "breve" && (
            <div className="mt-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full border-2 border-gray-800 bg-transparent px-8 py-4 sm:py-5 font-bold uppercase tracking-wide text-gray-800 hover:scale-105 hover:bg-gray-800 hover:text-white w-full sm:w-auto"
                >
                  Quero Investir
                </Button>
              </a>
            </div>
          )}
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
      {T.infrastructure && (
        <Row label="Infraestrutura" value={T.infrastructure} />
      )}
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="min-w-[140px] font-semibold text-gray-800">
        {label}
      </dt>
      <dd className="text-gray-700">{value}</dd>
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
      <div
        className="relative h-full w-full"
        onClick={(e) => e.stopPropagation()}
      >
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

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 mx-auto w-full max-w-6xl px-3 sm:px-8">
            <div className="flex gap-2 overflow-x-auto">
              {images.map((src, i: number) => (
                <button
                  key={`lightbox-thumb-${i}`}
                  onClick={() => onThumbClick(i)}
                  className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-md ring-2 transition-all ${
                    index === i
                      ? "ring-white"
                      : "ring-white/30 hover:ring-white/50"
                  }`}
                  aria-label={`Abrir imagem ${i + 1}`}
                >
                  <div className="relative h-full w-full bg-black/40">
                    <Image
                      src={src}
                      alt={`thumb ${i + 1}`}
                      fill
                      className="object-cover"
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
