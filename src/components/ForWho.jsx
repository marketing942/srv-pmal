const publico = [
  {
    titulo: "Quem vai fazer a PMAL 2026",
    texto:
      "Candidato inscrito ou que pretende fazer a prova da Polícia Militar de Alagoas em 2026.",
  },
  {
    titulo: "Quem quer revisar os pontos principais",
    texto:
      "Você que precisa de uma varredura final pelos temas com maior peso na prova.",
  },
  {
    titulo: "Quem precisa de direcionamento",
    texto:
      "Estudou bastante, mas quer saber exatamente onde concentrar o foco nas últimas horas.",
  },
  {
    titulo: "Quem está inseguro na reta final",
    texto:
      "A revisão devolve a confiança que muitos perdem nos dias que antecedem a prova.",
  },
  {
    titulo: "Quem busca uma revisão direta",
    texto:
      "Sem enrolação, sem encher o cérebro de teoria nova. Só o que pode mudar o resultado.",
  },
];

export default function ForWho() {
  return (
    <section className="relative border-b border-cppem-line py-16 sm:py-20">
      <div className="container-base">
        <div className="max-w-3xl">
          <span className="eyebrow">Para quem é</span>
          <h2 className="section-title mt-4">
            Esta revisão foi feita{" "}
            <span className="text-pmal-goldLight">para você</span> que quer vestir
            a farda da PMAL.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {publico.map((p, i) => (
            <div key={p.titulo} className="card">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-pmal-goldLight/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-md border border-pmal-goldLight/40 bg-pmal-goldLight/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-pmal-goldLight">
                  PMAL 2026
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-white">
                {p.titulo}
              </h3>
              <p className="mt-2 text-sm text-white/70">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
