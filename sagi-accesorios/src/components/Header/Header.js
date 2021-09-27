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
            </ul>
        </div>
    );
};
export default navBar;

