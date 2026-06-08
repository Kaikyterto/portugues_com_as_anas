export const siteContent = {
  brandName: "Português com as Anas",
  subtitle: "Preparatório para Concursos Públicos",
  email: "portuguescomasanas@gmail.com",
  phoneDisplay: "(96) 99163-2585",
  phoneDigits: "5596991632585",
  defaultMessage:
    "Olá! Gostaria de mais informações sobre a Mentoria de Português.",
  primaryCtaLabel: "Inscreva-se Agora!",
  primaryCtaMessage:
    "Olá! Quero me inscrever na Mentoria de Português (Revisão Módulo II).",
};

export function getWhatsAppUrl(
  message = siteContent.defaultMessage,
  source = ""
) {
  const finalMessage = source ? `${message} (${source})` : message;

  return `https://wa.me/${siteContent.phoneDigits}?text=${encodeURIComponent(
    finalMessage
  )}`;
}

export const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Sobre Nós", href: "#about" },
  { label: "Diferenciais", href: "#whychoose" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#footer" },
];

export const faqData = [
  {
    question: "O Módulo II serve para quem está começando do zero?",
    answer:
      "Sim! Embora seja uma revisão estratégica focada nos editais do CFO e da Prefeitura, a metodologia das Anas reconstrói a base teórica de forma simples para que você consiga acompanhar e aplicar nas questões.",
  },
  {
    question: "Como funciona a dinâmica das aulas?",
    answer:
      "Nossa metodologia é totalmente prática e focada no edital. Analisamos o perfil das bancas examinadoras, resolvemos questões reais de concursos anteriores e destrinchamos as principais pegadinhas para você não perder pontos bobos.",
  },
  {
    question: "Quais concursos são atendidos nessa revisão?",
    answer:
      "O foco principal deste módulo está voltado para os concursos do CFO (Curso de Formação de Oficiais) e das Prefeituras, mapeando os assuntos de Língua Portuguesa com maior recorrência nessas provas.",
  },
  {
    question: "Qual é o valor do investimento e as formas de pagamento?",
    answer:
      "O investimento mensal é de apenas R$ 85,00. Para consultar as formas de pagamento disponíveis e garantir sua vaga, basta clicar no botão de inscrição e falar com nossa equipe pelo WhatsApp.",
  },
  {
    question: "Quando começam as aulas?",
    answer:
      "O início das aulas está confirmado para o dia 08/09. Como as vagas da mentoria são limitadas para garantir o suporte adequado, recomendamos realizar a inscrição o quanto antes.",
  },
  {
    question: "Recebo algum material de apoio?",
    answer:
      "Sim! Todos os alunos da mentoria recebem materiais em formato digital (PDF), incluindo os cronogramas de estudo, listas de exercícios selecionados e os gabaritos comentados passo a passo.",
  },
];

export const testimonialTexts = [
  {
    name: "Mariana Silva",
    role: "Aprovada no Concurso da Prefeitura",
    quote:
      "A metodologia das Anas mudou completamente meu rendimento. Eu sempre errava bobeira em crase e interpretação, mas com a revisão direta ao ponto do Módulo II, fechei a prova de Português!",
  },
  {
    name: "Carlos Eduardo",
    role: "Concurseiro CFO",
    quote:
      "Excelente experiência. As professoras têm uma didática incrível que desmistifica a gramática pesada. As dicas de pegadinhas de banca me salvaram no simulado. Recomendo demais a mentoria.",
  },
  {
    name: "Juliana Ribeiro",
    role: "Aluna da Mentoria",
    quote:
      "O que eu mais gostei foi o foco no edital. A gente não perde tempo com teoria que não cai. O cronograma é super organizado e o investimento de R$ 85 vale cada centavo pelo suporte que elas dão.",
  },
  {
    name: "Roberto Almeida",
    role: "Classificado em Concurso Municipal",
    quote:
      "Eu tinha trauma de português desde a escola. As Anas conseguem explicar matéria complexa de um jeito leve e divertido. Foi o diferencial que garantiu minha classificação.",
  },
];
