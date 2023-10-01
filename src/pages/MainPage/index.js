import React from 'react'
import Banner from '../../components/Banner';
import Row from '../../components/Row';
import { requests } from '../../api/requests';

export default function MainPage() {
  
    console.log("app::::requests:::"+requests.fetchNetfilxOriginals);
    return (
    <div>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetfilxOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  )
}
