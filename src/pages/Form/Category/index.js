/* eslint no-eval: 0 */

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'
import templateForm from '../../../data/template_forms.json'
import PageDefault from '../../Default'

function FormCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [categorys, setCategorys] = useState([])
  const [category, setCategory] = useState(initialValues)

  const handleSubmit = (e) => {
    e.preventDefault()
    setCategorys([...categorys, category])
    setCategory(initialValues)
  }

  const setValueInCategory = (key, value) => {
    setCategory({
      ...category, [key]: value,
    })
  }

  const handleChange = (e) => {
    setValueInCategory(e.target.getAttribute('name'), e.target.value)
  }

  useEffect(() => {
    const URL = window.location.href.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://miroflix.herokuapp.com/categorias'
    fetch(URL)
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json()
          setCategorys(data)
          return
        }
        throw new Error('Não foi possível pegar os dados')
      })
  }, [])

  return (
    <PageDefault>
      <h1>
        {templateForm.templates[0].titulo}
        :
        {' '}
        {category.name}
      </h1>
      <form onSubmit={handleSubmit}>
        {templateForm.templates[0].fields.map((field, index) => (
          <FormField
            key={`${field.name}${index}`}
            label={field.label}
            value={eval(`category.${field.name}`)}
            onChange={handleChange}
            type={field.type}
            name={field.name}
            mode={field.mode}
          />
        ))}

        <ul>
          {categorys.map((category, index) => <li key={`${category.name}${index}`}>{category.name}</li>)}
        </ul>

        <Button>Cadastrar</Button>
      </form>
      <Link to="/">Home</Link>
    </PageDefault>
  )
}

export default FormCategory
