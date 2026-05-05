import Image from "next/image";
import { eventData } from "@/data/event";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-cppem-line py-16 sm:py-20">
      <div className="absolute inset-0 bg-radial-gold opacity-70" />
      <div className="container-base relative">
        <div className="rounded-2xl border border-pmal-goldLight/40 bg-cppem-graphite/80 p-8 shadow-glow sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="eyebrow">Reta final</span>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Entre na prova da PMAL 2026{" "}
                <span className="text-pmal-goldLight">sabendo onde mirar.</span>
              </h2>
              <p className="mt-4 max-w-xl text-white/75">
                A revisão final para quem quer vestir a farda da PMAL. Vagas
                limitadas — garanta a sua antes que esgote.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={eventData.linkCheckout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Garantir minha vaga · {eventData.preco}
                </a>
                <a
                  href={eventData.linkWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-4">
              <div className="relative h-40 w-40 sm:h-48 sm:w-48">
                <Image
                  src="/images/brasao-pmal.png"
                  alt="Brasão PMAL"
                  fill
                  sizes="192px"
                  style={{ objectFit: "contain" }}
                  className="animate-floatSlow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
