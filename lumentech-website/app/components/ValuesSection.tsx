export default function ValuesSection() {
    return (
        <section className="py-12 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="p-4 group hover:bg-white/5 rounded-xl transition-colors duration-300">
                        <div className="text-indigo-400 mb-3 flex justify-center">
                            <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-white font-bold text-lg mb-1">Calidad Innegociable</div>
                        <div className="text-slate-400 text-sm">Código limpio y mantenible</div>
                    </div>

                    <div className="p-4 group hover:bg-white/5 rounded-xl transition-colors duration-300">
                        <div className="text-purple-400 mb-3 flex justify-center">
                            <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <div className="text-white font-bold text-lg mb-1">Diseño Artesanal</div>
                        <div className="text-slate-400 text-sm">Estética que impresiona</div>
                    </div>

                    <div className="p-4 group hover:bg-white/5 rounded-xl transition-colors duration-300">
                        <div className="text-blue-400 mb-3 flex justify-center">
                            <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="text-white font-bold text-lg mb-1">Tecnología de Punta</div>
                        <div className="text-slate-400 text-sm">React, Next.js, Cloud</div>
                    </div>

                    <div className="p-4 group hover:bg-white/5 rounded-xl transition-colors duration-300">
                        <div className="text-emerald-400 mb-3 flex justify-center">
                            <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-5.626-2.32l-5.084 1.761 1.912-5.741C2.556 12.396 2 10.74 2 9c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                            </svg>
                        </div>
                        <div className="text-white font-bold text-lg mb-1">Trato Transparente</div>
                        <div className="text-slate-400 text-sm">Comunicación directa</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
