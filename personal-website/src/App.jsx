import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";

const App = () => (
  <main id="home" className="w-full">
    <Nav></Nav>
    <section className="px-20 py-16">
      <Hero/>
    </section>
    <section id="skills" className="px-20 py-16">
      <Skills/>
    </section>
    <section className="bg-black px-20 py-16">
      <Experience/>
    </section>
</main>
);

export default App;