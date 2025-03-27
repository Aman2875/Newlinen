// Import the required modules
import { useEffect } from 'react';
import './slider.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './animation.css';


// Register ScrollTrigger plugin
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Benefits Section Animation
const AnimateBenefitsSectionInit = () => {
  try {
    // Check if IntersectionObserver is available
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add in-view attribute when section comes into view
            entry.target.setAttribute('in-view', 'true');
            // Stop observing after animation triggers
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      // Target the image section
      const imageSection = document.querySelector('[animate="benefits-section-image"]');
      if (imageSection) {
        observer.observe(imageSection);
      }
    }
  } catch (error) {
    console.error("Error initializing benefits section animation:", error);
  }
};

// Specific function for Benefits Section Image Animation
const AnimateBenefitsSectionImageInit = () => {
  try {
    // Check if IntersectionObserver is available
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add in-view attribute when image comes into view
            entry.target.setAttribute('in-view', 'true');
            // Stop observing after animation triggers
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      // Target the specific image element in the benefits section
      const benefitsImage = document.querySelector('[animate="benefits-section-image"]');
      if (benefitsImage) {
        observer.observe(benefitsImage);
      }
    }
  } catch (error) {
    console.error("Error initializing benefits section image animation:", error);
  }
};

const ProductPreviewSliderComponentInit = () => {
  try {
    // Check if tns is available globally
    if (typeof window.tns !== 'function') {
      console.error("Tiny Slider is not loaded. Make sure the CDN script is included.");
      return;
    }
    
    // Get all slider containers
    let sliderContainers = document.querySelectorAll('[el="product-preview-slider"]');
    if (!sliderContainers || sliderContainers.length === 0) {
      console.warn("No slider containers found");
      return;
    }

    let titleElement = document.querySelector('[el="slider/title"]');
    let descriptionElement = document.querySelector('[el="slider/description"]');
    
    // Initialize the product showcase section animation
    initProductShowcaseAnimation();
    
    // Loop through all slider containers
    sliderContainers.forEach(container => {
      let isCommutersSlider = container.classList.contains("commuters-product-slider-component");
      let sliderWrapper = container.querySelector('[el="slider/product-preview-slider"]');
      
      if (!sliderWrapper) {
        console.warn("Slider wrapper not found in container", container);
        return;
      }
      
      // Initialize the slider with the global tns function
      let slider = window.tns({
        container: sliderWrapper,
        loop: false,
        items: 1,
        autoWidth: true,
        mouseDrag: true,
        controls: false,
        nav: false,
        gutter: 20,
        edgePadding: isCommutersSlider ? 80 : 120,
        responsive: {
          1200: { gutter: isCommutersSlider ? 80 : 120 },
          991: { gutter: 60 },
          568: { gutter: 60 }
        }
      });
      
      // Get navigation buttons
      let leftButton = container.querySelector('.nav-button---slider[direction="left"]');
      let rightButton = container.querySelector('.nav-button---slider[direction="right"]');
      
      if (!leftButton || !rightButton) {
        console.warn("Navigation buttons not found", leftButton, rightButton);
        return;
      }
      
      // Update function for navigation and content
      const updateSlider = () => {
        let info = slider.getInfo();
        let isFirst = info.index === 0;
        let isLast = info.index === info.slideCount - 1;
        
        // Update buttons state
        leftButton.disabled = isFirst;
        rightButton.disabled = isLast;
        
        // Update active slide attribute
        sliderWrapper.setAttribute("item-active", info.index);
        
        // Get current slide
        let currentSlide = document.querySelector("#tns1-item" + info.index);
        console.log("Current slide:", currentSlide);
        
        // Update title and description if available
        if (titleElement && currentSlide) {
          titleElement.innerHTML = currentSlide.getAttribute("title") || "";
          
          // Add animation class to title element
          titleElement.classList.add("animated");
          setTimeout(() => {
            titleElement.classList.remove("animated");
          }, 500);
        }
        
        if (descriptionElement && currentSlide) {
          descriptionElement.innerHTML = currentSlide.getAttribute("description") || "";
          
          // Add animation class to description element
          descriptionElement.classList.add("animated");
          setTimeout(() => {
            descriptionElement.classList.remove("animated");
          }, 500);
        }
        
        // Add animation to current slide
        if (currentSlide) {
          currentSlide.classList.add("slide-in");
          setTimeout(() => {
            currentSlide.classList.remove("slide-in");
          }, 600);
        }
      };
      
      // Attach click events to navigation buttons
      leftButton.addEventListener("click", () => {
        slider.goTo("prev");
        updateSlider();
      });
      
      rightButton.addEventListener("click", () => {
        slider.goTo("next");
        updateSlider();
      });
      
      // Listen to slider events
      slider.events.on("indexChanged", updateSlider);
      
      // Initial update
      updateSlider();
    });
  } catch (error) {
    console.error("Error initializing slider:", error);
  }
};

// Function to initialize the product showcase section animation
const initProductShowcaseAnimation = () => {
  try {
    const productShowcaseSection = document.querySelector('.product-showcase-section');
    if (!productShowcaseSection) return;
    
    // Add entrance animation to the product showcase section
    productShowcaseSection.classList.add('fade-in');
    
    // Animate shape background
    const shapeBackground = document.querySelector('.shape-bg---product-showcase');
    if (shapeBackground) {
      shapeBackground.classList.add('slide-up');
    }
    
    // Create intersection observer for slide animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate title when section is in view
          const titleElement = entry.target.querySelector('[el="slider/title"]');
          if (titleElement) {
            titleElement.classList.add('animate-title');
          }
          
          // Stagger animation for slider items
          const sliderItems = entry.target.querySelectorAll('.media---businesses-product-slider');
          sliderItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('slide-appear');
            }, index * 150);
          });
          
          // Disconnect after animation
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    
    // Observe the showcase section
    observer.observe(productShowcaseSection);
    
  } catch (error) {
    console.error("Error initializing product showcase animation:", error);
  }
};

// Image Separator Section Animation
const ImageSeparatorSectionComponentInit = () => {
    try {
        // Check if GSAP is available
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            console.error("GSAP or ScrollTrigger is not loaded. Make sure it's installed properly.");
            return;
        }
        
        const initAnimation = () => {
            if (window.innerWidth < 768) {
                return;
            }
            const elements = document.querySelectorAll('[el="image-separator-section"]');
            elements.forEach(element => {
                gsap.fromTo(element, {
                    height: "0px"
                }, {
                    height: "300px",
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        start: "bottom bottom",
                        end: "top top",
                        scrub: true,
                        markers: false
                    }
                });
            });
        };
        
        initAnimation();
        
        window.addEventListener("resize", () => {
            const elements = document.querySelectorAll('[el="image-separator-section"]');
            elements.forEach(element => {
                gsap.killTweensOf(element);
                if (element._gsap && element._gsap.scrollTrigger) {
                    element._gsap.scrollTrigger.kill();
                }
            });
            initAnimation();
        });
    } catch (error) {
        console.error("Error initializing image separator animation:", error);
    }
};

const DashboardComponentInit = () => {
    let e = document.querySelector('section[el="dashboard"]')
      , t = document.querySelector('div[el="dashboard/green-layer"]')
      , o = document.querySelector('div[el="dashboard/blue-layer"]');
    if (!e)
        return;
    let r = !1;
    function n(t) {
        let o = e.getBoundingClientRect()
          , i = t.offsetWidth
          , l = t.offsetHeight;
        gsap.to(t, {
            x: `random(${-(i / 1.5)}, ${o.width - i})`,
            y: `random(${-(l / 1.5)}, ${o.height - l})`,
            duration: 8,
            ease: "power1.inOut",
            onComplete() {
                r && n(t);
            }
        });
    }
    function i() {
        r = !0;
        n(o);
        n(t);
    }
    function l() {
        r = !1;
        gsap.killTweensOf([o, t]);
    }
    i();
    let a = new IntersectionObserver(e => {
        e.forEach(e => {
            e.isIntersecting ? i() : l();
        });
    },
    {
        threshold: .1
    });
    a.observe(e);
    window.addEventListener("resize", () => {
        gsap.killTweensOf([o, t]);
        i();
    });
}

// Animate Circular Lines in Hero Section
const AnimateCircularLinesInit = () => {
    // Try to use jQuery if available
    if (typeof window.jQuery !== 'undefined') {
        let e = window.$('[animate="circular-lines"] svg path, [data-animate="circular-lines"] svg path').toArray();
        if (0 === e.length)
            return;
        let t = e[0].getTotalLength();
        e.forEach(e => {
            e.style.strokeDasharray = t;
            e.style.strokeDashoffset = t;
        });
        let o = (e, o) => {
            gsap.timeline({
                repeat: -1,
                delay: o
            }).to(e, {
                duration: 5,
                strokeDashoffset: 0,
                ease: "power1.inOut"
            }).to(e, {
                duration: 5,
                strokeDasharray: `${t} ${t}`,
                strokeDashoffset: -t,
                ease: "power1.inOut"
            }).set(e, {
                strokeDasharray: t,
                strokeDashoffset: t
            })
        };
        e.forEach((e, t) => {
            o(e, 1.4 * t)
        });
    } else {
        // Fallback to vanilla JS if jQuery is not available
        try {
            const e = Array.from(document.querySelectorAll('[animate="circular-lines"] svg path, [data-animate="circular-lines"] svg path'));
            if (0 === e.length)
                return;
            
            // Get path length safely
            let t;
            try {
                t = e[0].getTotalLength();
            } catch (err) {
                console.warn("Error getting path length, using fallback value");
                t = 1000; // Fallback value
            }
            
            e.forEach(e => {
                e.style.strokeDasharray = t;
                e.style.strokeDashoffset = t;
            });
            
            let o = (e, o) => {
                gsap.timeline({
                    repeat: -1,
                    delay: o
                }).to(e, {
                    duration: 5,
                    strokeDashoffset: 0,
                    ease: "power1.inOut"
                }).to(e, {
                    duration: 5,
                    strokeDasharray: `${t} ${t}`,
                    strokeDashoffset: -t,
                    ease: "power1.inOut"
                }).set(e, {
                    strokeDasharray: t,
                    strokeDashoffset: t
                })
            };
            
            e.forEach((e, t) => {
                o(e, 1.4 * t)
            });
        } catch (error) {
            console.error("Error initializing circular lines animation:", error);
        }
    }
};

// Animation component
const Animation = () => {
  useEffect(() => {
    // Initialize all animations
    try {
      // Initialize benefits section animation
      try {
        AnimateBenefitsSectionInit();
      } catch (benefitsError) {
        console.error("Error initializing benefits section animation:", benefitsError);
      }
      
      // Initialize benefits section image animation
      try {
        AnimateBenefitsSectionImageInit();
      } catch (benefitsImageError) {
        console.error("Error initializing benefits section image animation:", benefitsImageError);
      }
      
      // Initialize product preview slider if elements exist
      if (document.querySelectorAll('[el="product-preview-slider"]').length > 0) {
        try {
          ProductPreviewSliderComponentInit();
        } catch (sliderError) {
          console.error("Error initializing product preview slider:", sliderError);
        }
      }
      
      // Initialize image separator animation if elements exist
      if (document.querySelectorAll('[el="image-separator-section"]').length > 0) {
        try {
          ImageSeparatorSectionComponentInit();
        } catch (separatorError) {
          console.error("Error initializing image separator animation:", separatorError);
        }
      }
      
      // Initialize circular lines animation if elements exist
      if (document.querySelectorAll('[data-animate="circular-lines"], [animate="circular-lines"]').length > 0) {
        try {
          AnimateCircularLinesInit();
        } catch (circularLinesError) {
          console.error("Error initializing circular lines animation:", circularLinesError);
        }
      }
    } catch (globalError) {
      console.error("Error in Animation component:", globalError);
    }
  }, []);

  return null; // This component doesn't render anything
};

// Export the component and the functions
export { 
  AnimateBenefitsSectionInit, 
  AnimateBenefitsSectionImageInit, 
  ProductPreviewSliderComponentInit, 
  initProductShowcaseAnimation, 
  ImageSeparatorSectionComponentInit, 
  AnimateCircularLinesInit, 
  DashboardComponentInit 
};

export default Animation;

