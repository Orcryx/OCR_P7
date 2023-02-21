//Importer les outils react
import React from "react";

function heroBanner({image, title})
{
return(
    <div id="hero">
        <img src={image} alt="bannier avec un paysage naturel" className="heroImg"/>
        <h2 className="heroTitle">{title}</h2>
    </div>
);
}
export default heroBanner;