import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./MainNavbar.css";

function MainNavbar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Link to={`/`}>
                    <Navbar.Brand>CourseEdx</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '400px' }}
                        navbarScroll
                    >
                        <Link to={`/`}>
                            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                            <Button variant="outline-primary btn-sm mx-1 my-1">Home</Button>
                        </Link>
                        <Link to={`/dashboard`}>
                            {/* <Nav.Link href="#action1">Dashboard</Nav.Link> */}
                            <Button variant="outline-primary mx-1 my-1 btn-sm">Dashboard</Button>
                        </Link>
                        <NavDropdown title="Dropdown " id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            htmlSize={30}
                            className="mainNavbar__search_input"
                            aria-label="Search"
                        />
                        <Button variant="outline-success btn-sm mx-1 my-1">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNavbar;