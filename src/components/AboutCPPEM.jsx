import Image from "next/image";

const pilares = [
  { t: "Foco em concursos policiais", d: "Preparação especializada nas carreiras de segurança pública." },
  { t: "Metodologia direta ao ponto", d: "Sem rodeios. Cada aula é pensada para gerar avanço real." },
  { t: "Disciplina e estratégia", d: "Plano de estudos e revisões alinhados ao que cai na prova." },
  { t: "Acompanhamento próximo", d: "Equipe e professor presentes do início à aprovação." },
  { t: "Histórico de aprovados", d: "Centenas de alunos vestindo a farda dos sonhos." },
  { t: "Atuação no Nordeste", d: "Forte em Caruaru/PE e referência em todo o Nordeste." },
];

export default function AboutCPPEM() {
  return (
    <section className="relative border-b border-cppem-line py-16 sm:py-20">
      <div className="container-base">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Instituição</span>
            <h2 className="section-title mt-4">
              <span className="text-pmal-goldLight">CPPEM Concursos</span> — referência
              na preparação para concursos policiais.
            </h2>
            <p className="mt-4 text-white/75">
              O CPPEM nasceu para preparar candidatos com a mesma disciplina e
              foco que se exige na corporação. Aqui, o aluno não estuda
              sozinho: tem método, direção e um time que respira concurso
              policial.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative h-16 w-16 flex-none">
                <Image
                  src="/images/logo-cppem.png"
                  alt="Logo CPPEM"
                  fill
                  sizes="64px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <p className="font-display text-lg font-bold uppercase text-white">
                  Seu sonho, nosso objetivo.
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-pmal-goldLight">
                  Caruaru/PE · Nordeste
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {pilares.map((p) => (
                <div
                  key={p.t}
                  className="rounded-xl border border-cppem-line bg-cppem-graphite/70 p-5"
                >
                  <h3 className="font-display text-base font-bold uppercase tracking-wide text-pmal-goldLight">
                    {p.t}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
