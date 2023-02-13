//moviedetail component

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {

    const [movie, setMovie] = useState({}); //creating an empty usestate object
    const {id} = useParams(); // getting the id value from the router path /blogs/:id @app.js
    // fetchig data on page render with id value
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=20bd7cf3&i=${id}`)
        .then((res) => res.json())
        .then((data) => {
            setMovie(data);
        })
        .catch((error) => {
            console.error(error);
        });
        //searchMovie('superman');
    }, [id]);
    return (
        <section className="movieDetail">
            <Link to='/'>
                <img src="https://img.icons8.com/officexs/16/null/less-than.png" 
                    alt="back icon" 
                    className="back-icon"
                />
            </Link>
            <div className="details-container">
                <div className="top">
                    <div className="top1">
                        <p className="title">{movie.Title} ({movie.Year})</p>
                        <p className="genre">{movie.Genre} {movie.Runtime}</p>
                    </div>
                    <p>{movie.imdbRating}</p>
                </div>
                <div className="body">
                    <img 
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
                        alt={movie.Title + ' image'}
                    />
                    <div className="details">
                        <h3>About the Movie</h3>
                        <p className="plot">{movie.Plot}</p>
                        <div className="casts">
                            <p className="actors"><span>Actors: </span>{movie.Actors}</p>
                            <p className="writers"><span>Writer(s): </span>{movie.Writer}</p>
                            <p className="director"><span>Director: </span>{movie.Director}</p>
                        </div>
                        <div className="bottom">
                            <p>{movie.Rated}</p>
                            <p className="language">{movie.Language}</p>
                        </div>
                    </div>
                    <div className="space"></div>
                </div>
            </div>
        </section>
    );
}
 
export default MovieDetail;