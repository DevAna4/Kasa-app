import React from 'react';

function ContainerProduct({ cover, title }) {
  return (
    <div className='product'>
      <span />
      <img src={ cover } alt="" />
      <p>{ title }</p>
    </div>
  )
}

export default ContainerProduct
