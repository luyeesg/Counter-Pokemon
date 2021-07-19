import React from "react";
import "./styles/showpokemonview.css";
import {getCounter} from "./counter"

const ShowPokemonView = ({ pokemon }) => {

  return (
    <div className="show-pokemon">
      <h2 className="show-title">{pokemon.name}</h2>
      <div className="show-pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          title={pokemon.name}
          className="show-pokemon-img"
        />
      </div>
      <div className="show-pokemon-types">
        <p className="show-types">{pokemon.types[0].type.name}</p>
        {pokemon.types.length > 1 ? (
          <p className="show-types">{pokemon.types[1].type.name}</p>
        ) : (
          <span></span>
        )}
        <div className="show-counter">
          <h2>
            {pokemon.name} is weak against{" "}
            {getCounter(pokemon.types[0].type.name)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ShowPokemonView;
