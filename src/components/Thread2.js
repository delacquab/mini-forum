import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import { Link, Redirect } from "react-router-dom";
// import { Container } from './styles';
import { getSlug } from "../services/api";
import Answer from "../components/Answer";
import './folhaestilo.css'

export default function Thread2(props) {

    const thread_slug = props.match.params.thread_slug

    const [thread, setThread] = useState([]);
    const [respostas, setRespostas] = useState([]);
    const [redireciona, setRedireciona] = useState(false)

    useEffect(() => {
        getSlug(thread_slug)
            .then(json => setThread(json.data))
            .catch(e => setRedireciona(true));
    }, []);

    const arrayobj = []
    for (const key in thread.replies) {
        arrayobj.push(thread.replies[key])
    }

    return (
        <div className="estilodiv">
            {redireciona && <Redirect to="/404" />}
            <Link data-test="voltar" to={"/"}>Voltar</Link>
            <h1>{thread.title}</h1>
            <p>{thread.body}</p>
            <p>{thread.total_replies}</p>
            <h2>Respostas</h2>
            {arrayobj.map(r => {
                return <Answer answer={r}></Answer>
            })}
        </div >
    );
}
