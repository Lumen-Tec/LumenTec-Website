import Link from "next/link";
import ServiceCard from "./components/ServiceCard";
import AboutCard from "./components/AboutCard";
import CTASection from "./components/CTASection";
import MethodologySection from "./components/MethodologySection";
import ValuesSection from "./components/ValuesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 text-white pt-40 pb-32 overflow-hidden">
        {/* Elementos decorativos de fondo mejorados */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-500 blur-[100px] animate-float"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-500 blur-[80px] animate-float delay-500"></div>
        </div>

        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particle particle-sm absolute top-[20%] left-[10%] animate-particle"></div>
          <div className="particle particle-md absolute top-[40%] left-[20%] animate-particle delay-200"></div>
          <div className="particle particle-lg absolute top-[60%] left-[15%] animate-particle delay-400"></div>
          <div className="particle particle-sm absolute top-[30%] right-[15%] animate-particle delay-300"></div>
          <div className="particle particle-md absolute top-[70%] right-[20%] animate-particle delay-100"></div>
          <div className="particle particle-lg absolute top-[50%] right-[10%] animate-particle delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center md:text-left max-w-5xl mx-auto md:mx-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-400/30 bg-indigo-900/30 backdrop-blur-sm mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-indigo-100">Disponible para nuevos proyectos</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 animate-fade-in-up delay-100 leading-tight">
              Diseño Elegante. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-indigo-200 animate-gradient-text">Tecnología Robusta.</span>
            </h1>

            <p className="text-xl md:text-2xl text-indigo-100/90 max-w-3xl leading-relaxed font-light mb-10 animate-fade-in-up delay-200">
              Creamos experiencias digitales exclusivas que distinguen a tu marca.
              Fusionamos estética minimalista con ingeniería de software de alto rendimiento.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start animate-fade-in-up delay-300">
              <Link
                href="/services"
                className="btn-shimmer inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-2xl text-indigo-900 bg-white hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 min-w-[180px]"
              >
                Ver Soluciones
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-indigo-400/50 text-lg font-semibold rounded-2xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-1 min-w-[180px]"
              >
                Agendar Llamada
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-24">

        {/* Seccion Servicios */}
        <section id="servicios">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
              Nuestra Experiencia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Soluciones Tecnológicas Integrales
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              No somos solo programadores, somos socios estratégicos. Diseñamos arquitectura de software pensada para escalar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Desarrollo Web & Apps"
              description="Aplicaciones progresivas (PWA), sitios corporativos y plataformas SaaS construidas con Next.js y React. Velocidad y SEO optimizados."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
              iconBgColor="bg-blue-50"
              iconColor="text-blue-600"
              iconHoverBg="group-hover:bg-blue-600"
              linkColor="text-blue-600"
              href="/services"
            />

            <ServiceCard
              title="APIs & Infraestructura"
              description="Backends robustos, bases de datos optimizadas y despliegues en la nube (AWS, Vercel). Seguridad y escalabilidad desde el día uno."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
              iconBgColor="bg-purple-50"
              iconColor="text-purple-600"
              iconHoverBg="group-hover:bg-purple-600"
              linkColor="text-purple-600"
              href="/services"
            />

            <ServiceCard
              title="Auditoría & Consultoría"
              description="¿Tu software es lento o inseguro? Analizamos tu código, identificamos cuellos de botella y proponemos soluciones efectivas."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              iconBgColor="bg-emerald-50"
              iconColor="text-emerald-600"
              iconHoverBg="group-hover:bg-emerald-600"
              linkColor="text-emerald-600"
              href="/services"
            />
          </div>
        </section>

        {/* Methodology Section */}
        <MethodologySection />

        {/* Sobre Nosotros Section */}
        <section id="sobre-nosotros">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
                Sobre Lumentec
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Más que código, creamos valor.
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Nacimos con la misión de elevar el estándar del desarrollo de software en la región.
                Nos obsesiona la calidad, el rendimiento y la experiencia de usuario.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Cada línea de código que escribimos tiene un propósito: hacer que tu negocio sea más eficiente y rentable.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Conoce a nuestro equipo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="md:col-span-7">
              <AboutCard />
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div id="contact">
          <CTASection />
        </div>

      </div>
    </main>
  );
}