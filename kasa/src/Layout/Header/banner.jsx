//Importer les outils react
import React from "react";
//importer les élements du projet 
import {Link} from "react-router-dom";
//Importer le style
import '../../Utils/Style/banner.css'

function Banner (){
    return (
        <header>
            <nav>
                <Link to="/accueil" className="link">Accueil</Link>
                <Link to="/a-propos" className="link">A Propos</Link>
            </nav>
        </header>
    );
}
export default Banner; 