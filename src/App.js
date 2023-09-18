import React from 'react'
import './App.css';
import { Nav } from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import { requests } from './api/requests';
import Footer from './components/Footer';

function App() {
  console.log("app::::requests:::"+requests.fetchNetfilxOriginals)
  return (
     /*className="App"*/
    <div>
      <Nav />
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
      <Footer/>
    </div>
  )
}

export default App