import React from 'react';
import CartWidget from '../CartWidget.js/CartWidget';
import "./NavBar.css";
import img from "./logo-sagi.png";
const NavBar = () => {
    return (
        <div className="nav-container">
            <nav class="navbar navbar-expand-lg navbar-light bg-#8C777B;">

                <div class="container-fluid">
                    <a href="index.html"><img src={img} alt="logo sagi" width="100"></img></a>


                    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="materos.html">Bolsos Materos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contenedores.html">Contenedores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="valijitas.html">Valijitas de Arte</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="nececers.html">Necesers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="billeteras.html">Billeteras</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="accesorios.html">Accesorios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="barbijos.html">Barbijos</a>
                            </li>
                            <li class="nav-item">
                               <CartWidget />
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};
export default NavBar;

