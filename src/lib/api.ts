import { IVehicle } from "../types/Vehicle";

const API = "http://localhost:3333";

const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<any> => {
  return fetch(endpoint(path)).then((res) => res.json());
};

export const getVehicles = async () => {
  return get("/vehicles");
};


export const saveVehicle = async (data: any): Promise<any> => {
  console.log(data)
  delete data._id
  return fetch(endpoint('/save_vehicle'),
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => res.json())
    .catch(error => console.log(error));;
};

export const deleteVehicle = async(id: any): Promise<any> => {
  console.log(id)
  const url = '/vehicle/' + id
  return fetch(endpoint(url),
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then((res) => res.json())
    .catch(error => console.log(error));
}

export const favoriteVehicle = async(id: any): Promise<any> => {
  console.log('favorite')
  console.log('id', id)
  const url = '/favorite/' + id
  return fetch(endpoint(url),
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then((res) => res.json())
    .catch(error => console.log(error));
}



export const updateVehicle = async(data: any): Promise<any> => {
  console.log(data)
  var copyData = {...data};
  var id = data._id
  console.log('id', id)
  const url = '/vehicle/' + id
  delete copyData._id
  return fetch(endpoint(url),
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(copyData)
    }).then((res) => res.json())
    .catch(error => console.log(error));;
}
