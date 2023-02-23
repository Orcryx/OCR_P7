//importer les éléments réact
import React from "react";
//importer le style
import './rating.css';
import redStar from "../../Assets/Img/redStar.png";
import grayStar from "../../Assets/Img/grayStar.png";

function Rate({rates}){
const stars = [1,2,3,4,5];
return (
    <div className="rating">
        {stars.map((star) => rates >= star ? (<img key={star.toString()} className="ratingIcon" src={redStar} alt=""/>) : 
        (<img key={star.toString()} className="ratingIcon" src={grayStar} alt=""/>))}
  </div>
    );
}
export default Rate;