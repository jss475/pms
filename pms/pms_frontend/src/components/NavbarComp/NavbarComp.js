import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {handleSignOut} from "../Signout/SignOut"

function NavbarComp(){

    function handleLogoutClick(){
        handleSignOut()
    }

    return (
        <Navbar bg="light" >
            <Container>
                <Navbar.Brand href="/">PMS</Navbar.Brand>
            </Container>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                        <Nav.Link href="/" onClick={handleLogoutClick}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp