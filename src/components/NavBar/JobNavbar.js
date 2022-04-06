import React from "react";
import {Nav, Navbar, NavbarBrand, Collapse, NavItem, NavLink} from "reactstrap";

class JobNavbar extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="dark"  expand="lg" dark>
                    <NavbarBrand href="/">
                        JobSmarter
                    </NavbarBrand>
                    <Collapse navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink href="/login">
                                    Sign out
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default JobNavbar;