import {useState} from 'react';
import FormPage from '../Form';
import VehiclesPage from '../Vehicles';
import FiltersPage from '../Filters';

const Main = (props) => {
  const [page, setPage] = useState("Vehicles")

  var renderPage = <VehiclesPage/>

  if(page === "Vehicles")
  {
    renderPage = <VehiclesPage setPage={setPage}/>
  }

  else if(page === "Form")
  {
    renderPage = <FormPage setPage={setPage}/>
  }

  else
  {
    renderPage = <FiltersPage setPage={setPage}/>
  }

  return(
    <>{renderPage}</>
  )
}

export default Main;
