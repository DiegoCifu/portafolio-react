import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      {/* Encabezado Responsive */}
      <div className="text-center md:text-left mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Proyectos
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 text-sm sm:text-base">
          Algunos proyectos personales desarrollados para reforzar conocimientos
          en frontend y backend, siguiendo buenas prácticas y estándares actuales.
        </p>
      </div>

      {/* Grid Responsive: 1 columna en móvil, 2 columnas en pantallas medianas/grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border-gray-100"
          >
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {project.title}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Enlaces de Acción */}
            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
              <div className="flex gap-4">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition-colors"
                  >
                    Ver proyecto
                  </a>
                ) : (
                  <span className="text-xs text-gray-400 italic">
                    Backend local
                  </span>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-sm font-semibold hover:text-gray-900 transition-colors"
                >
                  Ver código
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}