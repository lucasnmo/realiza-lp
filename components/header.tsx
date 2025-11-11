"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "PORTFÓLIO", href: "/portfolio" },
    { name: "QUEM SOMOS NÓS", href: "/sobre" },
    { name: "CONTATO", href: "#contato" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1E2A32]/95 backdrop-blur-sm shadow-md py-2 sm:py-3">
      {/* Container com leve centralização */}
      <div className="mx-auto max-w-[1350px] px-8 sm:px-10">
        <div className="flex h-20 items-center justify-between gap-8">
          {/* LOGO — ligeiramente deslocada à direita */}
          <Link href="/" className="flex items-center pl-10 sm:pl-14 md:pl-16">
            <Image
              src="/realiza-logo-white.png"
              alt="REALIZA Engenharia"
              width={290}
              height={90}
              className="h-[78px] sm:h-[84px] md:h-[88px] w-auto"
              priority
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 flex-1 pr-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-white hover:text-gray-200 transition-colors uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* BOTÃO MENU MOBILE */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </Button>
        </div>

        {/* MENU MOBILE */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-sm font-bold text-white hover:text-gray-200 transition-colors uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
