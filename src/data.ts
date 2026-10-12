import { BonusItem, FaqItem, PricingPlan, RecipeItem, StructureStep, TestimonialItem } from './types';
import { optimizeImageUrl } from './utils/optimizeMedia';

export const TESTIMONIALS: TestimonialItem[] = [
  { id: '1', image: optimizeImageUrl('https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/KnvbdI9428827.png', 400) },
  { id: '2', image: optimizeImageUrl('https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/aFRzdd9428827.png', 400) },
  { id: '3', image: optimizeImageUrl('https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/XydQqS3121551.webp', 400) },
  { id: '4', image: optimizeImageUrl('https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/djbLNh0886738.png', 400) },
  { id: '5', image: optimizeImageUrl('https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/AuWLfB8972705.png', 400) },
  { id: '6', image: optimizeImageUrl('https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/hlvCXl8972705.png', 400) }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O produto é físico ou digital?',
    answer: '100% digital. Você recebe um PDF organizado para abrir em celular, tablet ou computador. Se preferir, pode imprimir suas receitas para ter em mãos na hora de crochetar.'
  },
  {
    question: 'Recebo na hora da compra?',
    answer: 'Sim! Assim que o pagamento é aprovado (no Pix a aprovação é imediata), você recebe o acesso diretamente no seu e-mail e na sua área de membros exclusiva.'
  },
  {
    question: 'Posso vender as peças que eu fizer?',
    answer: 'Sim, totalmente! As receitas foram criadas para que você produza e venda com liberdade em encomendas, feiras, paróquias, sua loja online ou Instagram, garantindo um ótimo lucro.'
  },
  {
    question: 'Preciso ser avançada no crochê?',
    answer: 'Não. Todas as receitas têm passo a passo fotográfico detalhado, gráficos legendados e explicações claras. Mesmo quem é iniciante consegue acompanhar com facilidade.'
  },
  {
    question: 'Terei acesso vitalício ao material e aos bônus?',
    answer: 'Sim, você terá acesso vitalício! Poderá baixar os arquivos e consultar quantas vezes quiser, para sempre, sem nenhuma mensalidade.'
  },
  {
    question: 'E se eu não gostar ou achar difícil?',
    answer: 'Você tem garantia incondicional de 14 dias! Se por qualquer motivo não gostar, basta nos enviar um e-mail ou mensagem e devolvemos 100% do seu dinheiro, sem perguntas.'
  }
];

// Dados da Coleção Natalina
const RAW_NATALINO_DATA = {
  badge: '🎄 Coleção Amigurumi Natalino Exclusivo 🎅🏻',
  titleHighlight: '150 receitas de',
  titleMain: 'amigurumi natalino',
  titleSubtitle: 'para vender muito nesse fim de ano',
  description: 'Receitas Natalinas em Amigurumi prontas para imprimir e criar: Papai Noel, Personagens Religiosos, Renas, Árvore de Natal e muito mais.',
  heroImage: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/Fjejip6581861.png',
  heroVideo: 'https://i.imgur.com/EJHVSlX.mp4',
  structureBadge: 'Cada receita em 4 páginas',
  structureSubtitle: 'Mais que receitas de Amigurumi. Um material pensado para você produzir com clareza e vender com confiança.',
  structureSteps: [
    {
      pageNumber: 'PÁGINA 1/4 - APRESENTAÇÃO',
      title: 'Apresentação da peça',
      description: 'Foto da peça, nome, nível, medida, fio, agulha e informações importantes em um só olhar.',
      image: 'https://i.imgur.com/sCzxEkm.png'
    },
    {
      pageNumber: 'PÁGINA 2/4 - ESTRUTURA PRINCIPAL',
      title: 'A base',
      description: 'Receita da estrutura principal com tabela de carreiras, sequência fotográfica, e instruções de montagem.',
      image: 'https://i.imgur.com/Vk2nYFe.png'
    },
    {
      pageNumber: 'PÁGINA 3/4 - DETALHES E ACESSÓRIOS',
      title: 'Detalhes',
      description: 'Receita focada em todos os detalhes para dar vida ao seu amigurumi com perfeição e facilidade.',
      image: 'https://i.imgur.com/rf4OPJN.png'
    },
    {
      pageNumber: 'PÁGINA 4/4 - MONTAGEM E ACABAMENTO',
      title: 'Finalização da peça',
      description: 'Montagem completa da peça guiada, acabamento profissional, detalhes finais, vista 360° e orientações para uma peça perfeita.',
      image: 'https://i.imgur.com/VptvfG5.png'
    }
  ] as StructureStep[],
  recipes: [
    {
      id: 'n1',
      number: 'Receita 01',
      title: 'PAPAI NOEL',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/SfdqBW2392920.png'
    },
    {
      id: 'n2',
      number: 'Receita 02',
      title: 'PERSONAGENS RELIGIOSOS',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/hmkHmh6171189.png'
    },
    {
      id: 'n3',
      number: 'Receita 03',
      title: 'ÁRVORES DE NATAL',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/YQGKEk1981745.png'
    },
    {
      id: 'n4',
      number: 'Receita 04',
      title: 'BONECOS DE NEVE',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/gNsIqY2324501.png'
    },
    {
      id: 'n5',
      number: 'Receita 05',
      title: 'OBJETOS E ENFEITES',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/wxqhYM6509794.png'
    },
    {
      id: 'n6',
      number: 'Receita 06',
      title: 'RENAS',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/AusRdY5814674.png'
    },
    {
      id: 'n7',
      number: 'Receita 07',
      title: 'GUIRLANDAS',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/BkILeM2433386.png'
    },
    {
      id: 'n8',
      number: 'Receita 08',
      title: 'MEIAS NATALINAS',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/KwxngX6234271.png'
    }
  ] as RecipeItem[],
  bonuses: [
    {
      id: 'b1',
      number: 'Bônus 1',
      title: '50 Símbolos Natalinos para Aplicação',
      description: 'Uma coleção exclusiva com mais de 50 símbolos natalinos para aplicar em amigurumis, deixando suas criações ainda mais encantadoras.',
      originalPrice: 'R$37,00',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/RdxYGB9180802.png'
    },
    {
      id: 'b2',
      number: 'Bônus 2',
      title: 'Guia de Bordados de Natal',
      description: 'Aprenda a criar lindos bordados natalinos com modelos variados e instruções práticas para decorar suas peças com charme e criatividade.',
      originalPrice: 'R$47,00',
      image: 'https://i.imgur.com/9RoWdTW.png'
    },
    {
      id: 'b3',
      number: 'Bônus 3',
      title: '150 Artes Natalinas para Canecas',
      description: 'Mais de 150 artes natalinas prontas para você personalizar canecas, encantar seus clientes e vender muito neste Natal.',
      originalPrice: 'R$34,00',
      image: 'https://i.imgur.com/ukPHF57.png'
    },
    {
      id: 'b4',
      number: 'Bônus 4',
      title: '150 Artes Natalinas Editáveis',
      description: 'Mais de 150 artes natalinas editáveis, prontas para personalizar canecas e vender neste Natal.',
      originalPrice: 'R$27,00',
      image: 'https://i.imgur.com/gXsvKXB.png'
    },
    {
      id: 'b5',
      number: 'Bônus 5',
      title: '+500 Vetores em CDR e DXF para Corte CNC',
      description: 'Tenha acesso a mais de 500 vetores em CDR e DXF, prontos para produzir guirlandas, enfeites e decorações exclusivas no corte CNC.',
      originalPrice: 'R$27,00',
      image: 'https://i.imgur.com/ZJTBT2F.png'
    }
  ] as BonusItem[],
  plans: [
    {
      id: 'completo',
      title: 'PACOTE COMPLETO',
      badge: '⭐️ MAIS ESCOLHIDO ⭐️',
      recommended: true,
      image: 'https://i.imgur.com/hCiZDkI.png',
      features: [
        '+150 RECEITAS DE AMIGURUMI NATALINO',
        'Receita técnica + passo a passo ilustrado',
        '🎁 Bônus 1 — 50 Símbolos Natalinos para Aplicação',
        '🎁 Bônus 2 — Guia de Bordados de Natal',
        '🎁 Bônus 3 — 150 Artes Natalinas para Canecas',
        '🎁 Bônus 4 — 150 Artes Natalinas Editáveis',
        '🎁 Bônus 5 — +500 Vetores em CDR e DXF para Corte CNC',
        'Ideias prontas de kits e arranjos vendáveis',
        'Garantia incondicional de 14 dias',
        'Entrega e acesso imediato no seu e-mail',
        'Acesso vitalício sem mensalidades'
      ],
      originalPrice: 'R$147,00',
      pixPrice: 'R$29,90',
      installment: 'ou 6X de 5,64 no cartão',
      checkoutUrl: 'https://checkout.wiven.com.br/checkout/cmv4un7au1sqr01psluj76tlr?offer=5PYUDLG'
    },
    {
      id: 'basico',
      title: 'PACOTE BÁSICO',
      recommended: false,
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/Fjejip6581861.png',
      features: [
        '+150 RECEITAS DE AMIGURUMI NATALINO',
        'Receita técnica + passo a passo',
        'Garantia incondicional de 14 dias',
        'Entrega imediata',
        'Acesso por 3 meses',
        'Sem os bônus inclusos'
      ],
      originalPrice: 'R$97,00',
      pixPrice: 'R$10,90',
      installment: 'ou 2X de 5,82 no cartão',
      checkoutUrl: 'https://checkout.wiven.com.br/checkout/cmv4un7au1sqr01psluj76tlr?offer=6W5W6B2'
    }
  ] as PricingPlan[]
};

// Dados da Coleção Católica
const RAW_CATOLICO_DATA = {
  badge: '✝️ Coleção Católica Exclusiva ✝️',
  titleHighlight: '150 Receitas de',
  titleMain: 'crochê católico',
  titleSubtitle: 'para vender muito na sua paróquia',
  description: 'Receitas católicas prontas para imprimir e criar bolsas, caminhos de mesa, almofadas, flores, peças religiosas e muito mais.',
  heroImage: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/kBldga6758336.png',
  heroVideo: undefined as string | undefined,
  structureBadge: 'Cada receita em 3 páginas',
  structureSubtitle: 'Mais que receitas. Um material pensado para você produzir com clareza e vender com confiança.',
  structureSteps: [
    {
      pageNumber: 'PÁGINA 1/3 - APRESENTAÇÃO',
      title: 'Apresentação da peça',
      description: 'Foto da peça, nome, nível, medida, fio e agulha em um só olhar.',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/rlthqq5199941.png'
    },
    {
      pageNumber: 'PÁGINA 2/3 - RECEITA TÉCNICA',
      title: 'Receita técnica completa',
      description: 'Materiais, pontos, passo a passo, medidas e acabamento profissional.',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/frQaat5199941.png'
    },
    {
      pageNumber: 'PÁGINA 3/3 - GRÁFICO + APLICAÇÃO',
      title: 'Gráfico, aplicação e venda',
      description: 'Gráfico legendado, vista da peça, adaptações e ideia de venda.',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/McizLF5199941.png'
    }
  ] as StructureStep[],
  recipes: [
    {
      id: 'c1',
      number: 'Receita 01',
      title: 'ALMOFADAS LITÚRGICAS',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/gBtwbS6364323.png'
    },
    {
      id: 'c2',
      number: 'Receita 02',
      title: 'CAMINHO DE MESA',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/FNBhhI6364323.png'
    },
    {
      id: 'c3',
      number: 'Receita 03',
      title: 'BOLSAS PORTA-BÍBLIA',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/nSsPCz6364323.png'
    },
    {
      id: 'c4',
      number: 'Receita 04',
      title: 'MINI SANTOS EM CROCHÊ',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/InlAeW7037271.png'
    },
    {
      id: 'c5',
      number: 'Receita 05',
      title: 'TOALHINHAS DE MÃO',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/tvuLYX7438293.png'
    },
    {
      id: 'c6',
      number: 'Receita 06',
      title: 'PANOS DE PRATO COM MOTIVOS',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/PLArcY7438293.png'
    },
    {
      id: 'c7',
      number: 'Receita 07',
      title: 'SOUSPLAT RELIGIOSO',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/rEGxGe7971471.png'
    },
    {
      id: 'c8',
      number: 'Receita 08',
      title: 'PORTA-GUARDANAPO',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/neupbc7971471.png'
    }
  ] as RecipeItem[],
  bonuses: [
    {
      id: 'bc1',
      number: 'Bônus 1',
      title: '50 Símbolos Católicos para Aplicação',
      description: 'Uma coleção exclusiva com símbolos religiosos: cruz, hóstia, cálice, peixe, espírito santo e muito mais.',
      originalPrice: 'R$37,00',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/MfLhbA6168607.png'
    },
    {
      id: 'bc2',
      number: 'Bônus 2',
      title: 'Guia de Cores Litúrgicas',
      description: 'Aprenda combinações de cores inspiradas na tradição católica para deixar suas peças ainda mais respeitosas e bonitas.',
      originalPrice: 'R$47,00',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/GxynjF6168607.png'
    },
    {
      id: 'bc3',
      number: 'Bônus 3',
      title: 'Coleção de Flores Religiosas',
      description: 'Receitas extras de flores delicadas em crochê para aplicação e decoração de peças sacras.',
      originalPrice: 'R$34,00',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/hIlvPm6473813.png'
    },
    {
      id: 'bc4',
      number: 'Bônus 4',
      title: 'Guia de Precificação',
      description: 'Aprenda como calcular o valor das suas peças caso deseje vender suas criações na comunidade ou paróquia.',
      originalPrice: 'R$27,00',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/KPmPKL6168607.png'
    },
    {
      id: 'bc5',
      number: 'Bônus 5',
      title: 'Fotos para Divulgação',
      description: 'Receba mais de 70 fotos lindas e todos os materiais para sua divulgação nas redes sociais e grupos da igreja.',
      originalPrice: 'R$27,00',
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/YoBPpv6168607.png'
    }
  ] as BonusItem[],
  plans: [
    {
      id: 'completo-catolico',
      title: 'PACOTE COMPLETO',
      badge: '⭐️ MAIS ESCOLHIDO ⭐️',
      recommended: true,
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/hqepjh6716854.png',
      features: [
        '+150 RECEITAS DE CROCHÊ CATÓLICO',
        'Receita técnica + gráfico completo',
        '🎁 Bônus 1 — +100 Símbolos Católicos para Aplicação',
        '🎁 Bônus 2 — Guia de Cores Litúrgicas',
        '🎁 Bônus 3 — Coleção de Flores Religiosas',
        '🎁 Bônus 4 — Guia de Precificação',
        '🎁 Bônus 5 — Fotos para Divulgação',
        'Ideias prontas de kits vendáveis',
        'Garantia incondicional de 14 dias',
        'Entrega imediata no seu e-mail',
        'Acesso vitalício'
      ],
      originalPrice: 'R$147,00',
      pixPrice: 'R$29,90',
      installment: 'ou 6X de 5,64 no cartão',
      checkoutUrl: 'https://checkout.wiven.com.br/checkout/cmv4un7au1sqr01psluj76tlr?offer=5PYUDLG'
    },
    {
      id: 'basico-catolico',
      title: 'PACOTE BÁSICO',
      recommended: false,
      image: 'https://media.atomicatmedia.net/u/K0g3hTUvVFQ3mhBFVs2JSfKk5WQ2/Pictures/kBldga6758336.png',
      features: [
        '+150 RECEITAS DE CROCHÊ CATÓLICO',
        'Receita técnica + gráfico',
        'Garantia de 14 dias',
        'Entrega imediata',
        'Acesso por 3 meses',
        'Sem os bônus inclusos'
      ],
      originalPrice: 'R$97,00',
      pixPrice: 'R$10,90',
      installment: 'ou 2X de 5,82 no cartão',
      checkoutUrl: 'https://checkout.wiven.com.br/checkout/cmv4un7au1sqr01psluj76tlr?offer=6W5W6B2'
    }
  ] as PricingPlan[]
};

function optimizeCollectionData<T extends {
  heroImage: string;
  structureSteps: StructureStep[];
  recipes: RecipeItem[];
  bonuses: BonusItem[];
  plans: PricingPlan[];
}>(data: T): T {
  return {
    ...data,
    heroImage: optimizeImageUrl(data.heroImage, 700),
    structureSteps: data.structureSteps.map(s => ({ ...s, image: optimizeImageUrl(s.image, 500) })),
    recipes: data.recipes.map(r => ({ ...r, image: optimizeImageUrl(r.image, 320) })),
    bonuses: data.bonuses.map(b => ({ ...b, image: optimizeImageUrl(b.image, 360) })),
    plans: data.plans.map(p => ({ ...p, image: optimizeImageUrl(p.image, 600) }))
  };
}

export const NATALINO_DATA = optimizeCollectionData(RAW_NATALINO_DATA);
export const CATOLICO_DATA = optimizeCollectionData(RAW_CATOLICO_DATA);

