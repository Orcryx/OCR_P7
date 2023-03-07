//importer les éléments réact
//import React from "react";
import {useParams, Navigate} from "react-router-dom";
//Importer les données du projet
import Lodging from "../../Assets/Mock/logements.json";
//importer les éléments du projet
import SlideShow from "../../Components/Carrousel/slideShow";
import Collapse from "../../Components/Collapse/collapse";
import TAG from "../../Components/TAG/tag";
import Ower from "../../Components/Ower/ower";
import Rate from "../../Components/Rating/rating";
//importer le style
import "../../Utils/Style/fiche.css";

function Fiche(){

    const {lodgingId} = useParams();
    const testRoute = Lodging.some(resultat => resultat.id === lodgingId);
     if (testRoute){
          const lodging = Lodging.find(logement=> logement.id === lodgingId);
          const {title, location, rating, host, description, pictures} = lodging;
          const listEquipement = lodging.equipments.map((equipment, index) =>{return<p key={index} className="list">{equipment}</p>})
          return (
               <div className="oneLodging">
                         <SlideShow  images={pictures}/>
                         <div className="infoLodging">
                                   <div  className="descriptionLodging">
                                        <h1 className="titleLodging">{title}</h1>
                                        <p className="localisationLodging">{location}</p>
                                        <div className="tagLodging">
                                             {lodging.tags.map((tag, index) => (<TAG key={index} getTag={tag} />))}
                                        </div>
                                   </div>
                                   <div className="infoOwerLodging">
                                        <Ower host={host}/>
                                        <Rate rates={rating}/>
                                   </div>
                         </div>
                              <div className="collapseLodging">
                                   <div  className="box">
                                   <Collapse title="Description" description={description}/>
                                  </div>
                                  <div className="box">
                                       <Collapse title="Équiments" description={listEquipement}/>
                                  </div>
                              </div> 
                         
                   </div>
          );
     }else return (<Navigate replace to="/404" />);
}
export default Fiche;