import { useEffect, useState } from 'react' 
import Moviecard from './moviecard';

import './App.css';
import searchIcon from './assets/react.svg';
const Api_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=9a7dfc18'

const movie1 = {
    "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
    "Year": "2007",
    "imdbID": "tt1132238",
    "Type": "movie",
    "Poster": "N/A"
}
const App = () => {
    const [movies,setMoviess] = useState([]);
    const [serachTerm, ssetSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${Api_URL}&s=${title}`);
        const data = await response.json();
        setMoviess(data.Search);
    }
    
    useEffect(() => {
        searchMovies('spiderman');
    }, [] );


    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input type="text" placeholder='search for movie' value={serachTerm}onChange={(e) => (ssetSearchTerm(e.target.value))} />
                <img src={searchIcon} alt="search" onClick={() => searchMovies(serachTerm)} />
            </div>
            
            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <Moviecard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                    <h2>No movies found</h2>
                    </div>
                )}
        </div>
    )
}

export default App;
