/* eslint no-eval: 0 */

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CustomButton } from '../../../components/Button'
import FormField from '../../../components/FormField'
import Menu from '../../../components/Menu'
import templateForm from '../../../data/template_forms.json'
import useForm from '../../../hooks/useForm'
import categoryRepository from '../../../repository/categoryRepository'
import videoRepository from '../../../repository/videoRepository'
import PageDefault from '../../Default'

function FormVideo() {
  const history = useHistory()
  const [categorys, setCategorys] = useState([])
  const categoryTitles = categorys.map(({ title }) => title)
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  })

  useEffect(() => {
    categoryRepository.showCategorys().then((data) => setCategorys(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const categorySelected = categorys.find((category) => category.title === values.category)

    videoRepository.create({
      title: values.title,
      url: values.url,
      categoryId: categorySelected.id,
    })
      .then(() => {
        history.push('/')
      })
  }

  return (
    <PageDefault>
      <Menu button path="/create/category" nameButton="Nova Categoria" />
      <h1>
        {templateForm.templates[1].titulo}
        :
        {' '}
        {values.title}
      </h1>
      <form onSubmit={handleSubmit}>
        {templateForm.templates[1].fields.map((field) => (
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

        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <CustomButton type="submit">Cadastrar</CustomButton>
      </form>
    </PageDefault>
  )
}

export default FormVideo
