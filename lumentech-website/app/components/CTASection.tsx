export default function CTASection() {
  return (
    <section className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-3xl animate-float"></div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-sm absolute top-[15%] left-[20%] animate-particle"></div>
        <div className="particle particle-md absolute top-[60%] left-[10%] animate-particle delay-300"></div>
        <div className="particle particle-sm absolute top-[40%] right-[15%] animate-particle delay-500"></div>
        <div className="particle particle-lg absolute top-[70%] right-[25%] animate-particle delay-200"></div>
        <div className="particle particle-md absolute top-[25%] right-[35%] animate-particle delay-400"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
          ¿Listo para empezar tu proyecto?
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200" style={{ animationFillMode: 'both' }}>
          Conversemos sobre cómo podemos ayudarte a llevar tu idea al siguiente nivel con tecnología de vanguardia.
        </p>
        <a
          href="mailto:lumentec25@gmail.com"
          className="btn-shimmer animate-pulse-glow inline-flex items-center gap-3 bg-white text-slate-900 hover:bg-indigo-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-2 hover:scale-105"
        >
          <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Contáctanos</span>
        </a>
      </div>
    </section>
  );
}

