import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Nav() {

    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        window.addEventListener("scroll",() =>{
        if(window.scrollY > 50){
            setShow(true);
        }else{
            setShow(false);
        }
        });
        return()=>{
            window.removeEventListener("scroll", ()=>{})
        };
    },[]);

    const handleChange = (e)=> {
        setSearchValue(e.target.value);
        navigate(`\search?q=${e.target.value}`)
    };

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <Link to='/'>
            <img
                alt="Netflix logo"
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png"
                className='nav__logo'
                // onClick={()=>window.location.reload()}
            />
        </Link>
        <input
            value={searchValue}
            onChange={handleChange}
            className='nav__input'
            type='text'
            placeholder='영화를 검색해주세요'
        />

        <img 
            alt='User logged'
            src='https://cdn-icons-png.flaticon.com/512/6681/6681204.png'
            className='nav__avatar'
        />
    </nav>
  )
}
