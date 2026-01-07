import { Link } from "react-router-dom";
import fotoPerfil from "../assets/fotoCV.jpg";

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGEN */}
          <div className="flex justify-center order-first md:order-last">
            <img
              src={fotoPerfil} 
              alt="Foto de Diego Cifuentes"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>

          {/* TEXTO */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hola, soy <span className="text-blue-600">Diego Cifuentes</span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
              Web Developer Junior
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Desarrollador web junior orientado a frontend con experiencia en
              React, JavaScript, HTML y CSS.  
              He trabajado en proyectos académicos y personales aplicando buenas
              prácticas, diseño responsive y enfoque en accesibilidad.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              También cuento con conocimientos básicos en backend con PHP y MySQL,
              fundamentos de .NET, nociones de redes y ciberseguridad, además de
              habilidades complementarias en Python y Excel.
            </p>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/proyectos"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-center"
              >
                Ver proyectos
              </Link>

              <Link
                to="/contacto"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition text-center"
              >
                Contacto
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
