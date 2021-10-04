import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
class Header extends React.Component {

    render() {
        return (
            <>
                <div>
                    <h1 style={{ background: "grey", color: "white", textAlign: "center", fontSize: "50px" }}><b>LIBRARY MANAGEMENT SYSTEM</b></h1>
                    <ul>

                  






                    </ul>
                    <Navbar bg="dark" variant="grey">
                        <Container>
                            <Navbar.Brand href="#home"><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link> </Navbar.Brand>
                            <Nav className="me-auto">

                                <Nav.Link href="#home"><Link to="/mem">Member Details</Link></Nav.Link>


                                <Nav.Link href="#home"><Link to="/book">Book Details</Link></Nav.Link>
                                <Nav.Link href="#home"><Link to="/bookissue">Book Issue</Link></Nav.Link>

                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}

export default Header