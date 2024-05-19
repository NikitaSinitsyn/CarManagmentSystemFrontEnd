import React, { Component } from "react";
import { Navbar, Nav, Container, Form } from 'react-bootstrap';


export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar  fixed="top" collapseOnSelect expanded="md" bg="dark" variant="dark" style={{ width: "100%" }}>
                <Container fluid className="px-0" >
                    <Navbar.Brand href="/" className="ml-auto">
                        <img
                        src="images/react.png"
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Text className="mr-auto"style={{ color: "#00D8FF" }}>Car Management</Navbar.Text>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ marginLeft: "250px" }} >
                                <Nav.Link href="/home" className="mx-4 ">Home</Nav.Link>
                                <Nav.Link href="/employees" className="mx-4 ">Employees</Nav.Link>
                                <Nav.Link href="/cars" className="mx-4 ">Cars</Nav.Link>
                                <Nav.Link href="/tires" className="mx-4 ">Tires</Nav.Link>
                                <Nav.Link href="/repairs" className="mx-4 ">Repairs</Nav.Link>
                                <Nav.Link href="/technicals" className="mx-4 ">Technical Inspections</Nav.Link>
                                <Nav.Link href="/caskos" className="mx-4 ">Casko</Nav.Link>
                                <Nav.Link href="/civils" className="mx-4 ">Civil Insurances</Nav.Link>
                                <Nav.Link href="/vignettes" className="mx-4 ">Vignettes</Nav.Link>
                        </Nav>
                        <Form inline >
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            
            </>
        );
    }
}