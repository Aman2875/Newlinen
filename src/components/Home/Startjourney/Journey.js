import React, { useEffect } from 'react';
import { StartJourneyComponentInit } from '../../../animation';

const Journey = () => {
  useEffect(() => {
    StartJourneyComponentInit();
  }, []);

  return (
    <section className="start-journey__section">
      <div className="w-layout-blockcontainer start-journey__container w-container">
        <h4 animate="title" className="text-h2 font-medium no-margins start-journey__title">
          Start your journey
        </h4>
        <div  className="start-journey__button-wrap">
          <a href="https://admin.linengrass.com" target="_blank" rel="noopener noreferrer" className="primary-button w-inline-block">
            <div className="icon-primary-button">
              <img 
                src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68bf8_icon-arrow-down.svg" 
                loading="lazy" 
                alt="Down arrow" 
                className="image-2"
              />
            </div>
            <div className="text-primary-button text-button">Let's talk Laundry</div>
            <div className="hover-color-primary-button"></div>
          </a>
        </div>
      </div>
      <div className="start-journey__bg-blue-shape"></div>
      <div className="start-journey__bg-blue-green"></div>
      
      <div className="start-journey__bg-white"></div>
      <div className="start-journey__bg-pattern"></div>
    </section>
  );
};

export default Journey;
