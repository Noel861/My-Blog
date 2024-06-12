import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import  Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

<footer>
<div className='inner_footer'>
    <div className='footer1'>
        <h4>About</h4>
        <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span></p>
        <br />
        <p>Email<span>:info@jstemplate.net</span></p>
        <p>Phone<span>:880 123 456 789</span></p>
    </div>
    <div className='lists'>
        <p>Quick Link</p>
        <ul>
            <li><Link to="/">Home</Link></li>

            <li><Link to="/">About</Link></li>
            
            <li><Link to="./Blog">Blog</Link></li>
            
            <li><Link to="/">Archived</Link></li>
            
            <li><Link to="./Author">Author</Link></li>
            
            <li><Link to="/">Contact</Link></li>
            
        </ul>
    </div>
    <div  className='lists'>
        <p>Category</p>
        <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
        </ul>
    </div>
    <div className='searchbox'>
        <h3>Weekly Newsletter</h3>
        <p>Get blog articles and offers via email</p>
        <input type="text" placeholder="Your Email"></input>
        <button>Subscribe</button>
        <IconContext.Provider value={{ className: "email" }}>
        <MdOutlineEmail />
        </IconContext.Provider>
    </div>
</div>
<div className='footerhr'>
    <div className='footerhr1'>
    <hr /><br /><br />
    <img src={Logo} alt="" />
    <h2><span>Meta</span>Blog</h2>
    <p><span>©</span>JS Template <span>2023. All Rights Reserved.</span></p>
    </div>
    <div>
        <ul>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
        </ul>
    </div>
</div>

</footer>


)
}

export default Footer