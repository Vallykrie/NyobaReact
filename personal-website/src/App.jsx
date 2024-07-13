import Nav from "./components/Nav";
import Hero from "./sections/Hero";

const App = () => (
  <main className='relative'>
    <Nav></Nav>
    <section className="px-20 py-16">
      <Hero/>
    </section>
</main>
);

export default App;