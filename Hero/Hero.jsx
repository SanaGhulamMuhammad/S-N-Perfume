import React from 'react'
import './Hero.css'

import arrow_icon from '../assets/arrow.png'
import perfume1 from '../assets/perfume1.jpg'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        
        <div>
        
        <p>New Collection</p>
        <p>for veryone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collect</div>
            <img src={arrow_icon} alt="" />

        </div>
        </div>
        <div className="hero-right">
            <img src={perfume1} alt="" />
        </div>
        </div>

  )
}

export default Hero
