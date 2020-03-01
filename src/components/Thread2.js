import React from 'react';
import { useLocation } from "react-router";
// import { Container } from './styles';

export default function Thread2(props) {
 const thread_slug = props.match.params.thread_slug
    return (
        <div>
           <p>{thread_slug}</p>
        </div >
    );
}
