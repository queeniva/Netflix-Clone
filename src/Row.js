import React, { useEffect, useState } from 'react'
import axios from './axios';
// import YouTube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL , isLargeRow}) {

    const [movies, setmovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setmovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        },
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.original_title} />
                ))}
            </div>
            {/* <YouTube videoId={trailerUrl} opts={opts} /> */}
        </div>
    )
}
export default Row