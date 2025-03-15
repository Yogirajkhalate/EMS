import axios from "axios";

const Rest_Api_Url ='http://localhost:9098/api/employees';

export const getEmployee = () => {
    return axios.get(Rest_Api_Url);
}

export const createEmployee = (employee) => {
    return axios.post(Rest_Api_Url,employee);
}

export const getEmployeeId = (id) => {
    return axios.get(`${Rest_Api_Url}/${id}`);
};

export const updateEmployee = (empid,employee) => axios.put(Rest_Api_Url+'/'+empid,employee);

export const deleteEmployee = (id) => axios.delete(Rest_Api_Url+'/'+id);