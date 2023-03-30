import React from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';
import { useNavigate } from 'react-router-dom';
import ListUsers from './ListUsers';




function Admin() {



    let navigate = useNavigate();

    const HandleRegister = () => {
        navigate("/signup");

    }

    const handleUpdateStudent = () => {
        let path = "./signup";
        navigate(path);


    }

    const handleUpdateTeacher = () => {
        let path = "./signup";
        navigate(path);


    }


    return (



        <Base>
            <div margin="20px">

                <Container className="text-center" >
                    <Button color="dark" onClick={HandleRegister}> Register </Button>
                    <Button color="dark" onClick={handleUpdateStudent}> Update Student </Button>
                    <Button color="dark" onClick={handleUpdateTeacher}> Update Teacher </Button>
                </Container>

                <ListUsers />
            </div>
        </Base>

    );
}

export default Admin;