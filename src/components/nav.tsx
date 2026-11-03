"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LANGS, useLang } from "@/lib/i18n";

const CV =
  "https://www.dropbox.com/scl/fi/k3cz0sokb2qqf6p8a1ec6/Curr-culo-Gabriel-Braga.pdf?rlkey=cjjhrai2rulijru1pougnbn2c&st=j2ri6vzo&dl=1";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { label: t.nav.about, id: "sobre" },
    { label: t.nav.stack, id: "stack" },
    { label: t.nav.projects, id: "projetos" },
    { label: t.nav.contact, id: "contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="font-mono text-sm text-white">
          <span className="text-accent">&lt;</span> gabriel.braga{" "}
          <span className="text-accent">/&gt;</span>
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden gap-8 font-mono text-xs text-slate-400 md:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex overflow-hidden rounded-md border border-line font-mono text-xs">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-2.5 py-1.5 uppercase transition-colors ${
                  lang === l
                    ? "bg-accent text-bg"
                    : "text-slate-400 hover:text-accent"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={CV}
            download="Curriculo_Gabriel_Braga.pdf"
            className="hidden rounded-md border border-accent px-4 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-bg sm:block"
          >
            {t.nav.cv}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            className="text-white md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        inert={!open}
        className={`grid transition-all duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
        <div className="flex flex-col gap-1 border-t border-line px-6 py-3 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="py-2 text-slate-300 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CV}
            download="Curriculo_Gabriel_Braga.pdf"
            className="mt-2 rounded-md border border-accent px-4 py-2 text-center text-accent"
          >
            {t.nav.cv}
          </a>
        </div>
        </div>
      </div>
    </header>
  );
}
