import Link from "next/link";
import Image from "next/image";

export default function AboutCard() {
  return (
    <Link href="/about" className="group block">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-[1.02] hover-glow">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Columna de contenido */}
          <div className="p-10 md:p-14 text-white flex flex-col justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white w-fit mb-6 group-hover:bg-white/30 transition-colors">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Equipo activo desde 2025
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Un equipo apasionado por la tecnología
            </h3>
            <p className="text-indigo-50 text-lg leading-relaxed mb-4">
              En Lumentec combinamos experiencia técnica con creatividad para desarrollar
              soluciones que realmente impactan. Nos especializamos en tecnologías modernas
              y metodologías ágiles.
            </p>
            <p className="text-indigo-100/80 text-base leading-relaxed mb-8">
              4 desarrolladores especializados y un compromiso inquebrantable con la
              calidad y la innovación.
            </p>
            <div className="flex items-center gap-3 text-white font-semibold group-hover:gap-5 transition-all duration-300">
              <span className="text-lg">Descubre nuestra historia</span>
              <svg className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Columna decorativa */}
          <div className="relative h-64 md:h-full min-h-[300px] bg-gradient-to-br from-indigo-500/50 to-purple-500/50 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

            {/* Partículas flotantes */}
            <div className="particle particle-sm absolute top-[20%] left-[20%] animate-particle"></div>
            <div className="particle particle-md absolute top-[50%] left-[70%] animate-particle delay-300"></div>
            <div className="particle particle-lg absolute top-[70%] left-[30%] animate-particle delay-500"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48">
              <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 p-8 animate-pulse-glow">
                <Image
                  src="/favicon.ico"
                  alt="Logo Lumentec"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

