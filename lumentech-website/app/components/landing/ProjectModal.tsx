import type { Project } from "./types";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className={`mo ${project ? "open" : ""}`} id="modal" onClick={onClose}>
      <div className="mbox" onClick={(event) => event.stopPropagation()}>
        <div className="mh">
          <h3 id="mt">{project?.title}</h3>
          <button className="mx" onClick={onClose} aria-label="Cerrar modal">
            ×
          </button>
        </div>
        <div className="mb">
          <p id="md">{project?.longDescription}</p>
          {project ? (
            <div className="mmeta" id="mm">
              <div className="mmi">
                <div className="mml">Tecnologias</div>
                <div className="mmv mmv-sm">{project.tech}</div>
              </div>
              <div className="mmi">
                <div className="mml">Duracion</div>
                <div className="mmv">{project.duration}</div>
              </div>
              <div className="mmi">
                <div className="mml">Cliente</div>
                <div className="mmv mmv-md">{project.client}</div>
              </div>
              <div className="mmi">
                <div className="mml">Resultado clave</div>
                <div className="mmv mmv-sm">{project.result}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
