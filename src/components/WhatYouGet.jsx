const itens = [
  {
    titulo: "Revisão estratégica de véspera",
    texto:
      "Aulão completo focado nos temas com maior chance de aparecer na prova.",
    icon: "target",
  },
  {
    titulo: "Direcionamento dos pontos quentes",
    texto:
      "Mapa do que estudar nas últimas horas — sem desperdiçar tempo com o que não cai.",
    icon: "map",
  },
  {
    titulo: "Orientação direta do Prof. Everton Mota",
    texto:
      "Quem aprovou centenas de alunos te guiando nos detalhes que fazem diferença.",
    icon: "shield",
  },
  {
    titulo: "Foco no que decide a aprovação",
    texto:
      "Cada bloco entregue é pensado para destravar pontos que separam aprovados de reprovados.",
    icon: "bolt",
  },
  {
    titulo: "Material de apoio do evento",
    texto:
      "Resumo objetivo dos pontos abordados para revisar até o último minuto.",
    icon: "doc",
  },
  {
    titulo: "Acesso ao grupo de alunos CPPEM",
    texto:
      "Suporte e comunicação direta com a equipe até o dia da prova.",
    icon: "users",
  },
];

export default function WhatYouGet() {
  return (
    <section className="relative overflow-hidden border-b border-cppem-line py-16 sm:py-20">
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-pmal-goldLight/10 blur-3xl" />
      <div className="container-base relative">
        <div className="max-w-3xl">
          <span className="eyebrow">O que você recebe</span>
          <h2 className="section-title mt-4">
            Tudo que você precisa para entrar na prova{" "}
            <span className="text-pmal-goldLight">sabendo onde mirar.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((i) => (
            <div key={i.titulo} className="card">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-pmal-goldLight/40 bg-pmal-goldLight/10 text-pmal-goldLight">
                <Icon name={i.icon} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-white">
                {i.titulo}
              </h3>
              <p className="mt-2 text-sm text-white/70">{i.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ name }) {
  const props = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "target":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "map":
      return (
        <svg {...props}>
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "doc":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    default:
      return null;
  }
}
