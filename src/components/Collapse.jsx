import React, { useState } from 'react'

function Collapse({ title, content }) {

  //## Permet de faire apparaitre (false) l'onglet déroulant ou cacher (true) celle-ci ##//
  const [showInfos, setShowInfos] = useState(false);

  const handleShowInfos = () => {
    setShowInfos((showInfos) => !showInfos)
    console.log(showInfos)
  }
  //####################################################################################//
  return (
    <div className={`container__collapse__part ${showInfos ? "show-text" : ""}`} onClick={handleShowInfos}>
        <button className='container__collapse__btn-text'>
            { title }
            <span></span>
        </button>
        <p>{ content }</p>
    </div>
  )
}

export default Collapse