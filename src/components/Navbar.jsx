import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Nombre */}
          <NavLink
            to="/"
            className="text-lg md:text-xl font-bold text-blue-600 truncate mr-4"
            onClick={closeMenu}
          >
            Diego Alejandro Cifuentes Posada
          </NavLink>

          {/* Botón Hamburguesa (Solo móvil) */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Links Escritorio (Ocultos en móvil) */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600 transition"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/proyectos"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600 transition"
                }
              >
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre-mi"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600 transition"
                }
              >
                Sobre mí
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600 transition"
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Menú Desplegable (Solo móvil) */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 pb-4`}>
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/proyectos"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre-mi"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Sobre mí
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;