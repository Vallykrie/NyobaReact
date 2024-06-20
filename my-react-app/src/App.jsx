import Header from "./function/Header.jsx";
import Footer from "./function/Footer.jsx";
import Card from "./Card/Card.jsx";
import Student from "./function/Student.jsx";
import ListData from "./function/ListData.jsx";

function App() {
  return (
    <>
      <Header />
      <Card title="thanathanan" paragraph="Hello there :D I am nathan nice to meet you "/>
      <Student name="Nathan" age={18} gender={true}></Student>
      <Student name="Naya" age={19} gender={false}></Student>
      <Student></Student>
      <ListData /> 
      <Footer />
    </>
  );
}

export default App;
