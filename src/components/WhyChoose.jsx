import {
  BookOpen,
  GraduationCap,
  FileCheck,
  Flame,
  CheckCircle2,
  Calendar,
  Clock,
  HelpCircle,
  Award,
} from "lucide-react";

export default function Services() {
  // Adaptado para os pilares e diferenciais da Mentoria/Revisão das Anas
  const features = [
    {
      title: "Língua Portuguesa do Zero",
      icon: BookOpen,
      desc: "Teoria essencial focada no que realmente cai.",
    },
    {
      title: "Foco CFO e Prefeitura",
      icon: GraduationCap,
      desc: "Direcionamento estratégico baseado nos últimos editais.",
    },
    {
      title: "Revisão Módulo II",
      icon: FileCheck,
      desc: "Aprofundamento prático e fixação dos temas mais complexos.",
    },
    {
      title: "Resolução de Questões",
      icon: HelpCircle,
      desc: "Análise detalhada de bancas para evitar pegadinhas.",
    },
    {
      title: "Metodologia Direto ao Ponto",
      icon: Flame,
      desc: "Sem enrolação. Conteúdo otimizado para o seu tempo.",
    },
    {
      title: "Cronograma Estratégico",
      icon: Calendar,
      desc: "Aulas organizadas para render o máximo até a prova.",
    },
    {
      title: "Gestão de Tempo de Prova",
      icon: Clock,
      desc: "Dicas de preenchimento e ordem de resolução das questões.",
    },
    {
      title: "Gabarito Comentado",
      icon: CheckCircle2,
      desc: "Materiais de apoio em PDF com resoluções passo a passo.",
    },
    {
      title: "Foco em Resultados",
      icon: Award,
      desc: "Treinamento mental e prático focado na sua aprovação.",
    },
  ];

  return (
    <section
      id="whychoose"
      className="relative overflow-hidden py-20 bg-white text-brand-dark"
    >
      {/* BACKGROUND DE ONDAS SUTIS (CSS puro simulando o topo do post) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(60deg, #7b42f6 25%, transparent 25%), 
                            linear-gradient(120deg, #7b42f6 25%, transparent 25%)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 text-center">
        {/* HEADER */}
        <span className="inline-block rounded-full bg-brand-cyan px-4 py-1 text-xs font-black uppercase tracking-widest text-brand-purple border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          O que você vai ter
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-black uppercase tracking-tight">
          Pilares da nossa <span className="text-brand-purple">Mentoria</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-slate-600">
          Tudo o que você precisa para dominar a folha de respostas e garantir
          sua classificação no concurso dos seus sonhos.
        </p>

        {/* GRID STYLE NEO-BRUTALISTA */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative rounded-2xl p-6 bg-brand-cream border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* ICON CONTAINER BOX */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-purple text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:bg-brand-cyan group-hover:text-brand-purple transition-colors duration-200">
                  <Icon size={26} strokeWidth={2.5} />
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-xl font-black uppercase tracking-tight text-brand-dark">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-sm font-medium text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
