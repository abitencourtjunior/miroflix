import { useState } from 'react'

const useForm = (initialValues) => {
  const [values, setValue] = useState(initialValues)

  const setValues = (key, value) => {
    setValue({
      ...values, [key]: value,
    })
  }

  const handleChange = (e) => {
    setValues(e.target.getAttribute('name'), e.target.value)
  }

  const clearForm = () => setValue(initialValues)

  return {
    values,
    handleChange,
    clearForm,
  }
}

export default useForm
