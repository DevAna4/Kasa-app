import React from 'react'

function Tags( { tags }) {
  return (
    <div>
        <p className='container__accommodation__tags'> { tags.map((tags, index) => (
            <li key={index}>{ tags }</li>
        )) } 
        </p>
    </div>
  )
}

export default Tags
