import React from 'react';
import { Link } from 'react-router-dom';
import fetchPlanets from '../actions/fetchPlanets';

export default class PlanetContainer extends React.Component {
    
    componentDidMount() {
        fetchPlanets()
    };

    render() {

        
        return (
            <h1>This is the PlanetContainer!</h1>
        )
    }
}