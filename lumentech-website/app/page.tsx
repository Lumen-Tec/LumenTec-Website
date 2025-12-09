import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Seccion hero para presentación principal */}
      {/* <section className="pt-16 min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-white text-5xl font-bold">
            Desarrollo de Software de Alto Rendimiento
          </h1>
        </div>
      </section> */}
      <section className="pt-16 min-h-screen bg-indigo-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-white text-5xl font-bold">
            Desarrollo de Software de Alto Rendimiento
          </h1>
        </div>
      </section>

      {/* Seccion servicios */}
      <section id="servicios" className="min-h-screen bg-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-4xl font-bold mb-8">Servicios</h2>
          {/* Contenido de servicios */}
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section id="sobre-nosotros" className="min-h-screen bg-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-4xl font-bold mb-8">Sobre Nosotros</h2>
          {/* Contenido sobre nosotros */}
        </div>
      </section>
    </main>
  );
}
