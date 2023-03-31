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
import { createMessage } from './userService2';




function Message() {

    const [messages, setMessages] = useState({

        student: '',
        teacher: '',
        message: ''


    })

    const handleChange = (event, property) => {

        setMessages({ ...messages, [property]: event.target.value })


    }


    const submitF = (event) => {

        event.preventDefault();
        console.log("Hello")
        createMessage(messages).then((resp) => {

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
                        <CardHeader><div id="one"><h3>Send Message</h3></div></CardHeader>
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

                                        onChange={(e) => { handleChange(e, 'student') }}
                                        value={messages.student}

                                    />
                                </FormGroup>

                                <FormGroup className="mb-3">
                                    <Label for="exampleEmail">
                                        Teacher Name
                                    </Label>
                                    <Input
                                        id="teacher"
                                        name="teacher"
                                        placeholder="Enter Teacher name ."
                                        type="text"

                                        onChange={(e) => { handleChange(e, 'teacher') }}
                                        value={messages.teacher}
                                    />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Label for="examplePassword">
                                        Message
                                    </Label>
                                    <Input
                                        id="message"
                                        name="message"
                                        placeholder="Enter the Message here"
                                        type="text"
                                        onChange={(e) => { handleChange(e, 'message') }}
                                        value={messages.message}
                                    />
                                </FormGroup>


                                <div className="center">
                                    <Button type="submit">
                                        Send Message
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Base>);
}

export default Message;