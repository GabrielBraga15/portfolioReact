import Image from "next/image";
import background from "@/public/assets/eu pixar.jpg";
import cutout from "@/public/assets/eu-pixar-cutout.png";

// Posições fixas (não aleatórias) para não quebrar a hidratação.
const particles = [8, 17, 26, 35, 44, 54, 63, 72, 81, 91];

// Camadas: foto original (fundo) -> brilho/luz/partículas -> recorte do rosto parado.
export default function Portrait({ alt }: { alt: string }) {
  return (
    <div className="relative mx-auto aspect-[912/1160] w-full max-w-md overflow-hidden rounded-xl border border-line bg-card">
      <Image src={background} alt="" fill className="portrait-pulse object-cover" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="portrait-sweep absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent mix-blend-screen" />
        {particles.map((left, i) => (
          <span
            key={left}
            className="portrait-rise absolute bottom-0 h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_#22d3ee]"
            style={{ left: `${left}%`, animationDelay: `${(i * 0.7) % 7}s` }}
          />
        ))}
      </div>

      <Image src={cutout} alt={alt} fill className="object-cover" />
    </div>
  );
}
