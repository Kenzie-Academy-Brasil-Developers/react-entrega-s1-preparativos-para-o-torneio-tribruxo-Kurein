import "./App.css";
import { useEffect, useState } from "react";
import TourneyParticipants from "./components/TourneyParticipants";

function App() {
  const [wizards, setWizards] = useState([]);
  const [wellcomePage, setWellcomePage] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setWizards(response));
  }, []);

  return (
    <div className="App">
      {wellcomePage ? (
        <div className="tourneyDiv">
          <h1 className="tourneyName">Bem Vindo ao Torneio Tribruxo!</h1>
          <button
            onClick={() => setWellcomePage(!wellcomePage)}
            className="tourneyButton"
          >
            Selecionar Participantes
          </button>
        </div>
      ) : (
        <div>
          <TourneyParticipants list={wizards} />
          <button
            onClick={() => setWellcomePage(!wellcomePage)}
            className="tourneyButton"
          >
            Tentar novamente
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
