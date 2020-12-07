import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBarContainer from './containers/NavBarContainer.js'
import Home from './Home';
import PlanetContainer from './containers/PlanetContainer';
import PlanetDetail from './components/planet/PlanetDetail';
import AddPlanet from './components/planet/AddPlanet';
import GarrisonContainer from './containers/GarrisonContainer';
import AddGarrison from './components/garrison/AddGarrison'
import FooterContainer from './containers/FooterContainer';

class App extends React.Component {
  render() {
  return (
    <Router>
      <div className="App">
        <div><NavBarContainer /></div>
        <div className='app-div'>
          <Route exact path="/" component={Home} />
          <Route exact path="/planets" component={PlanetContainer} />
          <Route exact path="/planets/new" component={AddPlanet} />
          {/* NEED TO ADD ACTUAL ID TO BELOW ROUTES AND PASS TO PLANET DETAIL... */}
          <Route exact path="/planets/:id" render={routerProps => <PlanetDetail {...routerProps} />} />
          <Route exact path="/garrisons" component={GarrisonContainer} />
          <Route exact path="/garrisons/new" component={AddGarrison} />
        </div>
        <div><FooterContainer /></div>
      </div>
    </Router>);
  }
}

export default App;
