import Image from "next/image";
import { eventData } from "@/data/event";

export default function Offer() {
  const beneficios = [
    "Aulão completo de revisão de véspera",
    "Direcionamento dos pontos com maior peso na prova",
    "Orientação direta do Prof. Everton Mota",
    "Material de apoio do evento",
    "Acesso ao grupo oficial CPPEM",
  ];

  return (
    <section
      id="inscricao"
      className="relative overflow-hidden border-b border-cppem-line py-16 sm:py-24"
    >
      <div className="absolute inset-0 tactical-bg opacity-40" />
      <div className="absolute -top-32 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-pmal-goldLight/15 blur-3xl" />

      <div className="container-base relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Oferta oficial</span>
          <h2 className="section-title mt-4">
            Garanta sua vaga na{" "}
            <span className="text-pmal-goldLight">última revisão</span> antes da
            prova.
          </h2>
          <p className="mt-4 text-white/75">
            Vagas limitadas para quem realmente quer chegar preparado na PMAL
            2026.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-5">
          {/* Card de detalhes */}
          <div className="rounded-2xl border border-cppem-line bg-cppem-graphite/80 p-6 lg:col-span-3">
            <div className="flex items-center gap-4 border-b border-cppem-line pb-5">
              <div className="relative h-14 w-14 flex-none">
                <Image
                  src="/images/brasao-pmal.png"
                  alt="Brasão PMAL"
                  fill
                  sizes="56px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-pmal-goldLight">
                  Evento oficial CPPEM
                </p>
                <h3 className="font-display text-xl font-bold uppercase text-white">
                  {eventData.nome}
                </h3>
              </div>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <Detail label="Data" value={eventData.dataExibicao} />
              <Detail label="Formato" value={eventData.formato} />
              <Detail label="Professor" value={eventData.professor} />
              <Detail label="Vagas" value={`${eventData.vagas} alunos`} />
              <Detail label="Pagamento" value={eventData.formasPagamento} />
              <Detail label="Realização" value="CPPEM Concursos" />
            </dl>

            <ul className="mt-5 space-y-2">
              {beneficios.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-white/85"
                >
                  <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-pmal-goldLight text-black">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Card de preço */}
          <div className="relative rounded-2xl border border-pmal-goldLight/40 bg-gradient-to-b from-pmal-goldLight/10 to-cppem-graphite p-6 shadow-glow lg:col-span-2">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pmal-goldLight px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-black">
              Vagas limitadas · {eventData.vagas}
            </span>

            <p className="mt-3 text-center text-xs uppercase tracking-[0.22em] text-white/70">
              Investimento único
            </p>
            <p className="mt-2 text-center font-display text-5xl font-bold text-white">
              {eventData.preco}
            </p>
            <p className="text-center text-xs uppercase tracking-[0.18em] text-pmal-goldLight">
              {eventData.formasPagamento}
            </p>

            <a
              href={eventData.linkCheckout}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full"
            >
              Garantir minha vaga agora →
            </a>

            <a
              href={eventData.linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-3 w-full"
            >
              Tirar dúvida no WhatsApp
            </a>

            <p className="mt-4 text-center text-[11px] text-white/55">
              Pagamento seguro · checkout oficial CPPEM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }) {
  return (
    <div className="rounded-lg border border-cppem-line bg-black/30 px-3 py-2">
      <dt className="text-[10px] uppercase tracking-[0.18em] text-white/50">
        {label}
      </dt>
      <dd className="text-sm font-semibold text-white">{value}</dd>
    </div>
  );
}
