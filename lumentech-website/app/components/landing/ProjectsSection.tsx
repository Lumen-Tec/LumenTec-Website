import Image from "next/image";
import type { Category, Project } from "./types";

type ProjectsSectionProps = {
  activeFilter: Category;
  filteredProjects: Project[];
  onFilterChange: (category: Category) => void;
  onOpenProject: (project: Project) => void;
};

export default function ProjectsSection({
  activeFilter,
  filteredProjects,
  onFilterChange,
  onOpenProject,
}: ProjectsSectionProps) {
  return (
    <section className="projects" id="proyectos">
      <div className="proj-hdr reveal">
        <div className="stag">Portafolio</div>
        <h2 className="stitle">
          Proyectos que hablan
          <br />
          por nosotros
        </h2>
        <p className="ssub">
          Soluciones reales para empresas reales. Cada proyecto nacio de un problema concreto y termino como una ventaja competitiva.
        </p>
        <div className="filters">
          <button className={`fb ${activeFilter === "all" ? "on" : ""}`} onClick={() => onFilterChange("all")}>
            Todos
          </button>
          <button className={`fb ${activeFilter === "web" ? "on" : ""}`} onClick={() => onFilterChange("web")}>
            Web & Apps
          </button>
          <button className={`fb ${activeFilter === "data" ? "on" : ""}`} onClick={() => onFilterChange("data")}>
            Datos & BI
          </button>
          <button className={`fb ${activeFilter === "auto" ? "on" : ""}`} onClick={() => onFilterChange("auto")}>
            Automatizacion
          </button>
          <button className={`fb ${activeFilter === "cloud" ? "on" : ""}`} onClick={() => onFilterChange("cloud")}>
            Cloud
          </button>
        </div>
      </div>

      <div className="pgrid reveal" id="pg">
        {filteredProjects.map((project, index) => {
          const isBig = activeFilter === "all" && index === 0;
          return (
            <div
              key={project.title}
              className={`pc ${isBig ? "big" : ""}`}
              data-cat={project.category}
              onClick={() => onOpenProject(project)}
            >
              <div className="pthumb">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 960px) 100vw, 33vw"
                />
                <div className="ptbadge">{project.badge}</div>
              </div>
              <div className="pbody">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="ptags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="ptag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pfoot">
                <span>
                  {project.client} · {project.duration.replace(" semanas", " sem.")}
                </span>
                <span className="plink">Ver detalle →</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
