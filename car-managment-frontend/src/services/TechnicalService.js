import axios from 'axios';
const TECHNICAL_API_BASE_URL = "http://localhost:8080/technicalInspections/All"
const TECHNICAL_API_URL = "http://localhost:8080/technicalInspections"

export const listTechnicals = () => axios.get(TECHNICAL_API_BASE_URL);

export const addTechnical = (technical) => {
    return axios.post(TECHNICAL_API_URL, technical);
};

export const getTechnicalById = (technicalId) => {
    return axios.get(TECHNICAL_API_URL + '/' + technicalId);
}

export const updateTechnical = ( technical, technicalId) => {
    return axios.put(TECHNICAL_API_URL + '/' + technicalId, technical)
}

export const deleteTechnical = (technicalId) => {
    return axios.delete(TECHNICAL_API_URL + '/' + technicalId);
}