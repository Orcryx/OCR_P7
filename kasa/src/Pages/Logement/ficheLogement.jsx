//importer les éléments réact
//import React from "react";
import {useParams} from "react-router-dom";
//Importer les éléments du projet
import Lodging from "../../Assets/Mock/logements.json";
// import SlideShow from "../../Components/Carrousel/slideShow";
import Collapse from "../../Components/Collapse/collapse";
import TAG from "../../Components/TAG/tag"

function Fiche(){

    const {lodgingId} = useParams();
    console.log(lodgingId);
    const lodging = Lodging.find(logement=> logement.id === lodgingId);
    console.log( "les infos du tableau sont :");
    console.log(lodging);
    const {title, location, rating, host, equipments, description, pictures} = lodging;
    console.log("le titre est :" + " " + title);
    console.log( "la liste des tags est :");
    console.log(lodging.tags);
    return (
       <div className="oneLodging">
            <div className="tagLodging">
            {lodging.tags.map((tag, index) => (<TAG key={index} getTag={tag} />))}
            </div>
            <div className="collapsLodging">
            {lodging.equipments.map((title, description) => (<Collapse title={title} description={description} />))}
            </div>
       </div>
      );
}
export default Fiche;