//Importer les outils react
import React from "react";
//Importer les éléments du projet
import HeroBanner from "../../Components/Hero/hero";
import Collapse from "../../Components/Collapse/collapse";
//Importer les données du site
//import Script from "../../Assets/Mock/script";
//Importer le style
import image from "../../Assets/Img/aboutBannerDesktop.png";


function APropos() {

    return (
        <div id="error-page">
          <HeroBanner image={image} title=" "/>
          <Collapse title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            
       </div>
      );
    }
    
    export default APropos;