// src/pages/Ressources.jsx
import "../styles/global.css";

function Ressources() {
  return (
    <section className="contact-resources">
      <h2>Contact / Ressources</h2>

      <div className="contact-info">
        <h3>Coordonnées pour contacter l&apos;organisation :</h3>
        <p>Email : contact@hopeconnect.org</p>
        <p>Téléphone : +1 (123) 456-7890</p>
        <p>Adresse : 123 Rue de l&apos;Espoir, Ville, Pays</p>
      </div>

      <div className="contact-form">
        <h3>Formulaire de contact :</h3>
        <form action="process-contact-form.php" method="post">
          {/* Ajoutez ici les champs du formulaire */}
          <button type="submit">Envoyer</button>
        </form>
      </div>

      <div className="useful-resources">
        <h3>
          Liens vers des ressources utiles et informations sur les droits des
          sans-abris :
        </h3>
        <ul>
          <li>
            <a href="#">Association Aide aux Sans-Abris</a>
          </li>
          <li>
            <a href="#">Droits des sans-abris - Guide pratique</a>
          </li>
          {/* Ajoutez d&apos;autres liens si nécessaire */}
        </ul>
      </div>
    </section>
  );
}

export default Ressources;
