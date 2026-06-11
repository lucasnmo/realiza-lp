import {
  Banknote,
  Building2,
  ClipboardCheck,
  FileSearch,
  Handshake,
  LineChart,
  MessageCircle,
  PiggyBank,
  Scale,
  ShieldCheck,
  Users2,
} from "lucide-react";

export const WHATSAPP_NUMBER = "5571992220164";
export const WHATSAPP_DISPLAY = "(71) 99222-0164";

export function getWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const companyStats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "500+", label: "Unidades Habitacionais" },
  { value: "10", label: "Prédios Concluídos" },
  { value: "100%", label: "Satisfação dos Clientes" },
];

export const costCondominiumBenefits = [
  {
    icon: PiggyBank,
    title: "Sem juros bancários",
    text: "Os aportes são direcionados à execução da obra, reduzindo dependência de financiamento tradicional.",
  },
  {
    icon: Users2,
    title: "Gestão compartilhada",
    text: "Condôminos acompanham decisões, cronograma e prioridades ao longo do empreendimento.",
  },
  {
    icon: FileSearch,
    title: "Prestação de contas",
    text: "Custos, medições e evolução financeira são apresentados com clareza e recorrência.",
  },
  {
    icon: Scale,
    title: "Controle de custos",
    text: "Planejamento, compras e contratos são conduzidos com disciplina técnica e administrativa.",
  },
  {
    icon: Handshake,
    title: "Participação nas decisões",
    text: "As escolhas relevantes passam por governança e alinhamento entre os participantes.",
  },
  {
    icon: Banknote,
    title: "Investimento mais acessível",
    text: "O modelo busca aproximar o custo real de construção do valor final para o comprador.",
  },
];

export const methodologySteps = [
  {
    icon: ClipboardCheck,
    title: "Planejamento e orçamento",
    text: "Estudo de viabilidade, definição de escopo, cronograma e orçamento antes do início da obra.",
  },
  {
    icon: Users2,
    title: "Gestão compartilhada",
    text: "Acompanhamento próximo dos condôminos, com decisões registradas e comunicação objetiva.",
  },
  {
    icon: FileSearch,
    title: "Governança e prestação de contas",
    text: "Relatórios, assembleias e controles para dar visibilidade aos custos e à evolução física.",
  },
  {
    icon: Building2,
    title: "Execução e entrega",
    text: "Condução técnica da obra, controle de qualidade e foco na entrega conforme o planejado.",
  },
];

export const testimonials = [
  {
    quote:
      "Competência técnica, lisura e transparência na administração do empreendimento. Investiria novamente e recomendo sem hesitar.",
    author: "André Magalhães",
    meta: "Condômino | Residencial dos Sombreiros",
  },
  {
    quote:
      "Solicitações pós-entrega atendidas com rapidez. Experiência muito positiva como condômino e engenheiro.",
    author: "Clodoaldo Freitas",
    meta: "Eng. estrutural | Sombreiros, Pituba Paradiso e Giardino Loreto",
  },
  {
    quote:
      "Prazos cumpridos, imprevistos solucionados e retorno financeiro alcançado. Seriedade na condução dos empreendimentos.",
    author: "Arnaldo Freire Franco",
    meta: "Investidor | Solar das Amendoeiras e Sombreiros",
  },
  {
    quote:
      "Transparência nas reuniões e planilhas, escolha discutida de materiais e obra entregue no prazo. Senti segurança do início ao fim.",
    author: "Cristina Jesuíno",
    meta: "Condômina | Solar das Amendoeiras",
  },
  {
    quote:
      "Organização, transparência e comunicação clara no dia a dia. Entrega no prazo acordado e assembleias objetivas.",
    author: "Jayme Bulhões",
    meta: "Executivo | Sombreiros e Pituba Paradiso",
  },
  {
    quote:
      "Relatórios claros, documentação fotográfica e gráficos que acompanham a obra. Organização e correção impecáveis.",
    author: "Flávio Siqueira Lopes",
    meta: "Cliente | Giardino Loreto",
  },
];

export const trustPillars = [
  { icon: ShieldCheck, label: "Segurança técnica" },
  { icon: FileSearch, label: "Prestação de contas" },
  { icon: LineChart, label: "Controle de custos" },
  { icon: MessageCircle, label: "Comunicação próxima" },
];
