import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

// Pokedex Components fetch all the pokemon and send the data to Cards 

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
      .then((res) => setPokemon(res.data.results));
  }, []);

  return (
    <div className="container">
      {pokemon.map((poke, i) => (
        <Cards pokemon={poke} key={i} />
      ))}
    </div>
  );
};

export default Pokedex;
