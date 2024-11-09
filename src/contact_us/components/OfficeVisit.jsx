// src/components/OfficeInfo.js
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';


const OfficeInfo = () => {

    const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const textAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: textInView ? 1 : 0, transform: textInView ? 'translateY(0px)' : 'translateY(20px)' },
        config: { tension: 120, friction: 14 },
        delay : 400
    });

    const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const cardAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(20px)' },
        to: { opacity: cardInView ? 1 : 0, transform: cardInView ? 'translateX(0px)' : 'translateX(150px)' },
        config: { tension: 120, friction: 14 },
        delay : 700
    });

    return (
        <div className='office-info-main-cover-wrapper'>
            <animated.h6 ref={textRef} style={textAnimation}>
                Come stop by our office sometime
            </animated.h6>

            <div className="contact-us-office-info" >
                <animated.div className="contact-us-office-details" ref={cardRef} style={cardAnimation}>
                    <h3>New York, USA</h3>
                    <p className="address-text">7626 W 8th St, Massapequa, NY 11758</p>
                    <p>
                        <a href="mailto:info@dsgnr.com">info@dsgnr.com</a>
                    </p>
                    <p>
                        <a href="tel:543890098">(543) 890-098</a>
                    </p>
                    <button>
                        Get Directions <span><FaArrowRightLong /></span>
                    </button>
                </animated.div>
            </div>
        </div>
    );
}

export default OfficeInfo;
