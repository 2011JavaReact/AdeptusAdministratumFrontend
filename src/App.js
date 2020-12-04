import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import PlanetContainer from './containers/PlanetContainer';

class App extends React.Component {
  render() {
  return (
    <Router>
      <div className="App">
        {/* NEED TO ADD COMPONENT FOR NAVBAR <div><NavBarContainer /></div> */}
        <div className='app-div'>
          <Route exact path="/" component={Home} />
          <Route exact path="/planets" component={PlanetContainer} />
          
        </div>
      </div>
    </Router>);
  }
}

export default App;
