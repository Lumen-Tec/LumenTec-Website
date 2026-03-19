export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="fi">
        <div className="fb-brand">
          <div className="logo">
            Lumen<em>Tec</em>
          </div>
          <p>Desarrollamos software que impulsa negocios. Precision, velocidad y calidad en cada linea de codigo.</p>
        </div>
        <div className="fcol">
          <h4>Servicios</h4>
          <ul>
            <li>
              <a href="#servicios">Desarrollo Web</a>
            </li>
            <li>
              <a href="#servicios">Apps Moviles</a>
            </li>
            <li>
              <a href="#servicios">Automatizacion</a>
            </li>
            <li>
              <a href="#servicios">Cloud</a>
            </li>
          </ul>
        </div>
        <div className="fcol">
          <h4>Empresa</h4>
          <ul>
            <li>
              <a href="/about">Nosotros</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#proceso">Nuestro proceso</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="fcol">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href="mailto:lumentec25@gmail.com">lumentec25@gmail.com</a>
            </li>
            <li>
              <a href="https://wa.me/+50662435191" target="_blank" rel="noreferrer">
                +506 6243-5191
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fbot">
        <span>© {currentYear} LumenTec Software Solutions.</span>
        <span>Hecho con cafe y mucho codigo</span>
      </div>
    </footer>
  );
}
