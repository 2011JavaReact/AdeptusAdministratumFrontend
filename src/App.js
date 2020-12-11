import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBarContainer from "./containers/NavBarContainer.js";
import Login from "./components/user/Login";
import Logout from "./components/user/Logout";
import Home from "./components/Home";
import PlanetContainer from "./containers/PlanetContainer";
import PlanetDetail from "./components/planet/PlanetDetail";
import AddPlanet from "./components/planet/AddPlanet";
import EditPlanet from "./components/planet/EditPlanet";
import GarrisonContainer from "./containers/GarrisonContainer";
import GarrisonDetail from "./components/garrison/GarrisonDetail";
import AddGarrison from "./components/garrison/AddGarrison";
import EditGarrison from "./components/garrison/EditGarrison";
import FooterContainer from "./containers/FooterContainer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="nav-div">
            <NavBarContainer />
          </div>
          <div className="app-div">
            <Switch>
              <Route
                exact
                path="/"
                render={(routerProps) => <Home {...routerProps} />}
              />
              <Route exact path="/planets" component={PlanetContainer} />
              <Route exact path="/planets/new" component={AddPlanet} />
              <Route
                exact
                path="/planets/:id/edit"
                render={(routerProps) => <EditPlanet {...routerProps} />}
              />
              <Route
                exact
                path="/planets/:id"
                render={(routerProps) => <PlanetDetail {...routerProps} />}
              />
              <Route exact path="/garrisons" component={GarrisonContainer} />
              <Route exact path="/garrisons/new" component={AddGarrison} />
              <Route
                exact
                path="/garrisons/:id/edit"
                render={(routerProps) => <EditGarrison {...routerProps} />}
              />
              <Route
                exact
                path="/garrisons/:id"
                render={(routerProps) => <GarrisonDetail {...routerProps} />}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
            </Switch>
          </div>
          <div>
            <FooterContainer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
