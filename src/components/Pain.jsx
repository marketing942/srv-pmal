const dores = [
  {
    titulo: "Medo de esquecer o conteúdo",
    texto:
      "Você estudou meses, mas tem aquela sensação que tudo pode escapar na hora da prova.",
  },
  {
    titulo: "Insegurança na véspera",
    texto:
      "Não sabe o que revisar nas últimas horas e fica perdido entre PDFs, vídeos e resumos.",
  },
  {
    titulo: "Estudou muito, mas se sente perdido",
    texto:
      "Conteúdo demais, tempo de menos. A reta final pede direção, não acúmulo.",
  },
  {
    titulo: "Falta de estratégia final",
    texto:
      "Sem um plano para os últimos dias, é fácil gastar energia com o que não cai.",
  },
  {
    titulo: "Ansiedade antes da prova",
    texto:
      "A cabeça acelera, o foco escapa e o que mais pesa é a falta de clareza.",
  },
];

export default function Pain() {
  return (
    <section className="relative border-b border-cppem-line py-16 sm:py-20">
      <div className="container-base">
        <div className="max-w-3xl">
          <span className="eyebrow">Diagnóstico</span>
          <h2 className="section-title mt-4">
            Você estudou, mas sente que ainda{" "}
            <span className="text-cppem-green">falta organizar tudo</span> na
            cabeça?
          </h2>
          <p className="mt-4 text-white/70">
            A prova da PMAL não perdoa quem chega sem direção. Reconhece algum
            destes sinais?
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dores.map((d) => (
            <div key={d.titulo} className="card group">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-md border border-cppem-green/30 bg-cppem-green/10 text-cppem-green">
                  <Cross />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                    {d.titulo}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/70">{d.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cross() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
