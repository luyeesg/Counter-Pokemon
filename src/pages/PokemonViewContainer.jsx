import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import PokemonView from "../components/PokemonView";
import { useParams } from "react-router";

// PokemonViewContainer fetch the pokemon name to display it in a new view

const PokemonViewContainer = () => {
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
        <title>{params.pokemon} | counterpokemon.com</title>
      </Helmet>
      {pokemon.map((poke, i) => (
        <PokemonView pokemon={poke} key={i} />
      ))}
    </>
  );
};

export default PokemonViewContainer;
