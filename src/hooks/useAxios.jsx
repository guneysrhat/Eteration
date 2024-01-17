import axios from "axios";


const BASE_URL = "https://5fc9346b2af77700165ae514.mockapi.io/";

//* Axios Instance for Public API Request
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const useAxios = () => {
  
};

export default useAxios;
