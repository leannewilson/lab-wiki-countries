import logo from './logo.svg';
import { Switch, Link, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <div className="lists">
        <CountriesList countries={countries} />
        <Switch>
          <Route
            exact
            path="/:dynamicId"
            render={(props) => <CountryDetails {...props} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
