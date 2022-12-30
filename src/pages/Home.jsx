import React from 'react';
import Cards from '../components/Cards';

// Import img
import BackgroundHome from '../assets/Background-home.png'

function Home() {
  return (
    <div>
      <div className='banner__home'>
        <img className='background__home' src={BackgroundHome} alt="background-home" />
        <p className='background__home__text'>Chez vous, partout et ailleurs</p>
      </div>
      <section className='gallery'>
        <div className='products' id='products'>
          <Cards />
        </div>
      </section>
    </div>
  )
}

export default Home
