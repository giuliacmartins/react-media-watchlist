import React, { useEffect, useState } from 'react'

function Media() {

    const [mediaList,setMediaList] = useState([])

    const getMedia = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=62a4a3b710649252ad7094ec0596a769")
        .then(res => res.json())
        .then(json => setMediaList(json.results))
    }

    useEffect(() => {
        getMedia()
    }, [])

    console.log(mediaList)

    return (
        <div>
            {mediaList.map((media) => (
                <div key={media.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt={media.title} />
                </div>
            ))}
        </div>
    )
}

export default Media