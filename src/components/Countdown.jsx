"use client";
import { useEffect, useState } from "react";
import { eventData } from "@/data/event";

function diff(target) {
  const now = new Date().getTime();
  const t = new Date(target).getTime() - now;
  if (t <= 0) return { d: 0, h: 0, m: 0, s: 0, finished: true };
  return {
    d: Math.floor(t / (1000 * 60 * 60 * 24)),
    h: Math.floor((t / (1000 * 60 * 60)) % 24),
    m: Math.floor((t / (1000 * 60)) % 60),
    s: Math.floor((t / 1000) % 60),
    finished: false,
  };
}

export default function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0, finished: false });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(diff(eventData.dataEvento));
    const id = setInterval(
      () => setTime(diff(eventData.dataEvento)),
      1000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-cppem-green/30 bg-black/60 p-4 shadow-glowSoft">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] uppercase tracking-[0.22em] text-cppem-green">
          Contagem regressiva
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
          {eventData.dataExibicao}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        <Box value={mounted ? time.d : "–"} label="Dias" />
        <Box value={mounted ? time.h : "–"} label="Horas" />
        <Box value={mounted ? time.m : "–"} label="Min" />
        <Box value={mounted ? time.s : "–"} label="Seg" />
      </div>
      {time.finished && (
        <p className="mt-3 text-center text-xs uppercase tracking-wider text-cppem-green">
          O evento começou — fale com nossa equipe.
        </p>
      )}
    </div>
  );
}

function Box({ value, label }) {
  const formatted =
    typeof value === "number" ? String(value).padStart(2, "0") : value;
  return (
    <div className="flex flex-col items-center rounded-lg border border-cppem-line bg-cppem-graphite/80 py-2">
      <span className="font-display text-2xl font-bold tabular-nums text-white sm:text-3xl">
        {formatted}
      </span>
      <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
        {label}
      </span>
    </div>
  );
}
