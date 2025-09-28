
import trabajo1 from '../assets/trabajos/trabajo1.jpg';
import trabajo2 from '../assets/trabajos/trabajo2.jpg';
import trabajo3 from '../assets/trabajos/trabajo3.jpg';
import trabajo4 from '../assets/trabajos/trabajo4.jpg';
import trabajo5 from '../assets/trabajos/trabajo5.jpg';
import trabajo6 from '../assets/trabajos/trabajo6.jpg';
import trabajo7 from '../assets/trabajos/trabajo7.jpg';
import trabajo8 from '../assets/trabajos/trabajo8.jpg';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    { src: trabajo1, alt: "Aviso Luminoso" },
    { src: trabajo2, alt: "Letras Corpóreas" },
    { src: trabajo3, alt: "Rotulado en Vidrio" },
    { src: trabajo4, alt: "Avisos Neon" },
    { src: trabajo5, alt: "Letras Corpóreas" },
    { src: trabajo6, alt: "Microperforados" },
    { src: trabajo7, alt: "Impresion en Banner" },
    { src: trabajo8, alt: "Rotulado" },
];

function GallerySlider() {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="galleryslider" className="py-20 px-6 bg-neutral-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Nuestros Trabajos</h2>

        <div className="relative w-full max-w-xl mx-auto">
            <AnimatePresence mode="wait">
            <motion.img
                key={images[index].src}
                src={images[index].src}
                alt={images[index].alt}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg shadow-lg w-full h-auto"
            />
            </AnimatePresence>

            <p className="mt-4 text-lg">{images[index].alt}</p>

            <div className="flex justify-between mt-6">
            <button
                onClick={prevImage}
                className="bg-fuchsia-900 px-4 py-2 rounded hover:bg-fuchsia-500/80 transition"
            >
                ← Anterior
            </button>
            <button
                onClick={nextImage}
                className="bg-fuchsia-900 px-4 py-2 rounded hover:bg-fuchsia-500/80 transition"
            >
                Siguiente →
            </button>
            </div>
        </div>
        </section>
    );
}

export default GallerySlider;