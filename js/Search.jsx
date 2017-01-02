import React from 'react'
import ShowCard from './ShowCard'
// in order to import a json file, can do as below or via webpack loader
import data from 'json!../public/data.json'

const Search = () => (
  <div className='search-container'>
    <header className='header'>
      <h1 className='brand'>svideo</h1>
      <input type='text' className='search-input' placeholder='search' />
    </header>
    <div className='shows'>
      {data.shows.map((show) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

module.exports = Search
// {...show} means ...show in javascript which is illegal as it needs to be in {} bracket (as per ES7)
// so seems this is not really the ES7 spread operator as ES7 babel-loader is not reqd for this.
// This is a react thing (called JSX spread operator) where you think it produces title: my-title, but in
// reality it produces title='my-title' under the hood to the props object.
