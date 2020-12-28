import './App.css';
import FilmListing from "./components/FilmListing";
import FilmDetails from "./components/FilmDetails";
import TMDB from './TMDB.js'

import './App.css';

function App() {

  const filmObject = TMDB.films;
  return (
    <div className="film-library">
      <div className="container">
        <FilmListing filmObject={filmObject} /></div>
      <FilmDetails data="TMDB.films" />
    </div>
  );
}


export default App;
