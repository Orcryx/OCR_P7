//Importer les outils react
import React, { useState }  from "react";
//Importer les éléments du projet
import HeroBanner from "../../Components/Hero/hero"
//Importer les données du site
//Importer le style
import image from "../../Assets/Img/aboutBannerDesktop.png"

function APropos() {

    return (
        <div id="error-page">
          <HeroBanner image={image} title=" "/>
        </div>
      );
    }
    
    export default APropos;