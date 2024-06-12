import React from 'react'
import Contact from '../../assets/contact.png'

const index = () => {
  return (
    <div>
        <div id='grid'>
            <div id='img'><img src={Contact} alt="" /></div>
            <div id='search'>
                <h1>Contact Us</h1>
                <div><input type="text" placeholder='Full Name' /></div>
                <div><input type="text" placeholder='Email' /></div>
                <div><input type="text" placeholder='Message' /></div>
                <div><button>Contact Us</button></div>
            </div>
            <div className='contact'>
                <div>
                <h3>Contact</h3>
                <p>hi@green.com</p>
                    </div>
                <div className='contact1'>
                <h3>Based in...</h3>
                <p>New York, California,<br /> Ohio.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default index