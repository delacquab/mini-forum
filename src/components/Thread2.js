import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
// import { Container } from './styles';
import { getSlug } from "../services/api";

export default function Thread2(props) {

    const thread_slug = props.match.params.thread_slug

    const [thread, setThread] = useState([]);

    useEffect(() => {
        getSlug(thread_slug)
            .then(json => setThread(json.data))
            .catch(e => console.log("erro"));
    }, []);

    return (
        <div>
            <Link to={"/"}>Voltar</Link>
            <p>{thread.title}</p>
            <p>{thread.id}</p>
        </div >
    );
}
