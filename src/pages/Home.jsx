import React from 'react';
import axios from 'axios';

import { useEffect, useState } from 'react';

import Cards from '../components/Cards';


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("./logements.json").then((res) => setData(res.data)); //requète AXIOS ici pour prochaine utilisation API
  }, []);

  return (
    <div>
      <div className='banner__home'>
        <p className='background__home__text'>Chez vous, partout et ailleurs</p>
      </div>
      <section className='gallery' id='products'> 
        {data.map((appart, id) => (
          <div className="card_logement" key={id}>
            <a href={`/logement/${appart.id}`} className="card_logement_link">
              <Cards cover={appart.cover} title={appart.title} />
            </a>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
