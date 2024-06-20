import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card/Card.jsx";
import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Header />
      <Card title="thanathanan" paragraph="Hello there :D I am nathan nice to meet you "/>
      <Student name="Nathan" age={18} gender={true}></Student>
      <Student name="Naya" age={19} gender={false}></Student>
      <Student></Student>
      <Food />
      <Footer />
    </>
  );
}

export default App;
