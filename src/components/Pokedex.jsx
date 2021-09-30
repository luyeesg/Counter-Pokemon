import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import Cards from "./Cards";
import "./styles/searchbar.css";
import { useDispatch } from "react-redux";
import { search } from "../redux/user";
import { useSelector } from "react-redux";
import { darkMode } from "../redux/setting";

import dark from "../imgs/dark-mode-icon.png";
// import settings from "../imgs/settings-icon.png";

// Pokedex fetchea un array con todo los pokemon y envia la información al componente Cards

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
        <img
          src={dark}
          onClick={handleOnClickDarkMode}
          alt="Dark Mode"
          title="Dark Mode"
        />
        {/* <img src={settings} alt="Settings" title="Settings" /> */}
      </div>
      <div className="container">
        {pokemon.map((poke, i) => (
          <Cards pokemon={poke} key={i} />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
