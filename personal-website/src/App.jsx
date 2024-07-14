import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

const App = () => (
  <main id="home" className="w-full">
    <Nav></Nav>
    <section className="px-20 py-16 mt-7">
      <Hero />
    </section>
    <section id="skills" className="px-20 py-16">
      <Skills />
    </section>
    <section id="experience" className="bg-black px-20 py-16">
      <Experience />
    </section>
    <section id="about" className="px-20 py-16">
      <About />
    </section>
    <section id="project" className="bg-black px-20 py-16">
      <Project />
    </section>
    <section id="contact" className="px-20 py-16">
      <Contact />
    </section>
  </main>
);

export default App;
