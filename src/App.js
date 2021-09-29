import React from "react";
import Pokedex from "./components/Pokedex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonView from "./components/PokemonView";
import { useSelector } from "react-redux";

const App = () => {
  const setting = useSelector((state) => state.setting.value);

  return (
    <>
      <div
        className="app"
        style={
          setting.darkModeActive
            ? { backgroundColor: "#303030" }
            : { backgroundColor: "#EFEFEF" }
        }
      >
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
