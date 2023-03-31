import React, { Component, useState } from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';
import './signup.css';
import Validation from './validation';
import { sign } from './userService.js';
import axios from "axios";
import Service from "./service";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Update() {

    const { id } = useParams();
    const [values, setValues] = useState({

        id: id,
        name: '',
        email: '',
        role: '',
        subject:''



    })
    useEffect(() => {
        axios.get('http://localhost:9011/api/user/getbyid/' + id)
            .then(res => { setValues({ ...values, name: res.data.name, email: res.data.email, role: res.data.role, subject: res.data.subject }) })
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.put('http://localhost:9011/api/user/updateuser/' + id, values).then(res => { navigate('/admin') }).catch(err => console.log(err))
    }

    return (
        <Base>
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <Card style={{
                        margin: '100px'
                    }}>
                        <CardHeader><div id="one"><h3>Update</h3></div></CardHeader>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup className="mb-3">
                                    <Label for="Name">
                                        Name
                                    </Label>
                                    <Input
                                        id="Name"
                                        name="Name"
                                        placeholder="Enter Full Name"
                                        type="text"

                                        onChange={e => setValues({ ...values, name: e.target.value })}
                                        value={values.name}

                                    />
                                </FormGroup>

                                <FormGroup className="mb-3">
                                    <Label for="Email">
                                        Email
                                    </Label>
                                    <Input
                                        id="Email"
                                        name="Email"
                                        placeholder="Enter Email"
                                        type="text"

                                        onChange={e => setValues({ ...values, email: e.target.value })}
                                        value={values.email}

                                    />
                                </FormGroup>

                                <FormGroup className="mb-3">
                                    <Label for="Role">
                                        Role
                                    </Label>
                                    <Input
                                        id="Role"
                                        name="Role"
                                        placeholder="Enter role"
                                        type="text"

                                        onChange={e => setValues({ ...values, role: e.target.value })}
                                        value={values.role}

                                    />
                                </FormGroup>

                                <FormGroup className="mb-3">
                                    <Label for="Subject">
                                        Subject
                                    </Label>
                                    <Input
                                        id="Subject"
                                        name="Subject"
                                        placeholder="Enter subject"
                                        type="text"

                                        onChange={e => setValues({ ...values, subject: e.target.value })}
                                        value={values.subject}

                                    />
                                </FormGroup>


                                <div className="center">
                                    <Button type="submit">
                                        Update
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Base>);

}

export default Update;