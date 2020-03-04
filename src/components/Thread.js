import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './folhaestilo.css'


export default function Thread(props) {
  const id = props.thread.slug
  return (
    <div>

      <div data-test="thread" className="estilodiv">
        <h1>{props.thread.title}</h1>
        <h3>{props.thread.total_replies}</h3>
        <Link data-test="link" to={"/thread/" + props.thread.slug}>Continuar lendo</Link>

      </div>

    </div>
  );
}
