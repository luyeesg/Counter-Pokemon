import React from "react";
import Pokedex from "./components/Pokedex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonView from "./components/PokemonView";

const App = () => {
  return (
    <>
      <div className="app">
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
      </div>
    </>
  );
};

export default App;
