import React from 'react';

const OurProduct = () => {
  return (
    <section className="hero-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="content-hero-section">
          <div className="hero__content">
            <h1 className="text-h1 font-medium no-margins words splitting" style={{"--word-total": 2}}>
              <span className="word" data-word="Our" style={{"--word-index": 0, opacity: 1, transform: "translate(0px, 0px)"}}>Our</span>
              <span className="whitespace"> </span>
              <span className="word" data-word="Products" style={{"--word-index": 1, opacity: 1, transform: "translate(0px, 0px)"}}>Products</span>
            </h1>
            <div className="description-text-insights-hero-section">
              <h3 className="text-h5 font-light no-margins" style={{lineHeight: 1.2, opacity: 1, transform: "translate(0px, 0px)"}}>
                Codos envisions a world where everyone commutes sustainably.
              </h3>
            </div>
          </div>
          <button data-el="scroll-down" data-color="white" className="button-scroll-down-component" style={{opacity: 1, transform: "translate(0px, 0px)"}}>
            <div className="button-scroll-down-component__icon w-embed">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: "block"}}>
                <path d="M19.7081 14.7075L10.7081 23.7075C10.6152 23.8005 10.5049 23.8742 10.3835 23.9246C10.2621 23.9749 10.132 24.0008 10.0006 24.0008C9.86914 24.0008 9.73901 23.9749 9.61762 23.9246C9.49622 23.8742 9.38593 23.8005 9.29306 23.7075L0.293056 14.7075C0.105415 14.5199 0 14.2654 0 14C0 13.7346 0.105415 13.4801 0.293056 13.2925C0.480697 13.1049 0.735192 12.9994 1.00056 12.9994C1.26592 12.9994 1.52042 13.1049 1.70806 13.2925L9.00056 20.5863V1C9.00056 0.734784 9.10591 0.48043 9.29345 0.292893C9.48099 0.105357 9.73534 0 10.0006 0C10.2658 0 10.5201 0.105357 10.7077 0.292893C10.8952 0.48043 11.0006 0.734784 11.0006 1V20.5863L18.2931 13.2925C18.4807 13.1049 18.7352 12.9994 19.0006 12.9994C19.2659 12.9994 19.5204 13.1049 19.7081 13.2925C19.8957 13.4801 20.0011 13.7346 20.0011 14C20.0011 14.2654 19.8957 14.5199 19.7081 14.7075Z" fill="currentColor"></path>
              </svg>
            </div>
            <div className="button-scroll-down__bg"></div>
          </button>
        </div>
      </div>
      <div className="section_hero-bg-shape-mobile"></div>
      <div className="section_hero-bg-shape"></div>
      <img 
        src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c48_hero-products.webp" 
        loading="eager" 
        alt="" 
        height="Auto" 
        sizes="100vw" 
        srcSet="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c48_hero-products-p-500.webp 500w, https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c48_hero-products-p-800.webp 800w, https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c48_hero-products-p-1080.webp 1080w, https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c48_hero-products-p-1600.webp 1600w, https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c48_hero-products.webp 1915w" 
        className="section_hero-bg" 
        style={{transform: "translate3d(0px, 169.231px, 0px)", opacity: 1}}
      />
      <img 
        src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68cea_hero-products.webp" 
        loading="eager" 
        alt="" 
        height="Auto" 
        className="section_hero-bg-mobile"
      />
    </section>
  );
};

export default OurProduct;
