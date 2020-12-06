import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBarContainer from './containers/NavBarContainer.js'
import Home from './Home';
import PlanetContainer from './containers/PlanetContainer';
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
          
        </div>
        <div><FooterContainer /></div>
      </div>
    </Router>);
  }
}

export default App;
