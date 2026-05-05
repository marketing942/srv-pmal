"use client";
import Image from "next/image";
import { eventData } from "@/data/event";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cppem-line/80 bg-cppem-black/80 backdrop-blur-md">
      <div className="container-base flex items-center justify-between py-3">
        <a href="#topo" className="flex items-center gap-3">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <Image
              src="/images/logo-cppem.png"
              alt="Logo CPPEM Concursos"
              fill
              priority
              sizes="48px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-[10px] uppercase tracking-[0.22em] text-pmal-goldLight/80">
              CPPEM Concursos
            </p>
            <p className="font-display text-base font-bold uppercase tracking-wide text-white">
              Super Revisão PMAL <span className="text-pmal-goldLight">2026</span>
            </p>
          </div>
        </a>

        <a
          href={eventData.linkCheckout}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !px-4 !py-2.5 text-xs sm:!px-6 sm:!py-3"
        >
          <span>Garantir minha vaga</span>
          <span className="ml-1 hidden rounded-md bg-black/20 px-2 py-0.5 text-[11px] font-bold tracking-wide sm:inline-block">
            {eventData.preco}
          </span>
          <span className="ml-1 inline-block rounded-md bg-black/20 px-1.5 py-0.5 text-[10px] font-bold tracking-wide sm:hidden">
            {eventData.preco}
          </span>
        </a>
      </div>
    </header>
  );
}
