import React, { useState } from "react";
import './App.css';
//import { ReactToastify, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import CallApi from "./component/CallApi";
import { ThemeContext } from "./context/theme";
import { useContext } from "react";
import Ranking from "./component/Ranking";
import WrongLetters from "./component/WrongLetters";


const wrongLetter = [];

function App(props) {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div className="app" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div>
        <h1>Jeu du pendu</h1>
        <h2 className="hangman">Trouvez le bon mot, vous avez 10 essais :</h2><br></br>
        <CallApi></CallApi>
        <WrongLetters wrongLetters={wrongLetter}></WrongLetters>
        <button className="theme_button" onClick={toggleTheme}>Changer de theme</button>
        <div>
          <Ranking></Ranking>
        </div>
        </div>
      </div>
  );
};

export default App;