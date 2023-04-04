import React, { useState } from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';
import { useNavigate } from 'react-router-dom';
import './buttons.css'
import { useEffect } from 'react';
import { getCurrentUser, loggedIn } from './loginFunctionalities';
import { Link} from "react-router-dom";




function Student() {



    let navigate = useNavigate();

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        setLogin(loggedIn())
        setUser(getCurrentUser())
    }, [login])


    const HandleApplyLeave = () => {
        navigate("/applyleave");

    }

    const handlePayFess = () => {
        
        navigate("/fees");


    }
    const HandleSendMessage = () => {
        navigate("/message");

    }


    return (



        <Base>
            <div className="text-center" margin="20px">

                {
                    login && (

                        <>
                            <h1>Welcome {user.name}</h1>
                            <h5>STUDENT</h5>
                            <h5>Email : {user.email}</h5>
                            <Link className='text-decoration-none btn btn-sm btn-success' to={`/updatestudent/${user.email}`} > Update </Link>
                        </>
                        )

                }

                

                

            </div>
            <div class="con">
                
                <Container className="text-center" >
                    <Button color="dark" onClick={HandleApplyLeave}> Apply Leave </Button>
                    <Button color="dark" onClick={handlePayFess} id="btn"> Pay fees </Button>
                    <Button color="dark" onClick={HandleSendMessage} > Message Teacher </Button>
                </Container>
            </div>
        </Base>

        );
}

export default Student;