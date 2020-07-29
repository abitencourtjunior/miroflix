import React from "react";
import PageDefault from "../../Default";
import { Link } from "react-router-dom";

const FormVideo = () => (
  <PageDefault>
    <h1>Página de Cadastro</h1>
    <Link to="/create/category">Cadastrar Categoria</Link>
  </PageDefault>
);

export default FormVideo;
