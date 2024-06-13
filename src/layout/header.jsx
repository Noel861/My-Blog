import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoSunnySharp } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { useState } from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

const Header = () => {

const [data, setData] = useState(null)
const [print, setPrint] = useState(false)
function getData(event)
{
  setData(event.target.value)
  setPrint(false)
  console.log(event.target.value)
}

    return (

    <div className='header'>

    <header>
    <div><div className="Logo">
                    <img src={Logo} alt="" />
                    <h2>Meta<span>Blog</span></h2>
                    </div>
                    </div>
                    <div className="nav_links">
                    <ul>
                    <li>
                    <a href><Link to="/">Home</Link></a>
                    </li>
                    <li>
                    <a href><Link to="./Blog">Blog</Link></a>
                    </li>
                    <li>
                    <a href><Link to="./Post">Single Post</Link></a>
                    </li>
                    <li>
                    <a href><Link to="./Author">Author</Link></a>
                    </li>  
                    <li>
                    <a href><Link to="./Contact">Contact</Link></a>
                    </li>
                    </ul>
                    <div class="container">
                    <form action="javascript:alert('submitted');">
                    <input type="text" placeholder="Search..." className='Searching' onChange={getData}></input>
                    <div class="search"></div>
                    <button id='container_button' onClick={()=>setPrint(true)}>
                    <FaSearch />
                   </button>
                   </form>
                   
                    <label className="switch" >
                    <input type="checkbox"></input>
                    <span className="slider round"  data-theme="light"></span>
                    </label>
                    <IconContext.Provider value={{ className: "sun" }}>
                    <IoSunnySharp />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: "moon" }}>
                    <IoIosMoon />
                    </IconContext.Provider>
                        </div>

                    </div>
    </header>
    </div>

    )
}

export default Header