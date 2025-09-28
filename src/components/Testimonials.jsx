import React from 'react'

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 px-6 bg-fuchsia-800 text-white text-center">
            <h2 className="text-3xl font-bold mb-10">Lo que dicen nuestros clientes</h2>
            <div className="max-w-3xl mx-auto space-y-8">
                <blockquote className="bg-neutral-800 p-6 rounded-lg shadow-md">
                <p className="italic text-neutral-300">“Quedó mejor de lo que imaginábamos. ¡Gracias Amsterdam Studio!”</p>
                <footer className="mt-4 text-accent font-semibold">— Barbería Barbas</footer>
                </blockquote>
                <blockquote className="bg-neutral-800 p-6 rounded-lg shadow-md">
                <p className="italic text-neutral-300">“El diseño fue rápido, limpio y justo lo que necesitábamos.”</p>
                <footer className="mt-4 text-accent font-semibold">— Clinica Ecosanaty</footer>
                </blockquote>
            </div>
        </section>
    )
}

export default Testimonials
