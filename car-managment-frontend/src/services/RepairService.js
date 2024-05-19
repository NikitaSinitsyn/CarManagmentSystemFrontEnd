import axios from 'axios';
const REPAIR_API_BASE_URL = "http://localhost:8080/repairs/All"
const REPAIR_API_URL = "http://localhost:8080/repairs"

export const listRepairs = () => axios.get(REPAIR_API_BASE_URL);

export const addRepair = (repair) => {
    return axios.post(REPAIR_API_URL, repair);
};

export const getRepairById = (repairId) => {
    return axios.get(REPAIR_API_URL + '/' + repairId);
}

export const updateRepair = ( repair, repairId) => {
    return axios.put(REPAIR_API_URL + '/' + repairId, repair)
}

export const deleteRepair = (repairId) => {
    return axios.delete(REPAIR_API_URL + '/' + repairId);
}