//Importer les outils react
import React, { useState }  from "react";
//importer le style
import './collapse.css'
import arrowDown from "../../Assets/Img/arrowDown.png";
import arrowUp  from "../../Assets/Img/arrowUp.png";


function Collapse ({title, description}){
    const [isOpen, setOpen] = useState(false);
    return(
        <li className="accordionItem">
            <div className="accordionToggle backgroundPrimary" onClick={()=> setOpen(!isOpen)}>               
                <span>   
                <h3 className="accordionTitle white">{title}</h3>
                    {isOpen ? <img src={arrowUp} alt="Fermer cette liste" className="accordionArrow"/> :  <img src={arrowDown} alt="Ouvrir cette liste" className="accordionArrow"/>}
                </span>
            </div>
            {isOpen && <div className="accordionContent backgroundSecondary">{description}</div>}
        </li>
    );
}
export default Collapse;