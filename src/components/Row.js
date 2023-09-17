import {instance} from '../api/axios';
import React, { useEffect, useState } from "react";
import "./Row.css"

export default function Row({title, id, fetchUrl,isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    fetchMovieData();
  }, []);  

  const fetchMovieData = async()=>{
    const request = await instance.get(fetchUrl);
    setMovies(request.data.results);
  // return request;
  }

  return (
    <section className='row'>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'>
            {"<"}
          </span>
        </div>
        <div id={id} className='row__posters'>
          {movies.map((movie)=>(
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              //src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path} `}
              loading='lazy'
              alt={movie.name}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'>
            {">"}
          </span>
        </div>
      </div>
    </section>
  )
}
