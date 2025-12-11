import CardService from "../components/CardService";
import BadgeService from "../components/BadgeService";

export default function Services() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* sección hero */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-600 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-400 blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="uppercase tracking-[0.2em] text-indigo-100 text-sm mb-3">
            Servicios
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Software de alto rendimiento
          </h1>
          <p className="text-indigo-100/90 text-lg max-w-2xl">
            Arquitectura, desarrollo y optimización para productos web rápidos,
            seguros y escalables.
          </p>
        </div>
      </section>

      {/* Cards stackeables de servicios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="grid gap-8 md:grid-cols-3">
          <CardService
            code="DW"
            badgeText="Frontend"
            title="Desarrollo Web de alto impacto"
            description="Frontends Next.js/React con foco en velocidad (LCP/CLS) óptimos, accesibilidad y UX clara."
            details={[
              "Renderización y optimización de carga",
              "UI moderna con Tailwind",
              "Integraciones y analítica",
            ]}
          />

          <CardService
            code="AR"
            badgeText="Consultoría"
            title="Arquitectura y rendimiento"
            description="Auditorías y elección de stack para escalar sin perder rendimiento."
            details={[
              "Monitoreo y optimización continua",
              "Buenas prácticas DevOps/CI",
            ]}
          />

          <CardService
            code="API"
            badgeText="Backend"
            title="APIs rápidas y seguras"
            description="Backends con Fastify y otras tecnologías, priorizando rendimiento y seguridad."
            details={[
              "Respuestas JSON o XML según necesidad",
              "Autenticación, cifrado y rate limiting",
              "Observabilidad y logs",
            ]}
          />
        </div>

        {/* Servicios extras con badges */}
        <div className="bg-white rounded-2xl border border-indigo-100/70 shadow-md p-8 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-slate-900">
            También podemos ayudarte con
          </h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              "Optimización SEO técnico",
              "Migraciones y modernización",
              "Integraciones con terceros",
              "Automatización CI/CD",
              "Monitoreo y alertas",
            ].map((label) => (
              <BadgeService key={label} label={label} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
