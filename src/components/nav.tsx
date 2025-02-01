"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Ícones do Lucide

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const updateNavbarBg = () => {
      if (isOpen) {
        setNavbarBg("bg-primary shadow-md");
      } else if (scrollPosition > window.innerHeight * 0.3) {
        setNavbarBg("bg-primary shadow-md");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateNavbarBg();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${navbarBg}`}>
      <div className="flex justify-between sm:justify-center items-center px-6 py-4">
        <div className="text-white text-2xl font-bold sm:hidden">Gabriel Braga</div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-10">
          {[
            { label: "Início", id: "inicio" },
            { label: "Sobre", id: "sobre" },
            { label: "Projetos", id: "projetos" },
            { label: "Habilidades", id: "habilidades" },
            { label: "Contato", id: "contato" },
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className="text-white hover:text-[#FF6B6B] text-lg transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Botão do Menu Hambúrguer (Mobile) */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-primary flex flex-col items-center py-4 gap-4">
          {[
            { label: "Início", id: "inicio" },
            { label: "Sobre", id: "sobre" },
            { label: "Projetos", id: "projetos" },
            { label: "Habilidades", id: "habilidades" },
            { label: "Contato", id: "contato" },
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className="text-white text-lg hover:text-[#FF6B6B] transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
