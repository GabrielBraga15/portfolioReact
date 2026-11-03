"use client";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Send } from "lucide-react";
import { useLang } from "@/lib/i18n";

const contacts = [
  {
    icon: faWhatsapp,
    label: "WhatsApp",
    value: "+55 34 98894-1337",
    href: "https://wa.me/553488941337",
  },
  {
    icon: faLinkedin,
    label: "LinkedIn",
    value: "in/gabriel-braga",
    href: "https://www.linkedin.com/in/gabriel-braga-93216a240/",
  },
  {
    icon: faGithub,
    label: "GitHub",
    value: "@GabrielBraga15",
    href: "https://github.com/GabrielBraga15/",
  },
];

const field =
  "w-full rounded-md border border-line bg-bg px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-accent focus:outline-none";
const label = "mb-1.5 block font-mono text-xs text-slate-400";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqaebbjv");
  const { t } = useLang();
  const c = t.contact;

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <div>
        <p className="font-mono text-xs text-accent">{c.tag}</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-white">
          {c.title}
        </h2>
        <p className="mt-4 text-slate-400">{c.text}</p>
        <div className="mt-8 flex flex-col gap-3">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-lg border border-line bg-card px-4 py-3 transition-colors hover:border-accent"
            >
              <FontAwesomeIcon icon={c.icon} className="h-5 w-5 text-accent" />
              <div>
                <p className="font-mono text-[10px] text-slate-500">{c.label}</p>
                <p className="text-sm font-semibold text-white">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-line bg-card p-6">
        {state.succeeded ? (
          <p className="text-accent">{c.success}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className={label}>
                {c.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={c.namePh}
                className={field}
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="email" className={label}>
                {c.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={c.emailPh}
                className={field}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="message" className={label}>
                {c.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder={c.messagePh}
                className={field}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="flex items-center justify-center gap-2 rounded-md bg-accent py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {state.submitting ? c.sending : c.send}
              <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
