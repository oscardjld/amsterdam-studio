import BlurText from "./BlurText";
import logo11 from "../assets/logo11.png";

function Hero() {
    const handleAnimationComplete = () => {
        console.log("Animación completada!");
    };

    return (
        <section
        id="home"
        className="bg-black bg-opacity-50 text-white py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-10"
        >
        {/* Imagen a la izquierda */}
        <div className="flex-shrink-0">
            <img src={logo11} alt="Logo 11" className="h-40 w-auto" />
        </div>

        {/* Textos a la derecha */}
        <div className="text-center md:text-left max-w-xl">
            <BlurText
            text="Amsterdam Studio"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-6xl font-bold mb-4 text-accent"
            />
            <p className="text-lg text-center md:text-xl">
            Diseñamos impacto visual.
            </p>
        </div>
        </section>
    );
}

export default Hero;