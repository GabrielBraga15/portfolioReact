import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LangProvider } from "@/lib/i18n";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${display.variable} ${sans.variable} ${mono.variable} font-sans`}
    >
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </main>
  );
}
