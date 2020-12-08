import React from "react";
import {Link} from 'react-router-dom';

const GarrisonList = (props) => {
  // console.log("props in planet list component planets: ", props.planetArray[0]);
  // console.log("props in planet list component garrisons: ", props.garrisonArray[0]);
  // console.log("garrison test: ", props.garrisonArray.find(garrison => garrison.id === props.planetArray[0].garrison_id));

  return (
    <table className="planet-table">
      <thead>
        <tr>
          <th>Garrison ID</th>
          <th>Chapter Name</th>
          <th>Size</th>
          <th>View Details</th>
        </tr>
      </thead>
      <tbody>
        {props.garrisonArray.map((garrison) => {
          return (
            <tr key={garrison.id}>
              <td>{garrison.id}</td>
              <td>{garrison.chapter}</td>
              <td>{garrison.size}</td>
              <td><Link exact="true" to={`/garrisons/${garrison.id}`}>Get Garrison Details</Link></td>
             
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GarrisonList;
