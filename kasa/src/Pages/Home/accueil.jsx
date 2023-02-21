//Importer les outils react
import React from "react";
import { NavLink } from "react-router-dom";
//importer les élements du projet 
import Card from "../../Components/Card/card"
import HeroBanner from "../../Components/Hero/hero"
//importer les données du site
import Lodging from "../../Assets/Mock/logements.json"
import Script from "../../Assets/Mock/script"
 
import image from "../../Assets/Img/banner.png"


function Accueil(){
    const slogan = Script.slogan;

 return(
    <div id="home">
        <HeroBanner image={image} title={slogan}/>
        <section className="thumbnails">
        {Lodging.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id}><Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
        </section>
    </div>
   
 )
}
export default Accueil;