//Importer les outils react
import React, {useState} from "react";
//Importer le style
import './slideShow.css';
import arrowLeft from "../../Assets/Img/leftArrow.png";
import arrowRight from "../../Assets/Img/rightArrow.png";

function Carrousel ({images}){

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
              <div
                key={index}
                className={
                  index === displayImg
                    ? "slide sliderActive"
                    : "slide sliderinactive"
                }
              >
                {index === displayImg && (
                  <img src={picture} alt="" className="sliderPicture" />
                )}
              </div>
            );
          })}
          {/* get button if there are more thant one picture */}
          {length > 1 ? (
            <>
              <div className="slider__previous" onClick={prevImg}>
                <img src={arrowLeft} alt="" className="slider__previous-icon" />
              </div>
              <div className="slider__next" onClick={nextImg}>
                <img src={arrowRight} alt="" className="slider__next-icon" />
              </div>
            </>
          ) : null}
        </div>
      );
}
export default Carrousel;