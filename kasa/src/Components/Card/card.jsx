//Importer les outils react
import React from "react";

function Card({image, title}){
    return(
        <div id="card">
            <img src={image} alt="photos du logement" className="cardImg"/>
            <h2 className="cardTitle">{title}</h2>
        </div>
    );
}
export default Card;