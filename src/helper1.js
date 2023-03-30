import axios from "axios";

export const BASE_URL1 = 'http://localhost:9012';



export const myAxios1 = axios.create({ baseURL: BASE_URL1 });