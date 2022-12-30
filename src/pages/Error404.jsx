import React from 'react'

function Error404() {
  return (
    <div className='container__404'>
      <h1 className='404__title'>Error 404</h1>
      <p className='404__text'>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className='404__url'>Retourner sur la page d’accueil</a>
    </div>
  )
}

export default Error404
