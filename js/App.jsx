import React from 'react'

const App = () => {
  return (
    <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <input className='search' type='text' placeholder='Search' />
        <button className='search-all'>or Search All</button>
      </div>
    </div>
  )
}

module.exports = App
