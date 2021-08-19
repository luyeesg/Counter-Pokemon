import React from "react";
import "./styles/showpokemonview.css";
import { getCounter } from "./counter";

const ShowPokemonView = ({ pokemon }) => {

  const type = pokemon.types[0].type.name

  return (
    <div className={`show-pokemon ${type}`}>
      <h2 className="show-title">{pokemon.name}</h2>
      <div className="show-pokemon-img-container">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          title={pokemon.name}
          className="show-pokemon-img"
        />
      </div>
      <p className="show-pokemon-id">#{pokemon.id}</p>
      <div className="show-pokemon-types">
        <span className="show-types">{pokemon.types[0].type.name}</span>
        {pokemon.types.length > 1 ? (
          <span className="show-types">{pokemon.types[1].type.name}</span>
        ) : (
          <span></span>
        )}
      </div>
      <div className="show-counter-container">
        <h2 className="show-counter">
          {pokemon.name} is weak against{" "}
          {getCounter(pokemon.types[0].type.name)}
        </h2>
      </div>
    </div>
  );
};

export default ShowPokemonView;
