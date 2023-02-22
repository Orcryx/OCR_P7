//Importer les outils react
import React from "react";
//Importer les éléments du projet
import HeroBanner from "../../Components/Hero/hero";
import Collapse from "../../Components/Collapse/collapse";
//Importer les données du site
import Script from "../../Assets/Mock/script";
//Importer le style
import image from "../../Assets/Img/aboutBannerDesktop.png";
import '../../Utils/Style/apropos.css'


function APropos() {

    return (
        <div id="aboutPage">
          <HeroBanner image={image} title=" "/>
          <section className="accordion">  
            {Script.map((criteria) => <Collapse key={criteria.id} title={criteria.label} description={criteria.content}/>)}
          </section>
       </div>
      );
    }
    
    export default APropos;