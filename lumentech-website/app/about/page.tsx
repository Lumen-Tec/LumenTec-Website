import Image from 'next/image';

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
              role="Desarrollador Full Stack"
              linkedinUrl="https://www.linkedin.com/in/deislher-s%C3%A1nchez-funez-0213a53a0/"
              initials="DS"
            />
          </div>
        </section>

        {/* --- NUESTROS PROYECTOS --- */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-indigo-600 pl-4">
            Proyectos Destacados
          </h2>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden">
            <div className="grid md:grid-cols-12 gap-0">
                {/* Columna Logo/Imagen */}
                <div className="md:col-span-4 bg-slate-50 p-10 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 group-hover:bg-indigo-50/30 transition-colors">
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                        <Image
                            src="https://res.cloudinary.com/drec8g03e/image/upload/v1762655746/jyjessence_y75wqc.webp"
                            alt="Logo JyJ Essence"
                            fill
                            className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                </div>
                {/* Columna Info */}
                <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <h3 className="text-2xl font-bold text-slate-900">JyJ Essence</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 w-fit">
                            E-commerce
                        </span>
                    </div>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                        Plataforma de comercio electrónico desarrollada a medida para la gestión y venta de perfumería. Cuenta con un panel administrativo intuitivo, control de inventario y optimización SEO.
                    </p>
                    <div>
                        <a 
                            href="https://jyjessence.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md gap-2"
                        >
                            Visitar sitio web
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                    </div>
                </div>
            </div>
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
                        Ya sea una startup o una empresa establecida, estamos listos para llevar tu proyecto al siguiente nivel tecnológico.
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

// --- SUB-COMPONENTES CON INTERFACE TYPESCRIPT ---

interface TeamCardProps {
    name: string;
    role: string;
    linkedinUrl: string;
    initials: string;
}

function TeamCard({ name, role, linkedinUrl, initials }: TeamCardProps) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-md ring-4 ring-white group-hover:ring-indigo-50 transition-all">
          {initials}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
        <p className="text-indigo-600 font-medium mb-6 bg-indigo-50 px-3 py-1 rounded-full text-sm">{role}</p>
        <a 
          href={linkedinUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-slate-600 font-medium hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-200 flex items-center justify-center gap-2"
        >
          <img src="https://res.cloudinary.com/drec8g03e/image/upload/v1765327013/linkedin_speobq.svg" alt="LinkedIn" className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
      </div>
    );
}