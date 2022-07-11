import React, {useState} from 'react';

const initalState ={
  brand: '',
  year: "",
  color: '',
  min_price: "",
  max_price: "",
}

const initialOptions ={
  brand: [],
  year: [],
  color: [],
}

export const FiltersContext = React.createContext(initalState)

export const FiltersProvider = (props) => {
  const [filterData, setFilterData] = useState(initalState)
  const [filterOptions, setFilterOptions] = useState(initialOptions)

  const handleChange = (event) => {
    setFilterData(prevFilterData => {
      return(
        {
          ...prevFilterData,
          [event.target.name]: event.target.value
        }
      )
    })
  }

  const handleSetFilterOptions = (vehicles) => {
    const options = ['brand', 'year', 'color']

    options.map(option => {
      var optionSet = new Set();
      vehicles.map(vehicle => {
        if(vehicle[option])
        {
          optionSet.add(vehicle[option])
        }
      })
      console.log('option', option)
      console.log('optionset', optionSet)
      setFilterOptions(oldFilterOptions => {
        return(
          {
            ...oldFilterOptions,
            [option]: Array.from(optionSet)
          }
        )
      })
    })
  }

  return(
    <FiltersContext.Provider value={{filterData, setFilterData, handleChange, filterOptions, handleSetFilterOptions}}>
      {props.children}
    </FiltersContext.Provider>
  )
}
