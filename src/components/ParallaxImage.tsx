"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxImage = ({ src }: { src: string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Esto mueve la imagen de -10% a 10% de su posición original
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className="w-full h-full overflow-hidden relative">
        <motion.div 
            style={{ y, height: "120%", top: "-10%" }} // La imagen es más alta que el contenedor para que tenga espacio para moverse
            className="absolute inset-0"
        >
            <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
            style={{ backgroundImage: `url(${src})` }}
            />
        </motion.div>
        </div>
    );
};