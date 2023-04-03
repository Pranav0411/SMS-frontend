import React from 'react';

import './LeaveComp.css';
import { useEffect, useState } from "react";
import axios from 'axios';
function LeaveComp() {

    const [data, SetData] = useState([])
    
    useEffect(() => { axios.get('http://localhost:9012/api/leaves/getall').then(res => SetData(res.data)).catch(err => console.log(err)) }, [])



    return (

        <div className="table-wrapper" >

            <h3 className="center">Student Leave List</h3>

            <table className="fl-table" >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">FROM</th>
                        <th scope="col">TO</th>
                        <th scope="col">REASON</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(leave =>


                            <tr key={leave.id}>

                                <td>{leave.id}</td>
                                <td>{leave.name}</td>
                                <td>{leave.studentEmail}</td>
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

export default LeaveComp;
