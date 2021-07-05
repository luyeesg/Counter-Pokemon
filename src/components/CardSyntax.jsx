import React from "react";
import "./styles/cardsyntax.css"

const CardSyntax = ({pokemon}) => {
  return (
    <div className="pokemon">
      <h2 className="title">{pokemon.name}</h2>
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt=""
          className="pokemon-img"
        />
      </div>
      <div className="pokemon-types">
        <p className="types">{pokemon.types[0].type.name}</p>
        {pokemon.types.length > 1 ? (
          <p className="types">{pokemon.types[1].type.name}</p>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default CardSyntax;
