import React from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';
import { useNavigate } from 'react-router-dom';
import ListUsers from './ListUsers';
import Fetchusers from './fetchusers';
import Fetchmessage from './fetchmessage';
import LeaveComp from './LeaveComp';
import Fetchfees from './fetchfees';




function Admin() {



    let navigate = useNavigate();

    const HandleRegister = () => {
        navigate("/signup");

    }

    


    return (



        <Base>
            <div className="text-center">

                <h3>WELCOME TO ADMIN'S PORTAL</h3>

            </div>

            <div margin="20px">

                <Container className="text-center" >
                    <Button color="dark" onClick={HandleRegister}> Register </Button>
                    
                </Container>

                <Fetchusers />

                <LeaveComp />

                <Fetchfees />
            </div>
        </Base>

    );
}

export default Admin;