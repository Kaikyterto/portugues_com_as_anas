export const siteContent = {
  brandName: "Português com as Anas",
  subtitle: "Preparatório para Concursos Públicos",
  email: "gabynascimento47@gmail.com",
  phoneDisplay: "(96) 99163-2585",
  phoneDigits: "5596991632585",
  defaultMessage:
    "Olá! Gostaria de mais informações sobre a Mentoria de Português.",
  primaryCtaLabel: "Inscreva-se Agora!",
  primaryCtaMessage: "Olá! Quero me inscrever na Mentoria de Português .",
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
    question: "Como funciona a dinâmica das aulas?",
    answer:
      "Nossa metodologia é totalmente prática e focada no edital. Analisamos o perfil das bancas examinadoras, resolvemos questões reais de concursos anteriores e destrinchamos as principais pegadinhas para você não perder pontos bobos.",
  },
  {
    question: "Qual é o valor do investimento e as formas de pagamento?",
    answer:
      " Para consultar as formas de pagamento disponíveis e garantir sua vaga, basta clicar no botão de inscrição e falar com nossa equipe pelo WhatsApp.",
  },
  {
    question: "Recebo algum material de apoio?",
    answer:
      "Sim! Todos os alunos da mentoria recebem materiais em formato digital (PDF), incluindo os cronogramas de estudo, listas de exercícios selecionados e os gabaritos comentados passo a passo.",
  },
  {
    question: "Preciso ter uma base forte em Português para acompanhar?",
    answer:
      "Não. A mentoria foi estruturada para atender desde quem está começando até quem já possui experiência em concursos. Os conteúdos são explicados de forma clara e aplicados diretamente em questões.",
  },
  {
    question: "As aulas são focadas apenas em teoria?",
    answer:
      "Não. Nossa metodologia prioriza a resolução de questões e a interpretação do perfil das bancas. A teoria é ensinada de forma objetiva e sempre conectada à prática.",
  },
  {
    question: "Posso tirar dúvidas durante a mentoria?",
    answer:
      "Sim! Os alunos contam com suporte para esclarecimento de dúvidas sobre os conteúdos trabalhados durante as aulas e exercícios.",
  },
  {
    question: "Como faço minha inscrição?",
    answer:
      "Basta clicar em qualquer botão de inscrição da página. Você será direcionado para o WhatsApp, onde nossa equipe fornecerá todas as orientações para garantir sua vaga.",
  },
];

export const testimonialTexts = [
  {
    name: "Eliny Campelo",
    role: "Aluna da Mentoria",
    quote:
      "Eu nunca me senti tão confiante em Português como me sinto hoje. Até os assuntos mais complexos ficam simples quando são ensinados através de questões. Hoje consigo resolver exercícios com segurança e acredito muito mais na minha aprovação.",
  },
  {
    name: "Brunna Ramos",
    role: "Aluna",
    quote:
      "Parecia que eu estava vendo as aulas novamente durante a prova. Via vocês em cada uma das questões. Obrigada por todo o direcionamento e pela preparação que fez a diferença.",
  },
  {
    name: "Ana Rodrigues",
    role: "Concurseira",
    quote:
      "A prova estava idêntica às nossas revisões. Parabéns, professoras! O trabalho de vocês realmente preparou os alunos para o que caiu na prova.",
  },
  {
    name: "Rodrigo Cavalcante",
    role: "Aluno Aprovado",
    quote:
      "A dedicação das professoras e a forma de ensinar fizeram toda a diferença na minha aprovação. Evoluí muito em Língua Portuguesa e levo comigo tudo o que aprendi durante a mentoria.",
  },
];
