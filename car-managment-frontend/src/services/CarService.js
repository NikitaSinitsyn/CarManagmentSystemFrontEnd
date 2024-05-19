import axios from 'axios';
const CAR_API_BASE_URL = "http://localhost:8080/cars/All"
const CAR_API_URL = "http://localhost:8080/cars"
const CAR_API_VIEW_URL = "http://localhost:8080/cars/view"

export const listCars = () => axios.get(CAR_API_BASE_URL);

export const addCar = (car) => {
    return axios.post(CAR_API_URL, car);
};

export const getCarById = (carId) => {
    return axios.get(CAR_API_URL + '/' + carId);
}

export const updateCar = ( car, carId) => {
    return axios.put(CAR_API_URL + '/' + carId, car)
}

export const deleteCar = (carId) => {
    return axios.delete(CAR_API_URL + '/' + carId);
}

export const getCarViewById = (carId) => {
    return axios.get(CAR_API_VIEW_URL + '/' + carId);
}