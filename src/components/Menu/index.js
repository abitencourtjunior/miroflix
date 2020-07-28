import React from "react";
import Logo from "../../assets/Logo.png";
import "./Menu.css";
import Button from "../Button";

const Menu = () => (
  <nav className="Menu">
    <a href="/">
      <img className="Logo" src={Logo} alt="Miroflix Logo" />
    </a>
    <Button as="a" className="ButtonLink" href="/">
      Novo Vídeo
    </Button>
  </nav>
);

export default Menu;
