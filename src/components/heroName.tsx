"use client";

import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <div className="text-center mt-4">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl text-red-500 pb-3 font-montserrat font-bold">
        <Typewriter
          options={{
            strings: ["Gabriel Braga"],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 50,
          }}
        />
      </h1>
      <div className="text-base sm:text-lg text-white pb-28 font-montserrat lg:text-2xl">
        <Typewriter
          options={{
            strings: ["Desenvolvedor Fullstack", "React | Python | SQL"],
            autoStart: true,
            loop: true,
            delay: 80,
            deleteSpeed: 40,
          }}
        />
      </div>
    </div>
  );
}
