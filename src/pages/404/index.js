import React from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import { Main } from "../Default";
import Footer from "../../components/Footer";

const Content = styled(Main)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 200px;
  font-weight: bold;

  @media (max-width: 800px) {
    font-size: 40px;
  }
`;

const PageNotFound = () => {
  return (
    <>
      <Menu />
      <Content>404 Not Found</Content>
      <Footer />
    </>
  );
};

export default PageNotFound;
