import React from 'react';
import "./header.css";
import img from "./logo-sagi.png";
const navBar = () => {
    return (
        <div className="nav-container">
            <img src={img} alt="logo sagi" width="100 px"></img>
            <ul>
                <li>
                    Bolsos
                </li>
                <li>
                    Accesorios
                </li>
                <li>
                    Barbijos
                </li>
            </ul>
        </div>
    );
};
export default navBar;

