export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* TÍTULO Y DESCRIPCIÓN */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Contacto
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed">
          Estoy abierto a oportunidades como desarrollador web junior,
          tanto presenciales como remotas en España.
          Si te interesa mi perfil, no dudes en contactarme.
        </p>

        {/* TARJETA DE CONTACTO RESPONSIVE */}
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 max-w-xl mx-auto border border-gray-100">

          <div className="space-y-8 text-left">

            {/* EMAIL */}
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                Email
              </span>
              <a
                href="mailto:diegocifuentesposada@gmail.com"
                className="text-base sm:text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors break-words"
              >
                diegocifuentesposada@gmail.com
              </a>
            </div>

            {/* LINKEDIN */}
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/diego-cifuentesp"
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors break-words"
              >
                linkedin.com/in/diego-cifuentesp
              </a>
            </div>

            {/* UBICACIÓN */}
            <div className="flex flex-col border-t pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Ubicación
              </span>
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-semibold text-gray-800 flex items-center">
                  <span className="mr-2">📍</span> Madrid · Presencial / Remoto
                </p>
                <p className="text-base sm:text-lg font-semibold text-gray-800 flex items-center">
                  <span className="mr-2">🌍</span> España · Disponibilidad remota
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}