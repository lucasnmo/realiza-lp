import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappFloatingButton() {
  const phone = "5571992220164" // coloque seu número aqui (com DDI + DDD)
  const message = encodeURIComponent(
    "Olá! Gostaria de mais informações sobre os empreendimentos."
  )

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        hover:bg-green-600
        transition-all duration-300
      "
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
