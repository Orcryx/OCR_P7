//importer les éléments réact
import React from "react";
//importer le style
import './ower.css';

function Ower({host}){
    const identity = host.name.split(" ");
    const [name, lastname] = identity;


    return(
       <div className="owerLodging">
            <p className="owerName">{name}</p>
            <p className="owerLastname">{lastname}</p>
            <div className="owerAvatar">
                <img src={host.picture} alt="avatar" />
            </div>
       </div> 
    );
}
export default Ower;