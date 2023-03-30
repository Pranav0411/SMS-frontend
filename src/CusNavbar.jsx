import React, { useState } from 'react';
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

const CusNavbar = () => {
    return (
        <div>
            <Navbar
                className="my-2"
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src="./school-icon.png"
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                    School Web Application
                </NavbarBrand>
                
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="./signup">Signup</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="./login">Login</NavLink>
                    </NavItem>
                    </Nav>
                

            </Navbar>


        </div>

    );
}

export default CusNavbar;