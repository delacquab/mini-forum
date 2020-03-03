import React from 'react';

// import { Container } from './styles';
const estilo = {
    divEstilo: {
        border: "1px solid black",
        margin: "10px"
    }
};

export default function Answer({ answer }) {
    return (
        <div data-test="resposta" style={estilo.divEstilo}>
            <h3>{answer.body}</h3>
        </div>
    );
}
