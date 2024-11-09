import React from 'react';
import { useEffect } from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import {
    googleIcon,
    stripeIcon,
    dhlIcon,
    redditIcon,
    teslaIcon,
    airbnbIcon,
    dropboxIcon,
    spotifyIcon
} from '../../Assets';

const Partners = () => {
    const clients = [
        { name: 'Spotify', logo: spotifyIcon },
        { name: 'Dropbox', logo: dropboxIcon },
        { name: 'Tesla', logo: teslaIcon },
        { name: 'Reddit', logo: redditIcon },
        { name: 'Google', logo: googleIcon },
        { name: 'Stripe', logo: stripeIcon },
        { name: 'DHL', logo: dhlIcon },
        { name: 'Airbnb', logo: airbnbIcon },
    ];

    const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const textAnimation = useSpring({
        opacity: textInView ? 1 : 0,
        transform: textInView ? 'translateY(0px)' : 'translateY(20px)',
        config: { tension: 120, friction: 14 },
        delay : 600
    });

    const [trail, setTrail] = useTrail(clients.length, index => ({
        opacity: 0,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        scale: 0.5,
        delay: index * 200
    }));

    useEffect(() => {
        if (textInView) {
            setTrail({
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                config: { tension: 150, friction: 20 },
                delay: 700,
            });
        }
    }, [textInView, setTrail]);

    

    return (
        <div className="partners-main-cover-wrapper">
            <div className="contact-us-partners">
                <animated.h4 ref={textRef} style={textAnimation}>
                    We worked with the world’s biggest brands and the most innovative startups
                </animated.h4>
                <div className="partners-content-box-cover">
                    <div className="client-grid">
                        {trail.map((style, index) => (
                            <animated.div key={index} className="client-box" style={style}>
                                <img src={clients[index].logo} alt={`${clients[index].name} logo`} className="client-logo" />
                            </animated.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
