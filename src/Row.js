import React, { useEffect, useState } from 'react'
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL }) {

    const [movies, setmovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setmovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);
    console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters ">
                {movies.map(movie => (
                    <img className="row__poster row__posterLarge" src={`${base_url}${movie.poster_path}`}alt={movie.original_title} />
                ))}
            </div>
        </div>
    )
}
export default Row