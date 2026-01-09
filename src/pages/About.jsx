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
            <strong> Web Developer Junior</strong> especializado en el ecosistema de 
            <strong> React</strong> y con un fuerte enfoque en el desarrollo de aplicaciones modernas, escalables y tipadas.
          </p>

          <p>
            Mi experiencia reciente se centra en la integración de <strong>Frontend (React + TypeScript)</strong> con servicios de 
            <strong> Backend as a Service (Supabase)</strong>, permitiéndome construir soluciones Fullstack con persistencia 
            de datos real, manejo de estados complejos y optimización de la experiencia de usuario.
          </p>

          <p>
            Me apasiona el aprendizaje continuo y la resolución de problemas técnicos. Actualmente, busco integrarme en 
            equipos tecnológicos dentro del mercado laboral de <strong>España</strong>, donde pueda aportar valor 
            mientras sigo perfeccionando mis habilidades en el desarrollo de software profesional.
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
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base font-medium">
                <li>React 18 (Hooks, Context, Router)</li>
                <li><strong>TypeScript (Tipado Estricto)</strong></li>
                <li>JavaScript (ES6+)</li>
                <li>Tailwind CSS v4 & Bootstrap</li>
                <li>HTML5 & CSS3 (Semántica & Flex/Grid)</li>
              </ul>
            </div>

            {/* BACKEND & CLOUD */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-green-600 border-b pb-2">
                Backend & Cloud
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li><strong>Supabase (BaaS)</strong></li>
                <li>PHP (CRUD & Autenticación)</li>
                <li>Consumo de APIs REST</li>
                <li>Manejo de promesas y Async/Await</li>
                <li>Autenticación de usuarios</li>
              </ul>
            </div>

            {/* BASES DE DATOS */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 border-b pb-2">
                Bases de Datos
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li><strong>PostgreSQL</strong></li>
                <li>MySQL / MariaDB</li>
                <li>Consultas SQL Relacionales</li>
                <li>Modelado de datos</li>
              </ul>
            </div>

            {/* LENGUAJES */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 border-b pb-2">
                Lenguajes
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>JavaScript / <strong>TypeScript</strong></li>
                <li>PHP</li>
                <li>Python (básico)</li>
                <li>C# / .NET (fundamentos)</li>
              </ul>
            </div>

            {/* HERRAMIENTAS */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-orange-600 border-b pb-2">
                Herramientas
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>Git & GitHub (Control de versiones)</li>
                <li>Vercel (Despliegue & CI/CD)</li>
                <li>VS Code / Visual Studio</li>
                <li>Postman / Insomnia</li>
              </ul>
            </div>

            {/* FUNDAMENTOS */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4 text-red-600 border-b pb-2">
                Fundamentos IT
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>Modelo Cliente-Servidor</li>
                <li>Arquitectura de Software</li>
                <li>Ciberseguridad básica</li>
                <li>Redes e Infraestructura</li>
              </ul>
            </div>

            {/* SKILLS COMPLEMENTARIAS */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 md:col-span-2 lg:col-span-3">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 text-center">
                Habilidades Profesionales
              </h3>
              <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-700 text-sm font-medium">
                <li className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full border border-blue-100">Aprendizaje Autodidacta</li>
                <li className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full border border-green-100">Resolución de Problemas</li>
                <li className="bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full border border-purple-100">Trabajo en Equipo</li>
                <li className="bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full border border-orange-100">Atención al Detalle</li>
              </ul>
            </div>

          </div>
        </div>

        {/* INGLÉS ACTUALIZADO */}
        <div className="mt-16 border-t border-gray-200 pt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center md:text-left">
            Short summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic text-center md:text-left">
            "Junior Web Developer with a strong focus on the <strong>React & TypeScript</strong> ecosystem. 
            Experienced in building full-stack applications integrated with <strong>Supabase (PostgreSQL)</strong>. 
            Committed to high-quality code, responsive design, and continuous professional growth within the 
            Spanish tech market."
          </p>
        </div>
      </div>
    </section>
  );
}
