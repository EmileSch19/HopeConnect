// src/components/Header.jsx
import { Link } from "react-router-dom";
import "../styles/global.css";
import logo from "../assets/Images/logo.png";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo HopeConnect" />
      </Link>
      <ul>
        <li>
          <Link to="/a-propos">A propos</Link>
        </li>
        <li>
          <Link to="/actions">Actions</Link>
        </li>
        <li>
          <Link to="/ressources">Ressources</Link>
        </li>
      </ul>
      <a href="#">se connecter</a>
    </header>
  );
}

export default Header;
