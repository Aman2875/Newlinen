// Import the required modules
import { useEffect } from 'react';
import './slider.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './animation.css';
import Lenis from '@studio-freight/lenis';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import { tns } from 'tiny-slider';


// Register ScrollTrigger plugin
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}



const ProductPreviewSliderComponentInit = () => {
  try {
    // Get all product preview slider containers
    const sliderContainers = document.querySelectorAll('[el="product-preview-slider"]');
    if (!sliderContainers.length) return;

    // Get title and description elements
    const titleElement = document.querySelector('[el="slider/title"]');
    const descriptionElement = document.querySelector('[el="slider/description"]');

    sliderContainers.forEach(container => {
      try {
        // Check if it's a commuters product slider
        const isCommutersSlider = container.classList.contains("commuters-product-slider-component");
        
        // Get the slider element
        const sliderElement = container.querySelector('[el="slider/product-preview-slider"]');
        if (!sliderElement) {
          console.warn('Slider element not found in container');
          return;
        }

        // Initialize tiny-slider
        const slider = tns({
          container: sliderElement,
          loop: false,
          items: 1,
          autoWidth: true,
          mouseDrag: true,
          controls: false,
          nav: false,
          gutter: 20,
          edgePadding: isCommutersSlider ? 80 : 120,
          responsive: {
            1200: {
              gutter: isCommutersSlider ? 80 : 120
            },
            991: {
              gutter: 60
            },
            568: {
              gutter: 60
            }
          }
        });

        // Get navigation buttons
        const prevButton = container.querySelector('.nav-button---slider[direction="left"]');
        const nextButton = container.querySelector('.nav-button---slider[direction="right"]');

        if (!prevButton || !nextButton) {
          console.warn('Navigation buttons not found');
          return;
        }

        // Update slider state function
        const updateSliderState = () => {
          try {
            const info = slider.getInfo();
            const isFirstSlide = info.index === 0;
            const isLastSlide = info.index === info.slideCount - 1;

            // Update button states
            prevButton.disabled = isFirstSlide;
            nextButton.disabled = isLastSlide;

            // Update active item attribute
            sliderElement.setAttribute("item-active", info.index);

            // Get current slide element
            const currentSlide = document.querySelector(`#tns1-item${info.index}`);
            if (!currentSlide) {
              console.warn('Current slide element not found');
              return;
            }

            // Update title and description if elements exist
            if (titleElement && currentSlide.hasAttribute('title')) {
              titleElement.innerHTML = currentSlide.getAttribute('title');
            }
            if (descriptionElement && currentSlide.hasAttribute('description')) {
              descriptionElement.innerHTML = currentSlide.getAttribute('description');
            }
          } catch (error) {
            console.error('Error updating slider state:', error);
          }
        };

        // Add event listeners
        prevButton.addEventListener("click", () => {
          slider.goTo("prev");
          updateSliderState();
        });

        nextButton.addEventListener("click", () => {
          slider.goTo("next");
          updateSliderState();
        });

        // Listen for slide changes
        slider.events.on("indexChanged", updateSliderState);

        // Initialize slider state
        updateSliderState();

      } catch (containerError) {
        console.error('Error initializing slider container:', containerError);
      }
    });
  } catch (error) {
    console.error('Error in ProductPreviewSliderComponentInit:', error);
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
    let e = () => {
        if (window.innerWidth < 768)
            return;
        let e = document.querySelectorAll('[el="image-separator-section"]');
        e.forEach(e => {
            gsap.fromTo(e, {
                height: "0px"
            }, {
                height: "300px",
                ease: "none",
                scrollTrigger: {
                    trigger: e,
                    start: "bottom bottom",
                    end: "top top",
                    scrub: !0,
                    markers: !1
                }
            });
        });
    };
    e();
    window.addEventListener("resize", () => {
        let t = document.querySelectorAll('[el="image-separator-section"]');
        t.forEach(e => {
            gsap.killTweensOf(e);
            if (e._gsap && e._gsap.scrollTrigger) {
                e._gsap.scrollTrigger.kill();
            }
        });
        e();
    });
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
        let e = window.$('[animate="circular-lines"] svg path, [animate="circular-lines"] svg path').toArray();
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
            const e = Array.from(document.querySelectorAll('[animate="circular-lines"] svg path, [animate="circular-lines"] svg path'));
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

const SmoothScrollingInit = () => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
};

const FooterInit = () => {
    const footer = document.querySelector(".footer");
    const footerSection = document.querySelector(".footer-section");
    const main = document.querySelector(".main");
    
    if (!footer || !main) {
        console.error("Footer or Main element not found");
        return;
    }
    
    const updateFooterHeight = () => {
        const footerHeight = footer.offsetHeight;
        footerSection.style.height = `${footerHeight}px`;
    };
    
    updateFooterHeight();
    window.addEventListener("resize", updateFooterHeight);
    
    gsap.fromTo(footer, {
        opacity: 0,
        y: 120
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: footerSection,
            start: "top+=10% bottom-=10%",
            end: "bottom bottom",
            scrub: true,
            markers: false
        }
    });
};

const RegularHeroComponentInit = () => {
    let e = document.querySelectorAll('section[el="regular-hero-component"]');
    e.forEach(e => {
        let t = e.querySelector(".section_hero-bg")
          , o = e.querySelector("h1")
          , r = e.querySelector("h3")
          , n = e.querySelector(".button-scroll-down-component");
        if (!t) {
            console.error("Background image element not found");
            return
        }
        gsap.fromTo(t, {
            y: -200
        }, {
            y: 200,
            ease: "none",
            scrollTrigger: {
                trigger: e,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: false
            }
        });
        
        if (o) {
            Splitting({
                target: o,
                by: "words"
            });
            let i = o.querySelectorAll(".word")
              , l = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: "top 80%",
                    once: true
                }
            });
            l.fromTo(t, {
                opacity: 0,
                scale: 1.1
            }, {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power2.out"
            }).fromTo(i, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                stagger: .05
            }, "-=0.5").fromTo(r, {
                y: 100,
                opacity: 0,
                lineHeight: 1.7
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                lineHeight: 1.2,
                ease: "power3.out"
            }, "-=0.8").fromTo(n, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");
        }
    });
};

const InsightsHeroComponentInit = () => {
    let e = document.querySelectorAll('section[el="insights-hero"]');
    e.forEach(e => {
        let t = e.querySelector(".image-bg-insights-hero-section")
          , o = e.querySelector("h1")
          , r = e.querySelector("h3")
          , n = e.querySelector(".button-scroll-down-component");
        if (!t) {
            console.error("Background image element not found");
            return;
        }
        gsap.fromTo(t, {
            y: 200
        }, {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: e,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: false
            }
        });
        
        if (o) {
            Splitting({
                target: o,
                by: "words"
            });
            let i = o.querySelectorAll(".word")
              , l = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: "top 80%",
                    once: true
                }
            });
            l.fromTo(t, {
                opacity: 0,
                scale: 1.1
            }, {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power2.out"
            }).fromTo(i, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                stagger: .05
            }, "-=0.5").fromTo(r, {
                y: 100,
                opacity: 0,
                lineHeight: 1.7
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                lineHeight: 1.2,
                ease: "power3.out"
            }, "-=0.8").fromTo(n, {
                y: 100,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");
        }
    });
};

const TextHeroComponentInit = () => {
    let e = document.querySelectorAll('section[el="text-hero"]');
    e.forEach(e => {
        let t = e.querySelector("h3");
        if (t) {
            gsap.fromTo(t, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                stagger: .05,
                scrollTrigger: {
                    trigger: e,
                    start: "top 80%",
                    end: "center center",
                    once: true
                }
            });
        }
    });
};

const GenericTextAnimations = () => {
    let e = document.querySelectorAll('[animate="title"]');
    e.forEach(e => {
        Splitting({
            target: e,
            by: "words"
        })
    });
    let t = document.querySelectorAll('[animate="text"]');
    t.forEach(e => {
        Splitting({
            target: e,
            by: "lines"
        })
    });
};

const InView = () => {
    let e = document.querySelectorAll("[animate]");
    e.forEach(e => {
        let t = e.getAttribute("threshold");
        let o = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.setAttribute("in-view", "true");
                    o.unobserve(entry.target);
                }
            });
        }, {
            threshold: t ?? 0.4
        });
        o.observe(e);
    });
};

const StartJourneyComponentInit = () => {
    let e = document.querySelector(".start-journey__section")
      , t = document.querySelector(".start-journey__bg-blue-shape")
      , o = document.querySelector(".start-journey__bg-blue-green");
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
                r && n(t)
            }
        })
    }
    function i() {
        r = !0;
        n(t);
        n(o);
    }
    function l() {
        r = !1;
        gsap.killTweensOf([t, o]);
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
        gsap.killTweensOf([t, o]);
        i();
    });
};

const ScrollDownComponentInit = () => {
    let e = document.querySelectorAll('[el="scroll-down"]');
    e.forEach(e => {
        e.addEventListener("click", () => {
            window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth"
            });
        });
    });
};

// Animation component
const Animation = () => {
  useEffect(() => {
    // Initialize all animations
    try {
      // Initialize smooth scrolling
      try {
        SmoothScrollingInit();
      } catch (smoothScrollError) {
        console.error("Error initializing smooth scrolling:", smoothScrollError);
      }
      
      // Initialize footer animation if elements exist
      if (document.querySelector(".footer") && document.querySelector(".footer-section")) {
        try {
          FooterInit();
        } catch (footerError) {
          console.error("Error initializing footer animation:", footerError);
        }
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
      if (document.querySelectorAll('[animate="circular-lines"], [animate="circular-lines"]').length > 0) {
        try {
          AnimateCircularLinesInit();
        } catch (circularLinesError) {
          console.error("Error initializing circular lines animation:", circularLinesError);
        }
      }

      // Initialize regular hero component if elements exist
      if (document.querySelectorAll('section[el="regular-hero-component"]').length > 0) {
        try {
          RegularHeroComponentInit();
        } catch (regularHeroError) {
          console.error("Error initializing regular hero component:", regularHeroError);
        }
      }

      // Initialize insights hero component if elements exist
      if (document.querySelectorAll('section[el="insights-hero"]').length > 0) {
        try {
          InsightsHeroComponentInit();
        } catch (insightsHeroError) {
          console.error("Error initializing insights hero component:", insightsHeroError);
        }
      }

      // Initialize text hero component if elements exist
      if (document.querySelectorAll('section[el="text-hero"]').length > 0) {
        try {
          TextHeroComponentInit();
        } catch (textHeroError) {
          console.error("Error initializing text hero component:", textHeroError);
        }
      }

      // Initialize start journey component if elements exist
      if (document.querySelector(".start-journey__section")) {
        try {
          StartJourneyComponentInit();
        } catch (startJourneyError) {
          console.error("Error initializing start journey component:", startJourneyError);
        }
      }

      // Initialize generic text animations
      try {
        GenericTextAnimations();
      } catch (genericTextError) {
        console.error("Error initializing generic text animations:", genericTextError);
      }

      // Initialize in-view animations
      try {
        InView();
      } catch (inViewError) {
        console.error("Error initializing in-view animations:", inViewError);
      }

      // Initialize scroll down component if elements exist
      if (document.querySelectorAll('[el="scroll-down"]').length > 0) {
        try {
          ScrollDownComponentInit();
        } catch (scrollDownError) {
          console.error("Error initializing scroll down component:", scrollDownError);
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
  ProductPreviewSliderComponentInit, 
  initProductShowcaseAnimation, 
  ImageSeparatorSectionComponentInit, 
  AnimateCircularLinesInit, 
  DashboardComponentInit,
  SmoothScrollingInit,
  FooterInit,
  RegularHeroComponentInit,
  InsightsHeroComponentInit,
  TextHeroComponentInit,
  GenericTextAnimations,
  InView,
  StartJourneyComponentInit,
  ScrollDownComponentInit
};

export default Animation;