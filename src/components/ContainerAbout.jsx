// Barre défilante A propos

import React from 'react';

function ContainerAbout() {
  return (
    <div>
      <div className='banner__about'>
      <img src="" alt="" />
      </div>
      <div>
        <ul className='container__about'>
            <div>
              <div className='container__about__content'>
              <li>Fiabilité</li>
              <span></span>
              </div>
              <p className='container__about__text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>  
            </div>
            <div>
              <li className='container__about__content'>Respect</li>
              <span>vector</span>
              <p className='container__about__text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>  
            </div>
            <div>
              <li className='container__about__content'>Service</li>
              <span>vector</span>
              <p className='container__about__text'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>  
            </div>
            <div>
              <li className='container__about__content'>Sécurité</li>
              <span>vector</span>
              <p className='container__about__text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>  
            </div>
        </ul>
      </div>
    </div>
  )
  
}

export default ContainerAbout
