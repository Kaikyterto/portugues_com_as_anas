import logo from "../assets/logo-sem-fundo.png";
import { getWhatsAppUrl, siteContent } from "../content/site";

export default function Footer() {
  const registerLink = getWhatsAppUrl(
    "Olá! Quero tirar dúvidas sobre as inscrições da Mentoria."
  );

  return (
    <footer
      id="footer"
      className="bg-[#1f1137] text-purple-100 font-sans border-t-4 border-black"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 md:items-center">
        {/* LOGO + DESCRIÇÃO */}
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt={siteContent.brandName}
            className="h-16 w-auto drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          />

          <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">
            {siteContent.brandName}
          </h3>

          <p className="mt-2 text-base text-purple-200/90 max-w-sm font-medium leading-relaxed">
            Preparação estratégica e de alto rendimento em Língua Portuguesa
            para os concursos do CFO e Prefeituras.
          </p>

          {/* Tags de Concurso no rodapé */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-brand-purple border-2 border-black px-2.5 py-0.5 text-xs font-bold uppercase rounded text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              CFO
            </span>
            <span className="bg-brand-cyan border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase rounded text-brand-purple shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Prefeituras
            </span>
          </div>
        </div>

        {/* CONTATO CANAL DIRETO SIMPLIFICADO */}
        <div className="flex flex-col items-start md:items-end md:text-right w-full">
          <h4 className="font-black uppercase tracking-wider text-brand-cyan text-sm">
            Dúvidas e Inscrições
          </h4>

          <a
            href={registerLink}
            className="mt-3 block text-2xl md:text-3xl font-black text-white hover:text-brand-cyan transition-colors duration-150 tracking-tight"
          >
            (96) 99163-2585
          </a>

          <p className="mt-1 text-sm text-purple-300 font-medium">
            {siteContent.email}
          </p>

          <a
            href={registerLink}
            className="mt-6 inline-block rounded-full bg-brand-cyan px-6 py-3 font-black uppercase text-sm text-brand-purple border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>

      {/* DIREITOS RESERVADOS */}
      <div className="border-t-2 border-black/30 bg-[#160a28] py-6 text-center text-sm font-medium text-purple-300/60">
        <p>© 2026 {siteContent.brandName}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
