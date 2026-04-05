"use client";

import { useState } from "react";
import Dado from "./Dado";
import "./jogo.css";

export default function JogoDados() {
  const [p1d1, setP1d1] = useState(1);
  const [p1d2, setP1d2] = useState(1);
  const [p2d1, setP2d1] = useState(1);
  const [p2d2, setP2d2] = useState(1);

  const [rodada, setRodada] = useState(1);
  const [turno, setTurno] = useState(1);
  const [resultado, setResultado] = useState("");

  const [pontos1, setPontos1] = useState(0);
  const [pontos2, setPontos2] = useState(0);

  const jogoFinalizado = rodada > 5;

  const soma1 = p1d1 + p1d2;
  const soma2 = p2d1 + p2d2;

  const jogarP1 = () => {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    setP1d1(d1);
    setP1d2(d2);
    setTurno(2);
  };

  const jogarP2 = () => {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    setP2d1(d1);
    setP2d2(d2);

    const somaP1 = p1d1 + p1d2;
    const somaP2 = d1 + d2;

    if (somaP1 > somaP2) {
      setResultado("Player 1 venceu a rodada!");
      setPontos1((prev) => prev + 1);
    } else if (somaP2 > somaP1) {
      setResultado("Player 2 venceu a rodada!");
      setPontos2((prev) => prev + 1);
    } else {
      setResultado("Empate!");
    }

    setTurno(1);
    setRodada((prev) => prev + 1);
  };

  const resetar = () => {
    setRodada(1);
    setPontos1(0);
    setPontos2(0);
    setResultado("");
    setTurno(1);

    setP1d1(1);
    setP1d2(1);
    setP2d1(1);
    setP2d2(1);
  };

  return (
    <div className="mainGame">
      
      <h1>Rodada: {rodada <= 5 ? rodada : 5}</h1>


      <div className="playerContainer">

        <div className="playerOne">
          <h2>Player 1</h2>
          <h3>Soma: {soma1}</h3>

          <div>
            <Dado valor={p1d1} />
            <Dado valor={p1d2} />
          </div>

          <button onClick={jogarP1} disabled={turno !== 1 || jogoFinalizado}>
            Jogar
          </button>
        </div>

        <div className="playerTwo">
          <h2>Player 2</h2>
          <h3>Soma: {soma2}</h3>

          <div>
            <Dado valor={p2d1} />
            <Dado valor={p2d2} />
          </div>

          <button onClick={jogarP2} disabled={turno !== 2 || jogoFinalizado}>
            Jogar
          </button>
        </div>

      </div>

      <div className="resultado">
        <h2>{resultado}</h2>

        <div className="placar">
          <p>Jogador 1: {pontos1} pontos</p>
          <p>Jogador 2: {pontos2} pontos</p>
        </div>

        {jogoFinalizado && (
          <div className="final">
            <h2>
              {pontos1 > pontos2
                ? "Jogador 1 venceu o jogo!"
                : pontos2 > pontos1
                ? "Jogador 2 venceu o jogo!"
                : "Empate geral!"}
            </h2>

            <button onClick={resetar}>Jogar Novamente</button>
          </div>
        )}
      </div>

    </div>
  );
}