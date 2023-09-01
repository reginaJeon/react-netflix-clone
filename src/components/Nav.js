import React, { useEffect, useState } from 'react'
import './Nav.css'

export const Nav = () => {

    const [show, setShow] = useState(false);


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

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img
            alt="Netflix logo"
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png"
            className='nav__logo'
            onClick={()=>window.location.reload()}
        />
        <img 
            alt='User logged'
            src='https://cdn-icons-png.flaticon.com/512/6681/6681204.png'
            className='nav__avatar'
        />
    </nav>
  )
}
