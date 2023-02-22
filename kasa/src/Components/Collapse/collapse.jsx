//Importer les outils react
import React, { useState }  from "react";
//importer le style
import '../../Utils/Style/collapse.css'
import arrow from "../../Assets/Img/arrow24px.png";


function Collapse ({title, description}){
    const [isOpen, setOpen] = useState(false);
    return(
        <li className="accordionItem">
            <div className="accordionToggle backgroundPrimary" onClick={()=> setOpen(!isOpen)}>               
                <span>   
                <h3 className="accordionTitle white">{title}</h3>
                    {isOpen ? <img src={arrow} alt="Ouvrir cette liste" className="accordionArrow Up"/> :  <img src={arrow} alt="Ouvrir cette liste" className="accordionArrow Down"/>}
                </span>
            </div>
            {isOpen && <div className="accordionContent">{description}</div>}
        </li>
    );
}
export default Collapse;