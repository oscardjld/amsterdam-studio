"use client";
import { motion } from "framer-motion";

export const Studio = () => {
    return (
        <section id="studio" className="px-6 py-32 md:px-12 lg:px-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Lado Izquierdo: Texto Impactante */}
            <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
            <h2 className="text-sm uppercase tracking-[0.5em] text-neutral-500 mb-8 font-bold">
                The Studio
            </h2>
            <p className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-tighter mb-10">
                We are a <span className="italic font-black text-[#8F00FF]">boutique print house</span> based in Maracaibo, 
                blending technical precision with bold design.
            </p>
            <div className="flex flex-col gap-4 text-neutral-400 text-sm md:text-base max-w-md">
                <p>
                En Amsterdam Studio no solo imprimimos; materializamos ideas. Desde rotulados que dominan las calles hasta acabados de lujo para marcas que no temen destacar.
                </p>
                <p className="border-l border-[#8F00FF] pl-4 italic">
                "Si puedes imaginarlo, nosotros podemos darle textura, color y presencia."
                </p>
            </div>
            </motion.div>

            {/* Lado Derecho: Visual / Branding */}
            <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square flex items-center justify-center border border-white/10 rounded-sm bg-neutral-900/50"
            >
            {/* Un círculo sutil que brilla con el color morado de la marca */}
            <div className="absolute w-64 h-64 bg-[#8F00FF]/20 blur-[120px] rounded-full" />
            
            <div className="z-10 text-center">
                <span className="text-[12vw] lg:text-[8vw] font-black tracking-tighter leading-none block">
                EST.
                </span>
                <span className="text-[12vw] lg:text-[8vw] font-black tracking-tighter leading-none block text-[#8F00FF]">
                2014
                </span>
            </div>
            
            {/* Elementos flotantes decorativos */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full animate-ping" />
            <div className="absolute bottom-10 left-10 w-px h-20 bg-linear-to-t from-[#8F00FF] to-transparent" />
            </motion.div>

        </div>
        </section>
    );
};