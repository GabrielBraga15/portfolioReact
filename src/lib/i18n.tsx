"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "pt" | "en" | "es";
export const LANGS: Lang[] = ["pt", "en", "es"];

const pt = {
  nav: { about: "01. sobre", stack: "02. stack", projects: "03. projetos", contact: "04. contato", cv: "Baixar CV" },
  hero: {
    available: "Disponível para novos projetos",
    hello: "Olá, eu sou",
    role: "Desenvolvedor Full Stack & Mobile",
    intro: "Construo interfaces modernas, responsivas e focadas na experiência do usuário — do front-end ao banco de dados.",
    viewProjects: "Ver projetos",
    talk: "Fale comigo",
    comment: "// pronto para o próximo desafio",
  },
  about: {
    tag: "01. sobre mim",
    title: "Código limpo, interfaces que funcionam.",
    p1: "Sou graduado em Análise e Desenvolvimento de Sistemas e atualmente curso uma pós-graduação em Desenvolvimento Full Stack.",
    p2: "Tenho experiência como desenvolvedor mobile e full stack, atuando no desenvolvimento de interfaces modernas, responsivas e focadas na experiência do usuário. Atualmente trabalho com Python e SQL, e participei de projetos mobile, ampliando minha atuação em diferentes camadas do desenvolvimento de software.",
    age: "IDADE",
    years: "anos",
    city: "CIDADE",
    education: "FORMAÇÃO",
    educationValue: "ADS · Pós Full Stack",
    phone: "TELEFONE",
    photoAlt: "Foto de Gabriel Braga",
  },
  stack: { tag: "02. stack", title: "Tecnologias que uso no dia a dia", backend: "Back-end & Dados" },
  projectsSection: {
    tag: "03. projetos",
    title: "Trabalhos selecionados",
    github: "ver tudo no GitHub",
    private: "Projeto privado",
    code: "Código",
    demo: "Demo",
  },
  projects: {
    "Tempo Certo": "Website institucional para uma empresa de logística, com foco na apresentação de serviços, usabilidade otimizada e design responsivo.",
    "Martins Calendar": "Calendário personalizado da Martins, com datas estratégicas, dicas para o sucesso e sugestão de mix para impulsionar vendas em cada ação comercial.",
    "Guia De Segurança": "Página para a Martins com dicas de segurança aos clientes sobre vendas e procedimentos da empresa.",
    "Flow eCommerce": "Projeto desenvolvido para o processo seletivo do meu primeiro emprego como desenvolvedor.",
    "Ultra Gás Simulator": "Simulador que calcula o uso de gás de acordo com as informações preenchidas pelo cliente no formulário.",
    "API Uniplus": "API que extrai dados do sistema Uniplus, transforma em XML e transmite para a API de uma conciliadora bancária, com integração eficiente e segura.",
    "Ismael Barbearia": "Landing page para destacar os serviços de uma barbearia, com design moderno, navegação intuitiva e foco em conversão.",
    "Mavi APP": "App Android para capacitação de equipes comerciais: vídeos e áudios, navegação intuitiva, identidade visual própria e links externos.",
    Book: "Painel que exibe a empresas dados de faturamento, impostos e comissões, facilitando a análise financeira e decisões estratégicas.",
    "BRK Agro Bots": "Plataforma de atendimento inteligente para vendedores do Mercado Livre e da Shopee, com login por empresa e ecossistema de performance nos marketplaces.",
    "Gestão RH": "Painel interno de RH: colaboradores, recrutamento, férias, ponto, benefícios, folhas e custos organizados por CNPJ empregador.",
    "LG IA": "Chatbot de IA para WhatsApp: atende clientes 24h, envia o cardápio e registra pedidos automaticamente, com planos para negócios.",
  } as Record<string, string>,
  contact: {
    tag: "04. contato",
    title: "Vamos construir algo juntos?",
    text: "Tem um projeto, uma vaga ou só quer trocar uma ideia? Mande uma mensagem ou me encontre nas redes.",
    name: "nome",
    namePh: "Seu nome",
    email: "email",
    emailPh: "voce@empresa.com",
    message: "mensagem",
    messagePh: "Conte um pouco sobre o projeto...",
    send: "Enviar mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada com sucesso!",
  },
  footer: { made: "feito com", coffee: "+ café" },
};

type Dict = typeof pt;

const en: Dict = {
  nav: { about: "01. about", stack: "02. stack", projects: "03. projects", contact: "04. contact", cv: "Download CV" },
  hero: {
    available: "Available for new projects",
    hello: "Hi, I'm",
    role: "Full Stack & Mobile Developer",
    intro: "I build modern, responsive interfaces focused on user experience — from the front-end to the database.",
    viewProjects: "View projects",
    talk: "Talk to me",
    comment: "// ready for the next challenge",
  },
  about: {
    tag: "01. about me",
    title: "Clean code, interfaces that work.",
    p1: "I hold a degree in Systems Analysis and Development and I'm currently pursuing a postgraduate degree in Full Stack Development.",
    p2: "I have experience as a mobile and full stack developer, building modern, responsive interfaces focused on user experience. I currently work with Python and SQL, and I've taken part in mobile projects, broadening my work across different layers of software development.",
    age: "AGE",
    years: "years old",
    city: "CITY",
    education: "EDUCATION",
    educationValue: "Systems Analysis · Full Stack Postgrad",
    phone: "PHONE",
    photoAlt: "Photo of Gabriel Braga",
  },
  stack: { tag: "02. stack", title: "Technologies I use every day", backend: "Back-end & Data" },
  projectsSection: {
    tag: "03. projects",
    title: "Selected work",
    github: "see all on GitHub",
    private: "Private project",
    code: "Code",
    demo: "Demo",
  },
  projects: {
    "Tempo Certo": "Corporate website for a logistics company, focused on presenting services, optimized usability and responsive design.",
    "Martins Calendar": "Custom calendar for Martins, with strategic dates, tips for success and product mix suggestions to boost sales in each commercial campaign.",
    "Guia De Segurança": "Page for Martins with security tips for customers about sales and company procedures.",
    "Flow eCommerce": "Project built for the hiring process of my first job as a developer.",
    "Ultra Gás Simulator": "Simulator that calculates gas usage from the information the customer fills in on the form.",
    "API Uniplus": "API that extracts data from the Uniplus system, converts it to XML and sends it to a bank reconciliation company's API, with efficient and secure integration.",
    "Ismael Barbearia": "Landing page highlighting a barbershop's services, with modern design, intuitive navigation and a focus on conversion.",
    "Mavi APP": "Android app for training sales teams: videos and audio, intuitive navigation, custom visual identity and external links.",
    Book: "Dashboard that shows companies revenue, tax and commission data, making financial analysis and strategic decisions easier.",
    "BRK Agro Bots": "Smart customer-support platform for Mercado Livre and Shopee sellers, with per-company login and a performance ecosystem across marketplaces.",
    "Gestão RH": "Internal HR dashboard: employees, recruitment, vacations, time tracking, benefits, payroll and costs organized by employer tax ID.",
    "LG IA": "AI chatbot for WhatsApp: serves customers 24/7, sends the menu and registers orders automatically, with plans for businesses.",
  },
  contact: {
    tag: "04. contact",
    title: "Let's build something together?",
    text: "Have a project, a job opening or just want to chat? Send a message or find me on social media.",
    name: "name",
    namePh: "Your name",
    email: "email",
    emailPh: "you@company.com",
    message: "message",
    messagePh: "Tell me a bit about the project...",
    send: "Send message",
    sending: "Sending...",
    success: "Message sent successfully!",
  },
  footer: { made: "made with", coffee: "+ coffee" },
};

const es: Dict = {
  nav: { about: "01. sobre mí", stack: "02. stack", projects: "03. proyectos", contact: "04. contacto", cv: "Descargar CV" },
  hero: {
    available: "Disponible para nuevos proyectos",
    hello: "Hola, soy",
    role: "Desarrollador Full Stack & Mobile",
    intro: "Construyo interfaces modernas, responsivas y centradas en la experiencia del usuario — del front-end a la base de datos.",
    viewProjects: "Ver proyectos",
    talk: "Habla conmigo",
    comment: "// listo para el próximo desafío",
  },
  about: {
    tag: "01. sobre mí",
    title: "Código limpio, interfaces que funcionan.",
    p1: "Soy graduado en Análisis y Desarrollo de Sistemas y actualmente curso un posgrado en Desarrollo Full Stack.",
    p2: "Tengo experiencia como desarrollador mobile y full stack, creando interfaces modernas, responsivas y centradas en la experiencia del usuario. Actualmente trabajo con Python y SQL, y participé en proyectos mobile, ampliando mi actuación en distintas capas del desarrollo de software.",
    age: "EDAD",
    years: "años",
    city: "CIUDAD",
    education: "FORMACIÓN",
    educationValue: "ADS · Posgrado Full Stack",
    phone: "TELÉFONO",
    photoAlt: "Foto de Gabriel Braga",
  },
  stack: { tag: "02. stack", title: "Tecnologías que uso a diario", backend: "Back-end y Datos" },
  projectsSection: {
    tag: "03. proyectos",
    title: "Trabajos seleccionados",
    github: "ver todo en GitHub",
    private: "Proyecto privado",
    code: "Código",
    demo: "Demo",
  },
  projects: {
    "Tempo Certo": "Sitio web institucional para una empresa de logística, enfocado en la presentación de servicios, usabilidad optimizada y diseño responsivo.",
    "Martins Calendar": "Calendario personalizado de Martins, con fechas estratégicas, consejos para el éxito y sugerencia de mix para impulsar las ventas en cada acción comercial.",
    "Guia De Segurança": "Página para Martins con consejos de seguridad para los clientes sobre ventas y procedimientos de la empresa.",
    "Flow eCommerce": "Proyecto desarrollado para el proceso de selección de mi primer empleo como desarrollador.",
    "Ultra Gás Simulator": "Simulador que calcula el uso de gas según la información que el cliente completa en el formulario.",
    "API Uniplus": "API que extrae datos del sistema Uniplus, los transforma a XML y los envía a la API de una conciliadora bancaria, con integración eficiente y segura.",
    "Ismael Barbearia": "Landing page para destacar los servicios de una barbería, con diseño moderno, navegación intuitiva y foco en conversión.",
    "Mavi APP": "App Android para capacitar equipos comerciales: videos y audios, navegación intuitiva, identidad visual propia y enlaces externos.",
    Book: "Panel que muestra a las empresas datos de facturación, impuestos y comisiones, facilitando el análisis financiero y las decisiones estratégicas.",
    "BRK Agro Bots": "Plataforma de atención inteligente para vendedores de Mercado Libre y Shopee, con login por empresa y ecosistema de performance en los marketplaces.",
    "Gestão RH": "Panel interno de RRHH: colaboradores, reclutamiento, vacaciones, control de horario, beneficios, nóminas y costos organizados por CNPJ empleador.",
    "LG IA": "Chatbot de IA para WhatsApp: atiende clientes 24h, envía el menú y registra pedidos automáticamente, con planes para negocios.",
  },
  contact: {
    tag: "04. contacto",
    title: "¿Construimos algo juntos?",
    text: "¿Tienes un proyecto, una vacante o solo quieres charlar? Envía un mensaje o encuéntrame en las redes.",
    name: "nombre",
    namePh: "Tu nombre",
    email: "email",
    emailPh: "tu@empresa.com",
    message: "mensaje",
    messagePh: "Cuéntame un poco sobre el proyecto...",
    send: "Enviar mensaje",
    sending: "Enviando...",
    success: "¡Mensaje enviado con éxito!",
  },
  footer: { made: "hecho con", coffee: "+ café" },
};

const dicts: Record<Lang, Dict> = { pt, en, es };

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "pt",
  setLang: () => {},
  t: pt,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  // Lê a escolha salva só após montar, para não quebrar a hidratação (padrão: pt).
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved && LANGS.includes(saved)) setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  return <Ctx.Provider value={{ lang, setLang, t: dicts[lang] }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
