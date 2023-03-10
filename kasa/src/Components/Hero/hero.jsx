//Importer les outils react
import React from "react";
//Importer le style
import './hero.css'

function heroBanner({image, title})
{
return(
    <div id="hero">
        <img src={image} alt="bannier avec un paysage naturel" className="heroImg"/>
        <h2 className="heroTitle policePrimary white">{title}</h2>
    </div>
);
}
export default heroBanner;