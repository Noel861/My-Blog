import React from 'react'
import Banner1 from '../../../assets/banner.png'
import Pfp1 from '../../../assets/pfp1.png'

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <div className='blog_title'>
                <h2>Page Title</h2>
                <ul>
                    <li>Home </li><vr />/
                    <li>Link One</li>
                </ul>
                </div>
                <div className='banner1'>
                    <img src={Banner1} alt="" />
                </div>
                    <div className='banner_card'>
                         <button><span>Technology</span></button>
                         <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        <div className='pfp1'>
                         <img src={Pfp1} alt="" />
                         <p>Tracey William <span>August 20, 2022</span></p>
                        </div>
                    </div>
            </div>

        </div>
        
    )
}

export default Banner