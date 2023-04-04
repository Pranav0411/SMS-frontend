import React, { useState } from 'react';
import { useEffect } from 'react';
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
import { getCurrentUser, loggedIn, loggedOut } from './loginFunctionalities';
import { useNavigate } from 'react-router-dom';

function Example() {

    let navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        setLogin(loggedIn())
        setUser(getCurrentUser())
    }, [login])

    const logout = () => {

        loggedOut(() => {

            setLogin(false);
            navigate("/login")

        })
    }

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
                        

                    </Nav>
                    <Nav>
                        {
                            login && (

                                <>
                                    <NavItem>
                                        <NavLink onClick={logout}>Logout</NavLink>
                                </NavItem>

                                    <NavItem>
                                        <NavLink >{user.email}</NavLink>
                                </NavItem>
                                </>

                            )


                        }
                        {

                            !login && (
                                
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/login">Login</NavLink>
                                </NavItem>
                                
                                )
                        }
                    
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;