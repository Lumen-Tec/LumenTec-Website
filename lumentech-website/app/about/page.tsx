import { Metadata } from "next";
import Image from 'next/image';
import TeamCard  from "../components/TeamCard";
import ProjectCard from "../components/ProjectCard";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conoce la misión, los proyectos y el equipo detrás de Lumentec. Empresa de desarrollo de software de alto rendimiento especializada en Next.js, React y Node.js en Costa Rica.",
  
  openGraph: {
    title: "Sobre Nosotros | Lumentec",
    description: "Conoce la misión, los proyectos y el equipo detrás de Lumentec. Desarrollo de software de alto rendimiento en Costa Rica.",
    url: "https://lumentec.business/about",
    siteName: "Lumentec",
    images: [
      {
        url: "https://res.cloudinary.com/drec8g03e/image/upload/v1765326134/business_evv0zn.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo Lumentec - Sobre Nosotros",
      },
    ],
    locale: "es_CR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | Lumentec",
    description: "Conoce la misión, los proyectos y el equipo detrás de Lumentec.",
    images: ["https://res.cloudinary.com/drec8g03e/image/upload/v1765326134/business_evv0zn.jpg"],
  },

  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-600 text-white pt-32 pb-32 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-400 blur-[100px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed font-light">
            Conoce la misión, los proyectos y el equipo humano detrás de <span className="font-semibold text-white">Lumentec</span>.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-20">
        
        {/* --- LO QUE HACEMOS (Tarjeta Flotante) --- */}
        <section className="relative -mt-16 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Lo que hacemos
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  <strong className="text-indigo-700">Lumentec</strong> es una empresa dedicada al desarrollo de software de alto rendimiento. Nos especializamos en crear soluciones innovadoras que impulsan la eficiencia y productividad de nuestros clientes.
                </p>
                <p>
                  Nos enfocamos en tecnologías modernas (Next.js, React, Node) y metodologías ágiles para entregar productos de calidad que satisfacen las necesidades del mercado actual.
                </p>
              </div>
            </div>
            {/* Imagen decorativa */}
            <div className="relative w-full h-64 md:h-80 lg:h-full rounded-2xl overflow-hidden bg-indigo-50/50 border border-indigo-100/50 flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/drec8g03e/image/upload/v1765326134/business_evv0zn.jpg"
                alt="Equipo de trabajo Lumentec"
                fill
                className="object-cover rounded-2xl shadow-md"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* --- NUESTRO EQUIPO --- */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestro Equipo</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">Talento apasionado por soluciones escalables y de alto rendimiento.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeamCard 
              name="Yosimar Montenegro" 
              role="Desarrollador Full Stack"
              linkedinUrl="https://www.linkedin.com/in/yosimar-montenegro-464642338/"
              initials="YM"
            />
            <TeamCard 
              name="Deislher Sánchez" 
              role="Desarrollador Backend"
              linkedinUrl="https://www.linkedin.com/in/deislher-s%C3%A1nchez-funez-0213a53a0/"
              initials="DS"
            />
            <TeamCard 
              name="Bryan Londoño" 
              role="Desarrollador Backend"
              linkedinUrl="https://www.linkedin.com/in/bryan-londo%C3%B1o-marchena-ba779525b/"
              initials="BL"
            />
            <TeamCard 
              name="Sergio Montoya" 
              role="Desarrollador Backend"
              linkedinUrl="https://www.linkedin.com/in/sergio-montoya-badilla-255210358/"
              initials="SM"
            />
          </div>
        </section>

        {/* --- NUESTROS PROYECTOS --- */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-indigo-600 pl-4">
            Proyectos Destacados
          </h2>

          <div className="space-y-8">
            <ProjectCard
              title="JyJ Essence"
              category="E-commerce"
              description="Plataforma de comercio electrónico desarrollada a medida para la gestión y venta de perfumería. Cuenta con un panel administrativo intuitivo, control de inventario y optimización SEO. Nota: Es posible que el sitio no se visualice correctamente en algunos navegadores por defecto del sistema o de algunas redes sociales."
              imageUrl="https://res.cloudinary.com/drec8g03e/image/upload/v1762655746/jyjessence_y75wqc.webp"
              imageAlt="Logo de JyJ Essence"
              websiteUrl="https://jyjessence.vercel.app/"
            />

          <ProjectCard
            title="Lumen Match3"
            category="Web App"
            description="Juego de estrategia tipo Match-3 totalmente responsivo. Un ejemplo de cómo transformamos la lógica clásica de los videojuegos en una aplicación web moderna, rápida y accesible desde cualquier navegador sin descargas."
            imageUrl="https://res.cloudinary.com/drec8g03e/image/upload/v1765562524/logo_gaue6g.ico"
            imageAlt="Logo de Lumen Match3"
            websiteUrl="https://lumenmatch3.vercel.app/"
          />

          <ProjectCard
            title="Portafolio Personal - Yosimar Montenegro"
            category="Web Personal"
            description="Desarrollo del portafolio personal de Yosimar Montenegro, destacando sus habilidades y proyectos."
            imageUrl="https://res.cloudinary.com/dbcbrgbyy/image/upload/v1765564927/SerafinoLogo_rjarip.png"
            imageAlt="Logo del portafolio de Yosimar Montenegro"
            websiteUrl="https://front-portfolio-black.vercel.app/"
          />
          </div>
        </section>

        {/* --- CONTACTO --- */}
        <section className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center md:text-left relative overflow-hidden isolate">
            {/* Efectos de fondo */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Tienes una idea en mente?</h2>
                    <p className="text-slate-300 text-lg">
                        Ya sea una startup o una empresa establecida, estamos listos para llevar tu proyecto al siguiente nivel.
                    </p>
                </div>
                <a 
                    href="mailto:lumentec25@gmail.com" 
                    className="flex-shrink-0 flex items-center gap-3 bg-white text-slate-900 hover:bg-indigo-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1"
                >
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>Contáctanos</span>
                </a>
            </div>
        </section>

      </div>
    </div>
  );
}


