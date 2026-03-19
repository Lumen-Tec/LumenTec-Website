import type { RefObject } from "react";

type LandingHeroProps = {
  count1: string;
  count2: string;
  count3: string;
  count4: string;
  onGoTo: (id: string) => void;
  statsRef: RefObject<HTMLDivElement | null>;
};

export default function LandingHero({ count1, count2, count3, count4, onGoTo, statsRef }: LandingHeroProps) {
  return (
    <section className="hero">
      <div className="hblur hb1" />
      <div className="hblur hb2" />
      <div className="badge">
        <span className="badge-dot" /> Soluciones de software a medida para tú negocio
      </div>
      <h1>
        Software que <span className="inv">impulsa</span>
        <br />
        tu negocio real
      </h1>
      <p className="hero-sub">
        Diseñamos, desarrollamos y escalamos sistemas que automatizan procesos, reducen costos y generan resultados desde el primer dia.
      </p>
      <div className="hero-ctas">
        <button className="btn-p" onClick={() => onGoTo("contacto")}>
          Solicitar consulta gratuita
        </button>
        <button className="btn-g" onClick={() => onGoTo("proyectos")}>
          Ver proyectos →
        </button>
      </div>
    </section>
  );
}
