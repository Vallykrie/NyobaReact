import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-shape">
              <div className="logo-part"></div>
              <div className="logo-part-diagonal"></div>
            </div>
          </div>
        </div>
        <div className="title">
          <Link to="/">Personal</Link>
        </div>
      </div>
      <div className="header-right">
        <Link to="/about-me" className="header-link">
          About Me
        </Link>
        <Link to="/skills" className="header-link">
          Skills
        </Link>
        <Link to="/projects" className="header-link">
          Projects
        </Link>
        <Link to="/contact" className="header-link">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
