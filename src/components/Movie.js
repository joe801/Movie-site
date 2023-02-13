//component for single movie

const Movie = ( {Title, Poster, Year}) => {
    return ( 
        <section className="movie">
            <div className="movieContain">
                <img 
                src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} 
                alt={Title + ' image'} />
                <div className="movieHeading">
                    <h3>{Title}</h3>
                    <p>{Year}</p>
                </div>
            </div>
        </section>
     );
}
 
export default Movie;