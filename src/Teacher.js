import React, { useEffect, useState } from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';
import LeaveComp from './LeaveComp';
import './buttons.css';
import Fetchmessage from './fetchmessage';
import { getCurrentUser, loggedIn } from './loginFunctionalities';




function Teacher() {

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        setLogin(loggedIn())
        setUser(getCurrentUser())
    }, [login])

    return (



        <Base>
            <div class="con">

                {
                    login && (

                        <>
                            <h1>Welcome {user.name}</h1>
                            <h5>TEACHER</h5>
                            <h5>Email : {user.email}</h5>
                            <h5>Subject : {user.subject}</h5>

                        </>
                                


                    )

                }

               
                
            </div>

            <LeaveComp />

            <Fetchmessage />
        </Base>

    );
}

export default Teacher;