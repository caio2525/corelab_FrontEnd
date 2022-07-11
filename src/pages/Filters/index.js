import {useContext} from 'react';
import {FiltersContext} from '../../providers/FiltersProvider'
import {  Formulario, Select, Input } from "../../components"
import './index.css';

const FiltersPage = (props) => {
  const {filterData, handleChange, filterOptions} = useContext(FiltersContext);

  const handleSubmit = async (event) => {
      event.preventDefault()
      console.log(filterData)
      props.setPage("Vehicles")
  }

  return(
    <div>
      <div onClick={() => {props.setPage("Vehicles")}} style={{width: '50px', height: '50px', marginLeft: '10px'}}>
        <img alt='arrow' src={"./arrow.png"}/>
      </div>
      <Formulario handleSubmit={handleSubmit}>

        <Select
          label="Marca:"
          id="brand"
          value={filterData.brand}
          handleChange={handleChange}
          name="brand"
          options={filterOptions.brand}
        />

        <Select
          label="Cor:"
          id="color"
          value={filterData.color}
          handleChange={handleChange}
          name="color"
          options={filterOptions.color}
        />

        <Select
          label="Ano:"
          id="year"
          value={filterData.year}
          handleChange={handleChange}
          name="year"
          options={filterOptions.year}
        />

        <div className="price">
          <Input
            label="Preço Min:"
            type="number"
            handleChange={handleChange}
            name="min_price"
            value={filterData.min_price}
            required={false}
          />

          <Input
            label="Preço Max:"
            type="number"
            handleChange={handleChange}
            name="max_price"
            value={filterData.max_price}
            required={false}
          />
        </div>

      </Formulario>
    </div>
  )
}

export default FiltersPage;
