import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import axios from "axios";
import ShowPokemonView from "./ShowPokemonView";

// PokemonView fetch the pokemon name to display it in a new view

const PokemonView = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonView] = useContext(PokemonContext);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonView}`)
      .then((res) => setPokemon([res.data]));
  }, [pokemonView]);

  return (
    <div className="show-container">
      {pokemon.map((poke, i) => (
       <ShowPokemonView pokemon={poke} key={i}/>
      ))}
    </div>
  );
};

export default PokemonView;