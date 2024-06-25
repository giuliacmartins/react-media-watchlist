import React, { useEffect, useState } from 'react'
import './Media.css';

function Media() {

    const [mediaList,setMediaList] = useState([])

    const getMedia = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=62a4a3b710649252ad7094ec0596a769")
        .then(res => res.json())
        .then(json => setMediaList(json.results))
        .catch((error) => console.error("Error fetching media data:", error));
    }

    useEffect(() => {
        getMedia()
    }, [])

    console.log(mediaList)

    // return (
    //     <div>
    //         {mediaList.map((media) => (
    //             <div key={media.id}>
    //                 <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt={media.title} />
    //             </div>
    //         ))}
    //     </div>
    // )

    return (
        <div className="media-grid">
            {mediaList.map((media) => (
                <div key={media.id} className="media-item">
                    <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt={media.title} />
                    <div className="media-info">
                        <h3>{media.title}</h3>
                        <p>Genre: {/* Fetch and display genres here */}</p>
                        <p>Rating: {media.vote_average}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Media