"use client";
import Image from "next/image";
import { eventData } from "@/data/event";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-cppem-line"
    >
      <div className="absolute inset-0 tactical-bg opacity-50" />
      <div className="absolute inset-0 bg-radial-green" />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-cppem-green/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cppem-green/5 blur-3xl" />

      <div className="container-base relative z-10 grid gap-10 py-12 md:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-cppem-green animate-pulseSoft" />
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
            <span className="text-cppem-green">Véspera</span>{" "}
            <span className="block">PMAL <span className="text-cppem-green">2026</span></span>
          </h1>

          <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            A revisão final para você chegar na prova da{" "}
            <strong className="text-white">Polícia Militar de Alagoas</strong>{" "}
            com mais clareza, estratégia e confiança.
          </p>

          <p className="mt-3 max-w-2xl text-sm text-white/60 sm:text-base">
            Na véspera, não é hora de estudar tudo. É hora de revisar o que
            realmente importa.
          </p>

          {/* Quick info grid */}
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:max-w-xl sm:grid-cols-4">
            <InfoBox label="Foco" value="PMAL 2026" />
            <InfoBox label="Formato" value={eventData.formato} />
            <InfoBox label="Data" value={eventData.dataCurta} />
            <InfoBox label="Professor" value="Everton Mota" />
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={eventData.linkCheckout}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quero participar da revisão →
            </a>
            <a
              href={eventData.linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Falar com a equipe CPPEM
            </a>
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/50">
            Realização: <span className="text-cppem-green">CPPEM Concursos</span> · {eventData.cidade}
          </p>
        </div>

        {/* Right column — emblem composition */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto flex h-full w-full max-w-md flex-col items-center justify-center">
            <div className="relative grid w-full grid-cols-2 gap-4 rounded-2xl border border-cppem-line bg-cppem-graphite/70 p-6 shadow-glow backdrop-blur">
              <div className="col-span-2 flex flex-col items-center text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-cppem-green/80">
                  Operação
                </span>
                <span className="font-display text-xl font-bold uppercase tracking-wide text-white">
                  Aprovação PMAL 2026
                </span>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-cppem-line bg-black/40 p-4">
                <div className="relative h-24 w-24">
                  <Image
                    src="/images/brasao-pmal.png"
                    alt="Brasão da Polícia Militar de Alagoas"
                    fill
                    sizes="96px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Brasão PMAL
                </p>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-cppem-line bg-black/40 p-4">
                <div className="relative h-24 w-24">
                  <Image
                    src="/images/logo-cppem.png"
                    alt="Logo CPPEM Concursos"
                    fill
                    sizes="96px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/60">
                  CPPEM
                </p>
              </div>

              <div className="col-span-2 rounded-xl border border-cppem-green/30 bg-cppem-green/5 p-4 text-center">
                <p className="font-display text-sm uppercase tracking-wide text-cppem-green">
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
    <div className="rounded-lg border border-cppem-line bg-black/40 px-3 py-2.5">
      <dt className="text-[10px] uppercase tracking-[0.18em] text-white/50">
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-semibold text-white">{value}</dd>
    </div>
  );
}
