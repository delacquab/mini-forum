import React from 'react';
import './folhaestilo.css'

export default function Answer({ answer }) {
    return (
        <div className="estilodiv" data-test="resposta">
            <h3>{answer.body}</h3>
        </div>
    );
}
