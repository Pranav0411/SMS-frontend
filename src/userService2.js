import { myAxios2 } from './helper2.js';

export const createMessage = (message) => {

    return myAxios2.post('/api/messages/create', message).then((response) => response.data);
};