import { useState } from "react";
import logo from "../assets/logo2.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sm:fixed md:fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo placeholder - using text and basic icon representation */}
            <div className="flex items-center gap-2">
              {/* <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-3 shadow-lg shadow-blue-500/50"> */}
<div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg shadow-blue-500/50">
                <img src={logo} alt="" srcset="" />{" "}
              </div>
              <span className="text-white text-2xl font-bold tracking-wider">
                RESCUDO
              </span>
                            <span className="text-white text-2xl">
                FORTALIX
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                Inicio
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                Servicios
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg cursor-pointer"
              >
                Contacto
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Servicios
            </a>
            <a
              href="#contact"
              className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
