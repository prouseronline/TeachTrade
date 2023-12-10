import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
//import { isFileServingAllowed } from 'vite';
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);

    const {pathname} = useLocation()

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true): setActive(false);
    }

    useEffect(()=>{
        window.addEventListener("scroll", isActive);

        return ()=>{
            window.removeEventListener("scroll", setActive);
        }
    }, []);

    const currentUser= {
        id: 1,
        username: "Arseny Nikitin",
        isSeller: true
    }


  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                 <Link to="/" className='link'>
                 <span className='text'>TeachTrade</span>
                 </Link>
            </div>
            <div className="links">
                <span>fiverr business</span>
                <span>explore</span>
                <span>english</span>
                <span>Sign in</span>
                {!currentUser?.isSeller && <span>Become a seller</span>}
                {!currentUser && <button>Sign in</button>}
                {currentUser && (
                    <div className='user' onClick={()=>setOpen(!open)}> 
                        <img src='' alt='' />
                        <span>{currentUser?.username}</span>
                        {open && <div className='options'>
                        {
                            currentUser?.isSeller && (
                                <>
                                <Link className='link' to="/mygigs">Gig</Link>
                                <Link className='link' to="/add">Add new gig</Link>
                                </>
                        )}
                        <Link className='link' to="/orders">Orders</Link>
                        <Link className='link' to="/messages">Messages</Link>
                        <Link className='link' to="/">Logout</Link>
                    </div>}
                    </div>
                )}
            </div>
        </div>
        {(active || pathname !=="/")&& (
            <>
                <hr />
                <div className='menu'>
                    <Link className="link menuLink" to="/">
                    Graphics & Design
                    </Link>
                    <Link className="link menuLink" to="/">
                    Video & Animation
                    </Link>
                    <Link className="link menuLink" to="/">
                    Writing & Translation
                    </Link>
                    <Link className="link menuLink" to="/">
                    AI Services
                    </Link>
                    <Link className="link menuLink" to="/">
                    Digital Marketing
                    </Link>
                    <Link className="link menuLink" to="/">
                    Music & Audio
                    </Link>
                    <Link className="link menuLink" to="/">
                    Programming & Tech
                    </Link>
                    <Link className="link menuLink" to="/">
                    Business
                    </Link>
                    <Link className="link menuLink" to="/">
                    Lifestyle
                    </Link>
                </div>
            </>
        )}
    </div>
  )
}
