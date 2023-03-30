import React from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';
import { useNavigate } from 'react-router-dom';




function Student() {



    let navigate = useNavigate();

    const HandleApplyLeave = () => {
        navigate("/applyleave");

    }

    const handlePayFess = () => {
        let path = "./signup";
        navigate(path);


    }


    return (



        <Base>
            <div margin="20px">

                <Container className="text-center" >
                    <Button color="dark" onClick={HandleApplyLeave}> Apply Leave </Button>
                    <Button color="dark" onClick={handlePayFess}> Pay fees </Button>
                </Container>
            </div>
        </Base>

        );
}

export default Student;