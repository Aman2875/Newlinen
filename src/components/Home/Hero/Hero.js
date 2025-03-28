import React, { useEffect } from 'react';
import { TextHeroComponentInit, GenericTextAnimations, InView } from '../../../animation';

const Hero = () => {
  useEffect(() => {
    // Initialize text hero component
    TextHeroComponentInit();
    // Initialize text animations
    GenericTextAnimations();
    // Initialize in-view animations
    InView();
  }, []);
  return (
    <section el="home-hero" className="hero__section">
      <div el="home-hero/marker" className="image-marker-hero" animate="fade" in-view="true" style={{ transform: 'translate3d(0px, 4.7142px, 0px)' }}></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="hero-content">
        <div class="hero-content-wrap">
          <h1 el="home-hero/title" class="text-h1 font-medium no-margins" animate="title">
            Every<br/>
            commute<br/>counts.
          </h1>
          <div class="hero-content-text-wrap">
             <h2 delay="0.3" el="home-hero/intro" class="text-h5 font-light no-margins" animate="title">
              Codos validates and rewards<br/>every eco-friendly commute
             </h2>
            </div>
            </div>
          
          <div delay="1" el="home-hero/join-button" className="hero-content-cta" animate="fade" >
          <a href="https://admin.linengrass.com" target="admin.linengrass.com" rel="noreferrer noopener" className="primary-button w-inline-block">
          <div className="icon-primary-button">
          <img src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68bf8_icon-arrow-down.svg" loading="lazy" alt="" className="image-2" />
          </div><div className="text-primary-button text-button">Let's talk linen</div>
          <div className="hover-color-primary-button"></div>
            </a>
            </div>
          
            <div delay="0.6" el="home-hero/scroll-button" className="hero-content-button-wrap" animate="fade" >
              <button el="scroll-down" color="white" className="button-scroll-down-component">
                <div className="button-scroll-down-component__icon w-embed">
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}}>
                    <path d="M19.7081 14.7075L10.7081 23.7075C10.6152 23.8005 10.5049 23.8742 10.3835 23.9246C10.2621 23.9749 10.132 24.0008 10.0006 24.0008C9.86914 24.0008 9.73901 23.9749 9.61762 23.9246C9.49622 23.8742 9.38593 23.8005 9.29306 23.7075L0.293056 14.7075C0.105415 14.5199 0 14.2654 0 14C0 13.7346 0.105415 13.4801 0.293056 13.2925C0.480697 13.1049 0.735192 12.9994 1.00056 12.9994C1.26592 12.9994 1.52042 13.1049 1.70806 13.2925L9.00056 20.5863V1C9.00056 0.734784 9.10591 0.48043 9.29345 0.292893C9.48099 0.105357 9.73534 0 10.0006 0C10.2658 0 10.5201 0.105357 10.7077 0.292893C10.8952 0.48043 11.0006 0.734784 11.0006 1V20.5863L18.2931 13.2925C18.4807 13.1049 18.7352 12.9994 19.0006 12.9994C19.2659 12.9994 19.5204 13.1049 19.7081 13.2925C19.8957 13.4801 20.0011 13.7346 20.0011 14C20.0011 14.2654 19.8957 14.5199 19.7081 14.7075Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="button-scroll-down__bg"></div>
              </button>
            </div>
        </div>
      </div>
      <div data-poster-url="/images/background01.jpg" data-video-urls="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c5b_hero-video-v2-transcode.mp4,https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c5b_hero-video-v2-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" el="video/home-hero" className="hero-video-bg w-background-video w-background-video-atom">
      <video id="5261490a-8019-9719-8e30-795b2a4b3d94-video" autoPlay="" loop="" playsInline="" data-wf-ignore="true" data-object-fit="cover" style={{backgroundImage: "url('/images/background01.jpg')"}}></video></div>
    </section>
  );
};

export default Hero;
