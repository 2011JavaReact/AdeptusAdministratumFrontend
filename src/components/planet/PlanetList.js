import React from "react";
import {Link} from 'react-router-dom';

const PlanetList = (props) => {
  // console.log("props in planet list component planets: ", props.planetArray[0]);
  // console.log("props in planet list component garrisons: ", props.garrisonArray[0]);
  // console.log("garrison test: ", props.garrisonArray.find(garrison => garrison.id === props.planetArray[0].garrison_id));

  return (
    <table className="planet-table">
      <thead>
        <tr>
          <th>Planet ID</th>
          <th>Planet Name</th>
          <th>Inhabitants</th>
          <th>Population</th>
          <th>View Details</th>
          
        </tr>
      </thead>
      <tbody>
        {props.planetArray.map((planet) => {
          return (
            <tr key={planet.id}>
              <td>{planet.id}</td>
              <td>{planet.name}</td>
              <td>{planet.inhabitants}</td>
              <td>{planet.population}</td>
              <td><Link exact="true" to={`/planets/${planet.id}`}>Get Planet Details</Link></td>
              {/* For now... not working before fetch.  Plan to just display when clicking on planet for more detail... */}
              {/* <td>{props.garrisonArray.find(garrison => garrison.id === props.planet.garrison_id)}</td> */}
              {/* <td>{props.garrisonArray.find(garrison => garrison.id === props.planet.garrison_id).size || 0}</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PlanetList;
