import React  from 'react';
import { NavLink } from 'react-router-dom';

//##### Import Data #####//
import logements from '../app/logements.json';

//## Import Components ##//
import Cards from '../components/Cards';

//######################//

function Home() {

  return (
    <div>
      <div className='banner__home'>
        <img src="" alt="" />
        <p className='banner__home__text'>Chez vous, partout et ailleurs</p>
      </div>
      <section className='gallery' id='products'> 
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
