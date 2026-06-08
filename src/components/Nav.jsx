import { useState } from "react";
import logo from "../assets/logo-sem-fundo.png";
import { getWhatsAppUrl, navItems, siteContent } from "../content/site";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const startNowLink = getWhatsAppUrl(siteContent.primaryCtaMessage);

  return (
    <nav className="sticky top-0 z-40 w-full font-sans backdrop-blur-md bg-brand-cream/95 border-b-4 border-black">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        {/* LOGO */}
        <a
          href="#hero"
          className="flex items-center gap-3 transition hover:scale-105"
        >
          <img
            src={logo}
            alt="Logo Português com as Anas"
            className="h-14 w-auto"
          />
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-black uppercase tracking-wider text-brand-dark transition hover:text-brand-purple"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA DESKTOP */}
        <div className="hidden md:block">
          <a
            href={startNowLink}
            className="rounded-full bg-brand-cyan px-6 py-2.5 text-sm font-black uppercase text-brand-purple border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            {siteContent.primaryCtaLabel}
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          className="rounded-lg p-2 text-brand-dark md:hidden"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="absolute w-full bg-brand-cream border-b-4 border-black px-6 py-6 md:hidden shadow-lg">
          <div className="flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-black uppercase text-brand-dark hover:text-brand-purple"
              >
                {item.label}
              </a>
            ))}

            <a
              href={startNowLink}
              className="rounded-full bg-brand-cyan px-5 py-4 text-center font-black uppercase text-brand-purple border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {siteContent.primaryCtaLabel}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
