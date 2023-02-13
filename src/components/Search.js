// movie input search components

import { useEffect, useState } from "react";
import Movies from "./Movies";

const Search = () => {
    const [title, setTitle] = useState(''); //usestate variable to get user input
    const [movielist, setMovielist] = useState([]); //usestate array to store movie data from fetch
    const API_LINK = `http://www.omdbapi.com/?apikey=20bd7cf3&plot=full`; //api url
    // function to fetch data from api and store in movielist
    const searchMovie = (name) => {
        const abortConst = new AbortController();
        if (name === '') {
            alert('Enter a movie');
        } else {
            fetch(`${API_LINK}&s=${name}`, {signal: abortConst.signal})
            .then((res) => {
                //condition for network error
                if(res.ok){
                    return res.json();
                } else{
                    alert('could not fetch data');
                    throw Error('could not fetch data from api');
                }
            })
            .then((data) => {
                setMovielist(data.Search);
                //setMovielist(data.Search);
            })
            .catch((err) => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                }
                else{
                    console.log(err);
                }
            });
        }
        setTitle('');
        return () => abortConst.abort();
    }

    useEffect(() =>{
        fetch(`${API_LINK}&s=avatar`)
        .then((res) => res.json())
        .then((data) => {
            setMovielist(data.Search);
        })
        .catch((err) => {
            console.error(err);
        });
    }, [API_LINK])
    return (
        <div className="container">
            <section className="search">
                <input 
                    type="text" 
                    placeholder="Search Movie" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <img
                    src="https://img.icons8.com/ios/50/000000/search--v1.png" 
                    alt="search-icon"
                    onClick={() => {searchMovie(title)}}
                />
            </section>
            <Movies movielist={movielist}/>
        </div>
     );
}
 
export default Search;