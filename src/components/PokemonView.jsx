import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import ShowPokemonView from "./ShowPokemonView";
import { useParams } from "react-router";

// PokemonView fetch the pokemon name to display it in a new view

const PokemonView = () => {
  const [pokemon, setPokemon] = useState([]);
  // Params toma el nombre del pokemon desde el url del pokemon al que entramos
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
      .then((res) => setPokemon([res.data]));
  }, [params.pokemon]);

  return (
    <>
      <Helmet>
        <title>counterpokemon.com | {params.pokemon}</title>
      </Helmet>
      {pokemon.map((poke, i) => (
        <ShowPokemonView pokemon={poke} key={i} />
      ))}
    </>
  );
};

export default PokemonView;
