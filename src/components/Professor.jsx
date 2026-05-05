import Image from "next/image";

export default function Professor() {
  const credenciais = [
    "Professor de Direito",
    "Oficial de Justiça do TJPE",
    "Aprovado em 15 concursos públicos",
    "Especialista em carreiras policiais",
    "Fundador do CPPEM Concursos",
    "Já orientou milhares de alunos rumo à aprovação",
  ];

  return (
    <section className="relative border-b border-cppem-line py-16 sm:py-20">
      <div className="container-base">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 rounded-2xl bg-cppem-green/20 blur-2xl" />
              <div className="relative rounded-2xl border border-cppem-green/30 bg-cppem-graphite/80 p-8 shadow-glow">
                <div className="flex items-center justify-center">
                  <div className="relative h-32 w-32">
                    <Image
                      src="/images/logo-cppem.png"
                      alt="Logo CPPEM Concursos"
                      fill
                      sizes="128px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
                <p className="mt-6 text-center font-display text-2xl font-bold uppercase tracking-wide text-white">
                  Prof. Everton Mota
                </p>
                <p className="text-center text-xs uppercase tracking-[0.22em] text-cppem-green">
                  Fundador · CPPEM Concursos
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  <Stat n="15+" l="Aprovações" />
                  <Stat n="1000+" l="Alunos" />
                  <Stat n="100%" l="Foco" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow">Autoridade</span>
            <h2 className="section-title mt-4">
              Quem vai te orientar já passou pelo{" "}
              <span className="text-cppem-green">caminho que você quer trilhar.</span>
            </h2>
            <p className="mt-4 text-white/75">
              O Prof. Everton Mota é a referência por trás de centenas de
              aprovações em concursos policiais no Nordeste. Na véspera da
              PMAL 2026, ele estará na frente da sala para te entregar o que
              só quem é aprovado sabe: o que realmente importa.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {credenciais.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-lg border border-cppem-line bg-black/30 px-4 py-3 text-sm text-white/85"
                >
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-cppem-green" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div className="rounded-md border border-cppem-line bg-black/40 py-2">
      <p className="font-display text-xl font-bold text-cppem-green">{n}</p>
      <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
        {l}
      </p>
    </div>
  );
}
