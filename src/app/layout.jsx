import "./globals.css";

export const metadata = {
  title: "Super Revisão de Véspera PMAL 2026 | CPPEM Concursos",
  description:
    "Participe do Super Revisão de Véspera PMAL 2026 do CPPEM Concursos e chegue na prova da Polícia Militar de Alagoas com mais estratégia, clareza e confiança.",
  keywords: [
    "PMAL 2026",
    "Super Revisão PMAL",
    "Revisão de véspera PMAL",
    "CPPEM Concursos",
    "Everton Mota",
    "Concurso Polícia Militar Alagoas",
  ],
  metadataBase: new URL("https://super-revisao-pmal-2026.vercel.app"),
  icons: {
    icon: "/images/logo-cppem.png",
    shortcut: "/images/logo-cppem.png",
    apple: "/images/logo-cppem.png",
  },
  openGraph: {
    title: "Super Revisão de Véspera PMAL 2026 | CPPEM Concursos",
    description:
      "A revisão final para você chegar na prova da PMAL com clareza, estratégia e confiança. Conduzida pelo Prof. Everton Mota.",
    type: "website",
    locale: "pt_BR",
    siteName: "CPPEM Concursos",
    images: [
      {
        url: "/images/logo-cppem.png",
        width: 1200,
        height: 630,
        alt: "Super Revisão de Véspera PMAL 2026 — CPPEM Concursos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Revisão de Véspera PMAL 2026 | CPPEM Concursos",
    description:
      "A revisão final para você chegar na prova da PMAL 2026 com estratégia e foco.",
    images: ["/images/logo-cppem.png"],
  },
};

export const viewport = {
  themeColor: "#050807",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
