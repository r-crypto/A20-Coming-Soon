import React from "react";
import { Navbar } from "react-bootstrap";
import navLogo from "../images/A20-orig.png";

function MainNav() {
  return (
    <Navbar bg="transparent" variant="transparent" fixed="top">
      <Navbar.Brand href="#">
        <img src={navLogo} alt="logo" className="logo" />
      </Navbar.Brand>
    </Navbar>
  );
}

export default MainNav;
