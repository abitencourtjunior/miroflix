import React from "react";
import PageDefault from "../../Default";
import { Link } from "react-router-dom";

const FormCategory = () => (
  <PageDefault>
    <h1>Página de Categoria</h1>

    <form>
      <label>
        Nome da Categoria:
        <input type="text" />
      </label>

      <button>Cadastrar</button>
    </form>
    <Link to="/">Home</Link>
  </PageDefault>
);

export default FormCategory;
