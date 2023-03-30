import React from 'react';
import TeacherData from './TeacherData';
import './TeacherComp.css';
class TeacherComp extends React.Component{

    constructor(props) {
        super(props)
        this.state = {

            teachers:[]

            }

    }

    componentDidMount() {

        TeacherData.getTeachers().then((res) => { this.setState({ teachers: res}) });

    }

    render() {

        return (

            <div className="table-wrapper" >

                <h3 className="center">Teacher's List</h3>

                <table className="fl-table" >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">SUBJECT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.teachers.map(

                                teacher =>
                                    <tr key={teacher.id}>
                                        
                                        <td>{teacher.id}</td>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.email}</td>
                                        <td>{teacher.subject}</td>
                                    </tr>

                                )


                        }
                        
                    </tbody>
                </table>



            </div>





            )
    }
}

export default TeacherComp;
