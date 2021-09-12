import React from "react";
import "./styles/showpokemonview.css";
// import { getCounter } from "./counter";
import { superEffective, Effective, Immute } from "./counter";

const ShowPokemonView = ({ pokemon }) => {
  const type = pokemon.types[0].type.name;
  const type2 = pokemon.types.length > 1 ? pokemon.types[1].type.name : "";

  return (
    <div className={`show-pokemon ${type}`}>
      <h2 className="show-title">{pokemon.name}</h2>
      <p className="show-pokemon-id">#{pokemon.id}</p>
      <div className="show-pokemon-img-container">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          title={pokemon.name}
          className="show-pokemon-img"
        />
      </div>
      <div className="show-pokemon-types">
        <span className={`show-types show-${type}`}>{type}</span>
        {pokemon.types.length > 1 ? (
          <span className={`show-types show-${type2}`}>
            {pokemon.types[1].type.name}
          </span>
        ) : (
          <span></span>
        )}
      </div>
      <div className="show-counter-container">
        <div className="show-counter">
          <h3 className="show-effectiness">Super Effective</h3>
          {superEffective(type, type2)}
          <h3 className="show-effectiness">Effective</h3>
          {Effective(type, type2)}
          <h3 className="show-effectiness">Immute</h3>
          {Immute(type, type2)}
        </div>
      </div>
    </div>
  );
};

export default ShowPokemonView;
