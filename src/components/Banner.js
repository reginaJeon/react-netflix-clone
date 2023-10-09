import {instance} from '../api/axios';
import React, { useEffect, useState } from 'react'
import { requests } from '../api/requests';
import './Banner.css'
import { styled } from 'styled-components';

export default function Banner() {
    const [movie, setMovie]= useState([]);
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
      fetchData();
    }, []);
    
    const fetchData = async()=>{
      //현재 상영중인 영화정보 가져오기(여러영화)
      // await : 비동기로 영화정보를 받아 옴
      const request = await instance.get(requests.fetchNowPlaying)
      
      // 여러 영화 중 영화 하나의 ID를 가져오기      
      let rd =  Math.floor(Math.random() * request.data.results.length);
      const movieId = request.data.results[rd].id;

      //특정 영화의 더 상세한 정보를 가져오기(비디오정보 포함)
      const {data: movieDetail} = await instance.get(`movie/${movieId}`,{
        params: {append_to_response: "videos"},
      });     
      setMovie(movieDetail);

      console.log(movieDetail); //아. data밑에 나오는 정보들을 다 movieDetail이라는 명칭으로 불러와서 써라...
      console.log("video ::", movieDetail.videos.results.length); //video가 있어야, 버튼 눌렀을때 key값이 있어서 에러가 나지 않음
    };

    const truncate = (str, n) =>{
      return str?.length > n ? str.substr(0, n - 1) + "..." : str ;
    };

    if(!isClicked){
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
                  <button className='banner__button play' onClick={()=>setIsClicked(true)}>PLAY</button>
                  <button className='banner__button info'>More Information</button>
                </div>
                <h1 className='banner__description'>{truncate(movie?.overview,100)}</h1>
          </div>
          <div className='banner__fadeBottom'></div>
        </header>
      )
    }else{
      const srcval = movie.videos.results[0]
                    ? movie.videos.results[0].key+'?controls=0&autoplay=1&loop=1&mute=1&playlist='+movie.videos.results[0].key
                    : 'zCi9ABxuQZQ?si=o0voly4WcLUzZm4z'
                    ;
                    console.log('srcval'+srcval);
      return (
        <Container>
          <HomeContainer>
            <Iframe
              width="650"
              height="350"
              src={`https://www.youtube.com/embed/${srcval}`}
              title={`movie.title`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="allowFullScreen">
              </Iframe>
          </HomeContainer>
        </Container>
      )
    }  
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  aligh-items: center;
  flex-direction: column;
  width : 100%;
  height: 100vh;
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Iframe = styled.iframe `
  width : 100%;
  height : 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
`

