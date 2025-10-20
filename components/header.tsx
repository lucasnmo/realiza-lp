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
    { name: "ESPECIALIDADES", href: "#especialidades" },
    { name: "QUEM SOMOS NÓS", href: "/sobre" },
    { name: "CONTATO", href: "#contato" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#4a5568]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/realiza-logo-white.png"
              alt="REALIZA Engenharia"
              width={200}
              height={60}
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 flex-1">
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

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
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
