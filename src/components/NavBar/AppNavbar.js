import React from "react";
import {Nav, Navbar, NavbarBrand, Collapse, NavItem, NavLink} from "reactstrap";

class AppNavbar extends React.Component {
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
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/signup">
                                    Signup
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar;