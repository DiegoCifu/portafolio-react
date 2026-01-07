export default function About() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        
        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-gray-900">
          Sobre mí
        </h1>

        {/* PERFIL RESPONSIVE */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed mb-16 text-sm sm:text-base md:text-lg text-center md:text-left">
          <p>
            Soy <strong className="text-blue-600">Diego Alejandro Cifuentes</strong>, 
            <strong> Web Developer Junior</strong> con enfoque en
            desarrollo frontend y bases sólidas en backend.
            Me interesa crear aplicaciones web claras, mantenibles
            y orientadas a una buena experiencia de usuario.
          </p>

          <p>
            Trabajo principalmente con tecnologías modernas del
            ecosistema web, aplicando buenas prácticas de
            programación, diseño responsive y estructuración
            de proyectos reales.
          </p>

          <p>
            Busco seguir creciendo profesionalmente como desarrollador
            web e integrarme en equipos tecnológicos dentro del
            mercado laboral de <strong>España</strong>.
          </p>
        </div>

        {/* SECCIÓN TECNOLOGÍAS */}
        <div className="border-t border-gray-200 pt-12 md:pt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 text-gray-900">
            Tecnologías & Conocimientos
          </h2>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {/* FRONTEND */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React (Vite, Router)</li>
                <li>Responsive Design</li>
                <li>Tailwind CSS / Bootstrap</li>
              </ul>
            </div>

            {/* BACKEND */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-green-600 border-b pb-2">
                Backend
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>PHP</li>
                <li>CRUD y formularios</li>
                <li>Sesiones y Auth</li>
                <li>Conceptos REST / APIs</li>
              </ul>
            </div>

            {/* BASES DE DATOS */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 border-b pb-2">
                Bases de Datos
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>MySQL / MariaDB</li>
                <li>Consultas SQL</li>
                <li>Relaciones entre tablas</li>
              </ul>
            </div>

            {/* LENGUAJES */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 border-b pb-2">
                Lenguajes
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Python (básico)</li>
                <li>C# / .NET (fundamentos)</li>
              </ul>
            </div>

            {/* PLATAFORMAS */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-orange-600 border-b pb-2">
                Herramientas
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>Git & GitHub</li>
                <li>Visual Studio Code</li>
                <li>Visual Studio</li>
                <li>IntelliJ IDEA</li>
              </ul>
            </div>

            {/* FUNDAMENTOS */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-red-600 border-b pb-2">
                Fundamentos
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>Modelo cliente-servidor</li>
                <li>Conceptos de redes</li>
                <li>Buenas prácticas</li>
                <li>Ciberseguridad básica</li>
              </ul>
            </div>

            {/* SKILLS COMPLEMENTARIAS - Ocupa todo el ancho en pantallas grandes */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 md:col-span-2 lg:col-span-3">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 text-center">
                Skills Complementarias
              </h3>
              <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-700 text-sm">
                <li className="bg-gray-100 px-3 py-1 rounded-full">Excel (básico)</li>
                <li className="bg-gray-100 px-3 py-1 rounded-full">Análisis de datos</li>
                <li className="bg-gray-100 px-3 py-1 rounded-full">Trabajo en equipo</li>
                <li className="bg-gray-100 px-3 py-1 rounded-full">Aprendizaje continuo</li>
              </ul>
            </div>

          </div>
        </div>

        {/* INGLÉS RESPONSIVE */}
        <div className="mt-16 border-t border-gray-200 pt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center md:text-left">
            Short summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic text-center md:text-left">
            "Junior Web Developer with experience in React, JavaScript,
            HTML, CSS and basic backend development using PHP and MySQL.
            Familiar with Git, responsive design and REST APIs.
            Motivated to grow professionally and contribute to real-world projects."
          </p>
        </div>
      </div>
    </section>
  );
}

