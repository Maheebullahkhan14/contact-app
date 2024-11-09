import React from 'react'
import { contactBanner } from '../../Assets'
import ContactForm from './ContactForm'
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';



const ContactSection = () => {

  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: imageInView ? 1 : 0, transform: imageInView ? 'translateX(0px)' : 'translateX(-50px)' },
    config: { tension: 120, friction: 14 },
    delay: 500,
  });

  // Set up scroll-triggered animation for the form
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: formInView ? 1 : 0, transform: formInView ? 'translateY(0px)' : 'translateY(50px)' },
    config: { tension: 120, friction: 14 },
    delay: 700,
  });


  return (
    <div className="contact-main-cover-wrapper">
      <div className="row">
        <div className="col-lg-5" ref={imageRef}>
          <animated.img
            src={contactBanner}
            alt="Contact banner"
            style={imageAnimation}
            className="contact-banner-image"
          />
        </div>
        <div className="col-lg-7" ref={formRef}>
          <animated.div style={formAnimation}>
            <ContactForm />
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
