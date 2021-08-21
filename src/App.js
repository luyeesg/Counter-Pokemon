import React from "react";
import Pokedex from "./components/Pokedex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonView from "./components/PokemonView";
import SearchProvider from "./context/SearchContext";

const App = () => {
  return (
    <>
      <div className="app">
        <SearchProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Pokedex />
              </Route>
              <Route path="/view/:pokemon">
                <PokemonView />
              </Route>
            </Switch>
          </Router>
        </SearchProvider>
      </div>
    </>
  );
};

export default App;
