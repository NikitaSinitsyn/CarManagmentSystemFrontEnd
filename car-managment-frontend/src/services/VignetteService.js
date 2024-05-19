import axios from 'axios';
const VIGNETTE_API_BASE_URL = "http://localhost:8080/vignettes/All"
const VIGNETTE_API_URL = "http://localhost:8080/vignettes"

export const listVignettes = () => axios.get(VIGNETTE_API_BASE_URL);

export const addVignette = (vignette) => {
    return axios.post(VIGNETTE_API_URL, vignette);
};

export const getVignetteById = (vignetteId) => {
    return axios.get(VIGNETTE_API_URL + '/' + vignetteId);
}

export const updateVignette = ( vignette, vignetteId) => {
    return axios.put(VIGNETTE_API_URL + '/' + vignetteId, vignette)
}

export const deleteVignette = (vignetteId) => {
    return axios.delete(VIGNETTE_API_URL + '/' + vignetteId);
}