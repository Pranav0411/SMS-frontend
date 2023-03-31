import React from 'react';
import { Form } from 'reactstrap';
import { Button, FormGroup, Label, Input, FormText, Card, CardBody, CardHeader, Container, Row, Col } from 'reactstrap';
import Base from './base';
import LeaveComp from './LeaveComp';
import './buttons.css';
import Fetchmessage from './fetchmessage';




function Teacher() {

    return (



        <Base>
            <div class="con">

                <h1>Welcome to Teacher's Portal</h1>
                
            </div>

            <LeaveComp />

            <Fetchmessage />
        </Base>

    );
}

export default Teacher;