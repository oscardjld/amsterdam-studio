import bgamsterdam from '../assets/bgamsterdam.png'


function About() {
    return (
        <section
        id="about"
        className="relative py-20 px-6 text-white text-center bg-black bg-opacity-70"
        >
        {/* Imagen de fondo */}
        <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${bgamsterdam})` }}
        ></div>


        {/* Contenido */}
        <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-accent mb-6">Sobre nosotros</h2>
            <p className="text-lg text-neutral-200 leading-relaxed">
            En Amsterdam Studio transformamos ideas en impacto visual. Somos un equipo creativo
            especializado en diseño gráfico aplicado: avisos, stickers, estampados, rotulados y más.
            Cada proyecto es una oportunidad para crear algo único, funcional y memorable.
            </p>
            <p className="mt-6 text-neutral-400 italic">
            “No solo diseñamos, construimos experiencias visuales que hablan por ti.”
            </p>
        </div>
        </section>
    );
}

export default About;