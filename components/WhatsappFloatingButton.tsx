import { FaWhatsapp } from "react-icons/fa"
import { getWhatsappUrl } from "@/lib/site-content"

export default function WhatsappFloatingButton() {
  const whatsappUrl = getWhatsappUrl(
    "Olá! Gostaria de mais informações sobre os empreendimentos da REALIZA Engenharia."
  )

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:scale-105 hover:bg-[#1DB954] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-6 sm:right-6"
      aria-label="Falar com a REALIZA Engenharia pelo WhatsApp"
    >
      <FaWhatsapp size={28} aria-hidden="true" />
    </a>
  )
}
