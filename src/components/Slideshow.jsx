import React, { useState } from 'react';

//## Import Pictures ##//
import arrowLeft from '../assets/ArrowLeft.png';
import arrowRight from '../assets/ArrowRight.png'

//####################//

function Slideshow({ slide }) {
  
  //## Initialise 'visual' à 0 et met à jour 'updateVisual' ##//  
  const [ visual, updateVisual ] = useState(0);

  //## Indique le nombre d'image ##//
  const length = slide.length;
  
  //## Si 'visual' à pour total -1 on retourne à la première image, sinon on passe à la suivante ##//
  const nextSlide = () => {
    updateVisual(visual === length - 1 ? 0 : visual + 1);
  }
  
  const previousSlide = () => {
    updateVisual(visual === 0 ? length - 1  : visual - 1);
  }
  //##############################################################################################//
  
  return (
    <div className='container__accommodation__carrousel'>
        {slide.map((picture, index) => {
          return (
            <div className={index === visual ? 'container__accommodation__carrousel__active' : ""} key={index} >
              { index === visual && (<img src={picture} alt='' className='container__accommodation__carrousel__picture' />)}
            </div>
          );
        })}
        {length > 1 ? (
          <>
            <div className='container__accommodation__carrousel__previous' onClick={previousSlide}>
              <img src={arrowLeft} alt="" className='container__accommodation__carrousel__previous-arrow'/>
            </div>
            <div className='container__accommodation__carrousel__next' onClick={nextSlide}>
              <img src={arrowRight} alt="" className='container__accommodation__carrousel__next-arrow'/>
            </div>
          </>
        ) : null}
        <div className='container__accommodation__carrousel__pagination'>
          {visual + 1}/{length}
        </div>
    </div>
  );
}

export default Slideshow