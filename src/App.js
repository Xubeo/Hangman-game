import React from "react"
import { useState } from "react";
import './App.css';
import Button from "./component/button";
import { ReactToastify, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import CallApi from "./component/CallApi";

function App(props) {
  return (
    <div>
      <CallApi></CallApi>
      <h1>Jeu du pendu</h1>
      <h2>Trouvez le bon mot, vous avez 10 essais</h2>
      <p>Mot</p>
    </div>
  );
};

export default App;