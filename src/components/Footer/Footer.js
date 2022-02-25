import React from "react";
import './Footer.css';
import LogoPanambi from '../../assets/PanambiLogo.png';
import gml from '../../assets/gmail.png';
import inst from '../../assets/instagram.png';
import fcbk from '../../assets/facebook.png';
import whsp from '../../assets/whatsapp.png';

export const Footer = () => {
    return(
        <footer>
            <div>
                <a href="#arriba" ><img className="logopanambi" src={LogoPanambi} alt="Logo de Panambí"/></a>
                <section className="redesSociales">
                    <p>Contactanos</p>
                    <ul>
                        <li><a href=""><img src={gml} alt="logo de gmail"/></a>
                            <p>panambiplantas@gmail.com</p>
                        </li>
                        <li><a href="https://www.instagram.com/panambi_plantas" target="_blank"><img src={inst} alt="logo de Instagram"/></a>
                            <p>@panambi_plantas</p>
                        </li>
                        <li><a href="https://www.facebook.com/panambiplantas" target="_blank"><img src={fcbk} alt="logo de facebook"/></a>
                            <p>/panambiplantas</p>
                        </li>
                        <li><a href=""><img src={whsp} alt="logo de whatsapp"/></a>
                            <p>+54911090917</p>
                        </li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}