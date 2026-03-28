"use client";

import { useState } from "react";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 lg:px-24 flex justify-between items-center backdrop-blur-md bg-white/50 font-sans">
            {/* Logo - Regresa al inicio */}
            <a href="#" className="flex flex-col leading-none cursor-pointer">
                <span className="font-black text-xl tracking-tighter uppercase text-black">Amsterdam</span>
                <span className="font-light text-[10px] tracking-[0.4em] uppercase ml-1 text-black/60">Studio</span>
            </a>

            {/* Menú Desktop */}
            <ul className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-black">
                <li>
                    <a href="#work" className="hover:line-through transition-all">Work</a>
                </li>
                <li>
                    <a href="#services" className="hover:line-through transition-all">Services</a>
                </li>
                <li>
                    {/* STUDIO  */}
                    <a href="#studio" className="hover:line-through transition-all">Studio</a>
                </li>
                <li>
                    {/* CONTACT */}
                    <a 
                        href="#footer" 
                        className="bg-black text-white px-5 py-2.5 rounded-full hover:scale-105 transition-transform cursor-pointer leading-none flex items-center justify-center"
                    >
                        Contact
                    </a>
                </li>
            </ul>

            {/* Botón Móvil */}
            <button className="md:hidden text-black text-2xl" onClick={() => setOpen(!open)}>
                {open ? "✕" : "☰"}
            </button>

            {/* Menú Móvil Desplegable */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-white p-6 flex flex-col gap-6 shadow-xl md:hidden text-black uppercase text-[10px] font-bold tracking-widest border-t border-gray-100">
                    <a href="#work" onClick={() => setOpen(false)}>Work</a>
                    <a href="#services" onClick={() => setOpen(false)}>Services</a>
                    <a href="#studio" onClick={() => setOpen(false)}>Studio</a>
                    <a href="#footer" onClick={() => setOpen(false)} className="text-[#8F00FF] font-black underline">Contact Us</a>
                </div>
            )}
        </nav>
    );
};