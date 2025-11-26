// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Apropos from "./pages/Apropos.jsx";
import Actions from "./pages/Actions.jsx";
import Ressources from "./pages/Ressources.jsx";

function App() {
  return (
    <Router>
      <Header />
      {/* On pourrait mettre un <main> ici */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/ressources" element={<Ressources />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
