import { useState } from "react";
import { faqData } from "../content/site";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 border-b-2 border-black last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left group py-2"
        onClick={() => setIsOpen((value) => !value)}
      >
        {/* PERGUNTA */}
        <h3 className="text-lg font-black uppercase tracking-tight text-brand-dark group-hover:text-brand-purple transition-colors duration-150">
          {question}
        </h3>

        {/* BOTÃO MÁGICO +/- */}
        <span
          className={`ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center border-2 border-black font-black text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150
          ${
            isOpen
              ? "bg-brand-purple text-white translate-x-[1px] translate-y-[1px] shadow-none"
              : "bg-brand-cyan text-brand-purple"
          }
        `}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* RESPOSTA COM TRANSIÇÃO EM GRID */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-4 pb-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-base font-medium text-slate-700 leading-relaxed bg-white border-2 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-brand-cream text-brand-dark relative">
      <div className="mx-auto w-full max-w-4xl px-6">
        {/* TÍTULO */}
        <div className="text-center flex flex-col items-center">
          <span className="inline-block rounded-full bg-brand-purple text-white px-4 py-1 text-xs font-black uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Dúvidas Comuns
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-black uppercase tracking-tight">
            Perguntas <span className="text-brand-purple">Frequentes</span>
          </h2>
        </div>

        {/* CONTAINER POP-ART */}
        <div className="mt-12 rounded-2xl bg-white p-6 md:p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          {faqData.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
