//Importer les outils react
import React from "react";
//importer les élements du projet 
import {Link} from "react-router-dom";

function Banner (){
    return (
        <header>
            <nav>
                <Link to="/accueil">Accueil</Link>
                <Link to="/a-propos">A Propos</Link>
            </nav>
        </header>
    );
}
export default Banner; 