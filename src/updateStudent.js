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
import { toast } from 'react-toastify';


function UpdateStudent() {

    
    
       
                const { email } = useParams();
                const [values, setValues] = useState({

                    email:email,
                    name: '',
                    role:''
                    




                })

    useEffect(() => {
        axios.get('http://localhost:9011/api/user/getbyEmail/' + email)
            .then(res => { setValues({ ...values, name: res.data.name, role: res.data.role }) })
            .catch(err => console.log(err))
    }, [])
            

       
            
        


         const navigate = useNavigate(); 

        
        
            const handleSubmit = (e) => {

                e.preventDefault();
                axios.put('http://localhost:9011/api/user/updateuserbyEmail/' + email, values).then(res => {
                   
                    toast.success("Updated Successfully . ")
                    window.location.reload(true);
                     }).catch(err => console.log(err))
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

export default UpdateStudent;