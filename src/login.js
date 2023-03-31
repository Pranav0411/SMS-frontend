import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container ,Row , Col} from 'reactstrap';
import Base from './base';
import './signup.css';
import { loginUser } from './userService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

function Login() {

    const [loginDetails, setLoginDetails] = useState({

        username:'',
        password: '',
        role:''

    })

    const handleChange = (event, property) => {

        setLoginDetails({ ...loginDetails, [property]: event.target.value })


    }

    let navigate = useNavigate();

    const submitForm = (event) =>
    {

        event.preventDefault();
        console.log("Hello")
       
        if (loginDetails.username.trim() == "",
            loginDetails.password.trim() == "") {

            toast.error("Username and Password Needed");
            return;



        }


        loginUser(loginDetails).then((jwtTokenData) =>{

            
            console.log("userLogin");
            console.log(jwtTokenData);
            Cookies.set("token", jwtTokenData);

            if (loginDetails.role === "ROLE_ADMIN") {
                toast.success("Admin Login Successful");
                navigate("/admin");
            }
            else if (loginDetails.role === "ROLE_TEACHER") {
                toast.success("Teacher Login Successful");
                navigate("/teacher");
            }
            else if (loginDetails.role === "ROLE_STUDENT") {
                toast.success("Teacher Login Successful");
                navigate("/student");
            }


        }).catch(error => {

            console.log(error);
            if (error.response.status == 400 || error.response.status == 404 )
        {
                toast.error(error.response.data.message)
            }
            else {
                toast.error("something went wrong")
            }
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
                        <CardHeader><div id="one"><h3>LOGIN</h3></div></CardHeader>
                        <CardBody>
                            <Form onSubmit={submitForm} >

                                <FormGroup className="mb-3">
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Enter Email"
                                        type="email"
                                        value={loginDetails.username}
                                        onChange={(e) => { handleChange(e, 'username') }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Enter Password"
                                        type="password"
                                        value={loginDetails.password}
                                        onChange={(e) => { handleChange(e, 'password') }}
                                    />
                                </FormGroup>

                                

                                <select className="form-select" aria-label="Default select example" value={loginDetails.role} onChange={(e) => { handleChange(e, 'role') }}  >
                                    <option selected>Open this select menu</option>
                                    <option value="ROLE_ADMIN">Admin</option>
                                    <option value="ROLE_STUDENT">Student</option>
                                    <option value="ROLE_TEACHER">Teacher</option>
                                </select>





                                <div class="center">
                                    <Button>
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

export default Login;