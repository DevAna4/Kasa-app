import React from 'react'

function Host ( { host } ) {

  return (
    <div className='container__accommodation__host__info'>
      <p>{host.name}</p>
      <img className='container__accommodation__host__picture' src={ host.picture} alt="" />
    </div>
  )
}

export default Host