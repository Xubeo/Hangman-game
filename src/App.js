import React from "react"
//import { useState } from "react";
import './App.css';
//import { ReactToastify, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import CallApi from "./component/CallApi";
import { ThemeContext } from "./context/theme";
import { useContext } from "react";

function App(props) {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div className="app" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div>
        <h1>Jeu du pendu</h1>
        <h2 className="Hangman">Trouvez le bon mot, vous avez 10 essais et le mot possède <CallApi></CallApi> lettres</h2><br></br>
        <button onClick={toggleTheme}>Changer de theme</button>
        </div>
      </div>
  );
};

export default App;