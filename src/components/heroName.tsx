"use client";

import Typewriter from "typewriter-effect";

export default function HeroName() {
  return (
    <Typewriter
      options={{
        strings: ["Gabriel Braga"],
        autoStart: true,
        loop: true,
        delay: 100,
        deleteSpeed: 50,
      }}
    />
  );
}
