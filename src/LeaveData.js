
const GET_URL = 'http://localhost:9012/api/leaves/getall';

class LeaveData {

    getLeaves() {

        return fetch(GET_URL).then((resp => resp.json()));

    }
}
export default new LeaveData();