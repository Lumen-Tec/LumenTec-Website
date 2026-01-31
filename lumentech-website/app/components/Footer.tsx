import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-indigo-600">
                <Image
                  src="/favicon.ico"
                  alt="Lumentec Logo"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">Lumentec</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Transformamos negocios a través de software de alto rendimiento. 
              Expertos en desarrollo web, aplicaciones escalables y consultoría tecnológica.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Inicio</Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors text-sm">Servicios</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">Sobre Nosotros</Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm">Desarrollo Web Personalizado</li>
              <li className="text-slate-400 text-sm">Aplicaciones Móviles & Web</li>
              <li className="text-slate-400 text-sm">Consultoría Tecnológica</li>
              <li className="text-slate-400 text-sm">Optimización de Rendimiento</li>
              <li className="text-slate-400 text-sm">Sistemas Empresariales</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-slate-400 text-sm">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>lumentec25@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400 text-sm">
                <svg className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Costa Rica</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {currentYear} Lumentec.
          </p>
        </div>
      </div>
    </footer>
  );
}
