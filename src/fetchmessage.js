import React from 'react';

import './LeaveComp.css';
import { useEffect, useState } from "react";
import axios from 'axios';
function Fetchmessage() {

    const [data, SetData] = useState([])

    useEffect(() => { axios.get('http://localhost:9013/api/messages/getall').then(res => SetData(res.data)).catch(err => console.log(err)) }, [])



    return (

        <div className="table-wrapper" >

            <h3 className="center">Messages</h3>

            <table className="fl-table" >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">STUDENT EMAIL</th>
                        <th scope="col">TEACHER EMAIL</th>
                        <th scope="col">MESSAGE</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(leave =>


                            <tr key={leave.id}>

                                <td>{leave.id}</td>
                                <td>{leave.studentEmail}</td>
                                <td>{leave.teacherEmail}</td>
                                <td>{leave.message}</td>
                                
                            </tr>

                        )


                    }

                </tbody>
            </table>



        </div>





    )

}

export default Fetchmessage;
