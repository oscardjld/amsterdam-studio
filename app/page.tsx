"use client";
import { motion } from "framer-motion";
import { ParallaxImage } from "../src/components/ParallaxImage"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* SECCIÓN HERO */}
      <section className="px-6 pt-32 pb-20 md:px-12 md:pt-44 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Título animado */}
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[14vw] md:text-[11vw] font-extrabold leading-[0.82] tracking-tighter uppercase mb-16 text-black italic"
          >
            WE PRINT <br />
            <span className="text-neutral-400">THE BOLD.</span> 
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row justify-between items-end gap-12"
          >
            <p className="text-xl md:text-2xl max-w-xl font-medium leading-tight text-gray-800">
              Transforming spaces and surfaces through high-end production. The Maracaibo-based studio where technical precision meets bold aesthetics.
            </p>
            <div className="flex flex-col gap-2 items-end">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Scroll to explore</span>
              <div className="w-px h-12 bg-black animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN GRILLA (BENTO CON PARALLAX) */}
      <section id="work" className="px-6 py-20 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[350px] md:auto-rows-[450px]">
          
          {/* Bloque 1 */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-8 bg-neutral-900 overflow-hidden group relative rounded-sm cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
            <div className="absolute bottom-8 left-8 z-20">
                <h3 className="text-4xl font-black italic tracking-tighter uppercase">Neon Art.</h3>
            </div>
            {/* imagen de neon */}
            <ParallaxImage src="/trabajo4.jpg" />
          </motion.div>

          {/* Bloque 2 */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-4 bg-neutral-800 overflow-hidden group relative rounded-sm cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none">Lighted <br/> Signs.</h3>
            </div>
            <ParallaxImage src="/trabajo1.jpg" />
          </motion.div>

          {/* tshirts y pop */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-4 bg-neutral-900 overflow-hidden group relative rounded-sm cursor-pointer"
          >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10" />
              <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none text-pretty">Branding <br/> & POP.</h3>
              </div>
              <ParallaxImage src="/trabajo10.jpg" />
          </motion.div>

          {/* Bloque 4 */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-8 bg-neutral-800 overflow-hidden group relative rounded-sm cursor-pointer"
          >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
              <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-4xl font-black italic tracking-tighter uppercase">vinyl printing.</h3>
              </div>
              <ParallaxImage src="/trabajo9.jpg" />
          </motion.div>

        </div>
      </section>
    </main>
  );
}
