import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import { Link, Redirect } from "react-router-dom";
// import { Container } from './styles';
import { getSlug } from "../services/api";
import Answer from "../components/Answer";

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

    useEffect(() => {
        getSlug(thread_slug)
            .then(json => setRespostas(json.data.replies))
            .catch(e => setRedireciona(true));
    }, []);

    return (
        <div>
            {redireciona && <Redirect to="/404" />}
            {console.log(thread)}
            <Link data-test="voltar" to={"/"}>Voltar</Link>
            <h1>{thread.title}</h1>
            <p>{thread.body}</p>
            <p>{thread.total_replies}</p>
            <h2>Respostas</h2>
            {respostas.map(r => {
                return <Answer answer={r}></Answer>
            })}
        </div >
    );
}
