import React, { useEffect } from 'react';
import { TextHeroComponentInit, GenericTextAnimations, InView, ProductPreviewSliderComponentInit, ImageSeparatorSectionComponentInit, AnimateCircularLinesInit, initProductShowcaseAnimation, StartJourneyComponentInit } from '../../animation';

const Rental = () => {
  useEffect(() => {
    // Set document title
    document.title = 'Hotels - Linengrass';
    // Initialize all animations
    TextHeroComponentInit();
    GenericTextAnimations();
    InView();
    ProductPreviewSliderComponentInit();
    ImageSeparatorSectionComponentInit();
    AnimateCircularLinesInit();
    initProductShowcaseAnimation();
    StartJourneyComponentInit();
  }, []);

  return (
    <>
      <section id="" className="product-hero">
          <div class="w-layout-blockcontainer container w-container">
                    <div class="container-product-hero">
                        
                        <h1 animate="title" class="text-h1 font-medium no-margins on-mobile">Hotels</h1>
                        <div class="description-product-hero">
                            <h2 delay="0.2" animate="text" class="text-h5 font-light no-margins">The Linen Dashboard automates ESG reports of validated employee Scope 3 emissions.</h2>
                        </div>
                    </div>
                </div>
        <div animate="circular-lines" className="lines-bg-product-hero" >
          <div className="w-embed">
            <svg width="845" height="405" viewBox="0 0 845 405" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: "block"}}>
              <g opacity="0.5">
                <path d="M73.3972 -85C76.1991 -61.0811 80.7786 -37.7063 87.0001 -15.011C142.133 186.106 326.209 333.855 544.846 333.855C668.711 333.855 781.482 286.434 866 208.753C884.835 191.442 902.267 172.627 918.106 152.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" style={{strokeDasharray: "1119.33, 1061.16", strokeDashoffset: "-1061.16"}} />
                <path d="M919.977 254.5C903.012 270.617 885.011 285.653 866.084 299.5C775.877 365.496 664.648 404.46 544.33 404.46C286.465 404.46 70.3507 225.488 13.4443 -15C7.81964 -38.7702 3.75034 -63.1413 1.34985 -88" stroke="black" strokeLinecap="round" strokeLinejoin="round" style={{strokeDasharray: "1119.33, 683.56", strokeDashoffset: "-683.56"}} />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section el="image-separator-section" className="small-image-parallax-section" >
        <div className="image-small-image-parallax-section" />
      </section>
      
      <section class="product-showcase-section section">
                <div class="w-layout-blockcontainer container w-container">
                    <div class="content---product-showcase">
                        <h6 el="slider/title" animate="title" class="text-h2 no-argins">Home Page</h6>
                    </div>
                </div>
                <div class="slider-container---product-showcase">
                    <div el="product-preview-slider" class="businesses-product-slider-component">
                        <div class="w-layout-blockcontainer container w-container">
                            <div class="nav---businesses-product-slider">
                                <button direction="left" class="nav-button---slider">
                                    <div class="nav-button-icon---slider w-embed">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: "block"}}>
                                            <path d="M0.219376 8.53104L6.96937 15.281C7.11011 15.4218 7.30098 15.5008 7.5 15.5008C7.69902 15.5008 7.88989 15.4218 8.03063 15.281C8.17136 15.1403 8.25042 14.9494 8.25042 14.7504C8.25042 14.5514 8.17136 14.3605 8.03063 14.2198L2.56031 8.75042H17.25C17.4489 8.75042 17.6397 8.6714 17.7803 8.53075C17.921 8.3901 18 8.19933 18 8.00042C18 7.8015 17.921 7.61074 17.7803 7.47009C17.6397 7.32943 17.4489 7.25042 17.25 7.25042H2.56031L8.03063 1.78104C8.17136 1.64031 8.25042 1.44944 8.25042 1.25042C8.25042 1.05139 8.17136 0.860523 8.03063 0.719792C7.88989 0.579062 7.69902 0.5 7.5 0.5C7.30098 0.5 7.11011 0.579062 6.96937 0.719792L0.219376 7.46979C0.149643 7.53945 0.0943222 7.62216 0.0565796 7.71321C0.018837 7.80426 -0.000589371 7.90186 -0.000589371 8.00042C-0.000589371 8.09898 0.018837 8.19657 0.0565796 8.28762C0.0943222 8.37867 0.149643 8.46139 0.219376 8.53104Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <div class="nav-button-icon---slider w-embed">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: "block"}}>
                                            <path d="M17.7806 8.53104L11.0306 15.281C10.8899 15.4218 10.699 15.5008 10.5 15.5008C10.301 15.5008 10.1101 15.4218 9.96937 15.281C9.82864 15.1403 9.74958 14.9494 9.74958 14.7504C9.74958 14.5514 9.82864 14.3605 9.96937 14.2198L15.4397 8.75042H0.75C0.551088 8.75042 0.360322 8.6714 0.21967 8.53075C0.0790178 8.3901 0 8.19933 0 8.00042C0 7.8015 0.0790178 7.61074 0.21967 7.47009C0.360322 7.32943 0.551088 7.25042 0.75 7.25042H15.4397L9.96937 1.78104C9.82864 1.64031 9.74958 1.44944 9.74958 1.25042C9.74958 1.05139 9.82864 0.860523 9.96937 0.719792C10.1101 0.579062 10.301 0.5 10.5 0.5C10.699 0.5 10.8899 0.579062 11.0306 0.719792L17.7806 7.46979C17.8504 7.53945 17.9057 7.62216 17.9434 7.71321C17.9812 7.80426 18.0006 7.90186 18.0006 8.00042C18.0006 8.09898 17.9812 8.19657 17.9434 8.28762C17.9057 8.37867 17.8504 8.46139 17.7806 8.53104Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <div class="nav-button-bg---slider"></div>
                                </button>
                                <button direction="right" class="nav-button---slider">
                                    <div class="nav-button-icon---slider w-embed">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: "block"}}>
                                            <path d="M0.219376 8.53104L6.96937 15.281C7.11011 15.4218 7.30098 15.5008 7.5 15.5008C7.69902 15.5008 7.88989 15.4218 8.03063 15.281C8.17136 15.1403 8.25042 14.9494 8.25042 14.7504C8.25042 14.5514 8.17136 14.3605 8.03063 14.2198L2.56031 8.75042H17.25C17.4489 8.75042 17.6397 8.6714 17.7803 8.53075C17.921 8.3901 18 8.19933 18 8.00042C18 7.8015 17.921 7.61074 17.7803 7.47009C17.6397 7.32943 17.4489 7.25042 17.25 7.25042H2.56031L8.03063 1.78104C8.17136 1.64031 8.25042 1.44944 8.25042 1.25042C8.25042 1.05139 8.17136 0.860523 8.03063 0.719792C7.88989 0.579062 7.69902 0.5 7.5 0.5C7.30098 0.5 7.11011 0.579062 6.96937 0.719792L0.219376 7.46979C0.149643 7.53945 0.0943222 7.62216 0.0565796 7.71321C0.018837 7.80426 -0.000589371 7.90186 -0.000589371 8.00042C-0.000589371 8.09898 0.018837 8.19657 0.0565796 8.28762C0.0943222 8.37867 0.149643 8.46139 0.219376 8.53104Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <div class="nav-button-icon---slider w-embed">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: "block"}}>
                                            <path d="M17.7806 8.53104L11.0306 15.281C10.8899 15.4218 10.699 15.5008 10.5 15.5008C10.301 15.5008 10.1101 15.4218 9.96937 15.281C9.82864 15.1403 9.74958 14.9494 9.74958 14.7504C9.74958 14.5514 9.82864 14.3605 9.96937 14.2198L15.4397 8.75042H0.75C0.551088 8.75042 0.360322 8.6714 0.21967 8.53075C0.0790178 8.3901 0 8.19933 0 8.00042C0 7.8015 0.0790178 7.61074 0.21967 7.47009C0.360322 7.32943 0.551088 7.25042 0.75 7.25042H15.4397L9.96937 1.78104C9.82864 1.64031 9.74958 1.44944 9.74958 1.25042C9.74958 1.05139 9.82864 0.860523 9.96937 0.719792C10.1101 0.579062 10.301 0.5 10.5 0.5C10.699 0.5 10.8899 0.579062 11.0306 0.719792L17.7806 7.46979C17.8504 7.53945 17.9057 7.62216 17.9434 7.71321C17.9812 7.80426 18.0006 7.90186 18.0006 8.00042C18.0006 8.09898 17.9812 8.19657 17.9434 8.28762C17.9057 8.37867 17.8504 8.46139 17.7806 8.53104Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <div class="nav-button-bg---slider"></div>
                                </button>
                            </div>
                        </div>
                        <div el="slider/product-preview-slider" class="wrapper---businesses-product-slider">
                            <div description="" title="Home Page" class="media---businesses-product-slider">
                                <img src="/images/6694e750ddf5484a13b68c79_businesses-image1.png" loading="eager" width="1093" alt=""/>
                            </div>
                            <div description="Scope 3 employee and student commuting emissions" title="Weekly Stats" class="media---businesses-product-slider">
                                <img src="/images/6694e750ddf5484a13b68c7a_businesses-image2.png" loading="eager" width="1093" title="[1] Commuting habits and company impact" alt="" description="[1] Scope 3 employee and student commuting emissions"/>
                            </div>
                            <div description="Scope 3 employee and student commuting emissions" title="Monthly Stats" class="media---businesses-product-slider">
                                <img src="/images/6694e750ddf5484a13b68c7b_businesses-image3.png" loading="eager" width="1093" title="[1] Commuting habits and company impact" alt="" description="[1] Scope 3 employee and student commuting emissions"/>
                            </div>
                            <div description="Scope 3 employee and student commuting emissions" title="Account" class="media---businesses-product-slider">
                                <img src="/images/6694e750ddf5484a13b68c98_businesses20image4.png" width="1093" alt="" sizes="25vw" title="[1] Commuting habits and company impact" loading="eager" description="[1] Scope 3 employee and student commuting emissions" srcset="/images/ 6694e750ddf5484a13b68c98_businesses20image4.png 500w, /images/6694e750ddf5484a13b68c98_businesses20image4.png 800w, /images/6694e750ddf5484a13b68c98_businesses20image4.png 1080w, /images/6694e750ddf5484a13b68c98_businesses20image4.png 1600w, /images/6694e750ddf5484a13b68c98_businesses20image4.png 2168w"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shape-bg---product-showcase"></div>
            </section>
      
      
      <section className="section benefits-grid-section">
        <div threshold="0.2" animate="benefits-section" className="w-layout-blockcontainer container dashboard-benefits w-container">
          <div border-color="green" className="container-dashboard-benefits">
            <div className="what-is-text-content__right-subtitle">
              <div className="code-embed w-embed">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.183 12.5382C2.04277 12.6704 1.89444 12.7926 1.73983 12.9059L1.62117 12.9886L1.56274 13.0291C1.54296 13.0425 1.52228 13.0542 1.50251 13.0677L1.38115 13.145L1.2562 13.2169L1.19327 13.2529L1.13035 13.2853L1.0018 13.3509L0.739312 13.4713L0.694365 13.492C0.653014 13.5981 0.61436 13.7033 0.570312 13.803C0.684477 13.8435 0.795046 13.883 0.905615 13.8992L0.949663 13.8696L1.20226 13.7015L1.32452 13.6125L1.38565 13.5657L1.44408 13.5181L1.56094 13.4219L1.6733 13.3203L1.72994 13.2691C1.74882 13.2511 1.7659 13.2331 1.78387 13.2151L1.88995 13.1073C2.02928 12.9607 2.15783 12.8025 2.27289 12.6371C2.38616 12.4699 2.49313 12.2973 2.56864 12.1104C2.45358 12.2659 2.32144 12.407 2.1812 12.5391L2.183 12.5382Z" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.9513 2.66892C10.767 1.79965 10.4353 0.821607 10.0847 0.117742C10.0793 0.107854 10.0667 0.103359 10.0577 0.108753C10.055 0.109652 10.0532 0.111449 10.0514 0.113247C10.0164 0.142912 9.13542 0.803629 9.05002 0.860262C8.25356 1.38794 7.28721 1.70256 6.35322 2.0064C6.09702 2.09 5.83094 2.1763 5.57923 2.2644C4.54276 2.62577 3.35347 3.07344 2.35116 3.80337C1.53223 4.40026 0.908372 5.18324 0.546102 6.06869C0.167651 6.99549 0.101129 7.98971 0.352831 8.94258C0.754655 10.4627 1.95563 11.8255 3.48741 12.4997C4.14903 12.7909 4.82323 12.9365 5.48035 12.9365C6.17523 12.9365 6.85033 12.7738 7.47059 12.4484C9.02215 11.634 10.1566 10.1579 10.7499 8.17938C11.2596 6.4813 11.3333 4.47308 10.9513 2.67071V2.66892Z" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-body">Dashboard Benefits</div>
            </div>
            <div className="list-dashboard-benefits">
              <div className="grid-dashboard-benefits">
                <div className="container-benefits-card">
                  <div className="benefits-card small-benefits-card">
                    <div className="text-h4 font-medium">Complete visibility over your <br />linen usage</div>
                    <div className="text-body" />
                    <div className="benefits-card__bg w-embed">
                      <svg width="361" height="439" viewBox="0 0 361 439" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: "100%", height: "auto", position: "absolute", top: "0px", left: "0px"}}>
                        <g clipPath="url(#clip0_324_61061)">
                          <path d="M667.504 -302.75C704.683 -247.533 740.032 -178.713 759.642 -123.165C759.893 -122.36 759.48 -121.448 758.721 -121.246C758.532 -121.147 758.341 -121.144 758.151 -121.141C754.728 -120.8 673.261 -107.821 665.763 -106.177C595.859 -90.812 528.568 -55.2013 463.543 -20.7702C445.693 -11.339 427.182 -1.51627 409.324 7.43877C335.863 44.3869 249.794 85.0622 158.278 100.965C83.478 113.932 8.82959 106.704 -57.7018 80.0576C-127.302 52.1269 -184.275 3.89547 -222.439 -59.3069C-283.307 -160.148 -294.062 -295.8 -250.521 -413.371C-231.717 -464.155 -204.42 -508.028 -170.176 -543.392C-133.964 -580.789 -90.0262 -608.642 -40.1897 -625.064C84.4968 -666.123 223.053 -650.256 360.452 -579.078C478.4 -518.017 590.318 -417.331 667.407 -302.844L667.504 -302.75Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M-25.1328 91.6299C7.92478 -26.3438 -25.5488 -156.153 -121.58 -249.142C-165.943 -292.099 -215.043 -321.646 -270.341 -336.853" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M235.45 81.5785C234.737 -30.7559 189.921 -140.333 101.679 -225.779C-2.52757 -326.685 -137.335 -367.044 -267.943 -344.749" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M478.928 -29.4948C471.931 -138.728 424.58 -246.073 337.596 -330.301C158.644 -503.584 -103.117 -516.516 -267.451 -346.805" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M-270.338 -336.853C-242.699 -273.624 -110.011 -3.96736 173.418 -103.539C173.418 -103.539 220.676 -111.491 416.524 -249.563C524.36 -325.592 583.753 -357.79 615.348 -371.347" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                        </g>
                        <defs>
                          <clipPath id="clip0_324_61061">
                            <rect width="361" height="439" rx="16" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="container-benefits-card">
                  <div className="benefits-card medium-benefits-card">
                    <div className="text-h4 font-medium">Automated Scope 3 ESG report <br />Creation</div>
                    <div className="benefits-card-wrapper">
                      <div className="text-body" />
                    </div>
                    <div className="benefits-card__bg w-embed">
                      <svg width="428" height="439" viewBox="0 0 428 439" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: "100%", height: "auto", position: "absolute", top: "0px", left: "0px"}}>
                        <g clipPath="url(#clip0_2058_3788)">
                          <path d="M1121.5 -137.026C1158.68 -192.244 1194.03 -261.064 1213.64 -316.611C1213.89 -317.417 1213.48 -318.328 1212.72 -318.531C1212.53 -318.629 1212.34 -318.632 1212.15 -318.636C1208.73 -318.976 1127.26 -331.956 1119.76 -333.6C1049.86 -348.965 982.568 -384.576 917.543 -419.007C899.693 -428.438 881.182 -438.261 863.324 -447.216C789.863 -484.164 703.794 -524.839 612.278 -540.742C537.478 -553.709 462.83 -546.481 396.298 -519.834C326.698 -491.904 269.725 -443.672 231.561 -380.47C170.693 -279.629 159.938 -143.977 203.479 -26.4063C222.283 24.3781 249.58 68.2509 283.824 103.615C320.036 141.012 363.974 168.865 413.81 185.288C538.497 226.346 677.053 210.479 814.452 139.301C932.4 78.24 1044.32 -22.4463 1121.41 -136.933L1121.5 -137.026Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M354.818 157.669C365.21 91.9237 345.151 21.4503 294.511 -30.8466C264.249 -62.099 227.194 -82.65 188.156 -92.3745" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M590.368 205.083C579.281 136.421 546.865 64.4152 494.304 10.1347C410.309 -76.6075 294.89 -113.517 186.057 -95.0278" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M850.748 118.311C828.774 66.1899 795.131 14.2142 753.063 -29.2295C596.927 -190.474 354.966 -218.276 184.593 -101.576" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M689.45 -521.355C688.737 -409.021 643.921 -299.444 555.679 -213.998C451.472 -113.092 316.665 -72.733 186.057 -95.0277" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M932.928 -410.282C925.931 -301.049 878.58 -193.704 791.596 -109.475C612.644 63.807 350.883 76.7389 186.549 -92.9721" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M183.662 -102.924C211.301 -166.153 343.989 -435.809 627.418 -336.237C627.418 -336.237 674.676 -328.286 870.524 -190.214C978.36 -114.184 1037.75 -81.987 1069.35 -68.4294" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2058_3788">
                            <rect width="428" height="439" rx="16" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="container-benefits-card">
                  <div className="benefits-card large-benefits-card">
                    <div className="text-h3 font-medium benefits-card__title">Daily to Annual insights on linen utilisation</div>
                    <div className="benefits-card__bg bottom w-embed">
                      <svg width="669" height="439" viewBox="0 0 669 439" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: "100%", height: "auto", position: "absolute", bottom: "0px", left: "0px"}}>
                        <g clipPath="url(#clip0_2001_7918)">
                          <path d="M288.5 386.921C251.321 442.139 215.972 510.959 196.362 566.506C196.11 567.312 196.524 568.223 197.283 568.426C197.472 568.524 197.662 568.528 197.853 568.531C201.276 568.871 282.743 581.851 290.241 583.495C360.145 598.86 427.436 634.471 492.461 668.902C510.311 678.333 528.822 688.156 546.68 697.111C620.141 734.059 706.21 774.734 797.726 790.637C872.526 803.604 947.174 796.376 1013.71 769.729C1083.31 741.799 1140.28 693.567 1178.44 630.365C1239.31 529.524 1250.07 393.872 1206.52 276.301C1187.72 225.517 1160.42 181.644 1126.18 146.28C1089.97 108.883 1046.03 81.0303 996.194 64.6075C871.507 23.5488 732.951 39.4161 595.552 110.594C477.604 171.655 365.685 272.341 288.596 386.828L288.5 386.921Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M559.256 131.584C581.23 183.705 614.873 235.681 656.941 279.125C813.077 440.369 1055.04 468.171 1225.41 351.471" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M720.554 771.25C721.267 658.916 766.083 549.339 854.325 463.893C958.531 362.987 1093.34 322.628 1223.95 344.923" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M477.076 660.177C484.072 550.944 531.424 443.599 618.408 359.37C797.36 186.088 1059.12 173.156 1223.46 342.867" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M1226.34 352.819C1198.7 416.048 1066.01 685.705 782.586 586.132C782.586 586.132 735.328 578.181 539.48 440.109C431.644 364.079 372.251 331.882 340.656 318.324" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2001_7918">
                            <rect width="669" height="439" rx="16" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="container-benefits-card">
                  <div className="benefits-card small-benefits-card">
                    <div className="text-h3 font-medium">Privacy-first linen tracking with <br />AI-driven analytics</div>
                    <div className="benefits-card__bg w-embed">
                      <svg width="361" height="439" viewBox="0 0 361 439" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: "100%", height: "auto", position: "absolute", top: "0px", left: "0px"}}>
                        <g clipPath="url(#clip0_2001_7875)">
                          <path d="M313.504 -126.75C350.683 -71.533 386.032 -2.71323 405.642 52.8345C405.893 53.6401 405.48 54.5516 404.721 54.7543C404.532 54.8526 404.341 54.8556 404.151 54.8587C400.728 55.1995 319.261 68.1787 311.763 69.8233C241.859 85.188 174.568 120.799 109.543 155.23C91.6928 164.661 73.1822 174.484 55.3243 183.439C-18.1369 220.387 -104.206 261.062 -195.722 276.965C-270.522 289.932 -345.17 282.704 -411.702 256.058C-481.302 228.127 -538.275 179.895 -576.439 116.693C-637.307 15.8519 -648.062 -119.8 -604.521 -237.371C-585.717 -288.155 -558.42 -332.028 -524.176 -367.392C-487.964 -404.789 -444.026 -432.642 -394.19 -449.064C-269.503 -490.123 -130.947 -474.256 6.45197 -403.078C124.4 -342.017 236.318 -241.331 313.407 -126.844L313.504 -126.75Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M42.7476 -382.088C20.7744 -329.967 -12.8691 -277.991 -54.9366 -234.547C-211.073 -73.3025 -453.034 -45.501 -623.407 -162.201" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M124.928 146.505C117.931 37.2723 70.5797 -70.0728 -16.4044 -154.301C-195.356 -327.584 -457.117 -340.516 -621.451 -170.805" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M-624.338 -160.853C-596.699 -97.624 -464.011 172.033 -180.582 72.4606C-180.582 72.4606 -133.324 64.5087 62.5238 -73.563C170.36 -149.592 229.753 -181.79 261.348 -195.347" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2001_7875">
                            <rect width="361" height="439" rx="16" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="container-benefits-card">
                  <div className="benefits-card large-benefits-card">
                    <div className="text-h3 font-medium">Set &amp; Track of<br />CO2 reduction goals</div>
                    <div className="text-body" />
                    <div className="benefits-card__bg w-embed">
                      <svg width="666" height="439" viewBox="0 0 666 439" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: "100%", height: "auto", position: "absolute", top: "0px", left: "0px"}}>
                        <g clipPath="url(#clip0_2001_7859)">
                          <path d="M-74.5003 -235.75C-111.679 -180.533 -147.028 -111.713 -166.638 -56.1655C-166.89 -55.3599 -166.476 -54.4484 -165.717 -54.2457C-165.528 -54.1474 -165.338 -54.1444 -165.147 -54.1413C-161.724 -53.8005 -80.2568 -40.8213 -72.7586 -39.1767C-2.85523 -23.812 64.4363 11.7987 129.461 46.2298C147.311 55.661 165.822 65.4837 183.68 74.4388C257.141 111.387 343.21 152.062 434.726 167.965C509.526 180.932 584.174 173.704 650.706 147.058C720.306 119.127 777.279 70.8955 815.443 7.69308C876.311 -93.1481 887.066 -228.8 843.525 -346.371C824.721 -397.155 797.424 -441.028 763.18 -476.392C726.968 -513.789 683.03 -541.642 633.194 -558.064C508.507 -599.123 369.951 -583.256 232.552 -512.078C114.604 -451.017 2.68545 -350.331 -74.4035 -235.844L-74.5003 -235.75Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M618.137 158.63C585.079 40.6562 618.553 -89.1528 714.584 -182.142C758.946 -225.099 808.046 -254.646 863.345 -269.853" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M357.554 148.578C358.267 36.2441 403.083 -73.3326 491.325 -158.779C595.531 -259.685 730.339 -300.044 860.947 -277.749" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M114.076 37.5052C121.072 -71.7277 168.424 -179.073 255.408 -263.301C434.36 -436.584 696.12 -449.516 860.455 -279.805" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M863.342 -269.853C835.702 -206.624 703.015 63.0326 419.586 -36.5394C419.586 -36.5394 372.328 -44.4913 176.48 -182.563C68.644 -258.592 9.25074 -290.79 -22.3441 -304.347" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2001_7859">
                            <rect width="666" height="439" rx="16" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="container-benefits-card">
                  <div className="benefits-card medium-benefits-card">
                    <div className="text-h4 font-medium">Maximize efficiency and minimize waste related to <br />linen usage</div>
                    <div className="benefits-card__bg w-embed">
                      <svg width="433" height="440" viewBox="0 0 433 440" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: "100%", height: "auto", position: "absolute", bottom: "-5px", left: "0px"}}>
                        <g clipPath="url(#clip0_2002_7932)">
                          <path d="M507.295 1084.67C487.71 1148.42 456.394 1219.31 425.508 1269.57C425.039 1270.27 424.069 1270.52 423.435 1270.06C423.24 1269.97 423.117 1269.82 422.995 1269.68C420.578 1267.22 359.268 1211.87 353.275 1207.06C297.379 1162.23 227.374 1132.18 159.711 1103.15C141.153 1095.17 121.875 1086.92 103.683 1078.64C28.7586 1044.62 -56.9908 1003.12 -126.892 941.772C-184.002 891.613 -225.305 828.858 -246.399 760.207C-268.423 688.356 -266.716 613.569 -241.538 544.024C-201.352 433.081 -102.583 339.297 16.2537 299.231C67.5824 281.922 118.873 275.587 167.912 280.024C219.769 284.716 269.058 301.441 313.163 329.96C423.486 401.332 498.243 519.356 529.243 671.297C555.886 801.703 547.912 952.353 507.308 1084.53L507.295 1084.67Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M254.664 301.309C210.057 350.783 142.633 379.498 70.1257 372.939C26.7957 369.019 -12.4795 353.07 -44.5805 328.762" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M439.57 455.094C379.194 489.663 302.81 509.71 227.553 502.902C107.288 492.022 6.03465 425.288 -47.9897 328.824" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M535.725 712.733C481.37 728.411 419.792 734.898 359.556 729.448C135.986 709.218 -37.7289 538.084 -54.0419 331.804" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M-63.2762 989.789C23.6983 918.506 80.7919 814.569 91.7978 691.96C104.795 547.168 51.4289 416.635 -48.0557 328.824" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M176.188 1109.68C256.777 1035.45 310.525 930.948 321.371 810.093C343.685 561.46 189.178 349.208 -46.1804 327.912" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                          <path d="M-55.7178 331.935C-87.5304 393.289 -213.894 666.494 41.7296 824.797C41.7296 824.797 77.6222 856.638 308.141 922.418C435.072 958.635 497.454 984.674 527.861 1000.77" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2002_7932">
                            <rect width="433" height="440" rx="16" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default Rental;


