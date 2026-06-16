"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsappUrl } from "@/lib/site-content"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Quem Somos Nós", href: "/sobre" },
  { name: "Contato", href: "#contato" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const consultorUrl = getWhatsappUrl(
    "Olá! Gostaria de falar com um consultor da REALIZA Engenharia."
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1E2A32]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-2 sm:h-24 lg:h-32 lg:gap-4">
          <Link
            href="/"
            className="relative block h-12 w-32 shrink-0 min-[380px]:w-36 sm:h-[72px] sm:w-52 lg:h-24 lg:w-72"
            aria-label="Ir para a página inicial da REALIZA Engenharia"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/brand/realiza-logo-white.webp"
              alt="REALIZA Engenharia"
              fill
              sizes="(min-width: 1024px) 288px, (min-width: 640px) 208px, (min-width: 380px) 144px, 128px"
              quality={90}
              className="object-contain object-left"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Menu principal">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-white/90 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              asChild
              className="h-11 rounded-md bg-[#2A98AA] px-5 font-semibold text-white shadow-sm hover:bg-[#238799]"
            >
              <a
                href={consultorUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com um consultor pelo WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                Falar com um consultor
              </a>
            </Button>
          </div>

          <div
            className="flex shrink-0 items-center gap-2 lg:hidden"
            style={{
              alignItems: "center",
              display: "flex",
              gap: "0.5rem",
              position: "fixed",
              right: "1rem",
              top: "1.25rem",
              width: "5.5rem",
              zIndex: 60,
            }}
          >
            <Button
              asChild
              className="h-10 w-10 rounded-md bg-[#2A98AA] p-0 text-white shadow-sm hover:bg-[#238799] has-[>svg]:px-0"
            >
              <a
                href={consultorUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com um consultor pelo WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </Button>

            <button
              type="button"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#1E2A32] px-4 py-4 shadow-lg lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Menu mobile">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
