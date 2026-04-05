"use client";

import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa";

export default function Dado({valor}) {

    function dadoImg(valor) {
        if (valor === 1) {
            return <FaDiceOne className="dado" />;
        } else if (valor === 2) {
            return <FaDiceTwo className="dado" />;
        } else if (valor === 3) {
            return <FaDiceThree className="dado" />;
        } else if (valor === 4) {
            return <FaDiceFour className="dado" />;
        } else if (valor === 5) {
            return <FaDiceFive className="dado" />;
        } else if (valor === 6) {
            return <FaDiceSix className="dado" />;
        }
    }
    
    return (
        <div>
            <h1>
                Valor Dos Dados: {valor}
                {dadoImg(valor)}
            </h1>
        </div>
    );
}