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
    <div className="countryList">
      <ShowCountries />
    </div>
  );
}

export default CountriesList;
