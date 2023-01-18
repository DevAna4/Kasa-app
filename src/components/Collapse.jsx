// Barre défilante A propos

import React, { useState } from 'react';

function Collapse() {

  const [showInfos, setShowInfos] = useState(false);

  const handleShowInfos = () => {
    setShowInfos((showInfos) => !showInfos)
    console.log(showInfos)
  }

  return (
    <div className='container__about'>
      
      <section className='container__about__section'>
        <ul>
            <div className={`container__about__part ${showInfos ? "show-text" : ""}`} >
              <button className='container__about__content' onClick={handleShowInfos}>
                Fiabilité
                <span></span>
              </button>
              <p className='container__about__text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>  
            </div>
            <div className={`container__about__part ${showInfos ? "show-text" : ""}`} >
              <button className='container__about__content' onClick={handleShowInfos}>
                Respect
                <span></span>
              </button>
              <p className='container__about__text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>  
            </div>
            <div className={`container__about__part ${showInfos ? "show-text" : ""}`} >
              <button className='container__about__content' onClick={handleShowInfos}>
                Service
                <span></span>
              </button>
              <p className='container__about__text'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>  
            </div>
            <div className={`container__about__part ${showInfos ? "show-text" : ""}`} >
              <button className='container__about__content' onClick={handleShowInfos}>
                Sécurité
                <span></span>
              </button>
              <p className='container__about__text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>  
            </div>
        </ul>
      </section>
    </div>
  )
  
}

export default Collapse 