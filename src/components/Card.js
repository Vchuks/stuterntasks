import React from 'react'

const Card = ({title, release_date, opening_crawl}) => {
  return (
    <div className='card-box'>
      <div>
        <h2>{title}</h2>
        <p className='release'>{release_date}</p>
      </div>
      <p className='crawl'>{opening_crawl}</p>
      <div>
        <hr></hr>
        <a href="#">More info</a>
      </div>
    </div>
  )
}

export default Card
