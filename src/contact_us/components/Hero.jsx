import React from 'react'
import Navbar from './Navbar'
import { heroHandsBanner } from '../../Assets'

const Hero = () => {
  return (
    <>
        <div className="hero-main-cover-wrapper">
            <Navbar />
            <div className="hero-main-content-cover-wrapper">
                <div className="hero-bg-shape"></div>
                <div className="hero-text-content-box">
                    <h3>
                        We would love to hear from you.
                    </h3>
                </div>
                <div className="hero-hands-shape-cover">
                    <img src={heroHandsBanner} alt="hero hands"></img>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
