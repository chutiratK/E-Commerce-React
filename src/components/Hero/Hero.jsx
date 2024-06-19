import React from 'react'
import './Hero.css'
import arrowIcon from '../Assets/arrow-icon.png'
import heroImg from '../Assets/haechannie.png'
import wave from '../Assets/wave.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only!</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={wave} alt='welcome'/>
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
            <div>Latest Collection</div>
                <img src={arrowIcon} alt='arrow-icon'/>
            </div>
        </div>
        <div className="hero-right">
            <img src={heroImg} alt='hero-img'/>
        </div>
    </div>
  )
}
export default Hero