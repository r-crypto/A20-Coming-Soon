import React from "react";
import { Container } from "react-bootstrap";
import aLogo from "../images/A20-white.png";
import CountdownTimer from "./CountdownTimer";
import MainNav from "./MainNav";
function App() {
  return (
    <div>
      <MainNav />
      <Container fluid>
        <div className="center">
          <img src={aLogo} alt="Logo" />
          <h1>Coming Soon</h1>
          <CountdownTimer />
        </div>
      </Container>
    </div>
  );
}

export default App;
