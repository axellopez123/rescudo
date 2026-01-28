import { GiPoliceOfficerHead } from "react-icons/gi";


export default function Services() {
    const services = [
        {
            title: "Vigilancia y Protección Integral",
            description: "Servicio de seguridad preventiva y reactiva para la protección de personas, bienes e instalaciones, mediante personal altamente capacitado, protocolos operativos certificados y supervisión constante, garantizando entornos seguros en los sectores público y privado.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Custodia y Traslado Seguro de Valores",
            description: "Protección especializada para el traslado de valores y bienes de alto riesgo, utilizando unidades, equipo y procedimientos certificados, asegurando puntualidad, confidencialidad y cumplimiento normativo en cada operación.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Capacitación y Soluciones en Seguridad",
            description: "Programas de capacitación profesional en materia de seguridad, así como la comercialización, renta y mantenimiento de equipo especializado, diseñados para fortalecer la prevención, eficiencia operativa y respuesta ante riesgos específicos.",
            icon: (
                <GiPoliceOfficerHead className="text-3xl" />

            )
        }
    ]

    return (
        <section id="services" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Nos adaptamosde manera precisa a las necesidades específicas de cada cliente. Nuestra empresa se distingue por un enfoque preventivo, profesional y altamente confiable, orientado a la protección efectiva de personas, bienes e instalaciones.                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
