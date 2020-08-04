/* eslint no-eval: 0 */

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../../components/Button'
import FormField from '../../../components/FormField'
import templateForm from '../../../data/template_forms.json'
import useForm from '../../../hooks/useForm'
import categoryRepository from '../../../repository/categoryRepository'
import PageDefault from '../../Default'

function FormCategory() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  }

  const {
    values,
    handleChange,
    clearForm,
  } = useForm(initialValues)

  const [categorys, setCategorys] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setCategorys([...categorys, values])
    clearForm()
  }

  useEffect(() => {
    categoryRepository.showCategorys()
      .then((categorysData) => {
        setCategorys(categorysData)
      })
  }, [])

  return (
    <PageDefault>
      <h1>
        {templateForm.templates[0].titulo}
        :
        {' '}
        {values.title}
      </h1>
      <form onSubmit={handleSubmit}>
        {templateForm.templates[0].fields.map((field) => (
          <FormField
            key={field.id}
            label={field.label}
            value={eval(`values.${field.name}`)}
            onChange={handleChange}
            type={field.type}
            name={field.name}
            mode={field.mode}
          />
        ))}

        <ul>
          {categorys.map((categoryCurrent) => <li key={categoryCurrent.id}>{categoryCurrent.title}</li>)}
        </ul>

        <CustomButton>Cadastrar</CustomButton>
      </form>
      <Link to="/">Home</Link>
    </PageDefault>
  )
}

export default FormCategory
