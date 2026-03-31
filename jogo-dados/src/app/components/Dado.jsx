"use client";

import { useState } from "react";

export default function Dado() {
    const [valor, setValor] = useState("--");

    const max = 6;
    const min = 0;

    const handleClick = () => {
        setValor(Math.floor(Math.random() * (max - min + 1)) + min);
    };

    function dadoImg(valor) {
        if (valor === "0") return null;
        if (valor === 1) {
            return <img src="/vercel.svg" alt="dado" width={50} />;
        } else if (valor === 2) {
            return <img src="/next.svg" alt="dado" width={50} />;
        } else if (valor === 3) {
            return <img src="/globe.svg" alt="dado" width={50} />;

        } else if (valor === 4) {
            return <img src="/window.svg" alt="dado" width={50} />;

        } else if (valor === 5) {
            return <img src="/vercel.svg" alt="dado" width={50} />;

        } else if (valor === 3) {
            return <img src="/vercel.svg" alt="dado" width={50} />;

        }
    }

    return (
        <div>
            <h1>Girar dado</h1>
            <button onClick={handleClick}>Clique Aqui</button>
            <h1>
                Número gerado: {valor}
                {dadoImg(valor)}
            </h1>
        </div>
    );
}