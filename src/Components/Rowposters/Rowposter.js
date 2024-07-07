import React, { useEffect, useState } from 'react'
import "./Roposter.css"
import YouTube from 'react-youtube'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/constants'

function Rowposter(props) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      playsinline: 0,
    },
  };
  const [movies, setMovies] = useState([])
  const [yurl, setyUrl] = useState('')
  useEffect(() => {

    axios.get(props.url).then(response => {
      console.log(response.data);
      setMovies(response.data.results)
    })

  }, [])

  const handleMovie = (id) => {
    // console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(rspnse => {
      if (rspnse.data.results.length !== 0) {
        setyUrl(rspnse.data.results[0])
      }
    })
  }
  return (
    <div className='row'>
      <h3 className="title">{props.tittle}</h3>
      <div className='posters'>
        {movies.map((obj) => <img  className={props.isSmall ? 'small-poster' : 'poster'} src={!props.isSmall ? `${imageUrl + obj.backdrop_path}` : `${imageUrl + obj.poster_path}`} alt="" onClick={() => handleMovie(obj.id)} />


        )}

      </div>
      {yurl && <YouTube videoId={yurl.key} opts={opts} />}
    </div>
  )
}

export default Rowposter