import axios from 'axios';
const TIRE_API_BASE_URL = "http://localhost:8080/tires/All"
const TIRE_API_URL = "http://localhost:8080/tires"

export const listTires = () => axios.get(TIRE_API_BASE_URL);

export const addTire = (tire) => {
    return axios.post(TIRE_API_URL, tire);
};

export const getTireById = (tireId) => {
    return axios.get(TIRE_API_URL + '/' + tireId);
}

export const updateTire = ( tire, tireId) => {
    return axios.put(TIRE_API_URL + '/' + tireId, tire)
}

export const deleteTire = (tireId) => {
    return axios.delete(TIRE_API_URL + '/' + tireId);
}