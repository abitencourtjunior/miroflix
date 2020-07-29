import React from "react";
import { FooterBase, Footer404 } from "./styles";

export const Footer = () => (
  <FooterBase>
    <a href="https://www.alura.com.br/">
      <img
        src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
        alt="Logo Alura"
      />
    </a>
    <p>
      Orgulhosamente criado durante a{" "}
      <a href="https://www.alura.com.br/">Imersão React da Alura</a>
    </p>
  </FooterBase>
);

export const FooterNotFound = () => (
  <Footer404>
    <a href="https://www.alura.com.br/">
      <img
        src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
        alt="Logo Alura"
      />
    </a>
    <p>
      Orgulhosamente criado durante a{" "}
      <a href="https://www.alura.com.br/">Imersão React da Alura</a>
    </p>
  </Footer404>
);
