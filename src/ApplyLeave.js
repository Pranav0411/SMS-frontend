import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';
import './signup.css';
import Validation from './validation';
import { createleave } from './userService1';
import { toast } from 'react-toastify'; 
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';




function ApplyLeave() {

    const [leave, setLeave] = useState({

        name: '',
        studentEmail:'',
        startdate: '',
        enddate: '',
        reason:''


    })

    const handleChange = (event, property) => {

        setLeave({ ...leave, [property]: event.target.value })


    }


    const submitF = (event) => {

        event.preventDefault();
        console.log("Hello")
        createleave(leave).then((resp) => {

            console.log(resp);
            toast.success("Leave Applied Successfully . ")
            console.log("success");
            window.location.reload(true);
        }).catch((error) => {

            console.log(error);
            console.log("Error Found");

        })

    }


    return (
        <Base>
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <Card style={{
                        margin: '100px'
                    }}>
                        <CardHeader><div id="one"><h3>Apply Leave</h3></div></CardHeader>
                        <CardBody>
                            <Form onSubmit={submitF}>
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
                                        value={leave.name}

                                    />
                                </FormGroup>


                                
                                    <FormGroup className="mb-3">
                                        <Label for="email">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            type="text"

                                            onChange={(e) => { handleChange(e, 'studentEmail') }}
                                            value={leave.studentEmail}

                                        />
                                    </FormGroup>

                                <FormGroup className="mb-3">
                                    <Label for="exampleEmail">
                                        Start date
                                    </Label>
                                    <Input
                                        id="startdate"
                                        name="startdate"
                                        placeholder="Enter Start Date in format yyyy-mm-dd"
                                        type="text"
                                        
                                        onChange={(e) => { handleChange(e, 'startdate') }}
                                        value={leave.startdate}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        End Date
                                    </Label>
                                    <Input
                                        id="enddate"
                                        name="enddate"
                                        placeholder="Enter End date in format yyyy-mm-dd"
                                        type="text"
                                        onChange={(e) => { handleChange(e, 'enddate') }}
                                        value={leave.enddate}
                                    />
                                </FormGroup>

                                <FormGroup >
                                    <Label for="Role">
                                        Reason
                                    </Label>
                                    <Input
                                        id="reason"
                                        name="reason"
                                        placeholder="Enter Reason"
                                        type="text"
                                        onChange={(e) => { handleChange(e, 'reason') }}
                                        value={leave.reason}
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

export default ApplyLeave;