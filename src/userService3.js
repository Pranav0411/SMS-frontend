import { myAxios3 } from './helper3.js';

export const createFees = (fees) => {

    return myAxios3.post('/api/fees/create', fees).then((response) => response.data);
};