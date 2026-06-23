// Dados fictícios para o desenvolvimento do Frontend do App de Condomínio
export const compromissos = [
  {
    id: '1',
    dateTime: '2026-06-19T08:30:00Z',
    titulo: 'Dedetização das Áreas Comuns',
    descricao: 'Aplicação preventiva contra insetos nas garagens, portaria e subsolos. Evite circular com pets nesses locais.',
    tipo: 'eventos',
    status: 'Obrigatorio',
    imagem: 'https://www.auxiliadorapredial.com.br/blog/wp-content/uploads/dedetizacao-capa.webp'
  },
  {
    id: '2',
    dateTime: '2026-06-20T11:00:00Z',
    titulo: 'Reserva: Churrasqueira G1',
    descricao: 'Sua reserva para o almoço de confraternização foi aprovada. Capacidade máxima de 25 convidados.',
    tipo: 'minhasReservas',
    status: 'Confirmado',
    imagem: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500'
  },
  {
    id: '3',
    dateTime: '2026-06-20T14:00:00Z',
    titulo: 'Visita: Personal Trainer',
    descricao: 'Acesso programado à academia do condomínio para o profissional Lucas Silva (CREF 000000-G/SP).',
    tipo: 'visitante',
    status: 'Aguardando',
    imagem: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500'
  },
  {
    id: '4',
    dateTime: '2026-06-22T20:00:00Z',
    titulo: 'Assembleia de Orçamento',
    descricao: 'Reunião extraordinária presencial no Salão Master para votação do fundo de reserva e melhorias na portaria.',
    tipo: 'assembleia',
    status: 'Obrigatorio',
    imagem: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500'
  },
  {
    id: '5',
    dateTime: '2026-06-23T10:30:00Z',
    titulo: 'Teste do Alarme de Incêndio',
    descricao: 'O alarme irá soar intermitentemente em todos os blocos para os testes obrigatórios de vistoria do Corpo de Bombeiros.',
    tipo: 'eventos',
    status: 'Confirmado',
    imagem: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=200&auto=format&fit=crop'
  }
];


export const mockAvisos = [
  {
    id: "1",
    title: "Manutenção Preventiva dos Elevadores",
    description: "O elevador social do Bloco A ficará desligado para manutenção preventiva das 09:00 às 12:00.",
    category: "Manutenção", // Para o backend: Enum ou String
    urgencyLevel: "alta", // alta, media, baixa
    badgeColor: "bg-red-100 text-red-700", // Utilitário para Tailwind/NativeWind
    createdAt: "2026-06-16T08:00:00Z",
    isRead: false,
  },
  {
    id: "2",
    title: "Convocação para Assembleia Geral",
    description: "Discussão sobre a aprovação da reforma da fachada e prestação de contas do semestre. Sua presença é fundamental.",
    category: "Assembleia",
    urgencyLevel: "media",
    badgeColor: "bg-amber-100 text-amber-700",
    createdAt: "2026-06-15T14:30:00Z",
    isRead: false,
  },
  {
    id: "3",
    title: "Campanha de Vacinação Pet",
    description: "Neste sábado teremos vacinação antirrábica gratuita no espaço pet do condomínio para cães e gatos.",
    category: "Eventos",
    urgencyLevel: "baixa",
    badgeColor: "bg-blue-100 text-blue-700",
    createdAt: "2026-06-14T10:00:00Z",
    isRead: true,
  },
  {
    id: "4",
    title: "Achados e Perdidos: Chave de Carro",
    description: "Uma chave de carro da marca Volkswagen foi encontrada na rampa da garagem do subsolo 1. Retirar na portaria.",
    category: "Comunidade",
    urgencyLevel: "baixa",
    badgeColor: "bg-emerald-100 text-emerald-700",
    createdAt: "2026-06-13T17:15:00Z",
    isRead: true,
  },
  {
    id: "5",
    title: "Vaga de Garagem para Alugar",
    description: "O morador do apto 74 (Bloco B) está disponibilizando sua vaga extra de garagem para locação mensal.",
    category: "Classificados",
    urgencyLevel: "baixa",
    badgeColor: "bg-purple-100 text-purple-700",
    createdAt: "2026-06-12T09:00:00Z",
    isRead: true,
  }
];

export const mockEspacos = [
  {
    id: "space_1",
    name: "Salão de Festas Master",
    capacity: 80,
    fee: 150.00,
    rules: "Limpeza inclusa. Som permitido até às 22:00.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500", // URL real para testar Image do RN
    status: "disponivel", // disponivel, manutencao
  },
  {
    id: "space_2",
    name: "Churrasqueira Gourmet G1",
    capacity: 25,
    fee: 50.00,
    rules: "Necessário trazer carvão. Proibido vidro na área da piscina.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
    status: "disponivel",
  },
  {
    id: "space_3",
    name: "Quadra Poliesportiva",
    capacity: 15,
    fee: 0.00,
    rules: "Uso máximo de 2 horas por apartamento ao dia.",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=500",
    status: "disponivel",
  },
  {
    id: "space_4",
    name: "Espaço Cinema / Jogos",
    capacity: 12,
    fee: 30.00,
    rules: "Proibido consumo de alimentos gordurosos nas poltronas.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
    status: "manutencao",
  },
  {
    id: "space_5",
    name: "Academia Climatizada",
    capacity: 10,
    fee: 0.00,
    rules: "Obrigatório o uso de toalha individual e higienização dos aparelhos.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    status: "disponivel",
  }
];

export const mockAgendaMorador = [
  {
    id: "evt_1",
    title: "Reserva: Churrasqueira G1",
    dateTime: "2026-06-20T12:00:00Z",
    type: "reserva", // reserva, visitante, assembleia
    description: "Aniversário do morador",
    status: "Confirmado",
    statusColor: "text-green-600 bg-green-50"
  },
  {
    id: "evt_2",
    title: "Previsão: Mariana Costa (Mãe)",
    dateTime: "2026-06-16T18:30:00Z",
    type: "visitante",
    description: "Visitante com liberação por QR Code",
    status: "Aguardando",
    statusColor: "text-amber-600 bg-amber-50"
  },
  {
    id: "evt_3",
    title: "Assembleia de Condomínio",
    dateTime: "2026-06-22T19:30:00Z",
    type: "assembleia",
    description: "Salão de Festas / Online",
    status: "Obrigatório",
    statusColor: "text-red-600 bg-red-50"
  },
  {
    id: "evt_4",
    title: "Previsão: Técnico da Claro",
    dateTime: "2026-06-17T14:00:00Z",
    type: "visitante",
    description: "Manutenção de internet no apartamento",
    status: "Agendado",
    statusColor: "text-blue-600 bg-blue-50"
  },
  {
    id: "evt_5",
    title: "Reserva: Quadra de Tênis",
    dateTime: "2026-06-19T08:00:00Z",
    type: "reserva",
    description: "Treino semanal",
    status: "Confirmado",
    statusColor: "text-green-600 bg-green-50"
  }
];

export const mockEncomendas = [
  {
    id: "enc_1",
    description: "Caixa Pardo - Amazon",
    code: "AMZ-99812-BR",
    receivedAt: "2026-06-16T11:20:00Z",
    status: "Portaria", // Portaria, Retirado
    receivedBy: "Porteiro Carlos",
    PIN: "4821"
  },
  {
    id: "enc_2",
    description: "Pacote Plástico - Shopee",
    code: "SHP-0021-BR",
    receivedAt: "2026-06-15T15:40:00Z",
    status: "Portaria",
    receivedBy: "Porteira Meire",
    PIN: "5920"
  },
  {
    id: "enc_3",
    description: "Envelope de Documentos - Sedex",
    code: "SX-44129-BR",
    receivedAt: "2026-06-12T10:00:00Z",
    status: "Retirado",
    receivedBy: "Porteiro Carlos",
    pickedUpAt: "2026-06-12T19:00:00Z",
    PIN: "1452"
  },
  {
    id: "enc_4",
    description: "Caixa Grande - Mercado Livre",
    code: "ML-8871-A",
    receivedAt: "2026-06-16T14:10:00Z",
    status: "Portaria",
    receivedBy: "Porteiro Carlos",
    PIN: "8572"
  },
  {
    id: "enc_5",
    description: "Sacola Térmica - Zé Delivery",
    code: "N/A",
    receivedAt: "2026-06-16T14:45:00Z",
    status: "Portaria",
    receivedBy: "Porteira Meire",
    PIN: "9647"
  }
];

export const mockFinancas = [
  {
    id: "fin_1",
    title: "Taxa Condominial - Junho/2026",
    amount: 450.00,
    dueDate: "2026-06-15",
    status: "Atrasado", // Pago, Pendente, Atrasado
    barCode: "34191.79001 01043.513184 91020.150008 7 98760000045000",
    pixCopyPaste: "00020101021226830014br.gov.bcb.pix0121condominiointeligentepix"
  },
  {
    id: "fin_2",
    title: "Taxa Condominial - Julho/2026",
    amount: 450.00,
    dueDate: "2026-07-15",
    status: "Pendente",
    barCode: "34191.79001 01043.513184 91020.150008 7 99060000045000",
    pixCopyPaste: "00020101021226830014br.gov.bcb.pix0121condominiointeligentepix"
  },
  {
    id: "fin_3",
    title: "Taxa Condominial - Maio/2026",
    amount: 485.50, // Teve consumo extra de água
    dueDate: "2026-05-15",
    status: "Pago",
    barCode: "34191.79001 01043.513184 91020.150008 7 98450000048550",
    pixCopyPaste: "N/A"
  },
  {
    id: "fin_4",
    title: "Taxa Condominial - Abril/2026",
    amount: 450.00,
    dueDate: "2026-04-15",
    status: "Pago",
    barCode: "34191.79001 01043.513184 91020.150008 7 98150000045000",
    pixCopyPaste: "N/A"
  },
  {
    id: "fin_5",
    title: "Chamada de Capital - Pintura de Garagem (1/3)",
    amount: 100.00,
    dueDate: "2026-06-30",
    status: "Pendente",
    barCode: "34191.79001 01043.513184 91020.150008 7 98900000010000",
    pixCopyPaste: "00020101021226830014br.gov.bcb.pix0121condominiointeligentepix"
  }
];