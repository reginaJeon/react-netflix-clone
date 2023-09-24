import React from 'react'
import './App.css';
import { Nav } from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import { requests } from './api/requests';
import Footer from './components/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';



const Layout = () => {
  return(
    <div>
      <Nav/>

      <Outlet/>

      <Footer/>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route index element={<MainPage/>}></Route>
        <Route path=':movieId' element={<DetailPage/>}></Route>
        <Route index element={<SearchPage/>}></Route>
      </Routes>

    </div>
  )
}

export default App