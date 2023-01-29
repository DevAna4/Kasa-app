import React  from 'react';
import { NavLink } from 'react-router-dom';

//##### Import Data #####//
import logements from '../app/logements.json';
import Banner from '../components/Banner';

//## Import Components ##//
import Cards from '../components/Cards';

//######################//

function Home() {

  return (
    <div className='body-page'>
      <div className='banner__home'>
        <Banner text={"Chez vous, partout et ailleurs"} />
      </div>
      <section className='gallery'> 
        {logements.map((appart) => (
          <div className="card_logement" key={appart.id}>
            <NavLink to={`/Fiche-Logement/${appart.id}`} className="card_logement_link">
              <Cards cover={appart.cover} title={appart.title} />
            </NavLink>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
