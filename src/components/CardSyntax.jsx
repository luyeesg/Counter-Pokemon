import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import "./styles/cardsyntax.css";
import { Link } from "react-router-dom";

// CardSyntax Components show the way the data should be display

const CardSyntax = ({ pokemon }) => {
  // pokemonView takes the pokemon name and save it to fetch it in PokemonView Component
  const [pokemonView, setPokemonView] = useContext(PokemonContext);

  const handleOnClick = () => {
    setPokemonView(pokemon.name);
  };

  return (
    <div className="pokemon" onClick={handleOnClick}>
      <Link to={`/pokemonview`}>
        <h2 className="title">{pokemon.name}</h2>
        <div className="pokemon-img-container">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            title={pokemon.name}
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
      </Link>
    </div>
  );
};

export default CardSyntax;
