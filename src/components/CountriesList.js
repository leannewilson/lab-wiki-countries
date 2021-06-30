import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList(props) {
  const ShowCountries = () => {
    return countries.map((eachCountry) => {
      return (
        <li>
          <Link to={`/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
        </li>
      );
    });
  };

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        <a className="list-group-item list-group-item-action">
          <ShowCountries />
        </a>
      </div>
    </div>
  );
}

export default CountriesList;
