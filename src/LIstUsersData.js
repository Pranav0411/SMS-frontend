const URL = 'http://localhost:9011/api/user/getall';

class LIstUsersData {


    getuser() {

        return fetch(URL).then((response => response.json()));
    }

    
}
export default new LIstUsersData();