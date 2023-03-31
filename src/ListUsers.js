import React from 'react';
import { Button, Container } from 'reactstrap';

import LIstUsersData from './LIstUsersData';

class ListUsers extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            users: []

        }

        this.editUser = this.editUser.bind(this);

    }

    editUser(id) {

        this.context.history.push('/path')

    }

    componentDidMount() {

        LIstUsersData.getuser().then((response) => { this.setState({ users: response }) });

        

    }

    render() {

        return (

            <div className="table-wrapper" >

                <h3 className="center">User List</h3>

                <table className="fl-table" >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">ROLE</th>
                            <th scope="col">SUBJECT</th>
                            <th scope="col">ACTION</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(

                                user =>
                                    <tr key={user.id}>

                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>{user.subject}</td>
                                        <td>
                                            <Button onClick={() => this.editUser(user.id)} className="btn btn-info">Update</Button>

                                        </td>
                                    </tr>

                            )


                        }

                    </tbody>
                </table>



            </div>





        )
    }
}

export default ListUsers;
