import React from "react";
import './NaviBar.css';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import LogoPanambi from '../../assets/PanambiLogo.png';
import {CartWidget} from '../CartWidget/CartWidget';

export const NaviBar = () => {
    return (    
        <Navbar collapseOnSelect expand="lg"  className='bg-cabezon'>
            <Container>
                <Navbar.Brand href="/"><img className="logopanambi" src={LogoPanambi} alt="Logo de Panambí"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" variant="success">
                <Nav className="navegador">
                    <Nav.Link className="navLink" href="/">Inicio</Nav.Link>
                    <Nav.Link className="navLink" href="/item-detail">Macetas</Nav.Link>
                    <Nav.Link className="navLink" href="/item-detail">Plantas</Nav.Link>
                    <Nav.Link className="navLink" href="#home"><CartWidget className="navLink"/></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}