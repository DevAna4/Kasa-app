import React from 'react';

//##### Import Data #####//
import AboutData from '../app/about.json';
import Banner from '../components/Banner';

//## Import Components ##//
import Collapse from '../components/Collapse';

//######################//

function About() {
  return (
    <div className='body-page'>
      <div className='banner__about'>
        <Banner />
      </div>
      <div className='container__about'>
        {AboutData.map((data, index) => {
          return (
            <Collapse key={index} title={data.title} content={data.content} />
          )
        })}
      </div>
    </div>
  )
}

export default About
