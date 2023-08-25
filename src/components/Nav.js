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
            src="https://i.namu.wiki/i/3Z-ATH8Xfe9Y_1uGnUM9AfvVT35ZFt0SvKfDXMPGwnGLdmot3_x4Igwcwajl1OEabUGFHTRQ2ZbJaWtVH9ibiw.svg"
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
