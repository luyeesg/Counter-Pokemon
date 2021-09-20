import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CardSyntax from "./CardSyntax";
import { SearchContext } from "../context/SearchContext";

//Cards toma la información de Pokedex y la fetchea de nuevo, la guarda en un array y la envia a CardSyntax

const Cards = ({ pokemon }) => {
  const [allPokemon] = useState([pokemon.url]);
  const [showPokemon, setShowPokemon] = useState([]);
  const [searchTerm] = useContext(SearchContext);

  useEffect(() => {
    allPokemon.map((poke) =>
      axios.get(`${poke}`).then((res) => setShowPokemon([res.data]))
    );
  }, [allPokemon]);

  return (
    <>
      {showPokemon
        .filter((p) => {
          if (searchTerm === "") {
            return <CardSyntax pokemon={p} key={p} />;
          } else if (p.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return <CardSyntax pokemon={p} key={p} />;
          }
          return false
        })
        .map((p, i) => (
          <CardSyntax pokemon={p} key={i} />
        ))}
    </>
  );
};

export default Cards;
