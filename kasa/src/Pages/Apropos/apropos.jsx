//Importer les outils react
import React from "react";
//Importer les éléments du projet
import HeroBanner from "../../Components/Hero/hero";
import Collapse from "../../Components/Collapse/dropdown";
//Importer les données du site
// import Script from "../../Assets/Mock/script";
//Importer le style
import image from "../../Assets/Img/aboutBannerDesktop.png";


function APropos() {

    return (
        <div id="error-page">
          <HeroBanner image={image} title=" "/>
            <Collapse title="Service" description="Tester" />
            {/* <Collapse title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            <Collapse title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Collapse title="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>                 */}
       </div>
      );
    }
    
    export default APropos;