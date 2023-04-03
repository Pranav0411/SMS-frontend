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
import { createFees } from './userService3';




function Fees() {

    const [fees, setFees] = useState({

       
        name: '',
        studenEmail: '',
        amount: '',
        paymentid: '',
        feestype:''


    })

    const handleChange = (event, property) => {

        setFees({ ...fees, [property]: event.target.value })


    }


    const submitF = (event) => {

        event.preventDefault();
        console.log("Hello")
        createFees(fees).then((resp) => {

            console.log(resp);
            toast.success("Fees Paid Successfully . ")
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
                        <CardHeader><div id="one"><h3>Pay Fees</h3></div></CardHeader>
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
                                        value={fees.name}

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

                                        onChange={(e) => { handleChange(e, 'studenEmail') }}
                                        value={fees.studenEmail}

                                    />
                                </FormGroup>


                                <FormGroup className="mb-3">
                                    <Label for="exampleEmail">
                                        Amount
                                    </Label>
                                    <Input
                                        id="amount"
                                        name="amount"
                                        placeholder="Enter Amount."
                                        type="text"

                                        onChange={(e) => { handleChange(e, 'amount') }}
                                        value={fees.amount}
                                    />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Label for="examplePassword">
                                        Payment Id
                                    </Label>
                                    <Input
                                        id="paymentid"
                                        name="paymentid"
                                        placeholder="Enter the Payment Id"
                                        type="text"
                                        onChange={(e) => { handleChange(e, 'paymentid') }}
                                        value={fees.paymentid}
                                    />
                                </FormGroup>
                                

                                <select className="form-select" aria-label="Default select example" value={fees.feestype} onChange={(e) => { handleChange(e, 'feestype') }}  >
                                    <option selected>Open this select menu</option>
                                    <option value="Tution Fees">Tution Fees</option>
                                    <option value="Bus Fees">Bus Fees</option>
                                    <option value="Canteen Fees">Canteen Fees</option>
                                    <option value="Fine">Fine</option>
                                </select>



                                <div className="center">
                                    <Button type="submit">
                                        Pay Fees
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Base>);
}

export default Fees;