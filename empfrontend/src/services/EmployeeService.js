import axios from "axios";

const Rest_Api_Url ='http://localhost:9098/api/employees';

export const getEmployee = () => {
    return axios.get(Rest_Api_Url);
}