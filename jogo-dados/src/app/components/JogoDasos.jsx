import Dado from "./Dado";
import { useState } from "react";
import "./jogo.css";

export default function JogoDados() {
  const [p1d1, setP1d1] = useState("--");
  const [p1d2, setP1d2] = useState("--");

  const [p2d1, setP2d1] = useState("--");
  const [p2d2, setP2d2] = useState("--");

  const girarDados = () => {
    setP1d1(Math.floor(Math.random() * 6) + 1);
    setP1d2(Math.floor(Math.random() * 6) + 1);
    setP2d1(Math.floor(Math.random() * 6) + 1);
    setP2d2(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="mainGame">
      
      <div className="playerOne">
        <h2>Player 1</h2>
        <div>
          <Dado valor={p1d1} />
          <Dado valor={p1d2} />
        </div>
      </div>

      <div className="playerTwo">
        <h2>Player 2</h2>
        <div>
          <Dado valor={p2d1} />
          <Dado valor={p2d2} />
        </div>
      </div>

      <button onClick={girarDados} className="btn-global">
        GIRAR DADOS
      </button>

    </div>
  );
}