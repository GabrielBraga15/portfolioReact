import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { ArrowRight, ArrowUpRight, Code2, Lock } from "lucide-react";
import Navbar from "@/components/nav";
import HeroName from "@/components/heroName";
import Reveal from "@/components/reveal";
import Portrait from "@/components/portrait";
import BgVideo from "@/components/bgVideo";
import { useLang } from "@/lib/i18n";
import ContactForm from "@/components/contactForm";
import project1 from "@/public/assets/project1.jpg";
import project2 from "@/public/assets/project2.jpg";
import project3 from "@/public/assets/project3.jpg";
import project4 from "@/public/assets/project4.jpg";
import project5 from "@/public/assets/project5.jpg";
import project8 from "@/public/assets/project8.jpeg";
import project9 from "@/public/assets/project9.jpg";
import project10 from "@/public/assets/project10.jpeg";
import project11 from "@/public/assets/project11.jpg";
import project12 from "@/public/assets/project12.png";
import project13 from "@/public/assets/project13.png";
import project14 from "@/public/assets/project14.png";

type Project = {
  title: string;
  image: StaticImageData;
  stack: string[];
  code?: string;
  demo?: string;
};

// Sem code/demo = projeto privado.
const projects: Project[] = [
  {
    title: "Tempo Certo",
    image: project1,
    stack: ["Next", "Tailwind"],
    demo: "https://tempocerto.inf.br/",
  },
  {
    title: "Martins Calendar",
    image: project2,
    stack: ["HTML", "Tailwind", "JavaScript"],
  },
  {
    title: "Guia De Segurança",
    image: project3,
    stack: ["HTML", "Tailwind", "JavaScript"],
  },
  {
    title: "Flow eCommerce",
    image: project4,
    stack: ["Next", "Tailwind"],
    code: "https://github.com/GabrielBraga15/ecommerce/tree/main",
  },
  {
    title: "Ultra Gás Simulator",
    image: project5,
    stack: ["React"],
  },
  {
    title: "API Uniplus",
    image: project8,
    stack: ["Python", "PostgreSQL"],
  },
  {
    title: "Ismael Barbearia",
    image: project9,
    stack: ["React"],
    demo: "https://ismaelbarbearia.netlify.app/",
  },
  {
    title: "Mavi APP",
    image: project10,
    stack: ["Kotlin"],
  },
  {
    title: "Book",
    image: project11,
    stack: ["Kotlin"],
  },
  {
    title: "BRK Agro Bots",
    image: project12,
    stack: ["Mercado Livre", "Shopee"],
  },
  {
    title: "Gestão RH",
    image: project13,
    stack: ["Dashboard", "RH"],
  },
  {
    title: "LG IA",
    image: project14,
    stack: ["WhatsApp", "IA"],
    demo: "https://lgia.com.br",
  },
];

const stack = [
  {
    title: "Front-end",
    path: "~/web",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", "Tailwind", "Bootstrap"],
  },
  { title: "Back-end & Dados", path: "~/server", items: ["Python", "SQL"] },
  { title: "Mobile", path: "~/mobile", items: ["Kotlin"] },
];

const getAge = (birth: string) => {
  const today = new Date();
  const b = new Date(birth);
  let age = today.getFullYear() - b.getFullYear();
  const m = today.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < b.getDate())) age--;
  return age;
};

const SectionTitle = ({ tag, children }: { tag: string; children: string }) => (
  <Reveal>
    <p className="font-mono text-xs text-accent">{tag}</p>
    <h2 className="mt-3 max-w-md font-display text-4xl font-bold text-white">
      {children}
    </h2>
  </Reveal>
);

const codeLines: [string, string][] = [
  ["01", 'const dev = {'],
  ["02", '  nome: "Gabriel Braga",'],
  ["03", '  cargo: "Full Stack & Mobile",'],
  ["04", '  local: "Uberlândia, MG",'],
  ["05", '  formacao: "ADS + Pós Full Stack",'],
  ["06", '  stack: ["React", "TypeScript",'],
  ["07", '          "Python", "Kotlin", "SQL"],'],
  ["08", "  disponivel: true,"],
  ["09", "};"],
  ["10", ""],
  ["11", "__comment__"],
  ["12", 'dev.build("seu projeto");'],
];

export default function Home() {
  const age = getAge("2003-07-15");
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-bg text-slate-300">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <BgVideo src="/13506092_1920_1080_30fps.mp4" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 font-mono text-[11px] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t.hero.available}
            </span>
            <p className="mt-8 font-mono text-sm text-accent">{t.hero.hello}</p>
            <h1
              aria-label="Gabriel Braga"
              className="mt-2 min-h-[1.1em] whitespace-nowrap font-display text-[10vw] font-bold text-white sm:text-6xl"
            >
              <HeroName />
            </h1>
            <p className="mt-4 font-display text-3xl text-slate-400">
              {t.hero.role}
            </p>
            <p className="mt-6 max-w-md text-slate-400">
              {t.hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
              >
                {t.hero.viewProjects} <ArrowRight size={16} />
              </a>
              <a
                href="#contato"
                className="rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent"
              >
                {t.hero.talk}
              </a>
            </div>
            <div className="mt-8 flex gap-3">
              {[
                { icon: faGithub, href: "https://github.com/GabrielBraga15/", label: "GitHub" },
                { icon: faLinkedinIn, href: "https://www.linkedin.com/in/gabriel-braga-93216a240/", label: "LinkedIn" },
                { icon: faWhatsapp, href: "https://wa.me/553488941337", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-card text-slate-400 transition-colors hover:border-accent hover:text-accent"
                >
                  <FontAwesomeIcon icon={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Code card */}
          <div className="overflow-hidden rounded-xl border border-line bg-card shadow-2xl">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              <span className="ml-3 font-mono text-xs text-slate-500">developer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
              {codeLines.map(([n, raw]) => {
                const line = raw === "__comment__" ? t.hero.comment : raw;
                return (
                <div key={n} className="flex gap-4">
                  <span className="select-none text-slate-600">{n}</span>
                  <span
                    className={
                      line.startsWith("//") ? "text-slate-500" : "text-emerald-200"
                    }
                  >
                    {line}
                  </span>
                </div>
                );
              })}
            </pre>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="scroll-mt-16 border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <SectionTitle tag={t.about.tag}>{t.about.title}</SectionTitle>
            <p className="mt-6 text-slate-400">{t.about.p1}</p>
            <p className="mt-4 text-slate-400">{t.about.p2}</p>
            <Reveal delay={150}>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  [t.about.age, `${age} ${t.about.years}`],
                  [t.about.city, "Uberlândia-MG"],
                  [t.about.education, t.about.educationValue],
                  [t.about.phone, "+55 34 98894-1337"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-line bg-card px-4 py-3">
                    <p className="font-mono text-[10px] text-slate-500">{k}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Portrait alt={t.about.photoAlt} />
          </Reveal>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="scroll-mt-16 border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle tag={t.stack.tag}>{t.stack.title}</SectionTitle>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {stack.map((g, gi) => (
              <Reveal key={g.title} delay={gi * 150} className="h-full">
              <div className="h-full rounded-xl border border-line bg-card p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">{g.title === "Back-end & Dados" ? t.stack.backend : g.title}</h3>
                  <span className="font-mono text-xs text-slate-500">{g.path}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {i}
                    </span>
                  ))}
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section
        id="projetos"
        className="relative scroll-mt-16 overflow-hidden border-b border-line"
      >
        <BgVideo src="/projetos-video.mp4" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle tag={t.projectsSection.tag}>{t.projectsSection.title}</SectionTitle>
            <a
              href="https://github.com/GabrielBraga15/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
            >
              {t.projectsSection.github} <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 150} className="h-full">
              <article
                className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card transition-colors hover:border-accent/60"
              >
                <div className="bg-grid relative h-44">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                  <span className="absolute left-3 top-3 rounded bg-bg/80 px-1.5 py-0.5 font-mono text-[11px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-400">{t.projects[p.title]}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-line bg-bg px-2 py-0.5 font-mono text-[11px] text-slate-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-5 text-sm text-white">
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                        <Code2 size={14} /> {t.projectsSection.code}
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                        <ArrowUpRight size={14} /> {t.projectsSection.demo}
                      </a>
                    )}
                    {!p.code && !p.demo && (
                      <span className="inline-flex items-center gap-1.5 text-slate-500">
                        <Lock size={14} /> {t.projectsSection.private}
                      </span>
                    )}
                  </div>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="scroll-mt-16 border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-6 py-8 font-mono text-xs text-slate-500">
        <span>© {new Date().getFullYear()} Gabriel Braga</span>
        <span>
          {t.footer.made} <span className="text-accent">React</span> {t.footer.coffee} · Uberlândia-MG
        </span>
      </footer>
    </div>
  );
}
