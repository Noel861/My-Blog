import React from 'react'
import Banner1 from '../../../assets/banner.png'
import Pfp1 from '../../../assets/pfp2.png'

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <div className='banner1'>
                    <img src={Banner1} alt="" />
                </div>
                    <div className='banner_card'>
                         <button><span>Technology</span></button>
                         <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        <div className='pfp1'>
                         <img src={Pfp1} alt="" />
                         <p>Jason Francisco <span>August 20, 2022</span></p>
                        </div>
                    </div>
            </div>

        </div>
        
    )
}

export default Banner