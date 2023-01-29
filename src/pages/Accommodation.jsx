import React from 'react';
import { useParams } from 'react-router-dom';

//##### Import Data #####//
import Logements from '../app/logements.json';

//## Import Components ##//
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';
import Ratings from '../components/Ratings';
import Host from '../components/Host';
import Tags from '../components/Tags';
import Error404 from '../pages/Error404';

//######################//

function Accommodation() {
  
  //## Récupération du fichier json ##//
  const { logementId } = useParams();

  
  const accommodation = Logements.find((accommodation) => accommodation.id === logementId);
  if (accommodation === undefined) {
    return <Error404 />;
  }
  
  const { title, location, rating, host, equipments, description, pictures, tags } = accommodation;
  
  //##################################//

  return (
    <div className='body-page'>
      <div className='container__accommodation'>
        <Slideshow slide={ pictures }/>
        <div className='container__accommodation__info'>
          <h2 className='container__accommodation__title'> { title } </h2>
          <h3 className='container__accommodation__location'> { location } </h3>
          <div className='container__accommodation__host'> 
            <Host host={ host }/>
            <Ratings rating={ rating }/>
          </div>
            <Tags tags= { tags }/>
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
