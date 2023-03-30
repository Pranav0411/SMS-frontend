import React from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';




function Teacher() {

    return (



        <Base>
            <div margin="20px">

                <Container className="text-center" >
                    <Button color="dark"> Update </Button>
                    <Button color="dark"> Delete </Button>
                </Container>
            </div>
        </Base>

    );
}

export default Teacher;