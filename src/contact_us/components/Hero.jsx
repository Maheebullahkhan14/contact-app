import React from 'react'
import Navbar from './Navbar'
import { heroHandsBanner , mouseIcon } from '../../Assets'
import { useSpring, animated } from '@react-spring/web';

const Hero = () => {

    const AnimateUp = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 140, friction: 20 },
        delay: 500,
    });

    const imageAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 140, friction: 20 },
        delay: 800, 
    });


    return (
        <>
            <div className="hero-main-cover-wrapper">
                <Navbar />
                <div className="hero-main-content-cover-wrapper">
                    <div className="hero-bg-shape"></div>
                    <div className="hero-text-content-box">
                        <animated.h3 style={AnimateUp}>
                            We would love to hear from you.
                        </animated.h3>
                    </div>
                    <div className="hero-hands-shape-cover">
                        <animated.img
                            src={heroHandsBanner}
                            alt="hero hands"
                            style={imageAnimation}
                        />
                    </div>
                </div>
            </div>
            <div className="mouse-icon-box">
                <img src={mouseIcon} alt="mouse Icon"></img>
            </div>
        </>
    )
}

export default Hero
