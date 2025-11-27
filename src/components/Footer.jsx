// src/components/Footer.jsx
import "../styles/global.css";
import logo from "../assets/Images/logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="HopeConnect Logo" />
          <p>&copy; 2024 HopeConnect. Tous droits réservés.</p>
        </div>
        <div className="footer-info">
          <p>Email : contact@hopeconnect.org</p>
          <p>Téléphone : +1 (123) 456-7890</p>
          <p>Adresse : 123 Rue de l&apos;Espoir, Ville, Pays</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
