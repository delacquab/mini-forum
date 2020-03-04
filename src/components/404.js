import React from 'react';
import { Link } from "react-router-dom";


// import { Container } from './styles';

export default function QZQ() {
    return (
        <div>
            <Link data-test="voltar" to={"/"}>Volta para Home</Link>
            <h1>OPS...</h1>
            <h3>Página nao encontrada</h3>
        </div>
    );
}
