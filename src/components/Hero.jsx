"use client";
import Image from "next/image";
import { eventData } from "@/data/event";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-pmal-gold/20"
    >
      {/* Fundo herald-style: textura sóbria + halos navy/dourado */}
      <div className="absolute inset-0 tactical-bg opacity-60" />
      <div className="absolute inset-0 heraldic-stripes opacity-70" />
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-pmal-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-pmal-green/15 blur-3xl" />

      <div className="container-base relative z-10 grid gap-10 py-12 md:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-pmal-gold animate-pulseSoft" />
              Vagas limitadas
            </span>
            <span className="eyebrow !border-white/15 !bg-white/5 !text-white/70">
              {eventData.formato}
            </span>
            <span className="eyebrow !border-white/15 !bg-white/5 !text-white/70">
              {eventData.dataExibicao}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
            Super Revisão de{" "}
            <span className="text-pmal-goldLight">Véspera</span>{" "}
            <span className="block">
              PMAL <span className="text-pmal-goldLight">2026</span>
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            A revisão final para você chegar na prova da{" "}
            <strong className="text-white">Polícia Militar de Alagoas</strong>{" "}
            com mais clareza, estratégia e confiança.
          </p>

          <p className="mt-3 max-w-2xl text-sm text-white/65 sm:text-base">
            Na véspera, não é hora de estudar tudo. É hora de revisar o que
            realmente importa.
          </p>

          {/* Quick info grid (sem citação ao Prof. Everton Mota) */}
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:max-w-xl sm:grid-cols-4">
            <InfoBox label="Foco" value="PMAL 2026" />
            <InfoBox label="Formato" value={eventData.formato} />
            <InfoBox label="Data" value={eventData.dataCurta} />
            <InfoBox label="Vagas" value={`${eventData.vagas} alunos`} />
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={eventData.linkCheckout}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quero participar da revisão · {eventData.preco} →
            </a>
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/55">
            Realização:{" "}
            <span className="text-pmal-goldLight">CPPEM Concursos</span> ·{" "}
            {eventData.cidade}
          </p>
        </div>

        {/* Coluna direita — Brasão PMAL em destaque */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto flex h-full w-full max-w-md flex-col items-center justify-center">
            <div className="relative w-full rounded-2xl border border-pmal-gold/40 bg-pmal-navy/70 p-6 shadow-glow backdrop-blur">
              {/* Selo superior */}
              <div className="flex flex-col items-center text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-pmal-goldLight">
                  Operação
                </span>
                <span className="font-display text-xl font-bold uppercase tracking-wide text-white">
                  Aprovação PMAL 2026
                </span>
              </div>

              {/* Brasão PMAL ampliado + tipografia "PMAL" */}
              <div className="mt-5 flex flex-col items-center rounded-xl border border-pmal-gold/30 bg-pmal-navyDark/60 p-6">
                <div className="relative h-80 w-80 sm:h-88 sm:w-88 md:h-102 md:w-102">
                  <Image
                    src="/images/brasao-pmal.png"
                    alt="Brasão da Polícia Militar de Alagoas"
                    fill
                    priority
                    sizes="(min-width: 768px) 384px, (min-width: 640px) 320px, 288px"
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-[0_10px_30px_rgba(227,181,58,0.3)]"
                  />
                </div>
                <p className="mt-3 font-display text-5xl font-extrabold uppercase tracking-[0.18em] text-pmal-goldLight sm:text-6xl">
                  PMAL
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/65">
                  Polícia Militar de Alagoas
                </p>
              </div>

              {/* Local do evento */}
              <div className="mt-5 rounded-xl border border-pmal-gold/30 bg-pmal-gold/5 p-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.28em] text-pmal-goldLight">
                  Local do evento
                </p>
                <p className="mt-1 font-display text-base font-bold uppercase tracking-wide text-white sm:text-lg">
                  Sede do CPPEM
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-wide text-white/70">
                  A última revisão antes da batalha
                </p>
              </div>
            </div>

            <div className="mt-6 w-full">
              <Countdown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-lg border border-pmal-gold/25 bg-pmal-navyDark/50 px-3 py-2.5">
      <dt className="text-[10px] uppercase tracking-[0.18em] text-pmal-goldLight/80">
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-semibold text-white">{value}</dd>
    </div>
  );
}
