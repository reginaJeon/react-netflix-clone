import {instance} from '../api/axios';
import React, { useEffect, useState } from "react";
import "./Row.css"
import MovieModal from './MovieModal';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Row({title, id, fetchUrl,isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({})
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  
  useEffect(() => {
    fetchMovieData();
  }, []);  

  const fetchMovieData = async()=>{
    const request = await instance.get(fetchUrl);
    setMovies(request.data.results);
  // return request;
  }

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <section className='row'>
      <h2>{title}</h2>
        
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        //spaceBetween={50}
        //slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log('slide change')}
      >
        <div id={id} className='row__posters'>
          {movies.map((movie)=>(
            <SwiperSlide>
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                loading='lazy'
                alt={movie.name}
                onClick={()=> handleClick(movie)}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

          {
            modalOpen && (
              <MovieModal {...movieSelected}
                setModalOpen={setModalOpen}
              ></MovieModal>
            )
          }
    </section>
  )
}
