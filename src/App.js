import React from "react";
import Pokedex from "./components/Pokedex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonView from "./components/PokemonView";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <>
      <div className="app">
        <Provider store={store}>
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
        </Provider>
      </div>
    </>
  );
};

export default App;
