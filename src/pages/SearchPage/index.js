import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { instance } from '../../api/axios';

export default function SearchPage() {
  //console.log('useLocation()',useLocation())
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {     
    return new URLSearchParams(useLocation().search);
  };  
  let query = useQuery();
  const searchTerm = query.get("q");
  console.log(searchTerm)

  useEffect(() => {
    if(searchTerm){
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm])
  
  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await instance.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
      console.log("request.data.results",request.data.results);
    } catch (error) {
      console.log("error",error);
    }
  };

  // const renderSearchResults = () => {
  //   return searchResults.length > 0 ?(
  //     <section className='search-container'>
  //       {searchResults.map((movie)=>{
  //         if(movie.backdrop_path !== null && movie.media_type !== "person"){
  //           const movieImageUrl = 
  //             "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
  //             return (
  //               <div className='movie'>
  //                 <div className='movie__column-poster'>
  //                   <img src={movieImageUrl} alt='' className='movie__poster'/>
  //                 </div>
  //               </div>
  //             );
  //         }
  //       })}
  //     </section>
  //   )
  // }

  return (
    <div>index</div>
  )
} 
