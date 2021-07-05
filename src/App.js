import React from 'react'
import Pokedex from './components/Pokedex'

const App = () => {
  return (
    <>
    <h1>Made with PokeAPI</h1>
    <div className="container">
      {/* <h1>Made with PokeAPI</h1> */}
      <Pokedex />
    </div>
    </>
  )
}

export default App
