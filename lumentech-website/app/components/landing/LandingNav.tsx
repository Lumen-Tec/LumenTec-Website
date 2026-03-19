type LandingNavProps = {
  onGoTo: (id: string) => void;
};

export default function LandingNav({ onGoTo }: LandingNavProps) {
  return (
    <nav>
      <div className="logo">
        Lumen<em>Tec</em>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#servicios">Servicios</a>
        </li>
        <li>
          <a href="#proceso">Proceso</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
      </ul>
      <button className="btn-nav" onClick={() => onGoTo("contacto")}>
        Contactanos
      </button>
    </nav>
  );
}
