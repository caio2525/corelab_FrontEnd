import React, {useState} from 'react';

const initalState = {
  _id: -1,
  name: '',
  brand: '',
  description: '',
  plate: '',
  isFavorite: false,
  year: 2022,
  color: '',
  price: 0,
  createdAt: "",
}

export const FormContext = React.createContext(initalState)

export const FormProvider = (props) => {
  const [formData, setFormData] = useState(initalState);

  function handleChange(event)
  {
    setFormData((prevFormData) => {
      return(
        {
          ...prevFormData,
          [event.target.name]: event.target.value
        }
      )
    })
  }

  function cleanFormData()
  {
    setFormData(initalState)
  }

  return(
    <FormContext.Provider value={{formData, setFormData, handleChange, cleanFormData}}>
      {props.children}
    </FormContext.Provider>
  )
}
