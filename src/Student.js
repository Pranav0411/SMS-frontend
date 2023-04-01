import React from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';
import { useNavigate } from 'react-router-dom';
import './buttons.css'




function Student() {



    let navigate = useNavigate();

    const HandleApplyLeave = () => {
        navigate("/applyleave");

    }

    const handlePayFess = () => {
        
        navigate("/fees");


    }
    const HandleSendMessage = () => {
        navigate("/message");

    }


    return (



        <Base>
            <div className="text-center" margin="20px">

                <h1>Welcome to Student Profile</h1>

            </div>
            <div class="con">
                
                <Container className="text-center" >
                    <Button color="dark" onClick={HandleApplyLeave}> Apply Leave </Button>
                    <Button color="dark" onClick={handlePayFess} id="btn"> Pay fees </Button>
                    <Button color="dark" onClick={HandleSendMessage} id="btn"> Message Teacher </Button>
                </Container>
            </div>
        </Base>

        );
}

export default Student;