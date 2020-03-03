import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h2>Forum</h2>
        <Link to="/">Home</Link>
        <Link to="/sobre" style={{ marginLeft: 8 }}></Link>
        {/* <Link to="/thread">thread</Link>       */}
      </header>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
