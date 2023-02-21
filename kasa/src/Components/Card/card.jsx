//Importer les outils react
import React from "react";
//Importer le style
import '../../Utils/Style/card.css'

function Card({image, title}){
    return(
        <div className="card">
            <h2 className="cardTitle policePrimary white">{title}</h2>
            <img src={image} alt="photos du logement" className="cardImg"/>      
        </div>
    );
}
export default Card;