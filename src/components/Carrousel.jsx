import React, { useState } from 'react';

import arrowLeft from '../assets/ArrowLeft.png';
import arrowRight from '../assets/ArrowRight.png'

function Carrousel({ slide }) {
  
  const [ visual, updateVisual ] = useState(0);

  const length = slide.length;
  console.log(length)

  const nextSlide = () => {
    updateVisual(visual === length - 1 ? 0 : visual + 1);
  }
  
  const previousSlide = () => {
    updateVisual(visual === 0 ? length - 1  : visual - 1);
  }

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
    </div>
  );
}

export default Carrousel