import React, { useContext } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {handleSignOut} from "../Signout/SignOut"
import {OwnerContext} from "../../features/login_signup/OwnerContext"

function NavbarComp(){

    //access the OwnerContext to see if a User is logged in/signed up already
    const {ownerIsLoggedIn} = useContext(OwnerContext)

    function handleLogoutClick(){
        handleSignOut()
    }

    return (
        <Navbar>
        <Container fluid>
        <Navbar.Brand href="/">PMS</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                {!ownerIsLoggedIn ?   
                <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link> 
                </> : 
                <>
                    <Nav.Link href="/new_property">New Property</Nav.Link>
                </>
                }
                <Nav.Link href="/" onClick={handleLogoutClick}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarComp