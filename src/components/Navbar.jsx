import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-black bg-opacity-50 text-white sticky top-0 z-50 shadow-md">
            <div className="flex items-center justify-between px-6 py-4">
                <a href="#home">
                <img src={logo} alt="Amsterdam Studio" className="h-6 md:h-8 object-contain" />
                </a>
                <nav className="hidden md:flex gap-6 font-medium">
                <a href="#about" className="hover:text-accent transition">Sobre nosotros</a>
                <a href="#galleryslider" className="hover:text-accent transition">Trabajos realizados</a>
                <a href="#contact" className="hover:text-accent transition">Contáctanos</a>
                </nav>
                <button className="md:hidden text-accent text-2xl" onClick={() => setOpen(!open)}>
                ☰
                </button>
            </div>
            {open && (
                <div className="md:hidden flex flex-col items-center gap-4 pb-4">
                <a href="#about" className="hover:text-accent">Sobre nosotros</a>
                <a href="#galleryslider" className="hover:text-accent">Trabajos realizados</a>
                <a href="#contact" className="hover:text-accent">Contáctanos</a>
                </div>
            )}
        </header>
    );
}

export default Navbar;
