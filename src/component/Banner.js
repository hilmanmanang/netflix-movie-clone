import React, { useState, useEffect } from 'react'
import axios from '../axios';
import requests from '../request';
import '../component/Banner.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData()
    }, [])

    function subs(str) {
        return str?.length > 150 ? str.substr(0, 149) + "..." : str;
    }

    return (
        <header 
            className="banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
                backgroundPosition: "center center"
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{subs(movie?.overview)}</h1>
            </div>
            <div className="banner__fade" />
        </header>
    )
}

export default Banner
