import Image, { StaticImageData } from "next/image";
import eu from "@/public/assets/eu.png";
import eusection from "@/public/assets/euteste.jpg";
import city from "@/public/assets/modern.jpg";
import project1 from "@/public/assets/project1.jpg";
import project2 from "@/public/assets/project2.jpg";
import project3 from "@/public/assets/project3.jpg";
import project4 from "@/public/assets/project4.jpg";
import project5 from "@/public/assets/project5.jpg";
import project8 from "@/public/assets/project8.jpeg";
import project9 from "@/public/assets/project9.jpg";
import project10 from "@/public/assets/project10.jpeg";
import angular from "@/public/assets/angular.png";
import react from "@/public/assets/react.png";
import tailwind from "@/public/assets/tailwindcss.png";
import bootstrap from "@/public/assets/bootstrap.png";
import kotlin from "@/public/assets/kotlin.png";
import css from "@/public/assets/css.png";
import html from "@/public/assets/html.png";
import python from "@/public/assets/python.png";
import typescript from "@/public/assets/typescript.png";
import js from "@/public/assets/js.png";
import { useState } from "react";
import ContactForm from "./form/page";
import HeroSection from "@/components/heroName";
import Navbar from "@/components/nav";

const projects = [
  {
    id: 1,
    title: "Tempo Certo",
    description:
      "Desenvolvimento de website institucional para uma empresa de logística, com foco na apresentação de serviços, usabilidade otimizada e design responsivo.",
    image: project1,
    tecnology: "Next | TailwindCss",
  },
  {
    id: 2,
    title: "Martins Calendar",
    description:
      "Web site desenvolvido para mostrar um calendário personalizado da empresa Martins, com datas estratégicas, dicas específicas para o sucesso e sugestão de mix para impulsionar vendas em cada ação comercial.",
    image: project2,
    tecnology: "Html | TailwindCss | Javascript",
  },
  {
    id: 3,
    title: "Guia De Segurança",
    description:
      "Página desenvolvida para a empresa Martins, a finalidade do site é passar dicas de seguranças para os clientes referente as vendas e procedimentos da empresa.",
    image: project3,
    tecnology: "Html | TailwindCss | Javascript",
  },
  {
    id: 4,
    title: "Flow eCommerce",
    description:
      "Projeto desenvolvido para um processo seletivo do meu primeiro emprego como desenvolvedor.",
    image: project4,
    tecnology: "Next | TailwindCss",
  },
  {
    id: 5,
    title: "Ultra Gás Simulator",
    description:
      "Projeto desenvolvido para uma empresa com a finalidade de calcular o uso de gás de acordo com as informações preenchidas pelo cliente no formulário.",
    image: project5,
    tecnology: "React",
  },

  {
    id: 6,
    title: "API Uniplus",
    description:
      "Desenvolvimento de uma API responsável por extrair dados do sistema Uniplus, transformá-los em XML e transmiti-los para a API de uma conciliadora bancária, garantindo integração eficiente e segura.",
    image: project8,
    tecnology: "Python | PostgreeSQL",
  },
  {
    id: 7,
    title: "Ismael Barbearia",
    description:
      "Desenvolvimento de uma landing page para destacar os serviços de uma barbearia, com design moderno, navegação intuitiva e otimização para conversões.",
    image: project9,
    tecnology: "React",
  },
  {
    id: 8,
    title: "Mavi APP",
    description:
      "Desenvolvimento de aplicativo mobile Android para capacitação de equipes comerciais, com foco em reprodução de vídeos e áudios, navegação intuitiva, identidade visual personalizada e integração com links externos.",
    image: project10,
    tecnology: "Kotlin",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    tecnology: string;
  } | null>(null);

  return (
    <div>
      <div className="relative min-h-fit flex flex-col items-center justify-center ">
        <div className="absolute inset-0">
          <Image
            src={city}
            alt="Cidade moderna"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        {/* Conteúdo sobre a imagem */}
        <div className="relative w-full ">
          {/* Navbar */}
          <Navbar />

          {/* Seção principal */}
          <section
            id="inicio"
            className="flex flex-col items-center justify-center mt-10 pt-28"
          >
            <div className="relative w-60 h-60 rounded-full overflow-hidden border-2 border-transparent mb-4 animate-float">
              <Image
                src={eu}
                alt="Foto de Gabriel Braga"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <HeroSection />
            </div>
          </section>

          <section className="bg-primary flex flex-col lg:flex-row px-10 py-36 w-full ">
            {/* Imagem - 30% */}
            <div className="flex-[5] lg:flex-[4] flex justify-center pb-16 lg:pb-0 lg:justify-end lg:pr-20  items-center animate-float">
              <Image
                className="border rounded-lg border-transparent w-full max-w-[400px]"
                src={eusection}
                width={600}
                height={400}
                alt="Foto Gabriel Braga"
              />
            </div>

            {/* Texto - 70% */}
            <div
              id="sobre"
              className="md:flex-[5] lg:flex-[6]  flex flex-col scroll-mt-20"
            >
              <div className="text-white  text-5xl sm:text-6xl mb-8 font-montserrat font-bold group max-w-96">
                <span className="border-b-4 border-[#FF6B6B] pb-1 group-hover:border-none transition-all duration-400">
                  So
                </span>
                bre{" "}
                <span className="pb-1 group-hover:border-b-4 border-[#FF6B6B] transition-all duration-400">
                  Mim
                </span>
              </div>

              <div className="text-white mb-6 max-w-3xl lg:text-2xl">
                Sou graduado em Análise e Desenvolvimento de Sistemas e
                atualmente curso uma pós-graduação em Desenvolvimento Full
                Stack. Tenho experiência como desenvolvedor mobile e full stack,
                atuando no desenvolvimento de interfaces modernas, responsivas e
                focadas na experiência do usuário. Atualmente trabalho com
                Python, SQL e participei de projetos mobile, ampliando minha
                atuação em diferentes camadas do desenvolvimento de software.
              </div>

              {/* Cartão de informações */}
              <div className="bg-[#1E2232] p-6 rounded-lg border border-[#FF6B6B] w-full max-w-3xl">
                <div className="grid sm:grid-cols-2 gap-4 text-white text-sm">
                  <p>
                    <span className="font-semibold text-[#FF6B6B]">Nome:</span>{" "}
                    Gabriel Braga
                  </p>
                  <p>
                    <span className="font-semibold text-[#FF6B6B]">Idade:</span>{" "}
                    21
                  </p>
                  <p>
                    <span className="font-semibold text-[#FF6B6B]">
                      Telefone:
                    </span>{" "}
                    +55 34 98894-1337
                  </p>
                  <p>
                    <span className="font-semibold text-[#FF6B6B]">
                      Cidade:
                    </span>{" "}
                    Uberlândia-MG
                  </p>
                </div>
                <a
                  href="https://www.dropbox.com/scl/fi/k3cz0sokb2qqf6p8a1ec6/Curr-culo-Gabriel-Braga.pdf?rlkey=cjjhrai2rulijru1pougnbn2c&st=j2ri6vzo&dl=1
"
                  download="Curriculo_Gabriel_Braga.pdf"
                  className="mt-6 bg-[#FF6B6B] text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition-all inline-block text-center"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section
        id="projetos"
        className="bg-[#25273E] pt-9 px-10 pb-9 scroll-mt-20"
      >
        <div className="text-white text-5xl sm:text-6xl mb-8 font-montserrat font-bold container pb-8 group max-w-44">
          <span className="border-b-4 border-[#FF6B6B] pb-1 group-hover:border-none transition-all duration-400">
            Pr
          </span>
          oje
          <span className="pb-1 group-hover:border-b-4 border-[#FF6B6B] transition-all duration-400">
            tos
          </span>
        </div>

        {/* Grid de Cards */}
        <div>
          {/* Grid de Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative bg-transparent p-4 rounded-lg border border-[#FF6B6B] text-white shadow-lg cursor-pointer transition-all"
                onClick={() => setSelectedProject(project)}
              >
                {/* Imagem */}
                <div className="w-full h-80 relative rounded-md overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />

                  {/* Overlay ao passar o mouse */}
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedProject && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="mb-4 text-gray-200">
                  {selectedProject.description}
                </p>
                <p className="text-sm text-gray-400">
                  Tecnologias usadas: {selectedProject.tecnology}
                </p>
                <button
                  className="mt-4 bg-[#FF6B6B] hover:bg-red-600 px-4 py-2 rounded-md"
                  onClick={() => setSelectedProject(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <section
        id="habilidades"
        className="bg-primary pt-20 px-10 pb-20 scroll-mt-20"
      >
        <div className="text-white text-5xl sm:text-6xl mb-8 font-montserrat font-bold container pb-8 group max-w-40">
          <span className="border-b-4 border-[#FF6B6B] pb-1 group-hover:border-none transition-all duration-300">
            Ha
          </span>
          bilidad
          <span className="pb-1 group-hover:border-b-4 border-[#FF6B6B] transition-all duration-300">
            es
          </span>
        </div>

        <div className="flex items-center flex-col sm:flex-row sm:flex-wrap gap-5">
          {[
            { name: "HTML", image: html },
            { name: "CSS", image: css },
            { name: "JavaScript", image: js },
            { name: "React", image: react },
            { name: "Angular", image: angular },
            { name: "Typescript", image: typescript },
            { name: "Tailwind", image: tailwind },
            { name: "Boostrap", image: bootstrap },
            { name: "Kotlin", image: kotlin },
            { name: "Python", image: python },
          ].map((skill, index) => (
            <div
              key={index}
              className="w-[120px]  p-4 bg-[#25273E] rounded-lg text-center transition-transform duration-300 hover:-translate-y-2 hover:bg-white/20"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain mx-auto mb-3 "
              />
              <p className="text-white font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        id="contato"
        className="bg-[#25273E] pt-9 px-10 pb-9 scroll-mt-10 "
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Formulário */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
