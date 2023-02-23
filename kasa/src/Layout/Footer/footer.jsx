//Importer les outils react
import React from "react";
//importer les élements du projet 
//Importer le style
import './footer.css'
import logoFooter from "../../Assets/Img/logoFooter.png"

function Footer (){
    return (
        <footer>
            <div id="boxFooter">
                <img  src={logoFooter} alt="logo de KASA"/>
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}
export default Footer; 