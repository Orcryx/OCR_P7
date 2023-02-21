//Importer les outils react
import React from "react";
//importer les élements du projet 
import { NavLink } from "react-router-dom";
//Importer le style
import '../../Utils/Style/banner.css'
import logo from "../../Assets/Img/logo.png"

function Banner (){
    return (
        <header>
            <NavLink to="/">
                <img src={logo} alt="Logo de KASA"/>
            </NavLink>
            <nav>
                <NavLink to="/" className="link">Accueil</NavLink>
                <NavLink to="/a-propos" className="link">A Propos</NavLink>
            </nav>
        </header>
    );
}
export default Banner; 