"use client";

import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from "react-icons/fa";

export default function Dado({ valor }) {
  function dadoImg(valor) {
    if (valor === 1) return <FaDiceOne className="dado" />;
    if (valor === 2) return <FaDiceTwo className="dado" />;
    if (valor === 3) return <FaDiceThree className="dado" />;
    if (valor === 4) return <FaDiceFour className="dado" />;
    if (valor === 5) return <FaDiceFive className="dado" />;
    if (valor === 6) return <FaDiceSix className="dado" />;
    return <span className="dado">🎲</span>;
  }

  return (
    <div className="dado-container">
      {dadoImg(valor)}
      <p>{valor}</p>
    </div>
  );
}