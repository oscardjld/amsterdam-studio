
function Contact() {
    return (
        <section
        id="contact"
        className="bg-black from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20 px-6 text-center"
        >
        <h2 className="text-4xl font-bold text-accent mb-4">Contáctanos</h2>
        <p className="text-neutral-300 text-lg mb-10 max-w-xl mx-auto">
            ¿Tienes una idea visual en mente? Escríbenos y te ayudamos a hacerla realidad.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-neutral-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">📞 Teléfono</h3>
            <p className="text-accent text-lg">+58 424-6632831</p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">📧 Gmail</h3>
            <p className="text-accent text-lg">amsterdampublicidad</p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">📍 Dirección</h3>
            <p className="text-accent text-lg">Maracaibo, Estado Zulia</p>
            </div>
        </div>

        </section>
    );
}

export default Contact;