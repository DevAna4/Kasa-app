// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom';
//import axios from 'axios';
import Logements from '../app/logements.json';
import Collapse from '../components/Collapse';

//import Carrousel from '../components/Carrousel';
import Ratings from '../components/Ratings';

//import ContainerInfo from '../components/ContainerInfo';


function Accommodation() {
  
  //## Récupération du fichier json ##//
  const { logementId } = useParams();

  const accommodation = Logements.find((accommodation) => accommodation.id === logementId);
  console.log(accommodation);

  const { title, location, rating, host, equipments, description, pictures, tags } = accommodation;

  return (
      <div className='container__accommodation'>
        {/*<Carrousel slideshow={accommodation.pictures}/>*/}
        <div className='container__accommodation__info'>
          <h2 className='container__accommodation__title'> { title } </h2>
          <h3 className='container__accommodation__location'> { location } </h3>

          <div className='container__accommodation__host'>
            <p>{host.name}
              <img className='container__accommodation__host__picture' src={ host.picture} alt="" />
            </p>
            <Ratings rating={ rating }/>
          </div>

          <div>
            <p className='container__accommodation__tags'> { tags.map((tags, index) => (
              <li key={index}>{ tags }</li>
            )) } </p>

            <div className='container__collapse__all-part'>
              <Collapse title={'Description'} content={description}/>
              <Collapse title={'Equipements'} content={equipments.map((equipment, index) => (
                  <li key={index}>{ equipment }</li>
                )) } />
            </div>
          </div>
        </div>
      </div>
    
  
  )
}

export default Accommodation
