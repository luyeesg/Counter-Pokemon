import React from "react";
import "./styles/cardsyntax.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search } from "../redux/user";
import { useSelector } from "react-redux";

//CardSyntax toma la informacón de Cards, la organiza y la muestra

const CardSyntax = ({ pokemon }) => {
  const setting = useSelector((state) => state.setting.value);
  const dispatch = useDispatch();
  const type = pokemon.types[0].type.name;
  const type2 = pokemon.types.length > 1 ? pokemon.types[1].type.name : "";

  const handleOnClick = () => {
    dispatch(search({ searchTerm: "" }));
  };

  return (
    <div className="pokemon" onClick={handleOnClick}>
      <Link to={`/view/${pokemon.name}`}>
        <div className="pokemon-container">
          <div
            className="background-container"
            style={
              setting.darkModeActive
                ? { backgroundColor: "#181818" }
                : { backgroundColor: "white" }
            }
          >
            <div className="cards-container">
              <div className="pokemon-img-container">
                <img
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  title={pokemon.name}
                />
              </div>
              <p
                className="title"
                style={
                  setting.darkModeActive
                    ? { color: "white" }
                    : { color: "black" }
                }
              >
                {pokemon.name}
              </p>
              <div className="pokemon-types">
                <p className={`types ${type}`}>{type}</p>
                {pokemon.types.length > 1 ? (
                  <p className={`types ${type2}`}>
                    {pokemon.types[1].type.name}
                  </p>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardSyntax;
