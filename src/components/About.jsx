import anasPhoto from "../assets/brandImage.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 relative font-sans overflow-hidden bg-brand-cream text-brand-dark"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#7b42f6_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="relative justify-self-center md:justify-self-start w-full max-w-md">
          <div className="absolute inset-0 bg-brand-purple border-4 border-black rounded-2xl translate-x-3 translate-y-3" />

          <div className="relative overflow-hidden rounded-2xl border-4 border-black bg-white aspect-[4/5] md:aspect-auto">
            <img
              src={anasPhoto}
              alt="Professoras Anas - Português com as Anas"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="font-sans">
          <span className="text-xs font-black uppercase tracking-widest bg-brand-purple text-white px-3 py-1 border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Quem Somos
          </span>

          <h2 className="text-4xl font-black uppercase tracking-tight text-brand-dark mt-4">
            Prazer, as <span className="text-brand-purple">Anas!</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed font-medium text-slate-800">
            Especialistas na preparação para concursos públicos, unimos
            metodologia prática, foco direto no edital e dinamismo para
            desmistificar a língua portuguesa. Nossa mentoria foi desenhada para
            guiar você rumo à aprovação de forma leve e assertiva. Somos
            professoras efetivas do Estado do Amapá e trabalhamos com Português
            para concursos desde 2022. Colecionamos mentorados aprovados nos
            mais diversos concursos do Estado do Amapá e também em outros
            estados.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="h-4 w-4 flex-shrink-0 bg-brand-purple border-2 border-black" />
              <p className="font-bold text-base text-brand-dark">
                Metodologia direto ao ponto com revisão estratégica.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="h-4 w-4 flex-shrink-0 bg-brand-cyan border-2 border-black" />
              <p className="font-bold text-base text-brand-dark">
                Material focado em resolução e fixação de conteúdo.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="h-4 w-4 flex-shrink-0 bg-brand-purple border-2 border-black" />
              <p className="font-bold text-base text-brand-dark">
                Suporte e direcionamento especializado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
