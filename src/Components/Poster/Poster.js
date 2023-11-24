import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
import {imageUrl ,API_KEY} from '../../Constants/Constats'
import "./Poster.css"
function Poster(props) {
  const [movies, setMovies] = useState()
  const [urlId, setUrlId] = useState('')
  const opts = {
    height: '490',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('NETWORK ERROR')
      })
  
  }, [props.url])

  const youtubeLink=(id)=>{
    console.log(id); 
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data); 
      if(response.data.results.length!==0){
        setUrlId(response.data.results[10])
      }else{
        alert("vedio not available")
      }
    }).catch(error => {
      console.error('Error:', error); // Log any errors for debugging
      alert("Error fetching video information");
      });
    
  }

  if (!movies) {
    return null; 
  }
  
  return (
    <div>
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
              {movies.map((obj)=>
              
                <img onClick={()=>youtubeLink(obj.id)} key={obj.id} className={props.isSmall ?'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
              )}
            </div>
           { urlId && <YouTube videoId={urlId} opts={opts} /> }      
        </div>
    </div>
  )
}

export default Poster