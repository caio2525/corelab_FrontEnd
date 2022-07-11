import { useEffect, useState, useContext } from "react";
import { getVehicles, favoriteVehicle, deleteVehicle } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import {FormContext} from '../../providers/FormProvider'
import {FiltersContext} from '../../providers/FiltersProvider'

const VehiclesPage = (props: any) => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");
  const {setFormData, cleanFormData} = useContext<any>(FormContext)
  const {filterData, handleSetFilterOptions} = useContext<any>(FiltersContext)

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      console.log(payload)
      await setVehicles(payload);
    };

    fetchVehicles()

  }, []);

  console.log('vehicles', {vehicles})

  const filteredVehicles = vehicles.filter(vehicle => {
    if( (filterData['brand'] === "" || filterData['brand'] === vehicle.brand) &&
        (filterData['color'] === "" || filterData['color'] === vehicle.color) &&
        (filterData['year'] === "" || parseInt(filterData['year'], 10) === vehicle.year) &&
        (filterData['min_price'] === "" || vehicle.price >= filterData['min_price']) &&
        (filterData['max_price'] === "" || vehicle.price <= filterData['max_price'] )
      )
      {
        return true
      }

    return false
  })

  const searchedVehicles = filteredVehicles.filter(vehicle => {
    var vehicleInformation = ""

    vehicleInformation = vehicleInformation.concat(vehicle.name.toLowerCase(), " ")
    vehicleInformation = vehicleInformation.concat(vehicle.brand.toLowerCase(), " ")
    vehicleInformation = vehicleInformation.concat(vehicle.description.toLowerCase(), " ")
    vehicleInformation = vehicleInformation.concat(vehicle.plate.toLowerCase(), " ")
    vehicleInformation = vehicleInformation.concat(vehicle.year.toString().toLowerCase(), " ")
    vehicleInformation = vehicleInformation.concat(vehicle.color.toLowerCase(), " ")
    vehicleInformation = vehicleInformation.concat(vehicle.price.toString().toLowerCase(), " ")

    if(search === "" || vehicleInformation.includes(search.toLowerCase()))
    {
      return true
    }

    return false
  })


  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>

          <div className={styles.search_container}>
            <Search
              placeholder="Search"
              value={search}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setSearch(event.target.value)}}
            />
            <button
              className={styles.settings_button}
              onClick={() => {
                handleSetFilterOptions(vehicles)
                props.setPage("Filters")
              }}
            >
              <img alt='settings' className={styles.image} src={'/settings.png'}/>
            </button>
          </div>


        <div className={styles.add_button_container}>
          <Button
            text="Adicionar"
            onClick={() => {
              cleanFormData()
              props.setPage("Form")
            }}
          />
        </div>


        <div className={styles.card_container}>
        {
          searchedVehicles && searchedVehicles.map((searchedVehicle, id) => {
            console.log('searchedVehicle', searchedVehicle)
            return(

                <Card
                  onEdit={() => {
                    setFormData(searchedVehicle)
                    props.setPage("Form")
                  }}
                  onDelete={async () => {
                    await deleteVehicle(searchedVehicle._id)
                    const payload = await getVehicles();
                    setVehicles(payload);
                  }}
                  onFavorite={async () => {
                    await favoriteVehicle(searchedVehicle._id)
                    const payload = await getVehicles();
                    setVehicles(payload);
                  }}
                  key={id}
                  isFavorite={searchedVehicle.isFavorite}
                  title={searchedVehicle.name}
                >

                  <p>Price: {searchedVehicle.price}</p>
                  <p>Description: {searchedVehicle.description}</p>
                  <p>Year: {searchedVehicle.year}</p>
                </Card>

            )
          })
        }
        </div>

      </main>
    </div>
  );
};

export default VehiclesPage;
