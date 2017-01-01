import React from 'react'
// in order to import a json file, can do as below or via webpack loader
import shows from 'json!../public/data.json'

const Search = () => (
  <pre>
    <code>
      {JSON.stringify(shows, null, 2)}
    </code>
  </pre>
)

module.exports = Search
