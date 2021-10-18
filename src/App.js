import React from "react";
import Pokedex from "./pages/Pokedex";
import PokemonView from "./pages/PokemonViewContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
