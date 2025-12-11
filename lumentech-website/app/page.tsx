import Navbar from "./components/Navbar";
import Link from "next/link";
import ServiceCard from "./components/ServiceCard";
import AboutCard from "./components/AboutCard";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-600 text-white pt-32 pb-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-400 blur-[100px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center md:text-left max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Desarrollo de Software de Alto Rendimiento
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 max-w-2xl leading-relaxed font-light mb-8">
              Transformamos ideas en soluciones digitales escalables, rápidas y seguras. 
              Especializados en tecnologías modernas para impulsar tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-indigo-600 bg-white hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Ver servicios
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-base font-medium rounded-xl text-white hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Conoce más
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">
        
        {/* Seccion Servicios - Tarjetas */}
        <section id="servicios">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Soluciones tecnológicas diseñadas para impulsar tu negocio al siguiente nivel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Desarrollo Web"
              description="Aplicaciones web modernas con Next.js, React y tecnologías de vanguardia. Optimizadas para rendimiento y experiencia de usuario."
              icon={
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
              iconBgColor="bg-indigo-100"
              iconColor="text-indigo-600"
              iconHoverBg="group-hover:bg-indigo-600"
              linkColor="text-indigo-600"
              href="/services"
            />

            <ServiceCard
              title="APIs y Backend"
              description="Servicios backend robustos y escalables. APIs RESTful seguras con autenticación, cifrado y optimización de rendimiento."
              icon={
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              }
              iconBgColor="bg-purple-100"
              iconColor="text-purple-600"
              iconHoverBg="group-hover:bg-purple-600"
              linkColor="text-purple-600"
              href="/services"
            />

            <ServiceCard
              title="Consultoría"
              description="Auditorías técnicas, arquitectura de software y optimización de rendimiento. Te ayudamos a escalar tu producto de manera eficiente."
              icon={
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              iconBgColor="bg-emerald-100"
              iconColor="text-emerald-600"
              iconHoverBg="group-hover:bg-emerald-600"
              linkColor="text-emerald-600"
              href="/services"
            />
          </div>
        </section>

        {/* Sobre Nosotros Section - Tarjeta Grande */}
        <section id="sobre-nosotros">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Conoce al equipo y la visión detrás de Lumentec
            </p>
          </div>

          <AboutCard />
        </section>

        {/* Sección CTA Final */}
        <CTASection />

      </div>
    </main>
  );
}