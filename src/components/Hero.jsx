import heroImage from '../assets/hero.png'

export default function Hero() {
    return (
        <div id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Security Surveillance"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-6 animate-fade-in-up">
                        <span className="text-blue-400 font-medium tracking-wide text-sm uppercase">Seguridad Privada Profesional</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-allow">
                        Protección Integral <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Para Tu Tranquilidad
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Soluciones de seguridad avanzadas con tecnología de punta y personal altamente capacitado. Protegemos lo que más importa.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-600/30 transform transition hover:-translate-y-1 text-center">
                            Solicitar Cotización
                        </a>
                        <a href="#services" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold rounded-lg transition-all text-center">
                            Nuestros Servicios
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
