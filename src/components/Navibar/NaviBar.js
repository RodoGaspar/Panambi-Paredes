import React from "react";
import './NaviBar.css';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import LogoPanambi from './imagenes/PanambiLogo.png';
import {CartWidget} from '../CartWidget/CartWidget';

export const NaviBar = () => {
    return (    
        <Navbar collapseOnSelect expand="lg"  className='bg-cabezon'>
            <Container>
                <Navbar.Brand href="/"><img className="logopanambi" src={LogoPanambi} alt="Logo de Panambí"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navegador">
                    <Nav.Link className="navLink" href="/">Inicio</Nav.Link>
                    <Nav.Link className="navLink" href="/item-detail">Link</Nav.Link>
                    <NavDropdown className="navLink" title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="navLink" href="#home"><CartWidget className="navLink"/></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}