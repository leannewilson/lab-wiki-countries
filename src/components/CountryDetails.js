import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountryDetails(props) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    let countryDeets = countries.find(
      (eachCountry) => eachCountry.cca3 === props.match.params.dynamicId
    );
    setCountry(countryDeets);
  }, []);

  return (
    <div key={country.cca3}>
      {/* <div>{country.name.official}</div> */}
      <div>Capital: {country.capital}</div>
      <div>Area: {country.area}</div>
      <div>Borders: {country.borders}</div>
    </div>
  );
}

export default CountryDetails;
