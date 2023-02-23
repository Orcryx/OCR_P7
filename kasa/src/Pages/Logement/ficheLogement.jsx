//importer les éléments réact
//import React from "react";
import {useParams} from "react-router-dom";
//Importer les données du projet
import Lodging from "../../Assets/Mock/logements.json";
//importer les éléments du projet
// import SlideShow from "../../Components/Carrousel/slideShow";
import Collapse from "../../Components/Collapse/collapse";
import TAG from "../../Components/TAG/tag";
import Ower from "../../Components/Ower/ower";
import Rate from "../../Components/Rating/rating";
//importer le style

function Fiche(){

    const {lodgingId} = useParams();
    const lodging = Lodging.find(logement=> logement.id === lodgingId);
    const {title, location, rating, host, equipments, description, pictures} = lodging;


    return (
       <div className="oneLodging">
          {/* <slider></slider> */}
          <div className="infoLodgin">
               <h1 className="titleLodging">{title}</h1>
               <p className="localisationLodging">{location}</p>
               <div className="tagLodging">
                    {lodging.tags.map((tag, index) => (<TAG key={index} getTag={tag} />))}
               </div>
               <div className="infoOwerLodging">
                    <Ower host={host}/>
                    <Rate rates={rating}/>
               </div>
               <div className="collapseLodging">
                    <Collapse title="Description" description={description} />
                    <Collapse title="Équiments" description={equipments} />
               </div> 
          </div>
       </div>
      );
}
export default Fiche;