import React from 'react';
import { Link } from 'react-router-dom';
import fetchPlanets from '../actions/fetchPlanets';

export default class PlanetContainer extends React.Component {
    
    state = {
        id: 0,
        name: undefined,
        inhabitants: undefined,
        population: 0,
        garrisonId: 0,
        planetsArray: []
    }

    componentDidMount() {
        planetsArray = fetchPlanets();
        this.setState(state.planetsArray)
        
    };

    renderPlanets = planetsArray
    render() {

        
        return (
            <div>
                <h1>This is the PlanetContainer!</h1>
                
            </div>
        )
    }
}