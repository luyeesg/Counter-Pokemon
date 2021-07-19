import React from "react";
import Pokedex from "./components/Pokedex";
import PokemonProvider from "./context/PokemonContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonView from "./components/PokemonView"

const App = () => {
  return (
    <>
      <div className="app">
        <PokemonProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Pokedex />
              </Route>
              <Route path="/pokemonview">
                <PokemonView />
              </Route>
            </Switch>
          </Router>
        </PokemonProvider>
      </div>
    </>
  );
};

export default App;
