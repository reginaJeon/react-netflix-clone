import {instance} from '../api/axios';
import React, { useEffect, useState } from 'react'
import { requests } from '../api/requests';
import './Banner.css'

export default function Banner() {
    const [movie, setMovie]= useState([]);
    useEffect(() => {
      fetchData();
    }, []);
    
    const fetchData = async()=>{
      //현재 상영중인 영화정보 가져오기(여러영화)
      // await : 비동기로 영화정보를 받아 옴
      const request = await instance.get(requests.fetchNowPlaying)
      // 여러 영화 중 영화 하나의 ID를 가져오기
      const movieId = request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

      //특정 영화의 더 상세한 정보를 가져오기(비디오정보 포함)
      const {data: movieDetail} = await instance.get(`movie/${movieId}`,{
        params: {append_to_respons: "videos"},
      });
      setMovie(movieDetail);

      console.log(movieDetail); //아. data밑에 나오는 정보들을 다 movieDetail이라는 명칭으로 불러와서 써라...
    };

    const truncate = (str, n) =>{
      return str?.length > n ? str.substr(0, n - 1) + "..." : str ;
    };

  return (
    <header
      className='banner'
      style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: "top center",
              backgroundSize: "cover"
            }}
    >
      <div className='banner__contents'>
            <h1 className='banner__title'>{movie.title || movie.name || movie.original_title}</h1>
            <div className='banner__buttons'>
              <button className='banner__button play'>PLAY</button>
              <button className='banner__button info'>More Information</button>
            </div>
            <h1 className='banner__description'>{truncate(movie?.overview,100)}</h1>
      </div>
      <div className='banner__fadeBottom'></div>
    </header>
  )
}

