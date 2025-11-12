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
    <header className="sticky top-0 z-50 w-full bg-[#1E2A32]/95 backdrop-blur-sm shadow-md">
      <div className="mx-auto max-w-[1350px] px-6 sm:px-10">
        <div className="flex h-24 sm:h-28 items-center justify-between relative">
          {/* LOGO */}
          <Link
            href="/"
            className="
              flex items-center justify-center 
              w-full md:w-auto
              md:ml-24
            "
          >
            <div className="h-16 sm:h-20 md:h-24 flex items-center">
              <Image
                src="/realiza-logo-white.png"
                alt="REALIZA Engenharia"
                width={320}
                height={100}
                className="site-logo"
                priority
              />
            </div>
          </Link>

          {/* MENU DESKTOP CENTRALIZADO */}
          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
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
            className="md:hidden text-white hover:bg-white/10 absolute right-6 top-7"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
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
