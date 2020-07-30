/* eslint no-eval: 0 */

import React, { useState } from "react";
import PageDefault from "../../Default";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import templateForm from "../../../data/template_forms.json";

function FormCategory() {
  const initialValues = {
    name: "",
    description: "",
    color: "",
  };
  const [categorys, setCategorys] = useState([]);
  const [category, setCategory] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorys([...categorys, category]);
    setCategory(initialValues);
  };

  const setValueInCategory = (key, value) => {
    setCategory({ ...category, [key]: value });
  };

  const handleChange = (e) => {
    setValueInCategory(e.target.getAttribute("name"), e.target.value);
  };

  return (
    <PageDefault>
      <h1>
        {templateForm.templates[0].titulo}: {category.name}
      </h1>
      <form onSubmit={handleSubmit}>
        {templateForm.templates[0].fields.map((field, index) => {
          return (
            <FormField
              key={`${field.name}${index}`}
              label={field.label}
              value={eval(`category.${field.name}`)}
              onChange={handleChange}
              type={field.type}
              name={field.name}
              mode={field.mode}
            />
          );
        })}

        <ul>
          {categorys.map((category, index) => {
            return <li key={`${category}${index}`}>{category.name}</li>;
          })}
        </ul>

        <button>Cadastrar</button>
      </form>
      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default FormCategory;
