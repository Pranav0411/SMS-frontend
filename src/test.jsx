import React, { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom' ;
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

function Example() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="my-2"
                color="dark"
                dark
                expand="md"            >
                <NavbarBrand tag={ReactLink} to="/"><img
                    alt="logo"
                    src="./school-icon.png"
                    style={{
                        height: 40,
                        width: 40
                    }}
                />SCHOOL WEB APPLICATION</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/login">Login</NavLink>
                        </NavItem>
                        
                       
                    </Nav>
                    <Nav>
                    <NavItem>
                        <NavLink tag={ReactLink} to="/">Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;