"use client";
import { useState } from "react";

const faqs = [
  {
    q: "O que é o Super Revisão de Véspera PMAL 2026?",
    a: "É um aulão estratégico realizado pelo CPPEM Concursos, focado em revisar os pontos mais importantes do conteúdo da PMAL 2026 nos dias que antecedem a prova.",
  },
  {
    q: "Para quem é essa revisão?",
    a: "Para quem vai fazer a prova da PMAL 2026 e quer chegar com mais clareza, segurança e direção — seja você um candidato avançado ou alguém que ainda sente insegurança na reta final.",
  },
  {
    q: "A revisão é online ou presencial?",
    a: "O evento é realizado no formato online ao vivo, para que você possa participar de qualquer lugar. Detalhes de acesso são enviados após a inscrição.",
  },
  {
    q: "Quem será o professor?",
    a: "A condução é do Prof. Everton Mota, fundador do CPPEM Concursos, aprovado em 15 concursos públicos e referência em preparação para carreiras policiais.",
  },
  {
    q: "Vou receber algum material?",
    a: "Sim. O evento conta com material de apoio focado no que será abordado no aulão e acesso ao grupo oficial de alunos do CPPEM.",
  },
  {
    q: "Como faço para garantir minha vaga?",
    a: "Basta clicar em qualquer botão de inscrição da página, finalizar o pagamento via Pix ou cartão de crédito e seguir as instruções enviadas pela nossa equipe.",
  },
  {
    q: "Posso participar mesmo se estiver começando agora?",
    a: "Sim. A revisão entrega direção e foco — útil tanto para quem já estudou bastante quanto para quem quer um norte estratégico antes da prova.",
  },
  {
    q: "A revisão substitui o estudo completo?",
    a: "Não. O Super Revisão é a etapa final de quem está se preparando — feita para potencializar resultados, não substituir a base que você já vem construindo.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative border-b border-cppem-line py-16 sm:py-20">
      <div className="container-base">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-4">
            Perguntas <span className="text-cppem-green">frequentes</span>
          </h2>
          <p className="mt-3 text-white/70">
            Respostas diretas para você decidir com clareza.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-xl border ${
                  isOpen
                    ? "border-cppem-green/50 bg-cppem-graphite shadow-glowSoft"
                    : "border-cppem-line bg-cppem-graphite/60"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold uppercase tracking-wide text-white sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-cppem-green/40 text-cppem-green transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-white/75">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
