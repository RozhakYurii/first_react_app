import React from "react";
import {Navbar, MenuItem, Nav, NavDropdown, NavItem} from "react-bootstrap";


const MyNavbar = ({setRoute}) => {

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Shpeiser</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem onClick={()=>setRoute('default')} eventKey={1}>
                            Text
                        </NavItem>
                        <NavItem onClick={()=>setRoute('input')} eventKey={2}>
                            Input form
                        </NavItem>
                        <NavItem onClick={()=>setRoute('prediction')} eventKey={3}>
                            Prediction
                        </NavItem>
                        <NavDropdown eventKey={4} title="Tables" id="basic-nav-dropdown">
                            <MenuItem onClick={()=>setRoute('table')} eventKey={4.1}>Table</MenuItem>
                            <MenuItem onClick={()=>setRoute('bootstrapTable')} eventKey={4.2}>BootstrapTable</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem onClick={()=>setRoute('default')} eventKey={1}>
                            Home
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };



export default MyNavbar;