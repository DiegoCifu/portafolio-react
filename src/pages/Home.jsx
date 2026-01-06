import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hola, soy <span className="text-blue-600">Diego Cifuentes</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
              Web Developer Junior
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Desarrollador web junior orientado a frontend con experiencia en
              React, JavaScript, HTML y CSS.  
              He trabajado en proyectos académicos y personales aplicando buenas
              prácticas, diseño responsive y enfoque en accesibilidad.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              También cuento con conocimientos básicos en backend con PHP y MySQL,
              fundamentos de .NET, nociones de redes y ciberseguridad, además de
              habilidades complementarias en Python y Excel.
            </p>
          </div>

          {/* IMAGEN */}
          <div className="flex justify-center">
            <img
              src="/perfil.jpg"
              alt="Foto de Diego Cifuentes"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
