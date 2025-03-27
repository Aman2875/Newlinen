import React, { useState } from 'react';
import './Imageseparator.css';

const Imageseparator = () => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  const handleImageError = () => {
    console.error("Image failed to load");
    setImgError(true);
  };

  const handleImageLoad = () => {
    setImgLoaded(true);
  };

  return (
    <section 
      data-el="image-separator-section" 
      className="image-separator-section" 
      style={{ height: '283px' }}
    >
      <div className="wrapper-image-separator jarallax">
        <div 
          id="jarallax-container-0" 
          className="jarallax-container" 
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -100,
            clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)'
          }}
        >
          {!imgError ? (
            <img 
              src="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c5a_bg_transition2.webp"
              loading="lazy"
              sizes="100vw"
              srcSet="https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c5a_bg_transition2-p-500.webp 500w, https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c5a_bg_transition2-p-800.webp 800w, https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c5a_bg_transition2-p-1080.webp 1080w, https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c5a_bg_transition2-p-1600.webp 1600w, https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c5a_bg_transition2.webp 1667w"
              alt="Background transition image"
              className="image-image-separator jarallax-img"
              onError={handleImageError}
              onLoad={handleImageLoad}
              style={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
                maxWidth: 'none',
                position: 'fixed',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                marginTop: '0',
                transform: 'translate3d(0px, 0px, 0px)'
              }}
            />
          ) : (
            <div className="fallback-background" style={{
              backgroundColor: '#f5f5f5',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <p style={{color: '#999'}}>Image not available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Imageseparator;
    
