import {useContext} from 'react';
import {FormContext} from '../../providers/FormProvider'
import { Input, Formulario} from "../../components"
import {saveVehicle, updateVehicle} from '../../lib/api';
import './index.css'

const FormPage = (props) => {
  const {formData, handleChange} = useContext(FormContext);

  const handleSubmit = async (event) => {
      event.preventDefault()
      console.log(formData)
      if(formData._id !== -1)
      {
        const response = await updateVehicle(formData)
        console.log(response)

      }
      else {
        const response = await saveVehicle(formData)
        console.log(response)

      }
      props.setPage("Vehicles")
  }

  return(
    <div>

      <div onClick={() => {props.setPage("Vehicles")}} style={{width: '50px', height: '50px', marginLeft: '10px'}}>
        <img alt="arrow" src={"./arrow.png"}/>
      </div>

    <Formulario handleSubmit={handleSubmit}>


      <Input
        label="Nome:"
        type="text"
        handleChange={handleChange}
        name="name"
        value={formData['name']}
        required={true}
      />


      <Input
        label="Marca:"
        type="text"
        handleChange={handleChange}
        name="brand"
        value={formData['brand']}
        required={true}
      />

      <Input
        label="Descrição:"
        type="text"
        handleChange={handleChange}
        name="description"
        value={formData['description']}
        required={true}
      />

      <Input
        label="Cor:"
        type="text"
        handleChange={handleChange}
        name="color"
        value={formData['color']}
        required={true}
      />

      <Input
        label="Ano:"
        type="number"
        handleChange={handleChange}
        name="year"
        value={formData['year']}
        required={true}
      />

      <Input
        label="Placa:"
        type="text"
        handleChange={handleChange}
        name="plate"
        value={formData['plate']}
        required={true}
      />

      <Input
        label="Preço:"
        type="number"
        handleChange={handleChange}
        name="price"
        value={formData['price']}
        required={true}
      />

    </Formulario>
    </div>
  )
}

export default FormPage;
