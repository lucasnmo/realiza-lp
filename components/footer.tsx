import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Quem Somos", href: "/sobre" },
    { name: "Contato", href: "#contato" },
  ]

  const socialLinks = [
    { icon: Facebook,  href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin,  href: "#", label: "LinkedIn" },
  ]

  return (
    <footer id="contato" className="bg-[var(--color-foreground)] text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-16 max-w-7xl">
        {/* +1 coluna para “Conecte-se” */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-14">
          {/* Logo + texto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image src="/realiza-logo-white.png" alt="REALIZA Engenharia" width={140} height={45} className="mb-6" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Engenharia de qualidade, com transparência e compromisso.
              Construindo sonhos desde 2009.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5">Links Rápidos</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  Rua Professor Rômulo Almeida, 217<br />
                  Sala 02 - Acupe de Brotas<br />
                  Salvador, BA
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+557132769191" className="hover:text-white">(71) 3276.9191</a><br />
                  <a href="tel:+5571992470390" className="hover:text-white">(71) 99247.0390</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:contato@realizaeng.com.br" className="hover:text-white">
                  contato@realizaeng.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Conecte-se Conosco (migrado para o rodapé) */}
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5">Conecte-se Conosco</h3>
            <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mb-5">
              {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="icon"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href={href} aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-xs text-gray-300/90">
              Acompanhe novidades, obras e bastidores nas nossas redes.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/15 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>© {new Date().getFullYear()} REALIZA Engenharia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
