import React from 'react'
import Post1 from '../../../assets/post1.png'
import Post2 from '../../../assets/post2.png'
import Post3 from '../../../assets/post3.png'
import Post4 from '../../../assets/post4.png'
import Post5 from '../../../assets/post5.png'
import Post6 from '../../../assets/post6.png'
import Post7 from '../../../assets/post7.png'
import Post8 from '../../../assets/post8.png'
import Post9 from '../../../assets/post9.png'
import Pfp1 from '../../../assets/pfp1.png'
import Pfp2 from '../../../assets/pfp2.png'
import Pfp3 from '../../../assets/pfp3.png'
import Pfp4 from '../../../assets/pfp4.png'
import Pfp5 from '../../../assets/pfp5.png'

const posts = () => {
  return (
    <div>
        <div className='post_ad'>
                <small>
                    Advertisement
                </small>
                <p>
                 You can place ads
                </p>
                <small>
                    750x100
                </small>
        </div>

            <div className='post_title'>
                <h3>Latest Posts</h3>
            </div>

            <div className='Post_Grid'>
                <div className='Post1'>
                    <img src={Post1} alt=""></img>
                    <button><span>Technology</span></button>
                    <h3>The Impact of Technology on the Workplace: How Technology is Changing</h3>
                    <div className='pfp1'>
                         <img src={Pfp1} alt="" />
                         <p>Tracey Wilson <span>August 20, 2022</span></p>
                    </div>
                </div>
                <div className='Post1'>
                    <img src={Post2} alt=""></img>
                    <button><span>Technology</span></button>
                    <h3>The Impact of Technology on the Workplace: How Technology is Changing</h3>
                    <div className='pfp1'>
                         <img src={Pfp2} alt="" />
                         <p>Jason Francisco <span>August 20, 2022</span></p>
                    </div>
                </div>
                <div className='Post1'>
                    <img src={Post3} alt=""></img>
                    <button><span>Technology</span></button>
                    <h3>The Impact of Technology on the Workplace: How Technology is Changing</h3>
                    <div className='pfp1'>
                         <img src={Pfp3} alt="" />
                         <p>Elizabeth Slavin <span>August 20, 2022</span></p>
                    </div>
                </div>
                <div className='Post1'>
                    <img src={Post4} alt=""></img>
                    <button><span>Technology</span></button>
                    <h3>The Impact of Technology on the Workplace: How Technology is Changing</h3>
                    <div className='pfp1'>
                         <img src={Pfp4} alt="" />
                         <p>Ernie Smith <span>August 20, 2022</span></p>
                    </div>
                </div>  
                <div className='Post1'>
                    <img src={Post5} alt=""></img>
                    <button><span>Technology</span></button>
                    <h3>The Impact of Technology on the Workplace: How Technology is Changing</h3>
                    <div className='pfp1'>
                         <img src={Pfp5} alt="" />
                         <p>Eric Smith <span>August 20, 2022</span></p>
                    </div>
                </div>
                <div className='Post1'>
                    <img src={Post6} alt=""></img>
                    <button><span>Technology</span></button>
                    <h3>The Impact of Technology on the Workplace: How Technology is Changing</h3>
                    <div className='pfp1'>
                         <img src={Pfp1} alt="" />
                         <p>Tracey Wilson <span>August 20, 2022</span></p>
                    </div>
                </div>
                <div className='Post1'>
                    <img src={Post7} alt=""></img>
                    <button><span>Technology</span></button>
                    <h3>The Impact of Technology on the Workplace: How Technology is Changing</h3>
                    <div className='pfp1'>
                         <img src={Pfp2} alt="" />
                         <p>Jason Francisco <span>August 20, 2022</span></p>
                    </div>
                </div>
                <div className='Post1'>
                    <img src={Post8} alt=""></img>
                    <button><span>Technology</span></button>
                    <h3>The Impact of Technology on the Workplace: How Technology is Changing</h3>
                    <div className='pfp1'>
                         <img src={Pfp3} alt="" />
                         <p>Elizabeth Slavin <span>August 20, 2022</span></p>
                    </div>
                </div>
                    <div className='Post1'>
                    <img src={Post9} alt=""></img>
                    <button><span>Technology</span></button>
                    <h3>The Impact of Technology on the Workplace: How Technology is Changing</h3>
                    <div className='pfp1'>
                         <img src={Pfp4} alt="" />
                         <p>Ernie Smith <span>August 20, 2022</span></p>
                    </div>
                </div>
            </div>
            <div className='post_ad2'>
            <button><span>View All Posts</span></button>
            </div>
            <div className='post_ad1'>
                <small>
                    Advertisement
                </small>
                <p>
                 You can place ads
                </p>
                <small>
                    750x100
                </small>
        </div>

    </div>
  )
}

export default posts