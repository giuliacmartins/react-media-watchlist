import React, { useEffect, useState } from 'react';
import './Media.css';

function Media() {
    const [mediaList, setMediaList] = useState([]);
    const [genres, setGenres] = useState({});

    const getMedia = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=62a4a3b710649252ad7094ec0596a769")
        .then((res) => res.json())
        .then((json) => setMediaList(json.results))
        .catch((error) => console.error("Error fetching media data:", error));
    };

    const getGenres = () => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=62a4a3b710649252ad7094ec0596a769")
        .then((res) => res.json())
        .then((json) => {
            const genresMap = {};
            json.genres.forEach((genre) => {
                genresMap[genre.id] = genre.name;
            });
            setGenres(genresMap);
        })
        .catch((error) => console.error("Error fetching genres:", error));
    };

    useEffect(() => {
        getMedia();
        getGenres();
    }, []);

    console.log(mediaList);

    const getGenreNames = (genreIds) => {
        return genreIds.map((id) => genres[id]).filter(Boolean).join(', ');
    };

    return (
        <div className="media-grid">
            {mediaList.map((media) => (
                <div key={media.id} className="media-item">
                    <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt={media.title} />
                    <div className="media-info">
                        <h3>{media.title}</h3>
                        <p>Genre: {genres ? getGenreNames(media.genre_ids) : 'Loading...'}</p>
                        <p>Rating: {media.vote_average}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Media;