import axios from 'axios';

const URL = 'http://localhost:9011/api/user/getst'

class Service {


    getUserById(id) {

        return axios.get(URL + '/' + id);


    }

}

export default new Service();