//Importer les outils react
import React from "react";
//Importer le style
import './tag.css'

function TAG({getTag}){

    return (
        <span className="tagSpan backgroundPrimary white">{getTag}</span>
    );
}
export default TAG;
