import { useState } from 'react';


function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="hamburger-container">
        <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>
        {open && (
            <div className="menu-dropdown">
            <a href="#about">Sobre nosotros</a>
            <a href="#gallery">Trabajos realizados</a>
            <a href="#contact">Contáctanos</a>
            </div>
        )}
        </div>
    );
}

export default HamburgerMenu;