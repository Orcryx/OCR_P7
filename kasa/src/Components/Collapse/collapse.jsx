//Importer les outils react
import React, { useState }  from "react";
//importer le style
// import arrow from "../../Assets/Img/arrow24px.png";


function Collapse ({title, description}){
    const [isOpen, setOpen] = useState(false);
    return(
        <li className="accordionItem">
            <div className="accordionToggle" onClick={()=> setOpen(!isOpen)}>
                <h3 className="accordionTitle">{title}</h3>
                <span>{isOpen ? "-" : "+"}</span>
            </div>
            {isOpen && <div className="accordionContent">{description}</div>}
        </li>
    );
}
export default Collapse;