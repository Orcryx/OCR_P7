//importer les éléments réact
import React from "react";
//importer le style
import './ower.css';

function Ower({host}){
    const identity = host.name.split(" ");
    const [name, lastname] = identity;


    return(
       <div className="owerLodging policePrimary">
            <div className="identity">
                <p className="owerName">{name}</p>
                <p className="owerLastname">{lastname}</p>
                
            </div>           
            <div className="boxAvatar">
                    <img src={host.picture} alt="avatar"  className=" avatarSize imgAvatar "/>
            </div>
       </div> 
    );
}
export default Ower;