import LoadingScreen from "@/src/components/ui/LoadingScreen";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Services from "@/src/components/sections/Services";
import Qualification from "@/src/components/sections/Qualification";
import Projects from "@/src/components/sections/Projects";
import Skills from "@/src/components/sections/Skills";
import Contact from "@/src/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Qualification />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
