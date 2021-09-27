import React from 'react';
import "./header.css";
import img from "./logo-sagi.png";
const navBar = () => {
    return (
        <div className="nav-container">
            <img src={img} alt="logo sagi"></img>
            <ul>
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

                    <a class="nav-link" href="carrito.html"><i class="fas fa-shopping-cart"></i></a>
                    <span data-toggle="tooltip" data-placement="bottom" title="0" id="contador" class="mostrar"><p class="count"></p></span>
                </li>
            </ul>
        </div>
    );
};
export default navBar;

