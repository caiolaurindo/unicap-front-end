"use client";

import { useState } from "react";

export default function GeradorAleatorio() {
    const [valor, novoValor] = useState("--")
    const max = 100;
    const min = 1
    const handleClick = () => {
        novoValor(Math.floor(Math.random() * (max - min)) + min)
    }

    return (
        <div>
            <h1 className="title">Número gerado: <span className="number">{valor}</span></h1>
            <button className="btn" type="button" onClick={handleClick}>Clique Aqui</button>
        </div>
    )
}