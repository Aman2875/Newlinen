import React, { useEffect } from 'react';
import { ProductPreviewSliderComponentInit } from '../../../src/animation';

const Testimonial = () => {
    useEffect(() => {
        // Initialize the product slider when component mounts
        if (document.querySelectorAll('[data-el="product-preview-slider"]').length > 0) {
            ProductPreviewSliderComponentInit();
        }
    }, []);

    return (
        <section className="section product-showcase-section">
        <div className="w-layout-blockcontainer container container---product-showcase w-container">
          <div className="content---product-showcase">
            <div className="text-h2 words splitting" style={{"--word-total": "1"}}>
              <span className="word" data-word="Wallet">Wallet</span>
            </div>
            <div className="text-body words lines splitting" style={{"--word-total": "7", "--line-total": "1"}}>
              <span className="word" data-word="Scope">Scope</span>
              <span className="whitespace"> </span>
              <span className="word" data-word="3">3</span>
              <span className="whitespace"> </span>
              <span className="word" data-word="employee">employee</span>
              <span className="whitespace"> </span>
              <span className="word" data-word="and">and</span>
              <span className="whitespace"> </span>
              <span className="word" data-word="student">student</span>
              <span className="whitespace"> </span>
              <span className="word" data-word="commuting">commuting</span>
              <span className="whitespace"> </span>
              <span className="word" data-word="emissions">emissions</span>
            </div>
          </div>
        </div>
        <div className="slider-container---product-showcase">
          <div data-el="product-preview-slider" className="commuters-product-slider-component">
            <div className="w-layout-blockcontainer container w-container">
              <div className="nav---commuters-product-slider">
                <button direction="left" className="nav-button---slider" disabled>
                  <div className="nav-button-icon---slider">
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}}>
                      <path d="M0.219376 8.53104L6.96937 15.281C7.11011 15.4218 7.30098 15.5008 7.5 15.5008C7.69902 15.5008 7.88989 15.4218 8.03063 15.281C8.17136 15.1403 8.25042 14.9494 8.25042 14.7504C8.25042 14.5514 8.17136 14.3605 8.03063 14.2198L2.56031 8.75042H17.25C17.4489 8.75042 17.6397 8.6714 17.7803 8.53075C17.921 8.3901 18 8.19933 18 8.00042C18 7.8015 17.921 7.61074 17.7803 7.47009C17.6397 7.32943 17.4489 7.25042 17.25 7.25042H2.56031L8.03063 1.78104C8.17136 1.64031 8.25042 1.44944 8.25042 1.25042C8.25042 1.05139 8.17136 0.860523 8.03063 0.719792C7.88989 0.579062 7.69902 0.5 7.5 0.5C7.30098 0.5 7.11011 0.579062 6.96937 0.719792L0.219376 7.46979C0.149643 7.53945 0.0943222 7.62216 0.0565796 7.71321C0.018837 7.80426 -0.000589371 7.90186 -0.000589371 8.00042C-0.000589371 8.09898 0.018837 8.19657 0.0565796 8.28762C0.0943222 8.37867 0.149643 8.46139 0.219376 8.53104Z" fill="black" />
                    </svg>
                  </div>
                  <div className="nav-button-bg---slider"></div>
                </button>
                <button direction="right" className="nav-button---slider">
                  <div className="nav-button-icon---slider">
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}}>
                      <path d="M17.7806 8.53104L11.0306 15.281C10.8899 15.4218 10.699 15.5008 10.5 15.5008C10.301 15.5008 10.1101 15.4218 9.96937 15.281C9.82864 15.1403 9.74958 14.9494 9.74958 14.7504C9.74958 14.5514 9.82864 14.3605 9.96937 14.2198L15.4397 8.75042H0.75C0.551088 8.75042 0.360322 8.6714 0.21967 8.53075C0.0790178 8.3901 0 8.19933 0 8.00042C0 7.8015 0.0790178 7.61074 0.21967 7.47009C0.360322 7.32943 0.551088 7.25042 0.75 7.25042H15.4397L9.96937 1.78104C9.82864 1.64031 9.74958 1.44944 9.74958 1.25042C9.74958 1.05139 9.82864 0.860523 9.96937 0.719792C10.1101 0.579062 10.301 0.5 10.5 0.5C10.699 0.5 10.8899 0.579062 11.0306 0.719792L17.7806 7.46979C17.8504 7.53945 17.9057 7.62216 17.9434 7.71321C17.9812 7.80426 18.0006 7.90186 18.0006 8.00042C18.0006 8.09898 17.9812 8.19657 17.9434 8.28762C17.9057 8.37867 17.8504 8.46139 17.7806 8.53104Z" fill="black" />
                    </svg>
                  </div>
                  <div className="nav-button-bg---slider"></div>
                </button>
              </div>
            </div>
            <div className="tns-outer" id="tns1-ow">
              <div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">
                slide <span className="current">1 to 3</span> of 8
              </div>
              <div id="tns1-mw" className="tns-ovh">
                <div className="tns-inner" id="tns1-iw">
                  <div data-el="slider/product-preview-slider" className="wrapper---commuters-product-slider tns-slider tns-carousel tns-subpixel tns-calc tns-autowidth tns-horizontal" id="tns1" style={{transitionDuration: '0s', transform: 'translate3d(0px, 0px, 0px)'}}>
                    <div className="media---commuters-product-slider tns-item tns-slide-active" id="tns1-item0">
                      <img src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c70_commuters%20preview%2001.webp" loading="eager" width="500" alt="Wallet Preview" className="image---businesses-product-slider-copy loaded tns-complete" />
                    </div>
                    <div className="media---commuters-product-slider tns-item tns-slide-active" id="tns1-item1">
                      <img src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c71_commuters%20preview%2002.webp" loading="eager" width="500" alt="Overall View Preview" className="image---commuters-product-slider loaded tns-complete" />
                    </div>
                    <div className="media---commuters-product-slider tns-item tns-slide-active" id="tns1-item2">
                      <img src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c72_commuters%20preview%2003.webp" loading="eager" width="500" alt="Start Journey Preview" className="image---commuters-product-slider loaded tns-complete" />
                    </div>
                    <div className="media---commuters-product-slider tns-item" id="tns1-item3" aria-hidden="true" tabIndex="-1">
                      <img src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c73_commuters%20preview%2004.webp" loading="eager" width="500" alt="Challenges/Competitions Preview" className="image---commuters-product-slider loaded tns-complete" />
                    </div>
                    <div className="media---commuters-product-slider tns-item" id="tns1-item4" aria-hidden="true" tabIndex="-1">
                      <img src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c74_commuters%20preview%2005.webp" loading="eager" width="500" alt="Journeys Preview" className="image---commuters-product-slider loaded tns-complete" />
                    </div>
                    <div className="media---commuters-product-slider tns-item" id="tns1-item5" aria-hidden="true" tabIndex="-1">
                      <img src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c75_commuters%20preview%2006.webp" loading="eager" width="500" alt="Shop Preview" className="image---commuters-product-slider loaded tns-complete" />
                    </div>
                    <div className="media---commuters-product-slider tns-item" id="tns1-item6" aria-hidden="true" tabIndex="-1">
                      <img src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c76_commuters%20preview%2007.webp" loading="eager" width="500" alt="E-Commerce Preview" className="image---commuters-product-slider loaded tns-complete" />
                    </div>
                    <div className="media---commuters-product-slider tns-item" id="tns1-item7" aria-hidden="true" tabIndex="-1">
                      <img src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c77_commuters%20preview%2008.webp" loading="eager" width="500" alt="Vouchers Preview" className="image---commuters-product-slider loaded tns-complete" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-bg---product-showcase"></div>
      </section>
    );
};

export default Testimonial;  
