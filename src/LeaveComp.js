import React from 'react';
import LeaveData from './LeaveData';
import './LeaveComp.css';
class LeaveComp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            leaves: []

        }

    }

    componentDidMount() {

        LeaveData.getLeaves().then((response) => { this.setState({ leaves: response }) });

    }

    render() {

        return (

            <div className="table-wrapper" >

                <h3 className="center">Leave List</h3>

                <table className="fl-table" >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">FROM</th>
                            <th scope="col">TO</th>
                            <th scope="col">REASON</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.leaves.map(

                                leave =>
                                    <tr >

                                        <td>{leave.id}</td>
                                        <td>{leave.name}</td>
                                        <td>{leave.startdate}</td>
                                        <td>{leave.enddate}</td>
                                        <td>{leave.reason}</td>
                                    </tr>
                                
                            )


                        }

                    </tbody>
                </table>



            </div>





        )
    }
}

export default LeaveComp;
