import Header from "./function/Header.jsx";
import Footer from "./function/Footer.jsx";
import Card from "./Card/Card.jsx";
import Student from "./function/Student.jsx";
import ListData from "./function/ListData.jsx";
import Button from "./function/Button.jsx";
import ProfilePicture from "./function/ProfilePicture.jsx";
import Counter from "./Counter/Counter.jsx";
import MyComponent from "./function/MyComponent.jsx";
import ColorPicker from "./ColorPicker/ColorPicker.jsx";

function App() {
  return (
    <div className="main-class">
      <Header />
      <Card
        title="thanathanan"
        paragraph="Hello there :D I am nathan nice to meet you "
        img="https://i.pinimg.com/originals/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg"
      />
      <Card
        title="aya"
        paragraph="uyauya uya uya uayaya poo"
        img="https://i.pinimg.com/originals/44/9f/60/449f603a98344a815256f292d6c8731a.jpg"
      ></Card>
      <Counter></Counter>
      <Button />
      <Student name="Nathan" age={18} gender={true}></Student>
      <Student name="Naya" age={19} gender={false}></Student>
      <Student></Student>
      <br />
      <ColorPicker></ColorPicker>
      <br />
      <MyComponent></MyComponent>
      <br />
      <ListData />
      <ProfilePicture></ProfilePicture>
      <Footer />
    </div>
  );
}

export default App;
