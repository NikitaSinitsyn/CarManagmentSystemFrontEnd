import axios from 'axios';
const CIVIL_API_BASE_URL = "http://localhost:8080/civilInsurances/All"
const CIVIL_API_URL = "http://localhost:8080/civilInsurances"

export const listCivil = () => axios.get(CIVIL_API_BASE_URL);

export const addCivil = (civil) => {
    return axios.post(CIVIL_API_URL, civil);
};

export const getCivilById = (civilId) => {
    return axios.get(CIVIL_API_URL + '/' + civilId);
}

export const updateCivil = ( civil, civilId) => {
    return axios.put(CIVIL_API_URL + '/' + civilId, civil)
}

export const deleteCivil = (civilId) => {
    return axios.delete(CIVIL_API_URL + '/' + civilId);
}