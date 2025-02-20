import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY ,imageUrl} from '../../Constants/constants'

function Banner() {
      const [movie, setMovie] = useState()

    useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        // console.log(response.data);
        const n=Math.floor(Math.random() * 10)
        setMovie(response.data.results[n]);
      })
    
    }, [])
    return (
        <div className='banner' style={{backgroundImage:`url(${imageUrl+(movie?movie.backdrop_path:"")})`}}>
            <div className="content">
                <h1 className="title">{movie ? movie.title: ""}</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">+ My list</button>
                    <h1 className="description">{movie ? movie.overview: ""}</h1>

                </div>
            </div>

            <div className="fade"></div>

        </div>
    )
}

export default Banner