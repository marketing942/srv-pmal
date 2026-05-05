export default function Solution() {
  const pontos = [
    "Organizar os pontos mais cobrados antes da prova",
    "Reforçar conteúdos estratégicos com alta probabilidade de queda",
    "Tirar dúvidas de véspera com direcionamento direto",
    "Entrar na prova sabendo exatamente onde mirar",
  ];

  return (
    <section className="relative overflow-hidden border-b border-cppem-line py-16 sm:py-20">
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-pmal-gold/10 blur-3xl" />
      <div className="container-base relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">A virada</span>
            <h2 className="section-title mt-4">
              Na véspera, o segredo não é estudar tudo.{" "}
              <span className="text-pmal-goldLight">É revisar com inteligência.</span>
            </h2>
            <p className="mt-5 text-white/75">
              O Super Revisão de Véspera PMAL 2026 foi montado para o último
              giro estratégico antes do dia da prova. Em vez de mais conteúdo
              acumulado, você ganha clareza sobre o que realmente importa,
              direção sobre o que revisar e foco para chegar firme na hora
              decisiva.
            </p>
            <ul className="mt-6 space-y-3">
              {pontos.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/85">
                  <Check />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-pmal-gold/30 bg-pmal-navyMid/70 p-8 shadow-glow">
              <p className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl">
                “Você não precisa de mais{" "}
                <span className="text-pmal-goldLight">confusão</span>.
                <br />
                Precisa de{" "}
                <span className="text-pmal-goldLight">estratégia</span>.”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-pmal-gold/20 pt-5">
                <div className="h-10 w-10 rounded-full border border-pmal-gold/40 bg-pmal-gold/10" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Prof. Everton Mota
                  </p>
                  <p className="text-xs uppercase tracking-wider text-pmal-goldLight/85">
                    CPPEM Concursos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-pmal-gold/15 text-pmal-goldLight">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}
