import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

//##### Import Data #####//
import Logements from '../app/logements.json';

//## Import Components ##//
import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';
import Ratings from '../components/Ratings';
import { useEffect } from 'react';
//import Error404 from '../pages/Error404';

//######################//

function Accommodation() {
  
  //## Récupération du fichier json ##//
  const { logementId } = useParams();
  const navigate = useNavigate();
  
  const accommodation = Logements.find((accommodation) => accommodation.id === logementId);
  
  const { title, location, rating, host, equipments, description, pictures, tags } = accommodation;
  
  useEffect(() => {
    if (accommodation.length === 0)  {
      navigate('*');
    } 
  },);
  //##################################//

  return (
    <div className='container__accommodation'>
      <Carrousel slide={ pictures }/>
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
        </div>
        <div className='container__collapse__all-part'>
          <Collapse title={'Description'} content={description}/>
          <Collapse title={'Equipements'} content={equipments.map((equipment, index) => (
              <li key={index}>{ equipment }</li>
            )) } />
        </div>
      </div>
    </div>
  )
}

export default Accommodation
