  
import React from "react";
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

const NavBarComponent = () => {
    return(
        <Navbar color="light" light expand="md">
            <NavbarBrand to="/login">
                Noter
            </NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                        <Link to="/notes" className="nav-link">
                            Notes
                        </Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavBarComponent;