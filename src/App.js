import React from "react";
import axios from "axios";
import "./App.css";
import DisplaySimpsons from "./components/DisplaySimpsons";

const simpsonCharacter = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"
};

function App() {
  const [character, setCharacter] = React.useState(simpsonCharacter);
  const getCharacter = () => {
      axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setCharacter(data[0]);
      });
  };
  return (
    <div className="simpson">
      <DisplaySimpsons className="characters" simpson={character} />
      <button id="buttonQuote" type="button" onClick={getCharacter}>
        Get Quote
      </button>
    </div>
  );
}

export default App;
