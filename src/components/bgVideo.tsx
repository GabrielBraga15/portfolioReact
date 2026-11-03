"use client";

// Vídeo de fundo esfumaçado em câmera lenta; pai precisa ser `relative overflow-hidden`.
export default function BgVideo({ src }: { src: string }) {
  return (
    <>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        ref={(el) => {
          if (el) el.playbackRate = 0.5;
        }}
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-md motion-reduce:hidden"
      />
      {/* esfumaça as bordas para fundir com o resto da página */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/40 to-bg" />
    </>
  );
}
