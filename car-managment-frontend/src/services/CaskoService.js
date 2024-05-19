import axios from 'axios';
const CASKO_API_BASE_URL = "http://localhost:8080/caskos/All"
const CASKO_API_URL = "http://localhost:8080/caskos"

export const listCaskos = () => axios.get(CASKO_API_BASE_URL);

export const addCasko = (casko) => {
    return axios.post(CASKO_API_URL, casko);
};

export const getCaskoById = (caskoId) => {
    return axios.get(CASKO_API_URL + '/' + caskoId);
}

export const updateCasko = ( casko, caskoId) => {
    return axios.put(CASKO_API_URL + '/' + caskoId, casko)
}

export const deleteCasko = (caskoId) => {
    return axios.delete(CASKO_API_URL + '/' + caskoId);
}