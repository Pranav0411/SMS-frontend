import axios from "axios";

export const BASE_URL2 = 'http://localhost:9013';



export const myAxios2 = axios.create({ baseURL: BASE_URL2 });