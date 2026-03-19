"use client";

import { DM_Sans, Syne } from "next/font/google";
import Head from "next/head";
import {
  BarChart3,
  Bot,
  Check,
  ChevronRight,
  Cloud,
  Link2,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import LandingFooter from "./components/landing/LandingFooter";
import LandingHero from "./components/landing/LandingHero";
import LandingNav from "./components/landing/LandingNav";
import ProjectModal from "./components/landing/ProjectModal";
import ProjectsSection from "./components/landing/ProjectsSection";
import { projects } from "./components/landing/projects";
import type { Category, Project } from "./components/landing/types";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});


export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [count1, setCount1] = useState("0");
  const [count2, setCount2] = useState("0%");
  const [count3, setCount3] = useState("0");
  const [count4, setCount4] = useState("0h");

  const cursorGlowRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        if (activeFilter === "all") {
          return true;
        }
        return project.category === activeFilter;
      }),
    [activeFilter],
  );

  const go = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (!cursorGlowRef.current) {
        return;
      }
      cursorGlowRef.current.style.left = `${event.clientX}px`;
      cursorGlowRef.current.style.top = `${event.clientY}px`;
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("v");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!statsRef.current) {
      return;
    }

    const animateCount = (
      target: number,
      suffix: string,
      duration: number,
      update: (value: string) => void,
    ) => {
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        update(`${Math.floor(eased * target)}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        window.setTimeout(() => {
          animateCount(120, "", 1800, setCount1);
          animateCount(98, "%", 1800, setCount2);
          animateCount(8, "", 1600, setCount3);
          animateCount(6, "h", 1600, setCount4);
        }, 400);

        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(statsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>LumenTec | Desarrollo de Software a Medida</title>
        <meta
          name="description"
          content="Desarrollo de software, automatizacion, analitica y cloud para empresas. Conoce servicios, proceso y proyectos reales de LumenTec."
        />
        <meta name="keywords" content="desarrollo de software, landing software, consultoria tecnologica, automatizacion, cloud, Costa Rica" />
        <link rel="canonical" href="https://lumentec.business/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="LumenTec | Desarrollo de Software a Medida" />
        <meta
          property="og:description"
          content="Soluciones tecnicas que impulsan resultados: web, datos, automatizacion y cloud."
        />
        <meta property="og:url" content="https://lumentec.business/" />
        <meta property="og:image" content="https://res.cloudinary.com/drec8g03e/image/upload/v1765326134/business_evv0zn.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LumenTec | Desarrollo de Software a Medida" />
        <meta
          name="twitter:description"
          content="Conoce como LumenTec ayuda a empresas con software de alto rendimiento."
        />
        <meta name="twitter:image" content="https://res.cloudinary.com/drec8g03e/image/upload/v1765326134/business_evv0zn.jpg" />
      </Head>
      <div className={`${dmSans.variable} ${syne.variable} lt-wrap`}>
        <div id="cg" ref={cursorGlowRef} />

        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
        <LandingNav onGoTo={go} />
        <LandingHero
          count1={count1}
          count2={count2}
          count3={count3}
          count4={count4}
          onGoTo={go}
          statsRef={statsRef}
        />

        <div className="logos reveal">
          <p>Negocios que han confiado en LumenTec</p>
          <div className="logos-row">
            <div className="litem">Q'Carnes Deluxe</div>
            <div className="litem">Delci Zapatos</div>
            <div className="litem">JyJ Essence</div>
          </div>
        </div>

        <section className="services" id="servicios">
          <div className="services-hdr reveal">
            <div className="stag">Lo que hacemos</div>
            <h2 className="stitle">
              Software disenado para
              <br />
              resolver problemas reales
            </h2>
            <p className="ssub">
              No vendemos plantillas. Creamos soluciones a la medida de tu operacion, industria y objetivos de negocio.
            </p>
          </div>
          <div className="sg reveal">
            <div className="sc"><div className="sc-ico"><Zap size={20} strokeWidth={2.2} aria-hidden="true" /></div><h3>Desarrollo Web & Apps</h3><p>Plataformas SaaS, portales corporativos y aplicaciones rapidas, seguras y disenadas para escalar desde el primer sprint.</p><div className="sc-tag">React · Node · Next.js</div></div>
            <div className="sc"><div className="sc-ico"><Bot size={20} strokeWidth={2.2} aria-hidden="true" /></div><h3>Automatizacion de Procesos</h3><p>Transformamos procesos manuales en flujos automatizados que trabajan por tu empresa 24/7 sin errores humanos.</p><div className="sc-tag">RPA · APIs · Integraciones</div></div>
            <div className="sc"><div className="sc-ico"><BarChart3 size={20} strokeWidth={2.2} aria-hidden="true" /></div><h3>Inteligencia de Datos</h3><p>Dashboards en tiempo real, reportes automaticos y modelos predictivos que convierten datos en decisiones claras.</p><div className="sc-tag">BI · Analytics · AI/ML</div></div>
            <div className="sc"><div className="sc-ico"><Cloud size={20} strokeWidth={2.2} aria-hidden="true" /></div><h3>Arquitectura Cloud</h3><p>Migramos, optimizamos y gestionamos tu infraestructura en la nube para maxima disponibilidad y rendimiento.</p><div className="sc-tag">AWS · GCP · Azure</div></div>
            <div className="sc"><div className="sc-ico"><Link2 size={20} strokeWidth={2.2} aria-hidden="true" /></div><h3>Integraciones & APIs</h3><p>Conectamos tus herramientas existentes (ERP, CRM, eCommerce) para que trabajen en sincronia sin fricciones.</p><div className="sc-tag">REST · GraphQL · Webhooks</div></div>
            <div className="sc"><div className="sc-ico"><ShieldCheck size={20} strokeWidth={2.2} aria-hidden="true" /></div><h3>Consultoria Tecnologica</h3><p>Planificacion estrategica de tu tecnologia: que construir, cuando y como hacerlo rentable para tu negocio.</p><div className="sc-tag">CTO Fraccionado · Roadmaps</div></div>
          </div>
        </section>

        <section className="how" id="proceso">
          <div className="how-in">
            <div>
              <div className="stag reveal">Nuestro proceso</div>
              <h2 className="stitle reveal">
                Asi trabajamos contigo,
                <br />
                sin sorpresas
              </h2>
              <p className="ssub reveal" style={{ marginBottom: "32px" }}>
                Proceso claro, iterativo y enfocado en resultados. Siempre sabes en que etapa esta tu proyecto.
              </p>
              <div className="steps reveal">
                <div className="step"><div className="snum">01</div><div><h4>Diagnostico gratuito</h4><p>Analizamos tu operacion e identificamos oportunidades de mejora antes de escribir una sola linea de codigo.</p></div></div>
                <div className="step"><div className="snum">02</div><div><h4>Propuesta a medida</h4><p>Plan tecnico claro con tiempos, costos y entregables definidos desde el inicio. Sin letra pequena.</p></div></div>
                <div className="step"><div className="snum">03</div><div><h4>Desarrollo agil</h4><p>Sprints quincenales con demos reales. Ves el avance, das retroalimentacion y ajustamos en tiempo real.</p></div></div>
                <div className="step"><div className="snum">04</div><div><h4>Lanzamiento & soporte</h4><p>Entregamos, capacitamos a tu equipo y damos soporte continuo para que nada se detenga.</p></div></div>
              </div>
            </div>
            <div className="how-vis reveal">
              <div className="term">
                <div className="th"><div className="dot dr" /><div className="dot dy" /><div className="dot dg" /></div>
                <div className="tb">
                  <div className="tl"><span className="cmd">$</span> lumentec init <span className="str">mi-proyecto</span></div>
                  <div className="tl tl-sep">────────────────────────</div>
                  <div className="tl"><span className="kw"><ChevronRight size={14} strokeWidth={2.5} aria-hidden="true" /></span> Analizando requerimientos...</div>
                  <div className="tl"><span className="kw"><ChevronRight size={14} strokeWidth={2.5} aria-hidden="true" /></span> Definiendo arquitectura...</div>
                  <div className="tl"><span className="ok"><Check size={14} strokeWidth={2.5} aria-hidden="true" /></span> Sprint 1 completado</div>
                  <div className="tl"><span className="ok"><Check size={14} strokeWidth={2.5} aria-hidden="true" /></span> Sprint 2 completado</div>
                  <div className="tl"><span className="ok"><Check size={14} strokeWidth={2.5} aria-hidden="true" /></span> QA & testing passed</div>
                  <div className="tl tl-sep">────────────────────────</div>
                  <div className="tl"><span className="ok"><Rocket size={14} strokeWidth={2.5} aria-hidden="true" /></span> Deploy exitoso en produccion</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection
          activeFilter={activeFilter}
          filteredProjects={filteredProjects}
          onFilterChange={setActiveFilter}
          onOpenProject={setModalProject}
        />
        {/*
        <section className="testimonials" id="testimonios">
          <div className="test-hdr reveal">
            <div className="stag">Lo que dicen de nosotros</div>
            <h2 className="stitle">
              Resultados que hablan
              <br />
              por si solos
            </h2>
          </div>
          <div className="tgrid reveal">
            <div className="tc"><div className="tc-stars">★★★★★</div><p className="tc-txt">"LumenTec transformo completamente nuestra operacion. El sistema redujo nuestros tiempos de procesamiento en un 70%. Entrega puntual, comunicacion excelente y resultados visibles desde la semana uno."</p><div className="tc-auth"><div className="tc-av">MA</div><div><div className="tc-name">Maria Alvarado</div><div className="tc-role">COO · Distribuidora Altimax</div></div></div></div>
            <div className="tc"><div className="tc-stars">★★★★★</div><p className="tc-txt">"Cuando nuestro software interno colapsaba, LumenTec entrego una plataforma nueva y estable en 6 semanas. Nuestro equipo la adopto sin fricciones. Increible capacidad de ejecucion y profesionalismo."</p><div className="tc-auth"><div className="tc-av">RV</div><div><div className="tc-name">Rodrigo Valverde</div><div className="tc-role">CEO · VerdeTech CR</div></div></div></div>
            <div className="tc"><div className="tc-stars">★★★★★</div><p className="tc-txt">"Lo que mas valoro es la transparencia total. Siempre supe en que trabajaban, los costos nunca cambiaron y el resultado supero expectativas. Son el equipo tecnologico que toda empresa necesita."</p><div className="tc-auth"><div className="tc-av">LC</div><div><div className="tc-name">Laura Castro</div><div className="tc-role">Fundadora · Solutron Digital</div></div></div></div>
          </div>
        </section>
        */}
        <section className="cta" id="contacto">
          <div className="rw reveal">
            <div className="stag">Listo para empezar?</div>
            <h2>
              Tu proximo sistema
              <br />
              comienza con una llamada
            </h2>
            <p>Sin compromisos. Sin tecnicismos. Una conversacion honesta sobre como podemos ayudarte a crecer.</p>
            <div className="cta-actions">
              <a className="btn-p cta-btn" href="mailto:lumentec25@gmail.com">
                Agendar consulta gratuita
              </a>
              <a className="btn-g cta-btn" href="https://wa.me/+50662435191" target="_blank" rel="noreferrer">
                Escribir por WhatsApp
              </a>
            </div>
            <div className="cta-trust" role="list" aria-label="Beneficios de contacto">
              <span className="cta-trust-item" role="listitem"><Check size={14} strokeWidth={2.4} aria-hidden="true" /> Respuesta en menos de 24h</span>
              <span className="cta-trust-item" role="listitem"><Check size={14} strokeWidth={2.4} aria-hidden="true" /> Sin contratos ocultos</span>
              <span className="cta-trust-item" role="listitem"><Check size={14} strokeWidth={2.4} aria-hidden="true" /> Primera consulta sin costo</span>
            </div>
          </div>
        </section>

        <LandingFooter />
      </div>
    </>
  );
}
