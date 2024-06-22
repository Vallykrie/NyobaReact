import DigitalClock from "../DigitalClock/DigitalClock";

function Header() {
  return (
    <header>
      <span>
        <DigitalClock />
        <h1 style={{margin: "0", padding: "0" }}>Nyoba React Website</h1>
      </span>
      <nav>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
