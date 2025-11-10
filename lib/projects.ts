// lib/projects.ts

export type Category = "residenciais" | "casas" | "comerciais" | "breve";

export type TechnicalSheet = {
  year?: string;
  regime?: string;
  address?: string;
  architect?: string;
  totalArea?: string;
  floors?: string;
  bedrooms?: string;
  unitArea?: string;
  infrastructure?: string;
};

export type Project = {
  id: string;
  category: Category;
  name: string;
  images: string[];
  technicalSheet: TechnicalSheet;
};

export const PROJECTS: Project[] = [
  // ================== Residenciais ==================

  {
    id: "solar-amendoeiras",
    category: "residenciais",
    name: "Solar das Amendoeiras",
    images: [
      "/solardasamendoeiras3.png",
      "/solardasamendoeiras.jpg",
      "/solardasamendoeiras2.jpg",
      "/solarmendoeiras1.jpg",
      "/solarmendoeiras2.jpg",
      "/solarmendoeiras3.jpg",
    ],
    technicalSheet: {
      year: "2010",
      regime: "Obra em regime de condomínio",
      address: "R. Carmen Miranda, 372, Pituba",
      architect: "Mário Figueiredo",
      totalArea: "3.070 m²",
      floors: "14",
      bedrooms: "2/4 (1 suíte)",
      unitArea: "73 m²",
      infrastructure:
        "Piscina com deck, academia, sauna, salão de festas, salão de jogos, parque infantil e guarita de segurança.",
    },
  },

  {
    id: "bosque-guarajuba",
    category: "residenciais",
    name: "Condomínio Bosque de Guarajuba",
    images: [
      "/bosquedeguarajuba.jpg",
      "/bosquedeguarajuba2.jpg",
      "/bosquedeguarajuba3.jpg",
      "/bosque1.JPG",
      "/bosque2.JPG",
      "/bosque3.JPG",
      "/bosque4.JPG",
      "/bosque5.JPG",
      "/bosque6.JPG",
      "/bosque7.JPG",
      "/bosque8.JPG",
    ],
    technicalSheet: {
      year: "2012",
      regime: "Obra em regime de administração",
      address: "Litoral Norte, Guarajuba",
      totalArea: "4.750 m²",
      floors: "01 torre de 4 pavimentos e outra de 10 pavimentos",
      infrastructure:
        "Guarita de acesso, espaço gourmet, salão de jogos, quadra poliesportiva, 2 piscinas (adulto e infantil), área de convivência e academia.",
    },
  },

  {
    id: "residencial-sombreiros",
    category: "residenciais",
    name: "Residencial dos Sombreiros",
    images: [
      "/residencialdossombreiros2.jpg",
      "/residencialdossombreiros.jpg",
      "/residencialdossombreiros3.jpg",
      "/sombreiros.JPG",
      "/sombreiros2.JPG",
      "/sombreiros3.JPG",
      "/sombreiros4.JPG",
      "/sombreiros5.JPG",
    ],
    technicalSheet: {
      year: "2013",
      regime: "Obra em regime de condomínio",
      address: "Alameda dos Sombreiros, Caminho das Árvores",
      architect: "Mário Figueiredo",
      totalArea: "4.050 m²",
      floors: "16",
      bedrooms: "3/4 (2 suítes)",
      unitArea: "93 m²",
      infrastructure:
        "Fachadas principais pastilhadas; piscina, parque infantil, deck, varanda gourmet, sauna, salão de festas, salão de jogos, guarita de segurança, academia e churrasqueira.",
    },
  },

  {
    id: "residencial-canela",
    category: "residenciais",
    name: "Residencial Canela",
    images: [
      "/canelares1.jpg",
      "/canelares2.jpg",
      "/canelares3.jpg",
      "/canelares4.jpg",
      "/canelares5.jpg",
    ],
    technicalSheet: {
      year: "2022",
      regime: "Obra em regime de condomínio",
      address: "R. Marechal Floriano, 570 - Canela",
      architect: "Mário Figueiredo",
      totalArea: "5.934,75 m²",
      floors: "16",
      bedrooms: "1 e 2 quartos",
      unitArea: "42 m² e 56 m²",
      infrastructure:
        "Fachadas em pastilha; play coberto e descoberto; salão de festas; espaço gourmet; academia; piscina; deck e bar da piscina.",
    },
  },

  // ================== Comerciais ==================

  {
    id: "hotel-aram-yami",
    category: "comerciais",
    name: "Hotel Aram Yamí",
    images: ["/aranyammi.jpg", "/aranyammi3.JPG", "/aranyammi4.jpg"],
    technicalSheet: {
      year: "2009",
      regime: "Empreendimento hoteleiro",
      address: "Rua Direita de Santo Antônio – Santo Antônio Além do Carmo",
      totalArea: "1.600 m²",
      infrastructure:
        "Arquitetura colonial no Centro Histórico de Salvador; piscinas individuais, cafeteria e suítes com vista panorâmica da Baía de Todos os Santos.",
    },
  },

  {
    id: "clinirim-nefrologia",
    category: "comerciais",
    name: "Clinirim Nefrologia",
    images: [
      "/clinirim1.jpg",
      "/clinirim2.jpg",
      "/clinirim3.jpg",
      "/clinirim4.jpg",
    ],
    technicalSheet: {
      regime: "Obra em regime de administração",
      address:
        "R. Dr. Mario Augusto Teixeira de Freitas, 11 - Massaranduba",
      totalArea: "2.000 m²",
      infrastructure:
        "Clínica médica especializada em nefrologia, com capacidade para atendimento de 100 pessoas por dia; prédio com estacionamento privativo e guarita de segurança.",
    },
  },

  {
    id: "horto-office",
    category: "comerciais",
    name: "Horto Office",
    images: [
      "/hortofice1.jpg",
      "/hortofice2.jpg",
      "/hortofice3.jpg",
      "/hortofice4.jpg",
      "/hortofice5.jpg",
      "/hortofice6.jpg",
    ],
    technicalSheet: {
      year: "2018",
      regime: "Obra por administração",
      address: "R. Waldemar Falcão, 979 - Horto",
      architect: "Mário Figueiredo",
      totalArea: "7.453,34 m²",
      floors: "30",
      unitArea: "Salas comerciais: 45 m²; apartamentos: 58 m²",
      bedrooms: "Apartamentos 1/4 (suíte) com varanda",
      infrastructure:
        "Fachadas principais em alumínio composto e vidro.",
    },
  },

  // ================== Casas ==================

  {
    id: "horto-vilas",
    category: "casas",
    name: "Condomínio Horto Vilas",
    images: [
      "/hortovlias.jpg",
      "/hortovlias2.jpg",
      "/hortovlias3.jpg",
      "/hortovlias4.jpg",
    ],
    technicalSheet: {
      regime: "Residencial exclusivo",
      address: "Vilas do Atlântico, Lauro de Freitas",
      totalArea: "620 m² (residência)",
      bedrooms: "5 suítes",
      infrastructure: "4 vagas de garagem e elevador social.",
    },
  },

  {
    id: "alphaville-estrela-do-mar",
    category: "casas",
    name: "Alphaville Estrela do Mar",
    images: [
      "/estreladomar.jpg",
      "/estreladomar2.jpg",
      "/estreladomar3.jpg",
      "/estreladomar4.jpg",
    ],
    technicalSheet: {
      regime: "Residencial exclusivo",
      address: "Alphaville, Salvador",
      totalArea: "830 m² (residência)",
      bedrooms: "5 suítes",
      infrastructure: "6 vagas de garagem e piscina aquecida.",
    },
  },

  {
    id: "alphaville-itaparica",
    category: "casas",
    name: "Residência Alphaville Itaparica",
    images: [
      "/alphavilleitaparica1.jpg",
      "/alphavilleitaparica2.jpg",
      "/alphavilleitaparica3.jpg",
      "/alphavilleitaparica4.jpg",
      "/alphavilleitaparica5.jpg",
      "/alphavilleitaparica6.jpg",
    ],
    technicalSheet: {
      regime: "Residencial exclusivo",
      address: "Alphaville Itaparica",
      totalArea: "350 m²",
      bedrooms: "4 suítes",
      infrastructure:
        "4 vagas de garagem e brinquedoteca.",
    },
  },

  {
    id: "residencia-guarajuba",
    category: "casas",
    name: "Residência em Guarajuba",
    images: [
      "/guarajuba1.jpg",
      "/guarajuba2.jpg",
      "/guarajuba3.jpg",
      "/guarajuba4.jpg",
      "/guarajuba5.jpg",
    ],
    technicalSheet: {
      regime: "Residencial exclusivo",
      address: "Guarajuba",
      totalArea: "350 m²",
      bedrooms: "6 suítes",
      infrastructure: "4 vagas de garagem.",
    },
  },

  {
    id: "pampalona-busca-vida",
    category: "casas",
    name: "Residência Pampalona Busca Vida",
    images: [
      "/pampalona1.tif",
      "/pampalona2.tif",
      "/pampalona3.tif",
      "/pampalona4.tif",
      "/pampalona5.tif",
    ],
    technicalSheet: {
      regime: "Residencial exclusivo",
      address: "Condomínio Busca Vida",
      totalArea: "450 m²",
      bedrooms: "4 suítes",
      infrastructure:
        "4 vagas de garagem e piscina aquecida.",
    },
  },

  {
    id: "condominio-busca-vida-1160",
    category: "casas",
    name: "Residência Condomínio Busca Vida",
    images: [
      "/lotebuscavida1.jpg",
      "/lotebuscavida2.jpg",
      "/lotebuscavida3.jpg",
      "/lotebuscavida4.jpg",
      "/lotebuscavida5.jpg",
      "/lotebuscavida6.jpg",
    ],
    technicalSheet: {
      regime: "Residencial exclusivo",
      address: "Condomínio Busca Vida",
      totalArea: "1.160 m²",
      bedrooms: "8 suítes",
      infrastructure:
        "Torre panorâmica e infraestrutura completa.",
    },
  },

  {
    id: "residencial-itapua",
    category: "casas",
    name: "Residência Itapuã",
    images: [
      "/itapuares1.jpg",
      "/itapuares2.jpg",
      "/itapuares3.jpg",
      "/itapuares4.jpg",
    ],
    technicalSheet: {
      regime: "Residencial exclusivo",
      address: "Itapuã",
      bedrooms: "4 suítes",
      infrastructure: "4 vagas de garagem.",
    },
  },

  // ================== Breve Lançamento ==================

  {
    id: "azure-beach-living",
    category: "breve",
    name: "Azure Beach Living",
    images: ["/azure2.jpg", "/azure1.jpg", "/azure3.jpg"],
    technicalSheet: {
      regime: "Obra em regime de condomínio",
      address: "Rua Sereno da Madrugada, 47 - Itapuã",
      architect: "Mario Figueiredo",
      totalArea: "5.705,86 m²",
      bedrooms: "1 e 2 suítes",
      unitArea: "34,50 m² a 81,00 m²",
      infrastructure:
        "Fachadas em pastilha; academia; piscina com borda infinita, prainha e deck; espaço gourmet; coworking; sala de reuniões; lavanderia; bicicletário; guardaria de pranchas; lobby com pé-direito duplo; guarita.",
    },
  },

  {
    id: "egeu-pedra-do-sal",
    category: "breve",
    name: "EGEU Pedra do Sal - Pré-lançamento",
    images: ["/EGEU1.jpeg", "/EGEU2.jpeg", "/EGEU3.jpeg", "/EGEU4.jpeg"],
    technicalSheet: {
      regime: "Obra em regime de condomínio",
      address:
        "Rua Sereno da Madrugada, lotes 17, 18 e 19 - Itapuã, Salvador",
      architect: "Braz e Brenha Arquitetos",
      totalArea: "4.805,70 m²",
      bedrooms: "1 e 2 suítes",
      unitArea: "29,39 m² a 70,85 m²",
      infrastructure:
        "Fachadas em pastilha; academia com pé-direito duplo; piscina com borda infinita, prainha e deck; espaço gourmet; sala de projeção; coworking; mini market; sala de reuniões; lavanderia; bicicletário; guardaria de pranchas; lobby com pé-direito duplo; guarita.",
    },
  },
];
