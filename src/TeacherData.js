

const URL = 'http://localhost:9011/api/user/teacher';

class TeacherData {

    getTeachers() {

        return fetch(URL).then((res => res.json()));

    }
}
export default new TeacherData();