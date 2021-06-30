import logo from './logo.svg';
import { Switch, Link, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <CountriesList {...props} />}
        />

        <Route
          exact
          path="/:dynamicId"
          render={(props) => <CountryDetails {...props} />}
        />
      </Switch>

      <CountriesList />
    </div>
  );
}

export default App;
