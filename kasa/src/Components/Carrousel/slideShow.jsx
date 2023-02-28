//Importer les outils react
import React, {useState} from "react";
//Importer le style
import './slideShow.css';
import arrowLeft from "../../Assets/Img/leftArrow.png";
import arrowRight from "../../Assets/Img/rightArrow.png";



function Carrousel ({images}){
  document.addEventListener('keydown', keyPress);
    const [displayImg, setImg] = useState(0);
    const length = images.length;
    
    const nextImg = () => {
        setImg(displayImg === length - 1 ? 0 : displayImg + 1);
      };
    
      const prevImg = () => {
        setImg(displayImg === 0 ? length - 1 : displayImg - 1);
      };

      return (
        <div className="slider">
          {images.map((picture, index) => {
            return (
              <div key={index} className={index === displayImg ? "slideActive" : "slideInactive"}>
                {index === displayImg && (<img src={picture} alt="" className="sliderPicture" />)}
              </div>
            );
          })}
          {/* Afficher les boutons de navigation uniquement si il y a plus d'une image disponible */}
          {length > 1 ? (
            <div className="arrowBox">
              <div className="sliderPrevious" onClick={prevImg}>
                <img src={arrowLeft} alt="" className="previousArrow" />
              </div>
              <div className="sliderNext" onClick={nextImg}>
                <img src={arrowRight} alt="" className="nextArrow" />
              </div>
            </div>
          ) : null}
        </div>
      );

      function keyPress(e){
        if(e.keyCode === 37){
          prevImg();
        }
        else if(e.keyCode === 39){
          nextImg();
        }
      }    
}
export default Carrousel;