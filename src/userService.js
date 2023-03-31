import { myAxios } from './helper.js';

export const sign = (user) => {

    return myAxios.post('/api/user/create', user).then((response) => response.data);
};


export const loginUser = (loginDetails) => {

    return myAxios.post('/api/user/authenticate', loginDetails).then((response) => response.data);
}

export const getuserbyid = (id) => {

    return myAxios.get('/api/user/', id).then((response) => response.data);
}



