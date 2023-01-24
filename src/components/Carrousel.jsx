import React from 'react'

function Carrousel({ cover, pictures }) {

  return (
    <div className='container__accommodation__carrousel'>
        <div>
            <img src={ cover } alt="" />
            {/*<img src={ pictures } alt="" />*/}
            <button className='container__accommodation__carrousel__arrow__left' onClick={"click"}></button>
            <button className='container__accommodation__carrousel__arrow__right' onClick={"click"}></button>
        </div>
    </div>
  )
}

export default Carrousel