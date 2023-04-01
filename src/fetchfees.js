import React from 'react';

import './LeaveComp.css';
import { useEffect, useState } from "react";
import axios from 'axios';
function Fetchfees() {

    const [data, SetData] = useState([])

    useEffect(() => { axios.get('http://localhost:9014/api/fees/getall').then(res => SetData(res.data)).catch(err => console.log(err)) }, [])



    return (

        <div className="table-wrapper" >

            <h3 className="center">Student fees</h3>

            <table className="fl-table" >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">STUDENT NAME</th>
                        <th scope="col">AMOUNT</th>
                        <th scope="col">PAYMENT ID</th>
                        <th scope="col">FEES TYPE</th>
                        <th scope="col">FEES STATUS</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(leave =>


                            <tr key={leave.id}>

                                <td>{leave.id}</td>
                                <td>{leave.name}</td>
                                <td>{leave.amount}</td>
                                <td>{leave.paymentid}</td>
                                <td>{leave.feestype}</td>
                                <td>PAID</td>

                            </tr>

                        )


                    }

                </tbody>
            </table>



        </div>





    )

}

export default Fetchfees;
