import React from 'react';
import './NavBar.css'; 

const NavBar = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-cabezon">
            <div class="container-fluid">
                <a class="navbar-brand" href=""><img class="logopanambi" src="imagenes/PanambiLogo.png" alt="Logo de Panambí"/></a>
            <button class="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">          
        <ul class="navbar-nav flex-row align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="">Inicio</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="productos.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos
            </a>
            <ul class="dropdown-menu bg-transparent" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item bg-transparent" href="productos.html#macetas">Macetas</a></li>
              <li><a class="dropdown-item bg-transparent" href="productos.html#plantas">Plantas</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="">Galeria</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Nosotros</a>
          </li>
          <li class="nav-item"> 
            <a class="nav-link" href="">Contacto</a>
          </li>          
        </ul>
      </div>
    </div>
  </nav>
    )
}

export default NavBar