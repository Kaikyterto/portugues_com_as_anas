import { getWhatsAppUrl, siteContent } from "../content/site";
// Substitua o import abaixo pelo caminho correto da imagem do banner/foto das Anas
import bannerImage from "../assets/logo-sem-fundo.png";

export default function Hero() {
  const registerLink = getWhatsAppUrl(
    "Olá! Quero me inscrever no Módulo II da Mentoria de Português."
  );

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-16 md:py-24 font-sans text-white"
      style={{
        background: `
          linear-gradient(
            135deg,
            #5B2EFF 0%,
            #7b42f6 35%,
            #4D26D9 65%,
            #00E5FF 100%
          )
        `,
      }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 lg:grid lg:grid-cols-12">
        {/* TEXTO / CONTEÚDO ESQUERDA */}
        <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="inline-block rounded-full bg-brand-cyan px-4 py-1 text-xs font-black uppercase tracking-widest text-brand-purple border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Preparação para Concursos
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl uppercase tracking-tight">
            Português para <br />
            <span className="text-brand-cyan underline  decoration-3">
              Concursos
            </span>
          </h1>

          <p className="mt-6 text-lg font-medium text-purple-100 max-w-md">
            Garanta sua vaga no{" "}
            <strong className="text-white font-bold">CFO e Prefeitura</strong>{" "}
            com a nossa revisão estratégica do{" "}
            <span className="text-brand-cyan font-bold">Módulo II</span>.
            Aprendizado direto ao ponto.
          </p>

          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border-2 border-brand-cyan bg-white/10 backdrop-blur-sm px-6 py-4 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            <div>
              <p className="text-xs uppercase font-black tracking-widest text-brand-cyan">
                Investimento
              </p>
              <p className="text-3xl font-black text-white">R$ 85,00</p>
            </div>

            <div className="h-12 w-px bg-white/20" />

            <div>
              <p className="text-xs uppercase font-black tracking-widest text-brand-cyan">
                Vagas
              </p>
              <p className="font-bold text-white">Limitadas</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={registerLink}
              className="rounded-full px-8 py-4 font-black uppercase text-center tracking-wider bg-brand-cyan text-brand-purple border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Garantir Minha Vaga
            </a>

            <a
              href="#sobre"
              className="rounded-full px-8 py-4 font-bold uppercase text-center tracking-wider border-2 border-white text-white hover:bg-white/10 transition"
            >
              Saber Mais
            </a>
          </div>
        </div>

        {/* CONTAINER DA JANELA RETRÔ À DIREITA */}
        <div className="lg:col-span-7 flex justify-center w-full">
          <div className="bg-brand-cream border-4 border-black rounded-xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full max-w-xl overflow-hidden">
            {/* Barra superior da janela fake */}
            <div className="bg-brand-cyan border-b-4 border-black px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-purple border-2 border-black" />
                <div className="w-3 h-3 rounded-full bg-brand-purple border-2 border-black" />
                <div className="w-3 h-3 rounded-full bg-brand-purple border-2 border-black" />
              </div>
              <span className="text-xs font-black uppercase text-brand-purple tracking-widest">
                MENTORIA_2026.EXE
              </span>
            </div>

            {/* Conteúdo interno da janela */}
            <div className="flex items-center justify-center relative overflow-hidden h-full bg-white/10 backdrop-blur-sm">
              <img
                src={bannerImage}
                alt="Mentoria Português com as Anas"
                className="w-full h-full object-cover border-2 border-black/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
