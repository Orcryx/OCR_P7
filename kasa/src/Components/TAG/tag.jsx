//Importer les outils react
import React from "react";
//Importer le style
import '../../Utils/Style/tag.css'

function TAG({getTag}){

    return (
        <span className="tagSpan">{getTag}</span>
    );
}
export default TAG;
