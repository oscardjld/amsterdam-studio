"use client";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer id="footer" className="bg-white text-black px-6 py-20 md:px-12 lg:px-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            {/* Big Text */}
            <div className="flex flex-col gap-8">
                <h2 className="text-[10vw] md:text-[6vw] font-black leading-[0.85] tracking-tighter uppercase">
                Let's make <br /> it <span className="text-neutral-500">Real.</span>
                </h2>
                <button className="w-fit bg-black text-white px-10 py-5 rounded-full font-bold uppercase text-xs hover:scale-105 transition-transform">
                Start a Project
                </button>
            </div>

            {/* Info */}
            <div className="grid grid-cols-2 gap-8 md:pt-10">
                <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Location</span>
                <p className="text-sm font-medium uppercase">Maracaibo, Zulia <br /> Venezuela</p>
                </div>
                
                <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Social</span>
                <div className="flex flex-col text-sm font-medium uppercase">
                    <a href="https://www.instagram.com/amsterdamcreative" target="_blank" rel="noopener noreferrer" className="hover:line-through w-fit">Instagram</a>
                    <a href="https://www.tiktok.com/@amsterdamstudio" target="_blank" rel="noopener noreferrer" className="hover:line-through w-fit">TikTok</a>
                </div>
                </div>

                <div className="flex flex-col gap-4 col-span-2 mt-8">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Contact</span>
                <a 
                    href="mailto:hola@amsterdam.studio" 
                    className="text-2xl md:text-4xl font-black tracking-tighter italic hover:text-neutral-500 transition-colors"
                >
                    amsterdamstudio@gmail.com
                </a>
                </div>
            </div>
            </div>

            {/* Barra inferior */}
            <div className="mt-32 pt-8 border-t border-gray-100 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <p>© 2014 Amsterdam Studio</p>
            <p>Built for the bold</p>
            </div>
        </div>
        </footer>
    );
};