import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Proyectos
      </h1>

      <p className="text-gray-600 max-w-2xl mb-8">
        Algunos proyectos personales desarrollados para reforzar conocimientos
        en frontend y backend, siguiendo buenas prácticas y estándares actuales.
      </p>


      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4 flex-wrap">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Ver proyecto
                </a>
              ) : (
                <span className="text-sm text-gray-500 italic">
                  Proyecto backend local (XAMPP)
                </span>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 font-medium hover:underline"
              >
                Ver código
              </a>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}
