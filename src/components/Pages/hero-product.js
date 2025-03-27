import React from 'react';

const HeroProduct = () => {
  return (
    <section id="product-hero" className="product-hero">
      <div className="w-layout-blockcontainer container w-container">
        <div className="container-product-hero">
          <div className="button-wrapper-product-hero" data-animate="fade" data-delay="1">
            <a href="/products" className="back-button-product-hero w-inline-block">
              <div className="w-embed">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                  <path d="M24.0008 10.0006C24.0008 10.2658 23.8954 10.5201 23.7079 10.7077C23.5204 10.8952 23.266 11.0006 23.0008 11.0006H3.41454L10.7083 18.2931C10.8012 18.386 10.8749 18.4963 10.9252 18.6177C10.9755 18.7391 11.0013 18.8692 11.0013 19.0006C11.0013 19.132 10.9755 19.2621 10.9252 19.3835C10.8749 19.5048 10.8012 19.6151 10.7083 19.7081C10.6154 19.801 10.5051 19.8747 10.3837 19.9249C10.2623 19.9752 10.1322 20.0011 10.0008 20.0011C9.86939 20.0011 9.73928 19.9752 9.61789 19.9249C9.4965 19.8747 9.3862 19.801 9.29329 19.7081L0.293287 10.7081C0.20031 10.6152 0.126551 10.5049 0.0762269 10.3835C0.0259027 10.2621 0 10.132 0 10.0006C0 9.86914 0.0259027 9.73901 0.0762269 9.61762C0.126551 9.49622 0.20031 9.38593 0.293287 9.29306L9.29329 0.293056C9.48093 0.105415 9.73542 -1.97712e-09 10.0008 0C10.2662 1.97712e-09 10.5206 0.105415 10.7083 0.293056C10.8959 0.480697 11.0013 0.735192 11.0013 1.00056C11.0013 1.26592 10.8959 1.52042 10.7083 1.70806L3.41454 9.00056H23.0008C23.266 9.00056 23.5204 9.10591 23.7079 9.29345C23.8954 9.48099 24.0008 9.73534 24.0008 10.0006Z" fill="currentColor" />
                </svg>
              </div>
            </a>
          </div>
          <h1 className="text-h1 font-medium no-margins on-mobile words splitting" data-animate="title">
            <span className="word" data-word="Commuters">Commuters</span>
          </h1>
          <div className="description-product-hero">
            <h2 className="text-h5 font-light no-margins words lines splitting" data-animate="text" data-delay="0.2">
              <span className="word">Have</span>
              <span className="whitespace"> </span>
              <span className="word">fun</span>
              <span className="whitespace"> </span>
              <span className="word">avoiding</span>
              <span className="whitespace"> </span>
              <span className="word">CO₂</span>
              <span className="whitespace"> </span>
              <span className="word">with</span>
              <span className="whitespace"> </span>
              <span className="word">the</span>
              <span className="whitespace"> </span>
              <span className="word">Codos</span>
              <span className="whitespace"> </span>
              <span className="word">app</span>
              <span className="whitespace"> </span>
              <span className="word">and</span>
              <span className="whitespace"> </span>
              <span className="word">earn</span>
              <span className="whitespace"> </span>
              <span className="word">rewards.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="lines-bg-product-hero" data-animate="circular-lines">
        <div className="w-embed">
          <svg width="845" height="405" viewBox="0 0 845 405" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <g opacity="0.5">
              <path d="M73.3972 -85C76.1991 -61.0811 80.7786 -37.7063 87.0001 -15.011C142.133 186.106 326.209 333.855 544.846 333.855C668.711 333.855 781.482 286.434 866 208.753C884.835 191.442 902.267 172.627 918.106 152.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: '1119.33', strokeDashoffset: '1109.1' }} />
              <path d="M919.977 254.5C903.012 270.617 885.011 285.653 866.084 299.5C775.877 365.496 664.648 404.46 544.33 404.46C286.465 404.46 70.3507 225.488 13.4443 -15C7.81964 -38.7702 3.75034 -63.1413 1.34985 -88" stroke="black" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: '1119.33, 1018.34', strokeDashoffset: '-1018.34' }} />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroProduct;
