import { useEffect, useState } from "react";
import { testimonialTexts } from "../content/site";

export default function Testimonials() {
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  useEffect(() => {
    if (testimonialTexts.length <= 1) return;

    const intervalId = setInterval(() => {
      setActiveTextIndex((current) => (current + 1) % testimonialTexts.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  const goToNextText = () => {
    setActiveTextIndex((current) => (current + 1) % testimonialTexts.length);
  };

  const goToPrevText = () => {
    setActiveTextIndex((current) =>
      current === 0 ? testimonialTexts.length - 1 : current - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-brand-purple text-white relative overflow-hidden"
    >
      {/* Padrão de bolinhas sutil no fundo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative mx-auto w-full max-w-4xl px-6">
        {/* Header */}
        <div className="text-center flex flex-col items-center">
          <span className="inline-block rounded-full bg-brand-cyan px-4 py-1 text-xs font-black uppercase tracking-widest text-brand-purple border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Quem já passou aprova
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-black uppercase tracking-tight">
            Depoimentos de <span className="text-brand-cyan">Alunos</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-purple-100">
            Veja o depoimento de quem encurtou o caminho até a aprovação usando
            o método das Anas.
          </p>
        </div>

        {/* Carousel Caixa Pop-Art */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border-4 border-black bg-brand-cream text-brand-dark shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Topo decorativo da caixinha de depoimento */}
            <div className="bg-brand-cyan border-b-4 border-black px-4 py-2 flex items-center">
              <span className="text-xs font-black uppercase tracking-wider text-brand-purple">
                DEPOIMENTO_APROVADO.TXT
              </span>
            </div>

            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeTextIndex * 100}%)` }}
            >
              {testimonialTexts.map((item) => (
                <article
                  key={`${item.name}-${item.role}`}
                  className="min-w-full p-8 md:p-10 flex flex-col justify-between"
                >
                  <p className="text-xl leading-relaxed md:text-2xl font-bold italic text-brand-dark">
                    "{item.quote}"
                  </p>

                  <div>
                    <div className="mt-8 h-[2px] w-full bg-black/10" />

                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <p className="text-lg font-black uppercase tracking-wide text-brand-purple">
                        {item.name}
                      </p>
                      <p className="text-sm font-black uppercase bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-md border-2 border-brand-purple/20">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Controls Neo-brutais */}
          {testimonialTexts.length > 1 && (
            <div className="mt-8 flex items-center justify-between sm:justify-center gap-6">
              <button
                onClick={goToPrevText}
                className="rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider bg-white text-brand-purple border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                ← Voltar
              </button>

              {/* Dots Quadrados */}
              <div className="flex items-center gap-2">
                {testimonialTexts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTextIndex(index)}
                    className="h-3 w-3 border border-black transition-all duration-150"
                    style={{
                      backgroundColor:
                        index === activeTextIndex ? "#22d3ee" : "#ffffff",
                      transform:
                        index === activeTextIndex ? "scale(1.2)" : "none",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={goToNextText}
                className="rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider bg-brand-cyan text-brand-purple border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Avançar →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
