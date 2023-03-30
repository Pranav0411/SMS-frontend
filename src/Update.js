import React, { Component, useState } from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';
import './signup.css';
import Validation from './validation';
import { sign } from './userService.js';
import axios from "axios";
import Service from "./service";



class Update extends Component {

    constructor(props) {

        super(props)

        this.state = {

            id: this.props.match.params.id,
            name: '',
            email: '',
            role: '',
            subject: ''

        }

        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeRole = this.changeRole.bind(this);
        this.changeSubject = this.changeSubject.bind(this);
        this.updateuser = this.updateuser.bind(this);

    }







    componentDidMount() {
        Service.getUserById(this.state.id).then((res) => {

            let user = res.data;
            this.setState({
                name: user.name,
                email: user.email,
                role: user.role,
                subject: user.subject

            });
        });
    }

    updateuser = (e) => {

        e.preventDefault();
        let user = {

            name: this.state.name,
            email: this.state.email,
            role: this.state.role,
            subject: this.state.subject

        };

    }


    changeName = (event) => {

        this.setState({ name: event.target.value });

    }

    changeEmail = (event) => {

        this.setState({ email: event.target.value });
    }

    changeRole = (event) => {

        this.setState({ role: event.target.value });
    }

    changeSubject = (event) => {

        this.setState({ subject: event.target.value });
    }

    render() {
        return (
            <Base>
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card style={{
                            margin: '100px'
                        }}>
                            <CardHeader><div id="one"><h3>Update</h3></div></CardHeader>
                            <CardBody>
                                <Form >
                                    <FormGroup className="mb-3">
                                        <Label for="Name">
                                            Name
                                        </Label>
                                        <Input
                                            id="Name"
                                            name="Name"
                                            placeholder="Enter Full Name"
                                            type="text"

                                            onChange={this.changeName}
                                            value={this.state.name}

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

                                            onChange={this.changeEmail}
                                            value={this.state.email}

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

                                            onChange={this.changeRole}
                                            value={this.state.role}

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

                                            onChange={this.changeSubject}
                                            value={this.state.subject}

                                        />
                                    </FormGroup>


                                    <div className="center">
                                        <Button type="submit" onClick={this.updateuser}>
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
}

export default Update;