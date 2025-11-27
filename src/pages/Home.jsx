// src/pages/Home.jsx
import "../styles/global.css";
import cover from "../assets/Images/Sans_habrits.jpg";

function Home() {
  return (
    <>
      <section className="present">
        <img src={cover} className="cover" alt="Personne sans abri" />
        <div className="present-content">
          <h1>Bienvenue chez HopeConnect</h1>
          <h2>Là où l&apos;espoir prend racine et la compassion change des vies.</h2>
          <p>
            Bienvenue sur HopeConnect, où l&apos;espoir prend racine et la
            compassion change des vies. Nous sommes une organisation dédiée à
            soutenir les personnes sans-abri et à bâtir un avenir meilleur.
            Ensemble, nous pouvons créer des opportunités, restaurer la dignité
            et construire des ponts vers le changement.
          </p>
        </div>
      </section>

      <section className="action">
        <h2>Agissez maintenant pour l&apos;espoir</h2>
        <p>
          Rejoignez la famille HopeConnect et soyez un catalyseur du changement.
          Que vous souhaitiez consacrer du temps en tant que bénévole, faire un
          don pour impacter directement des vies, ou simplement en apprendre
          davantage sur notre mission, chaque geste compte.
        </p>
        <a href="#" className="cta">
          Devenez bénévole
        </a>
        <a href="#" className="cta">
          Faites un don
        </a>
      </section>

      <section className="stats">
        <h2>Quelques statistiques clés sur le sans-abrisme</h2>
        <ul>
          <li>Plus de 1,5 million de personnes sans-abri aux États-Unis.</li>
          <li>40% de cette population est composée de jeunes de moins de 25 ans.</li>
          <li>
            Chaque nuit, des milliers de personnes dorment à la belle étoile,
            exposées aux éléments.
          </li>
        </ul>
        <p>
          Rejoignez-nous dans notre mission de changer ces statistiques et de
          redonner espoir à ceux qui en ont le plus besoin.
        </p>
      </section>

      <section>
        <p>
          Explorez notre site pour en savoir plus sur nos programmes et
          découvrez comment vous pouvez faire une différence concrète. Ensemble,
          construisons un avenir où l&apos;espoir et la connexion sont
          accessibles à tous.
        </p>
      </section>
    </>
  );
}

export default Home;
