"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqaebbjv"); // ID do Formspree

  return (
    <section className="bg-[#25273E] pt-9 pb-9 w-full">
      <div className="text-white text-5xl sm:text-6xl mb-8 font-montserrat font-bold container pb-8 group max-w-44">
        <span className="border-b-4 border-[#FF6B6B] pb-1 group-hover:border-none transition-all duration-400">
          Co
        </span>
        nta
        <span className="pb-1 group-hover:border-b-4 border-[#FF6B6B] transition-all duration-400">
          to
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-[#1E2232] p-6 rounded-lg w-full md:w-1/2">
          {state.succeeded ? (
            <p className="text-green-500">Mensagem enviada com sucesso!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Seu Nome"
                required
                className="p-3 rounded bg-[#25273E] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Seu Email"
                required
                className="p-3 rounded bg-[#25273E] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <textarea
                id="message"
                name="message"
                placeholder="Sua Mensagem"
                required
                rows={4}
                className="p-3 rounded bg-[#25273E] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-[#FF6B6B] text-white py-3 rounded hover:bg-red-600 transition-all"
              >
                {state.submitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col items-center w-full md:w-1/2">
          <p className="text-white text-lg mb-4">Ou me encontre nas redes:</p>
          <div className="flex gap-6">
            <a href="https://wa.me/553488941337" target="_blank" className="text-white text-4xl hover:text-[#FF6B6B] transition-all">
              <FontAwesomeIcon icon={faWhatsapp} className="text-white hover:text-[#FF6B6B] w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-braga-93216a240/" target="_blank" className="text-white text-4xl hover:text-[#FF6B6B] transition-all">
              <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-[#FF6B6B] w-8 h-8" />
            </a>
            <a href="https://github.com/GabrielBraga15/" target="_blank" className="text-white text-4xl hover:text-[#FF6B6B] transition-all">
              <FontAwesomeIcon icon={faGithub} className="text-white hover:text-[#FF6B6B] w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
