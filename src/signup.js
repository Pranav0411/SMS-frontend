import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card , CardBody , CardHeader , Container , Row ,Col } from 'reactstrap';
import Base from './base';
import './signup.css';
import Validation from './validation';
import { sign } from './userService.js';
import axios from "axios";
import { toast } from 'react-toastify';



function Signup() {


    const [data, setData] = useState({

        name:'',
        email:'',
        password:'',
        role: '',
        subject:''


        })

    const [error, setError] = useState({

        errors: {},
        isError:false
    })

    const handleChange = (event, property) => {

        setData({...data, [property]: event.target.value})


    }

    const submitForm = (event) => {

        event.preventDefault();
        console.log("Hello")
        sign(data).then((resp) => {

        console.log(resp);
            console.log("success");
            toast.success("User Registered Successfully . ")
            window.location.reload(true);
        }).catch((error) => {

            console.log(error);
            console.log("Error Found");

        })

    }


    return (
        <Base >
            <Row >
                <Col sm={{ size: 6, offset: 3 }}>
                    <Card style={{
                        margin: '100px'
                    }}>
                        <CardHeader><div id="one"><h3>REGISTER</h3></div></CardHeader>
                        <CardBody>
                            <Form onSubmit={submitForm}>
                                <FormGroup className="mb-3">
                                    <Label for="Name">
                                        Name
                                    </Label>
                                    <Input
                                        id="Name"
                                        name="Name"
                                        placeholder="Enter Full Name"
                                        type="text"
                                       
                                        onChange={(e) => { handleChange(e, 'name') }}
                                        value={data.name}
                                        
                                    />
                                </FormGroup>
                                
                                <FormGroup className="mb-3">
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => { handleChange(e, 'email') }}
                                        
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="pass"
                                        name="pass"
                                        placeholder="Enter Password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => { handleChange(e, 'password') }}
                                    />
                                </FormGroup>

                                <FormGroup >
                                    <Label for="Role">
                                        Role
                                    </Label>
                                    <Input
                                        id="Role"
                                        name="Role"
                                        placeholder="Enter Role"
                                        type="text"
                                        value={data.role}
                                        onChange={(e) => { handleChange(e, 'role') }}
                                    />
                                </FormGroup>

                                <FormGroup >
                                    <Label for="Subject">
                                        Subject
                                    </Label>
                                    <Input
                                        id="Subject"
                                        name="Subject"
                                        placeholder="Enter Subject"
                                        type="text"
                                        value={data.subject}
                                        onChange={(e) => { handleChange(e, 'subject') }}
                                    />
                                </FormGroup>

                                <div className="center">
                                    <Button type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Base>);
}

export default Signup;