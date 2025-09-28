import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/GallerySlider";
import Contact from "./components/Contact";
import GallerySlider from "./components/GallerySlider";
import Testimonials from "./components/Testimonials";
import FastContact from "./components/FastContact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <GallerySlider />
      <Testimonials />
      <FastContact />
      <Contact />
    </>
  );
}

export default App;
