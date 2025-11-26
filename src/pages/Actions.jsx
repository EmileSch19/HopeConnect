// src/pages/Actions.jsx
import "../styles/action.css";
import solidarite from "../assets/Images/solidarité.jpg";
import benevolat from "../assets/Images/benevolat.jpg";
import donAliment from "../assets/Images/don_aliment.jpg";

function Actions() {
  return (
    <>
      <h1>Comment Aider / Participez</h1>

      <section className="content">
        <div className="volunteer">
          <h2>Devenez Bénévole</h2>
          <img src={solidarite} alt="Bénévoles solidaires" />
          <p>
            Contribuez directement en offrant votre temps et vos compétences. En
            tant que bénévole chez HopeConnect, vous pouvez faire une différence
            significative dans la vie des personnes sans-abri.
          </p>
          <a href="#" className="cta">
            En savoir plus sur le bénévolat
          </a>
        </div>

        <div className="donate">
          <h2>Faites un Don</h2>
          <div className="don">
            <img src={benevolat} alt="Bénévolat" />
            <img src={donAliment} alt="Don alimentaire" />
          </div>
          <p>
            Chaque contribution compte. Que ce soit financièrement, par des
            vêtements, de la nourriture, ou d&apos;autres articles essentiels,
            votre don aide à soutenir nos programmes et services.
          </p>
          <a href="#" className="cta">
            Faire un don maintenant
          </a>
        </div>
      </section>

      <section className="call-to-action">
        <p>
          Chaque geste compte et fait avancer notre mission. Rejoignez-nous pour
          créer un impact positif et construire un avenir meilleur pour ceux qui
          en ont le plus besoin.
        </p>
        <a href="#" className="cta">
          Contribuez dès maintenant
        </a>
      </section>
    </>
  );
}

export default Actions;
