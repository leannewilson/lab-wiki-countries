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
  }, [props]);

  return (
    <div className="col-7">
      <h1>{country.name?.common}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>{country.borders}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
