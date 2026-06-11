import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Lato, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import WhatsappFloatingButton from "@/components/WhatsappFloatingButton"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "REALIZA Engenharia | Engenharia com Credibilidade em Salvador",
  description:
    "Empreendimentos residenciais e comerciais em Salvador com gestão transparente, regime de condomínio a preço de custo e mais de 15 anos de experiência.",
  openGraph: {
    title: "REALIZA Engenharia | Engenharia com Credibilidade em Salvador",
    description:
      "Empreendimentos residenciais e comerciais em Salvador com gestão transparente, regime de condomínio a preço de custo e mais de 15 anos de experiência.",
    url: "https://realizaeng.com.br/",
    siteName: "REALIZA Engenharia",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${openSans.variable} ${montserrat.variable} ${lato.variable} font-sans antialiased`}
      >
        {children}

        {/* Botão flutuante de WhatsApp */}
        <WhatsappFloatingButton />

        <Analytics />
      </body>
    </html>
  )
}
