import React, { useEffect, useState } from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';
import { useNavigate } from 'react-router-dom';
import ListUsers from './ListUsers';
import Fetchusers from './fetchusers';
import Fetchmessage from './fetchmessage';
import LeaveComp from './LeaveComp';
import Fetchfees from './fetchfees';
import { getCurrentUser, loggedIn } from './loginFunctionalities';




function Admin() {

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        setLogin(loggedIn())
        setUser(getCurrentUser())
    }, [login])


    let navigate = useNavigate();

    const HandleRegister = () => {
        navigate("/signup");

    }

    


    return (



        <Base>
            <div className="text-center">
                {
                    login &&(<>
                        <h1>Welcome {user.name}</h1>
                        <h5>ADMIN</h5>
                        <h5>Email : {user.email}</h5>
                    </>)
                }
            </div>

            <div margin="20px">

                <Container className="text-center" >
                    <Button color="dark" onClick={HandleRegister}> Register a New user </Button>
                    
                </Container>

                <Fetchusers />

                <LeaveComp />

                <Fetchfees />
            </div>
        </Base>

    );
}

export default Admin;