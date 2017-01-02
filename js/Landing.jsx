import React from 'react'
import { Link } from 'react-router'

const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <input className='search' type='text' placeholder='Search' />
        <Link to='/search' className='search-all'>or Search All</Link>
      </div>
    </div>
  )
}

module.exports = Landing
