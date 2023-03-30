import { myAxios1 } from './helper1.js';

export const createleave = (leave) => {

    return myAxios1.post('/api/leaves/create', leave).then((response) => response.data);
};