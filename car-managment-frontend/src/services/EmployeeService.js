import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employees/All"
const EMPLOYEE_API_URL = "http://localhost:8080/employees"

export const listEmployee = () => axios.get(EMPLOYEE_API_BASE_URL);

export const addEmployee = (employee) => {
    return axios.post(EMPLOYEE_API_URL, employee);
};

export const getEmployeeById = (employeeId) => {
    return axios.get(EMPLOYEE_API_URL + '/' + employeeId);
}

export const updateEmployee = ( employee, employeeId) => {
    return axios.put(EMPLOYEE_API_URL + '/' + employeeId, employee)
}

export const deleteEmployee = (employeeId) => {
    return axios.delete(EMPLOYEE_API_URL + '/' + employeeId);
}