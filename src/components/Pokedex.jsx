import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import Cards from "./Cards";
import "./styles/searchbar.css";
import { useDispatch } from "react-redux";
import { search } from "../redux/user";

// Pokedex fetchea un array con todo los pokemon y envia la información al componente Cards

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=251&offset=0`)
      .then((res) => setPokemon(res.data.results));
  }, []);

  const handleOnChange = (e) => {
    dispatch(search({ searchTerm: e.target.value }))
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>counterpokemon.com</title>
      </Helmet>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Looking for a Pókemon?"
          className="search"
          onChange={handleOnChange}
        />
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
