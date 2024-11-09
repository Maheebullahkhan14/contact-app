import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CompanyMetrics = () => {
    
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5
  });

  return (
    <div ref={ref} className="contact-us-stats-cover-wrapper">
      <div className="contact-us-stats-box">
        <h3>
          {inView && <CountUp duration={5} className="counter" end={350} />}
          <span>+</span>
        </h3>
        <p>Clients Worldwide</p>
      </div>
      <div className="contact-us-stats-box">
        <h3>
          {inView && <CountUp duration={5} className="counter" end={20} />}
          <span>+</span>
        </h3>
        <p>Team Members</p>
      </div>
      <div className="contact-us-stats-box">
        <h3>
          {inView && <CountUp duration={5} className="counter" end={100} />}
          <span>+</span>
        </h3>
        <p>Projects Completed</p>
      </div>
      <div className="contact-us-stats-box">
        <h3>
          {inView && <CountUp duration={5} className="counter" end={850} />}
          M<span>+</span>
        </h3>
        <p>Revenue Generated</p>
      </div>
    </div>
  );
};

export default CompanyMetrics;
