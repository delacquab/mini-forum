import React from "react";

const estilo = {
  divEstilo: {
    border: "1px solid black",
    margin: "10px"
  }
};

export default function Thread({ thread }) {
  return (
    <div style={estilo.divEstilo}>
      <h1>{thread.title}</h1>
      <h3>{thread.total_replies}</h3>
    </div>
  );
}
