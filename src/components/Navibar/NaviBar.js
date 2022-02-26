import React from "react";
import './NaviBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import LogoPanambi from '../../assets/PanambiLogo.png';
import {CartWidget} from '../CartWidget/CartWidget';
import { NavLink } from "react-router-dom";

export const NaviBar = () => {
    return (    
        <Navbar collapseOnSelect expand="lg"  className='bg-cabezon'>
            <Container>
                <Navbar.Brand href="/"><img className="logopanambi" src={LogoPanambi} alt="Logo de Panambí"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" variant="success">
                <Nav className="navegador">
                    <NavLink className="navLink" to={"/"}>Inicio</NavLink>
                    <NavLink className="navLink" to={"/category/Macetas"}>Macetas</NavLink>
                    <NavLink className="navLink" to={"/category/Plantas"}>Plantas</NavLink>
                    <NavLink className="navLink" to={"#home"}><CartWidget className="navLink"/></NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}