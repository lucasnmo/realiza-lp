import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsappUrl, WHATSAPP_DISPLAY } from "@/lib/site-content"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Quem Somos Nós", href: "/sobre" },
  { name: "Contato", href: "#contato" },
]

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/realiza.eng/",
    label: "Instagram da REALIZA Engenharia",
  },
]

export default function Footer() {
  const whatsappUrl = getWhatsappUrl(
    "Olá! Gostaria de mais informações sobre a REALIZA Engenharia."
  )

  return (
    <footer id="contato" className="bg-[#1E2A32] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.65fr_1fr_0.7fr]">
          <div>
            <Image
              src="/realiza-logo-white.png"
              alt="REALIZA Engenharia"
              width={190}
              height={60}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Engenharia em Salvador com gestão técnica, transparência e
              compromisso na condução de empreendimentos residenciais e
              comerciais.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold">Links rápidos</h2>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold">Contato</h2>
            <ul className="mt-4 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-[#78C9D6]" />
                <span>
                  Marginal da Avenida Vasco da Gama, 3691
                  <br />
                  Sala 1404 - Acupe
                  <br />
                  Salvador - BA, 40290-350
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-none text-[#78C9D6]" />
                <a href="tel:+557132769191" className="hover:text-white">
                  (71) 3276.9191
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 flex-none text-[#78C9D6]" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-none text-[#78C9D6]" />
                <a href="mailto:contato@realizaeng.com.br" className="hover:text-white">
                  contato@realizaeng.com.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold">Redes sociais</h2>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Button
                  key={label}
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-md border-white/20 bg-white/10 text-white hover:bg-white hover:text-[#1E2A32]"
                >
                  <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Acompanhe obras, novidades e bastidores da REALIZA.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} REALIZA Engenharia. Todos os direitos reservados.</p>
          <p className="mt-2">Site desenvolvido por Moreno Digital Studio.</p>
        </div>
      </div>
    </footer>
  )
}
