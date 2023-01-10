// Bloc d'une fiche de la page 'Home'

import React from 'react';

function ContainerProduct({ cover, title }) {
  return (
    <div className='product'>
      <img src={ cover } alt="" />
      <p>{ title }</p>
    </div>
  )
}

export default ContainerProduct
