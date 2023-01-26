import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Cards from '../components/Cards';
import { NavLink } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("./logements.json").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <div className='banner__home'>
        <img src="" alt="" />
        <p className='banner__home__text'>Chez vous, partout et ailleurs</p>
      </div>
      <section className='gallery' id='products'> 
        {data.map((appart) => (
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
