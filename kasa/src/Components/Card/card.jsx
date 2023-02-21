//Importer les outils react
import React from "react";
//Importer le style
import '../../Utils/Style/card.css'

function Card({image, title}){
    return(
        <div className="card">
            <img src={image} alt="photos du logement" className="cardImg"/>
            <h2 className="cardTitle">{title}</h2>
        </div>
    );
}
export default Card;