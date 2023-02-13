//coponent for movies

import { Link } from "react-router-dom";

import Movie from "./Movie";

const Movies = ( {movielist}) => {
    return ( 
        <section className="movies">
            {movielist.map((film) => (
                <Link to={`/${film.imdbID}`} style={{textDecoration: 'none', color: '#EBE5E2'}}>
                    <Movie Title={film.Title} Poster={film.Poster} Year={film.Year} key={film.imdbID}/>
                </Link>
            ))}
        </section>
     );
}
 
export default Movies;