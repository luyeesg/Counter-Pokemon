import React, { useEffect, useState } from "react";
import axios from "axios";
import CardSyntax from "./CardSyntax";
import { useSelector } from "react-redux";

//Cards toma la información de Pokedex y la fetchea de nuevo, la guarda en un array y la envia a CardSyntax

const Cards = ({ pokemon }) => {
  const [allPokemon] = useState([pokemon.url]);
  const [showPokemon, setShowPokemon] = useState([]);
  const user = useSelector((state) => state.user.value)

  useEffect(() => {
    allPokemon.map((poke) =>
      axios.get(`${poke}`).then((res) => setShowPokemon([res.data]))
    );
  }, [allPokemon]);

  return (
    <>
      {showPokemon
        .filter((p) => {
          if (user.searchTerm === "") {
            return <CardSyntax pokemon={p} key={p} />;
          } else if (p.name.toLowerCase().includes(user.searchTerm.toLowerCase())) {
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
