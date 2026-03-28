import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../src/components/Navbar"; 
import { Services } from "../src/components/Services"; 
import { Studio } from "../src/components/Studio"; 
import { Footer } from "../src/components/Footer"; 

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '700', '900'] 
});

export const metadata: Metadata = {
  title: "Amsterdam Studio | Imprenta Boutique & Publicidad",
  description: "Especialistas en rotulados, material POP y estampado de alta calidad en Maracaibo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navbar */}
        <Navbar />
        
        {/* Contenido principal */}
        <main>
          {children}
        </main>
        
        {/* Listado de servicios con diseño limpio y centrado */}
        <Services />

        {/* Sección de Branding y manifiesto del estudio */}
        <Studio />
        
        {/* Footer  */}
        <Footer />
      </body>
    </html>
  );
}
