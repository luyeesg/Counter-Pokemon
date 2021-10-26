import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import CardsContainer from "../components/CardsContainer";
import "../styles/searchbar.css";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/user";
import { darkMode } from "../redux/setting";

import dark from "../imgs/dark-mode-icon.svg";
import github from "../imgs/github.svg";

// Pokedex es el componente padre de CardsContainer - Cards
// Pokedex fetchea un array con todo los pokemon y envia la información al componente CardsContainer

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const setting = useSelector((state) => state.setting.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`)
      .then((res) => setPokemon(res.data.results));
  }, []);

  const handleOnChange = (e) => {
    dispatch(search({ searchTerm: e.target.value }));
    e.preventDefault();
  };

  const handleOnClickDarkMode = () => {
    dispatch(darkMode({ darkModeActive: !setting.darkModeActive }));
  };

  return (
    <>
      <Helmet>
        <title>counterpokemon.com</title>
        <style>
          {setting.darkModeActive
            ? "body { background-color: #303030; }"
            : "body { background-color: #EFEFEF; }"}
        </style>
      </Helmet>
      <div className="searchbar">
        <input
          type="text"
          value={user.searchTerm}
          placeholder="Looking for a Pókemon?"
          className="search"
          onChange={handleOnChange}
          style={
            setting.darkModeActive
              ? { backgroundColor: "#232323", color: "white" }
              : { backgroundColor: "#DDDDDD" }
          }
        />
      </div>
      <div className="icons-container">
        <a
          href="https://github.com/yerovyespitia/counterpokemon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="github-icon"
            src={github}
            alt="Github"
            title="Github"
            style={
              setting.darkModeActive
                ? {
                    filter:
                      "invert(100%) sepia(100%) saturate(0%) hue-rotate(305deg) brightness(102%) contrast(102%)",
                  }
                : {
                    filter:
                      "invert(0%) sepia(92%) saturate(0%) hue-rotate(26deg) brightness(102%) contrast(103%)",
                  }
            }
          />
        </a>
        <img
          className="darkmode-icon"
          src={dark}
          onClick={handleOnClickDarkMode}
          alt="Dark Mode"
          title="Dark Mode"
          style={
            setting.darkModeActive
              ? {
                  filter:
                    "invert(100%) sepia(100%) saturate(0%) hue-rotate(305deg) brightness(102%) contrast(102%)",
                }
              : {
                  filter:
                    "invert(0%) sepia(92%) saturate(0%) hue-rotate(26deg) brightness(102%) contrast(103%)",
                }
          }
        />
      </div>
      <div className="container">
        {pokemon.map((poke, i) => (
          <CardsContainer pokemon={poke} key={i} />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
