import { Metadata } from "next";
import CardService from "../components/CardService";
import BadgeService from "../components/BadgeService";

export const metadata: Metadata = {
  title: "Servicios de Desarrollo de Software | Lumentec",
  description: "Desarrollo web de alto impacto con Next.js/React, arquitectura y rendimiento, backend con Node.js/Express. Software escalable y optimizado en Costa Rica.",

  openGraph: {
    title: "Servicios de Desarrollo de Software | Lumentec",
    description: "Desarrollo web de alto impacto, arquitectura y rendimiento, backend escalable. Expertos en Next.js, React y Node.js en Costa Rica.",
    url: "https://lumentec.business/services",
    siteName: "Lumentec",
    images: [
      {
        url: "https://res.cloudinary.com/drec8g03e/image/upload/v1765318192/lumentech-icon_zb5xsd.png",
        width: 1200,
        height: 630,
        alt: "Servicios de Desarrollo de Software - Lumentec",
      },
    ],
    locale: "es_CR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Servicios de Desarrollo de Software | Lumentec",
    description: "Desarrollo web de alto impacto, arquitectura y rendimiento, backend escalable.",
    images: ["https://res.cloudinary.com/drec8g03e/image/upload/v1765318192/lumentech-icon_zb5xsd.png"],
  },

  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* sección hero */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-600 text-white pt-28 pb-20 overflow-hidden">
        {/* Elementos decorativos de fondo mejorados */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-400 blur-[100px] animate-float" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-indigo-300 blur-[80px] animate-float delay-500" />
        </div>

        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particle particle-sm absolute top-[15%] left-[10%] animate-particle"></div>
          <div className="particle particle-md absolute top-[35%] left-[20%] animate-particle delay-200"></div>
          <div className="particle particle-lg absolute top-[55%] left-[15%] animate-particle delay-400"></div>
          <div className="particle particle-sm absolute top-[20%] right-[15%] animate-particle delay-300"></div>
          <div className="particle particle-md absolute top-[60%] right-[20%] animate-particle delay-100"></div>
          <div className="particle particle-lg absolute top-[40%] right-[25%] animate-particle delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <p className="uppercase tracking-[0.2em] text-indigo-100 text-sm mb-3 animate-fade-in-up">
            Servicios
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-up delay-100" style={{ animationFillMode: 'both' }}>
            <span className="animate-gradient-text">Software de alto rendimiento</span>
          </h1>
          <p className="text-indigo-100/90 text-lg max-w-2xl animate-fade-in-up delay-200" style={{ animationFillMode: 'both' }}>
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
            description="Construimos aplicaciones web modernas con Next.js y React, enfocadas en rendimiento excepcional y experiencia de usuario memorable. Cada proyecto es optimizado para Core Web Vitals."
            details={[
              "Server-side rendering y static generation",
              "Interfaces responsivas con Tailwind CSS",
              "Optimización de imágenes y lazy loading",
              "Integraciones con APIs y CMS",
              "Analítica y seguimiento de conversiones",
            ]}
          />

          <CardService
            code="AR"
            badgeText="Consultoría"
            title="Arquitectura y rendimiento"
            description="Analizamos tu stack actual y proponemos mejoras arquitectónicas para escalar sin comprometer el rendimiento. Auditorías técnicas con recomendaciones accionables."
            details={[
              "Análisis de rendimiento y bottlenecks",
              "Diseño de arquitectura escalable",
              "Revisión de código y mejores prácticas",
              "Estrategias de caching y CDN",
              "Pipelines CI/CD optimizados",
            ]}
          />

          <CardService
            code="API"
            badgeText="Backend"
            title="APIs rápidas y seguras"
            description="Desarrollamos backends robustos con Node.js, Express y Fastify. APIs RESTful documentadas, seguras y optimizadas para manejar alta demanda."
            details={[
              "Autenticación JWT y OAuth 2.0",
              "Validación de datos y sanitización",
              "Rate limiting y protección DDoS",
              "Documentación con Swagger/OpenAPI",
              "Logging estructurado y monitoreo",
            ]}
          />
        </div>

        {/* Servicios extras con badges */}
        <div className="bg-white rounded-2xl border border-indigo-100/70 shadow-md p-8 flex flex-col gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-2">Más servicios</span>
            <h3 className="text-2xl font-bold text-slate-900">
              También podemos ayudarte con
            </h3>
            <p className="text-slate-600 mt-2">Servicios complementarios para potenciar tu producto digital</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              "Optimización SEO técnico",
              "Migraciones y modernización",
              "Integraciones con terceros",
              "Automatización CI/CD",
              "Monitoreo y alertas",
              "Diseño de bases de datos",
              "Desarrollo de dashboards",
              "Testing automatizado",
              "Documentación técnica",
              "Mantenimiento y soporte",
            ].map((label) => (
              <BadgeService key={label} label={label} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
