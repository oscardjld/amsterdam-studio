"use client";
import { motion, Variants } from "framer-motion";

export const Services = () => {

    const servicesList = [
        "Avisos Luminosos",
        "Calcomanías",
        "Señalizaciones",
        "Pendones",
        "Banner's",
        "Tarjetas de Presentación",
        "Franelas Personalizadas",
        "Letras Corpóreas",
        "Neon",
        "Stickers",
        "Rotulación en General",
        "Microperforados",
        "Instalación de Viniles Decorativos",
    ];

    
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Tiempo entre cada elemento (0.1s)
        },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1,
        transition: { 
            duration: 0.5, 
            ease: [0.22, 1, 0.36, 1] // Curva Bézier fluida
        },
        },
    };

    return (
        <section id="services" className="px-6 py-32 md:px-12 lg:px-24 bg-white text-black min-h-[70vh]">
        <div className="max-w-7xl mx-auto">
            
            {/* Título de la sección */}
            <div className="text-center mb-24">
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase inline-block relative"
            >
                <span className="text-black">Our</span> <span className="text-neutral-300">Services.</span>
                
                <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-4 left-0 h-px bg-neutral-100 w-full"
                />
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 mt-6"
            >
                Lo que hacemos mejor en Amsterdam Studio
            </motion.p>
            </div>

            {/* cascada animada */}
            <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-7 max-w-5xl mx-auto"
            >
            {servicesList.map((service, index) => (
                <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.01 }}
                className="flex items-center gap-5 group cursor-pointer border-b border-gray-50 pb-7 last:border-0"
                >
                {/* Checkmark morado (Amsterdam Style) */}
                <motion.span 
                    className="w-4 h-4 rounded-full border border-neutral-100 group-hover:bg-[#8F00FF] group-hover:border-[#8F00FF] transition-all"
                    whileHover={{ scale: 1.15 }}
                />
                
                {/* Texto del servicio  */}
                <span className="text-pretty group-hover:text-[#8F00FF] transition-colors uppercase text-[10px] tracking-[0.3em] font-bold leading-none">
                    {service}
                </span>
                </motion.li>
            ))}
            </motion.ul>

        </div>
        </section>
    );
};