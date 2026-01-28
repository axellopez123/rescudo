import logo from "../assets/logo2.png";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg shadow-blue-500/50">
                                <img src={logo} alt="" srcset="" />
                            </div>
                            <span className="text-white text-2xl font-bold tracking-wider">
                                RESCUDO
                            </span>
                            <span className="text-white text-2xl">
                                FORTALIX
                            </span>
                        </div>
                        <p className="max-w-xs">
                            Líderes en seguridad privada integral. Protegemos su patrimonio con tecnología y profesionalismo.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Enlaces</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-blue-400 transition-colors">Inicio</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Servicios</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Aviso de Privacidad</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Términos de Uso</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} RESCUDO FORTALIX, S.A. DE C.V. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
