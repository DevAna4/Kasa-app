import React from 'react'

function Error404() {
  return (
    <div className='body-page'>
      <div className='container__404'>
        <h1 className='container__404__title'>404</h1>
        <p className='container__404__text'>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/" className='container__404__url'>Retourner sur la page d’accueil</a>
      </div>

    </div>
  )
}

export default Error404
