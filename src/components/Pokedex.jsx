import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
      .then((res) => setPokemon(res.data.results));
  }, []);

  return (
    <>
      {pokemon.map((poke, i) => (
        <Cards pokemon={poke} key={i} />
      ))}
    </>
  );
};

export default Pokedex;
