import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../../api/axios';

export default function DetailPage() {
  let {movieId} = useParams();
  console.log('movieId',movieId)
  const [movies, setMovies] = useState({});

  useEffect(() => {
    async function fetchData(){
      const request = await instance.get(`/movie/${movieId}`);
      console.log('request', request);
      setMovies(request.data);
    }
    fetchData();
  }, [movieId]);

  if(!movies) return <div>...loading</div>;
  
  return (
    <section>
      <img 
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
        alt='modal__poster-img'
      />
    </section>
  )
}
