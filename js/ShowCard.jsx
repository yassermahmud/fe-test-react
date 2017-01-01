import React from 'react'

const ShowCard = ({ poster, title, year, description }) => (
  <div className='show-card'>
    <img src={`./public/posters/${poster}`} className='show-card-img' />
    <div className='show-card-text'>
      <h3 className='show-card-title'>{title}</h3>
      <h4 className='show-card-year'>({year})</h4>
      <p className='show-card-description'>{description}</p>
    </div>
  </div>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
}

module.exports = ShowCard
