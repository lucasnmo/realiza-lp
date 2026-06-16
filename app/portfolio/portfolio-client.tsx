// app/portfolio/portfolio-client.tsx
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  ChevronDown,
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

        <section className="relative z-10 mx-auto -mt-8 w-full max-w-full px-4 pb-14 sm:max-w-7xl sm:px-6 sm:pb-16 lg:px-8">
          <Tabs tab={tab} onChange={setTab} counts={tabCounts} />

          <div className="mt-5 space-y-5 sm:mt-10 sm:space-y-8">
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
    <div className="mx-auto w-full rounded-lg border border-black/10 bg-white p-1.5 shadow-[0_14px_34px_rgba(20,33,40,0.10)] lg:w-fit lg:max-w-[calc(100vw-2rem)]">
  <div className="grid gap-1.5 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-center">
        {TAB_ITEMS.map(({ value, label, Icon }) => {
          const active = tab === value;

          return (
            <button
              key={value}
              type="button"
              className={`flex min-h-[52px] items-center gap-2 rounded-md px-2.5 py-2 text-left transition-all lg:min-h-[46px] lg:w-auto lg:px-2 lg:py-1.5 ${
                active
                  ? "bg-[#1E2A32] text-white shadow-md"
                  : "bg-[#F7F8F6] text-[#1E2A32] hover:bg-[#E9EEF0]"
              }`}
              onClick={() => onChange(value)}
            >
              <span
                className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-md ${
                  active ? "bg-white/12 text-[#78C9D6]" : "bg-white text-[#2A98AA]"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-bold leading-tight">{label}</span>
                <span
                  className={`mt-0.5 block text-[11px] ${
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
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[11px] text-gray-700 sm:px-2.5 sm:py-1 sm:text-xs">
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
  const [isTechnicalSheetOpen, setIsTechnicalSheetOpen] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [settleDirection, setSettleDirection] = useState<-1 | 0 | 1>(0);
  const touchStartRef = useRef<{
    x: number;
    y: number;
    width: number;
    isHorizontal: boolean;
  } | null>(null);
  const didSwipeRef = useRef(false);

  const mainImage = project.images[activeIdx] ?? project.images[0];
  const T = project.technicalSheet;
  const technicalSheetId = `technical-sheet-${project.id}`;
  const hasMultipleImages = project.images.length > 1;
  const fitClass = "object-contain";

  const isInvestmentCategory = isInvestmentProject(project);

  const shouldPriority = isInvestmentCategory && index === 0;
  const galleryImages = useMemo(() => {
    if (!hasMultipleImages) return [mainImage];

    return [
      project.images[
        (activeIdx - 1 + project.images.length) % project.images.length
      ],
      mainImage,
      project.images[(activeIdx + 1) % project.images.length],
    ];
  }, [activeIdx, hasMultipleImages, mainImage, project.images]);
  const galleryTransform = hasMultipleImages
    ? `translate3d(calc(-100% + ${dragOffset}px), 0, 0)`
    : "translate3d(0, 0, 0)";
  const preventClickAfterDrag = () => {
    didSwipeRef.current = true;
    window.setTimeout(() => {
      didSwipeRef.current = false;
    }, 450);
  };
  const goToImage = useCallback(
    (nextIndex: number) => {
      if (!project.images.length) return;
      setDragOffset(0);
      setSettleDirection(0);
      setIsDragging(false);
      setActiveIdx(
        (nextIndex + project.images.length) % project.images.length
      );
    },
    [project.images.length]
  );
  const showPreviousImage = useCallback(() => {
    goToImage(activeIdx - 1);
  }, [activeIdx, goToImage]);
  const showNextImage = useCallback(() => {
    goToImage(activeIdx + 1);
  }, [activeIdx, goToImage]);
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!hasMultipleImages) return;
    const touch = event.touches[0];
    const width = event.currentTarget.clientWidth || 1;
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      width,
      isHorizontal: false,
    };
    didSwipeRef.current = false;
    setSettleDirection(0);
    setDragOffset(0);
    setIsDragging(true);
  };
  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    const touch = event.touches[0];

    if (!start || !touch || !hasMultipleImages) return;

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;

    if (!start.isHorizontal) {
      if (Math.abs(deltaX) < 6 && Math.abs(deltaY) < 6) return;

      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        touchStartRef.current = null;
        setIsDragging(false);
        setDragOffset(0);
        return;
      }

      start.isHorizontal = true;
    }

    event.preventDefault();

    if (Math.abs(deltaX) > 8) {
      didSwipeRef.current = true;
    }

    const maxOffset = start.width * 0.98;
    setDragOffset(Math.max(-maxOffset, Math.min(maxOffset, deltaX)));
  };
  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    const touch = event.changedTouches[0];
    touchStartRef.current = null;

    if (!start || !touch || !hasMultipleImages) return;

    const deltaX = touch.clientX - start.x;
    const shouldChangeImage =
      start.isHorizontal && Math.abs(deltaX) > Math.min(90, start.width * 0.2);

    if (!start.isHorizontal) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    preventClickAfterDrag();
    setIsDragging(false);

    if (!shouldChangeImage) {
      setSettleDirection(0);
      setDragOffset(0);
      return;
    }

    const nextDirection = deltaX < 0 ? 1 : -1;
    setSettleDirection(nextDirection);
    setDragOffset(nextDirection === 1 ? -start.width : start.width);
  };
  const handleTouchCancel = () => {
    touchStartRef.current = null;
    setIsDragging(false);
    setSettleDirection(0);
    setDragOffset(0);
  };
  const handleGalleryTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>
  ) => {
    if (event.target !== event.currentTarget) return;
    if (!settleDirection || !hasMultipleImages) return;

    setIsDragging(true);
    setActiveIdx(
      (activeIdx + settleDirection + project.images.length) %
        project.images.length
    );
    setDragOffset(0);
    setSettleDirection(0);

    window.requestAnimationFrame(() => {
      setIsDragging(false);
    });
  };
  const handleImageClick = () => {
    if (didSwipeRef.current) {
      didSwipeRef.current = false;
      return;
    }

    onOpenLightbox(activeIdx);
  };
  const handleImageKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpenLightbox(activeIdx);
    }

    if (!hasMultipleImages) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousImage();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextImage();
    }
  };

  return (
    <div
      ref={cardRef}
      id={`project-${project.id}`}
      className={`mx-auto w-full max-w-6xl transition-all duration-700 ${
        cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <article
        className={`w-full overflow-hidden rounded-lg border bg-white shadow-[0_16px_42px_rgba(20,33,40,0.10)] transition-shadow hover:shadow-[0_28px_75px_rgba(20,33,40,0.16)] sm:rounded-xl sm:shadow-[0_22px_60px_rgba(20,33,40,0.12)] ${
          highlight ? "border-[#2A98AA] ring-2 ring-[#2A98AA]/25" : "border-black/10"
        }`}
      >
        <div className="border-b border-black/10 bg-white px-4 py-4 text-center sm:px-6 sm:py-5 lg:px-10">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2A98AA]">
                {isInvestmentCategory ? "Oportunidade" : "Empreendimento entregue"}
              </p>
              {isInvestmentCategory && (
                <span className="inline-flex w-fit rounded-md bg-[#2A98AA] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                  {getProjectStatus(project)}
                </span>
              )}
            </div>
            <h2 className="mx-auto mt-2 max-w-4xl text-xl font-bold leading-tight text-[#1E2A32] sm:text-2xl lg:text-[28px]">
              {project.name}
            </h2>
            {T.address && (
              <p className="mx-auto mt-2 flex max-w-3xl items-start justify-center gap-2 text-center text-[13px] leading-5 text-gray-600 sm:text-sm sm:leading-6">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2A98AA]" />
                <span>{T.address}</span>
              </p>
            )}
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)] lg:items-stretch xl:grid-cols-[minmax(0,0.95fr)_minmax(380px,0.68fr)]">
        {/* Imagem principal */}
        <div className="bg-[#DDE5E8] p-2 sm:p-4 lg:flex lg:flex-col lg:justify-start lg:p-5">
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            className="group mx-auto block w-full touch-pan-y select-none"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-white shadow-inner min-[400px]:aspect-[16/9] sm:rounded-lg lg:aspect-auto lg:h-[340px] xl:h-[380px]">
              <div
                className={`flex h-full ${
                  isDragging ? "" : "transition-transform duration-300 ease-out"
                }`}
                style={{ transform: galleryTransform }}
                onTransitionEnd={handleGalleryTransitionEnd}
              >
                {galleryImages.map((src, galleryIndex) => (
                  <div
                    key={`${project.id}-${activeIdx}-${galleryIndex}-${src}`}
                    className="relative h-full min-w-full bg-white"
                  >
                    <Image
                      src={src || "/placeholders/placeholder.svg"}
                      alt={`${project.name} - imagem do empreendimento`}
                      fill
                      className={`${fitClass} transition-transform duration-500 group-hover:scale-[1.01]`}
                      sizes="(min-width:1280px) 720px, (min-width:1024px) 58vw, 100vw"
                      quality={86}
                      priority={
                        shouldPriority &&
                        galleryIndex === (hasMultipleImages ? 1 : 0)
                      }
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleImageClick}
                onKeyDown={handleImageKeyDown}
                className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2A98AA]"
                aria-label={`Ampliar imagens de ${project.name}`}
              />
              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      showPreviousImage();
                    }}
                    className="absolute left-3 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-[#1E2A32]/70 text-white shadow-md backdrop-blur transition hover:bg-[#1E2A32]/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A98AA] sm:h-9 sm:w-9 sm:opacity-75 sm:group-hover:opacity-100"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      showNextImage();
                    }}
                    className="absolute right-3 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-[#1E2A32]/70 text-white shadow-md backdrop-blur transition hover:bg-[#1E2A32]/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A98AA] sm:h-9 sm:w-9 sm:opacity-75 sm:group-hover:opacity-100"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </>
              )}
              <span className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 rounded-md bg-black/55 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:bottom-4 sm:right-4 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs">
                <ImageIcon className="h-4 w-4" aria-hidden="true" />
                {activeIdx + 1}/{project.images.length}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="mt-2 flex gap-2 overflow-x-auto pb-1 sm:mt-3 lg:justify-center">
              {project.images.map((src, i: number) => (
                <button
                  key={`${project.id}-${i}`}
                  onClick={() => setActiveIdx(i)}
                  className={`relative h-12 w-16 flex-shrink-0 overflow-hidden rounded-md ring-1 transition-all sm:h-14 sm:w-20 ${
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
        <div className="bg-white px-4 py-4 sm:px-6 sm:py-5 lg:flex lg:flex-col lg:justify-center lg:border-l lg:border-black/10 lg:px-6 lg:py-6 xl:px-8">
          {/* Chips resumo */}
          <div className="rounded-md border border-gray-200 bg-[#F7F8F6] p-3 text-center sm:rounded-lg sm:p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1E2A32] sm:mb-3 sm:text-sm">
              Resumo do projeto
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
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
          <div className="mt-4 rounded-md border border-gray-200 bg-white p-3 shadow-[0_10px_24px_rgba(20,33,40,0.05)] sm:mt-5 sm:rounded-lg sm:p-5 sm:shadow-[0_12px_30px_rgba(20,33,40,0.06)]">
            <div className="flex items-center justify-between gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wide text-[#4a5568] sm:text-sm">
              Ficha técnica
            </h3>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-[#F7F8F6] px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#1E2A32] transition-colors hover:bg-[#EEF2F3] sm:hidden"
                aria-expanded={isTechnicalSheetOpen}
                aria-controls={technicalSheetId}
                onClick={() => setIsTechnicalSheetOpen((open) => !open)}
              >
                {isTechnicalSheetOpen ? "Ocultar" : "Mostrar completo"}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    isTechnicalSheetOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
            <dl
              id={technicalSheetId}
              className={`mt-3 grid-cols-1 gap-y-1.5 text-[13px] sm:grid sm:gap-y-2 sm:text-sm ${
                isTechnicalSheetOpen ? "grid" : "hidden"
              }`}
            >
              <InfoRows sheet={T} />
            </dl>
          </div>

          <div className="mt-4 flex justify-center sm:mt-5">
            {isInvestmentCategory ? (
              <Button
                asChild
                size="lg"
                className="w-full rounded-md bg-[#2A98AA] px-5 py-3 font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:scale-[1.01] hover:bg-[#217f8f] sm:w-auto sm:px-8 sm:py-5"
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
                className="w-full rounded-md bg-[#1E2A32] px-5 py-3 font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:scale-[1.01] hover:bg-[#2B3B45] sm:w-auto sm:px-8 sm:py-5"
              >
                Ver galeria
              </Button>
            )}
          </div>
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
    <div className="grid gap-0.5 sm:grid-cols-[130px_1fr] sm:gap-3">
      <dt className="font-semibold text-gray-800 sm:text-right">{label}</dt>
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
