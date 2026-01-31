export default function MethodologySection() {
    const steps = [
        {
            number: "01",
            title: "Descubrimiento",
            desc: "Entendemos a fondo tu visión, tus objetivos y los desafíos de tu negocio. No escribimos una sola línea de código sin un propósito claro.",
            borderColor: "border-indigo-500"
        },
        {
            number: "02",
            title: "Diseño & Estrategia",
            desc: "Conceptualizamos la solución. UX/UI de primer nivel que garantiza que tu producto no solo funcione, sino que enamore a tus usuarios.",
            borderColor: "border-purple-500"
        },
        {
            number: "03",
            title: "Ingeniería",
            desc: "Construimos con estándares de calidad obsesivos. Código robusto, seguro y escalable preparado para el crecimiento futuro.",
            borderColor: "border-blue-500"
        },
        {
            number: "04",
            title: "Lanzamiento y Evolución",
            desc: "Desplegamos tu producto y monitoreamos su rendimiento. Te acompañamos en el crecimiento continuo de tu plataforma.",
            borderColor: "border-emerald-500"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6 tracking-wide uppercase">
                        Nuestro Enfoque
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Diseñamos el Futuro
                    </h2>
                    <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed font-light">
                        Más que una agencia de desarrollo, somos tu socio en innovación.
                        Nuestro proceso está refinado para eliminar riesgos y maximizar impacto.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className="group relative p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 border border-slate-100 hover:-translate-y-2">
                            <div className={`absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-transparent via-${step.borderColor.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="text-5xl font-black text-slate-200 mb-6 group-hover:text-indigo-100 transition-colors duration-500 select-none">
                                {step.number}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
