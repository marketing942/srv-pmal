import Image from "next/image";
import { eventData } from "@/data/event";

export default function Footer() {
  return (
    <footer className="relative bg-black/60 py-12">
      <div className="container-base">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14">
                <Image
                  src="/images/logo-cppem.png"
                  alt="Logo CPPEM Concursos"
                  fill
                  sizes="56px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <p className="font-display text-lg font-bold uppercase text-white">
                  CPPEM Concursos
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-pmal-goldLight">
                  {eventData.slogan}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/65">
              Preparação especializada em concursos policiais. Disciplina,
              foco e estratégia rumo à aprovação.
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-pmal-goldLight">
              Contato
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>{eventData.cidade}</li>
              <li>
                <a
                  href={eventData.linkWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pmal-goldLight"
                >
                  WhatsApp oficial CPPEM
                </a>
              </li>
              <li>
                <a
                  href={eventData.linkCheckout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pmal-goldLight"
                >
                  Inscrição no evento
                </a>
              </li>
            </ul>

            <a
              href={eventData.linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-5 !px-4 !py-2.5 text-xs"
            >
              Falar no WhatsApp →
            </a>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-pmal-goldLight">
              Evento
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>{eventData.nome}</li>
              <li>{eventData.dataExibicao}</li>
              <li>{eventData.formato}</li>
              <li>Realização: CPPEM Concursos</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cppem-line pt-6 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} CPPEM Concursos. Todos os direitos
            reservados.
          </p>
          <p>
            Este site não garante aprovação. Resultados dependem de dedicação
            individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
