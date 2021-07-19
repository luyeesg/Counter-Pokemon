import React, {useState} from 'react'

export const PokemonContext = React.createContext()

const PokemonProvider = (props) => {

 const [pokemonView, setPokemonView] = useState("bulbasaur")

 return (
  <PokemonContext.Provider value={[pokemonView, setPokemonView]}>
   {props.children}
  </PokemonContext.Provider>
 )
}

export default PokemonProvider