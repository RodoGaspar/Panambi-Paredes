import React from 'react';
import './NavBar.css';
import LogoPanambi from './imagenes/PanambiLogo.png'; 
import { Carrito } from '../Carrito/CartWidget';

const NavBar = () =>{
    return(
        <nav className='bg-cabezon'>
            <div>
                <a className="navbar-brand" href=""><img className="logopanambi" src={LogoPanambi} alt="Logo de Panambí"/></a>
            {/* <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">          
        <ul className="navbar-nav flex-row align-items-center">
          {/* <li className="nav-item">
            <a className="nav-link" href="">Inicio</a>
          </li> */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active" href="productos.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos
            </a>
            <ul className="dropdown-menu bg-transparent" aria-labelledby="navbarDropdownMenuLink">
              {/* <li><a className="dropdown-item bg-transparent" href="productos.html#macetas">Macetas</a></li>
              <li><a className="dropdown-item bg-transparent" href="productos.html#plantas">Plantas</a></li> */}
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="">Galeria</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="">Nosotros</a>
          </li> */}
          <li className="nav-item"> 
            <a className="nav-link" href="">Contacto</a>
          </li> 
          <li><Carrito/></li>         
        </ul>
      </div>
    </div>
    
  </nav>
    )
}

export default NavBar