import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSuccess(false);

    try {
      // Here you can add your API call to submit the email
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      setEmail('');
    } catch (error) {
      // Handle error
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer" style={{transform: 'translate(0px, 0px)', opacity: 1}}>
      <div className="footer_leaf-bg w-embed"><svg width="1764" height="553" viewBox="0 0 1764 553" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
<g clipPath="url(#clip0_2003_7844)">
<g opacity="0.3">
<mask id="mask0_2003_7844" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="-82" y="-934" width="1927" height="1920">
<path d="M-81.2821 106.853L769.098 985.053L1844 -55.8004L993.622 -934L-81.2821 106.853Z" fill="white" />
</mask>
<g mask="url(#mask0_2003_7844)">
<path d="M1569.31 -114.916C1589.88 -113.973 1610.29 -111.674 1630.48 -108.224L1645.66 -105.262L1653.11 -103.783C1655.61 -103.267 1658.05 -102.549 1660.55 -102.033L1675.51 -98.4629L1690.32 -94.2159L1697.76 -92.0578L1704.92 -89.6325L1719.52 -84.6416L1748.28 -73.4436L1753.21 -71.5297C1764.43 -76.2411 1775.38 -81.0928 1786.31 -85.1293C1780.93 -96.9022 1775.75 -108.332 1768.77 -118.024L1763.22 -119.201L1731.53 -126.098L1715.61 -128.868L1707.48 -130.086L1699.47 -131.03L1683.4 -132.851L1667.25 -133.926L1659.1 -134.465C1656.32 -134.578 1653.67 -134.553 1650.95 -134.596L1634.78 -134.721C1613.17 -134.525 1591.47 -132.632 1570.22 -129.169C1548.96 -125.435 1527.75 -120.816 1507.78 -112.713C1528.28 -115.44 1548.94 -115.787 1569.51 -114.845L1569.31 -114.916Z" stroke="url(#paint0_linear_2003_7844)" />
<path d="M159.66 -54.3719C106.619 24.4043 56.1872 122.586 28.21 201.834C27.8518 202.983 28.4423 204.284 29.5248 204.573C29.7943 204.713 30.0659 204.717 30.3377 204.722C35.2218 205.208 151.447 223.725 162.144 226.071C261.872 247.991 357.874 298.795 450.642 347.917C476.108 361.372 502.516 375.385 527.993 388.161C632.797 440.873 755.588 498.903 886.15 521.591C992.864 540.091 1099.36 529.779 1194.28 491.763C1293.57 451.916 1374.85 383.106 1429.3 292.938C1516.14 149.072 1531.48 -44.4557 1469.36 -212.189C1442.54 -284.641 1403.59 -347.232 1354.74 -397.685C1303.08 -451.037 1240.39 -490.773 1169.29 -514.203C991.41 -572.78 793.738 -550.142 597.717 -448.596C429.446 -361.483 269.777 -217.838 159.798 -54.5055L159.66 -54.3719Z" stroke="url(#paint1_linear_2003_7844)" />
<path d="M917.406 -542.444C933.223 -444.486 979.47 -341.759 1054.46 -264.319C1174.29 -140.568 1338.95 -87.9116 1494.22 -114.289" stroke="url(#paint2_linear_2003_7844)" />
<path d="M545.937 -418.653C577.286 -344.293 625.283 -270.142 685.299 -208.163C908.053 21.878 1253.25 61.5412 1496.31 -104.949" stroke="url(#paint3_linear_2003_7844)" />
<path d="M1423.25 302.012C1347.46 181.619 1366.95 21.3822 1475.8 -84.013C1482.15 -90.1616 1490.89 -97.5625 1497.57 -103.094" stroke="url(#paint4_linear_2003_7844)" />
<path d="M1147.81 508.273C1100.65 339.966 1148.41 154.773 1285.41 22.1098C1348.7 -39.1758 1418.75 -81.3285 1497.64 -103.024" stroke="url(#paint5_linear_2003_7844)" />
<path d="M776.05 493.933C777.067 333.671 841.004 177.343 966.894 55.4396C1115.56 -88.5181 1307.89 -146.096 1494.22 -114.29" stroke="url(#paint6_linear_2003_7844)" />
<path d="M428.691 335.469C438.672 179.631 506.227 26.4865 630.323 -93.6787C885.625 -340.893 1259.07 -359.342 1493.52 -117.223" stroke="url(#paint7_linear_2003_7844)" />
<path d="M1497.64 -103.024C1458.21 -12.8179 1268.91 371.889 864.555 229.834C864.555 229.834 797.133 218.49 517.727 21.5088C363.881 -86.9591 279.148 -132.894 234.073 -152.236" stroke="url(#paint8_linear_2003_7844)" />
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_2003_7844" x1="1725.03" y1="-25.7818" x2="1576.46" y2="-179.211" gradientUnits="userSpaceOnUse">
<stop stopColor="#67C94D" />
<stop offset="1" stopColor="#4297F7" />
</linearGradient>
<linearGradient id="paint1_linear_2003_7844" x1="1254.54" y1="484.432" x2="437.489" y2="-359.353" gradientUnits="userSpaceOnUse">
<stop stopColor="#67C94D" />
<stop offset="1" stopColor="#4297F7" />
</linearGradient>
<linearGradient id="paint2_linear_2003_7844" x1="1418.23" y1="-40.7059" x2="925.136" y2="-549.929" gradientUnits="userSpaceOnUse">
<stop stopColor="#67C94D" />
<stop offset="1" stopColor="#4297F7" />
</linearGradient>
<linearGradient id="paint3_linear_2003_7844" x1="1312.82" y1="72.7255" x2="696.158" y2="-564.114" gradientUnits="userSpaceOnUse">
<stop stopColor="#67C94D" />
<stop offset="1" stopColor="#4297F7" />
</linearGradient>
<linearGradient id="paint4_linear_2003_7844" x1="1543.65" y1="185.422" x2="1376.17" y2="12.4601" gradientUnits="userSpaceOnUse">
<stop stopColor="#67C94D" />
<stop offset="1" stopColor="#4297F7" />
</linearGradient>
<linearGradient id="paint5_linear_2003_7844" x1="1390.83" y1="272.955" x2="1214.46" y2="90.8139" gradientUnits="userSpaceOnUse">
<stop stopColor="#67C94D" />
<stop offset="1" stopColor="#4297F7" />
</linearGradient>
<linearGradient id="paint6_linear_2003_7844" x1="1156.92" y1="212.322" x2="986.565" y2="36.3922" gradientUnits="userSpaceOnUse">
<stop stopColor="#67C94D" />
<stop offset="1" stopColor="#4297F7" />
</linearGradient>
<linearGradient id="paint7_linear_2003_7844" x1="1105.63" y1="258.377" x2="699.688" y2="-160.846" gradientUnits="userSpaceOnUse">
<stop stopColor="#67C94D" />
<stop offset="1" stopColor="#4297F7" />
</linearGradient>
<linearGradient id="paint8_linear_2003_7844" x1="1224.14" y1="242.37" x2="547.834" y2="-456.057" gradientUnits="userSpaceOnUse">
<stop stopColor="#67C94D" />
<stop offset="1" stopColor="#4297F7" />
</linearGradient>
<clipPath id="clip0_2003_7844">
<rect width="1764" height="553" fill="white" />
</clipPath>
</defs>
</svg></div>
        <div className="container">
          <div className="footer-container">
            <div className="footer__details">
              <div className="footer__newsletter-wrap">
                
                <div className="footer__newsletter-content">
                <div className="footer__brand-wrap">
                  <a href="/" aria-current="page" className="w-inline-block w--current">
                    <div className="w-embed">
                      <img src="/images/logo_linengrass_01.png" alt="Linengrass Logo" width="200" height="84" style={{display: 'block'}} />
                    </div>
                  </a>
                </div>
                  <h4 className="text-h4 font-light">Subscribe to stay up-to-date with the latest news.</h4>
                  <div className="footer__newsletter w-form">
                    <form 
                      id="wf-form-Footer-Newsletter" 
                      name="wf-form-Footer-Newsletter" 
                      data-name="Footer Newsletter" 
                      onSubmit={handleSubmit}
                      className="newsletter-form" 
                      data-wf-flow="6694e750ddf5484a13b68bc2" 
                      data-wf-page-id="6694e750ddf5484a13b68bc0" 
                      data-wf-element-id="e3031384-25cb-7580-9089-b3eab7210555" 
                      aria-label="Footer Newsletter"
                    >
                      <input 
                        className="input-newsletter-form w-input" 
                        maxLength="256" 
                        name="email" 
                        data-name="Email" 
                        placeholder="E-mail address" 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                      <div className="submit-button-newsletter-form">
                        <input 
                          type="submit" 
                          data-wait="" 
                          className="submit-button w-button" 
                          value="" 
                        />
                        <div className="w-embed">
                          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
                            <path d="M-0.000785828 10.0006C-0.000785828 10.2658 0.10457 10.5201 0.292107 10.7077C0.479643 10.8952 0.733997 11.0006 0.999214 11.0006H20.5855L13.2917 18.2931C13.1988 18.386 13.1251 18.4963 13.0748 18.6177C13.0245 18.7391 12.9987 18.8692 12.9987 19.0006C12.9987 19.132 13.0245 19.2621 13.0748 19.3835C13.1251 19.5048 13.1988 19.6151 13.2917 19.7081C13.3846 19.801 13.4949 19.8747 13.6163 19.9249C13.7377 19.9752 13.8678 20.0011 13.9992 20.0011C14.1306 20.0011 14.2607 19.9752 14.3821 19.9249C14.5035 19.8747 14.6138 19.801 14.7067 19.7081L23.7067 10.7081C23.7997 10.6152 23.8734 10.5049 23.9238 10.3835C23.9741 10.2621 24 10.132 24 10.0006C24 9.86914 23.9741 9.73901 23.9238 9.61762C23.8734 9.49622 23.7997 9.38593 23.7067 9.29306L14.7067 0.293056C14.5191 0.105415 14.2646 -1.97712e-09 13.9992 0C13.7338 1.97712e-09 13.4794 0.105415 13.2917 0.293056C13.1041 0.480697 12.9987 0.735192 12.9987 1.00056C12.9987 1.26592 13.1041 1.52042 13.2917 1.70806L20.5855 9.00056H0.999214C0.733997 9.00056 0.479643 9.10591 0.292107 9.29345C0.10457 9.48099 -0.000785828 9.73534 -0.000785828 10.0006Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </form>
                    <div className={`success-newsletter-form w-form-done ${isSuccess ? 'show' : ''}`} tabIndex="-1" role="region" aria-label="Footer Newsletter success">
                      <div className="success-text-newsletter-form">
                        Success. <br />
                        Thank you
                      </div>
                      <div className="success-icon-newsletter-form w-embed">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
                          <path d="M28.7071 9.70757L12.7071 25.7076C12.6142 25.8005 12.5039 25.8743 12.3825 25.9246C12.2611 25.975 12.131 26.0009 11.9996 26.0009C11.8682 26.0009 11.738 25.975 11.6166 25.9246C11.4952 25.8743 11.385 25.8005 11.2921 25.7076L4.29208 18.7076C4.10444 18.5199 3.99902 18.2654 3.99902 18.0001C3.99902 17.7347 4.10444 17.4802 4.29208 17.2926C4.47972 17.1049 4.73422 16.9995 4.99958 16.9995C5.26494 16.9995 5.51944 17.1049 5.70708 17.2926L11.9996 23.5863L27.2921 8.29257C27.4797 8.10493 27.7342 7.99951 27.9996 7.99951C28.2649 7.99951 28.5194 8.10493 28.7071 8.29257C28.8947 8.48021 29.0001 8.7347 29.0001 9.00007C29.0001 9.26543 28.8947 9.51993 28.7071 9.70757Z" fill="black" />
                        </svg>
                      </div>
                    </div>
                    <div className="error-newsletter-form w-form-fail" tabIndex="-1" role="region" aria-label="Footer Newsletter failure">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="footer__nav-wrap">
                {/* <div className="footer__nav-col">
                  <div className="text-link-button-component">
                    <a href="/products" className="text-body color-black">Products</a>
                    </div>
                    <div className="text-link-button-component">
                    <a href="/about" className="text-body color-black">About</a>
                     </div>
                     <div className="text-link-button-component">
                    <a href="/team" className="text-body color-black">Team</a>
                  </div>
                </div>
                <div className="footer__nav-col">
                  <div className="text-link-button-component">
                    <a href="/contacts" className="text-body color-black">Contact</a>
                  </div>
                  <div className="text-link-button-component">
                    <a href="/terms-and-conditions" className="text-body color-black">T&C</a>
                  </div>
                </div> */}
                <div className="footer__nav-col">
                  <a href="https://admin.linengrass.com" target="_blank" rel="noreferrer" className="button-link-tertiary-small-component w-inline-block">
                    <p className="text-body text-black">Login</p>
                    <div className="button-link-tertiary-small-component__bg" />
                  </a>
                </div>
              </nav>
            </div>
            <div className="footer__ctas">
              <div className="footer__networks">
               {/*  <a href="https://www.linkedin.com/company/" target="_blank" className="footer__social-link w-inline-block">
                  <div className="w-embed">
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
                      <path d="M2.64286 4.28571V11.1429C2.64286 11.3702 2.55255 11.5882 2.39181 11.7489C2.23106 11.9097 2.01304 12 1.78571 12C1.55839 12 1.34037 11.9097 1.17962 11.7489C1.01888 11.5882 0.928572 11.3702 0.928572 11.1429V4.28571C0.928572 4.05839 1.01888 3.84037 1.17962 3.67962C1.34037 3.51888 1.55839 3.42857 1.78571 3.42857C2.01304 3.42857 2.23106 3.51888 2.39181 3.67962C2.55255 3.84037 2.64286 4.05839 2.64286 4.28571ZM12.0714 7.28571V11.1429C12.0714 11.3702 11.9811 11.5882 11.8204 11.7489C11.6596 11.9097 11.4416 12 11.2143 12C10.987 12 10.7689 11.9097 10.6082 11.7489C10.4474 11.5882 10.3571 11.3702 10.3571 11.1429V7.28571C10.3571 6.71739 10.1314 6.17235 9.72952 5.77049C9.32765 5.36862 8.78261 5.14286 8.21429 5.14286C7.64597 5.14286 7.10092 5.36862 6.69906 5.77049C6.29719 6.17235 6.07143 6.71739 6.07143 7.28571V11.1429C6.07143 11.3702 5.98112 11.5882 5.82038 11.7489C5.65963 11.9097 5.44162 12 5.21429 12C4.98696 12 4.76894 11.9097 4.6082 11.7489C4.44745 11.5882 4.35714 11.3702 4.35714 11.1429V4.28571C4.35821 4.07576 4.43629 3.8735 4.57659 3.7173C4.71688 3.5611 4.90963 3.46183 5.11826 3.43831C5.32689 3.41479 5.5369 3.46866 5.70845 3.58971C5.88 3.71075 6.00115 3.89055 6.04893 4.095C6.62877 3.70165 7.30481 3.47368 8.00444 3.43556C8.70408 3.39744 9.40088 3.55061 10.02 3.87864C10.6392 4.20666 11.1573 4.69714 11.5187 5.2974C11.8801 5.89767 12.0712 6.58504 12.0714 7.28571ZM3.07143 1.28571C3.07143 1.54 2.99602 1.78858 2.85475 2.00002C2.71347 2.21145 2.51267 2.37625 2.27774 2.47356C2.0428 2.57087 1.78429 2.59633 1.53488 2.54672C1.28548 2.49711 1.05639 2.37466 0.876578 2.19485C0.696767 2.01504 0.574315 1.78595 0.524705 1.53655C0.475096 1.28714 0.500557 1.02863 0.59787 0.793693C0.695182 0.558759 0.859976 0.357958 1.07141 0.216682C1.28285 0.0754055 1.53142 0 1.78571 0C2.12671 0 2.45373 0.135459 2.69485 0.376577C2.93597 0.617695 3.07143 0.944722 3.07143 1.28571Z" fill="currentColor" />
                    </svg>
                  </div>
                </a>
                <a href="https://twitter.com/" target="_blank" className="footer__social-link w-inline-block">
                  <div className="w-embed">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
                      <path d="M13.8479 2.35403L11.9101 4.22278C11.5187 8.59903 7.69171 12.0003 3.11164 12.0003C2.17061 12.0003 1.39484 11.8565 0.805723 11.5728C0.330671 11.3434 0.136243 11.0978 0.0876361 11.0278C0.0442946 10.9651 0.016202 10.8938 0.00545762 10.8192C-0.00528673 10.7445 0.00159502 10.6685 0.0255884 10.5968C0.0495817 10.5251 0.0900663 10.4596 0.144017 10.4051C0.197968 10.3506 0.263991 10.3086 0.337152 10.2822C0.354002 10.2759 1.90813 9.70028 2.89517 8.60466C2.34778 8.17064 1.86994 7.66097 1.47715 7.09216C0.673512 5.94153 -0.226041 3.94278 0.0513428 0.955908C0.060135 0.860999 0.0968661 0.770489 0.15721 0.695037C0.217555 0.619585 0.298999 0.562332 0.391953 0.530022C0.484907 0.497711 0.585499 0.491688 0.681884 0.512662C0.778268 0.533636 0.86643 0.580733 0.935989 0.648408C0.958673 0.670283 3.09284 2.71716 5.70206 3.38091V3.00028C5.70107 2.60115 5.7829 2.20587 5.94273 1.8377C6.10256 1.46954 6.33716 1.13593 6.63272 0.856533C6.91976 0.580112 7.26131 0.361934 7.6372 0.214873C8.01309 0.0678119 8.41572 -0.00515314 8.82133 0.000282862C9.36544 0.00545844 9.89891 0.146316 10.3699 0.409161C10.8408 0.672006 11.2332 1.04789 11.509 1.50028H13.4811C13.5837 1.50021 13.684 1.52949 13.7694 1.58442C13.8547 1.63936 13.9212 1.71748 13.9605 1.80889C13.9998 1.9003 14.0101 2.00089 13.99 2.09794C13.97 2.19498 13.9205 2.28411 13.8479 2.35403Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="footer__social-link w-inline-block">
                  <div className="w-embed">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
                      <path d="M8.76923 0H3.23077C2.3742 0.000916284 1.55297 0.341594 0.947282 0.947282C0.341594 1.55297 0.000916284 2.3742 0 3.23077V8.76923C0.000916284 9.6258 0.341594 10.447 0.947282 11.0527C1.55297 11.6584 2.3742 11.9991 3.23077 12H8.76923C9.6258 11.9991 10.447 11.6584 11.0527 11.0527C11.6584 10.447 11.9991 9.6258 12 8.76923V3.23077C11.9991 2.3742 11.6584 1.55297 11.0527 0.947282C10.447 0.341594 9.6258 0.000916284 8.76923 0ZM6 8.76923C5.4523 8.76923 4.9169 8.60682 4.4615 8.30253C4.0061 7.99824 3.65116 7.56575 3.44156 7.05974C3.23197 6.55373 3.17713 5.99693 3.28398 5.45975C3.39083 4.92257 3.65457 4.42914 4.04186 4.04186C4.42914 3.65457 4.92257 3.39083 5.45975 3.28398C5.99693 3.17713 6.55373 3.23197 7.05974 3.44156C7.56575 3.65116 7.99824 4.0061 8.30253 4.4615C8.60682 4.9169 8.76923 5.4523 8.76923 6C8.76847 6.73421 8.47647 7.43813 7.9573 7.9573C7.43813 8.47647 6.73421 8.76847 6 8.76923ZM9.46154 3.23077C9.32461 3.23077 9.19076 3.19017 9.07691 3.11409C8.96306 3.03802 8.87433 2.9299 8.82193 2.8034C8.76953 2.67689 8.75582 2.53769 8.78253 2.4034C8.80925 2.2691 8.87518 2.14575 8.972 2.04893C9.06882 1.95211 9.19218 1.88617 9.32648 1.85946C9.46077 1.83274 9.59997 1.84645 9.72647 1.89885C9.85298 1.95125 9.9611 2.03999 10.0372 2.15384C10.1132 2.26769 10.1538 2.40154 10.1538 2.53846C10.1538 2.72207 10.0809 2.89816 9.95107 3.028C9.82124 3.15783 9.64515 3.23077 9.46154 3.23077ZM7.84615 6C7.84615 6.36513 7.73788 6.72207 7.53502 7.02567C7.33216 7.32927 7.04383 7.56589 6.70649 7.70562C6.36915 7.84536 5.99795 7.88192 5.63983 7.81068C5.28171 7.73945 4.95276 7.56362 4.69457 7.30543C4.43638 7.04724 4.26055 6.71829 4.18932 6.36017C4.11808 6.00205 4.15464 5.63085 4.29438 5.29351C4.43411 4.95617 4.67073 4.66784 4.97433 4.46498C5.27793 4.26212 5.63487 4.15385 6 4.15385C6.48963 4.15385 6.95921 4.34835 7.30543 4.69457C7.65165 5.04079 7.84615 5.51037 7.84615 6Z" fill="currentColor" />
                    </svg>
                  </div>
                </a> */}
                
              </div> 
              <div className="footer__copyrights">
                <div className="text-body-small text-black">© 2024-2025 Green Earth Pte Ltd. All Rights Reserved</div>
                {/* <div className="footer__copyrights-nav">
                  <a href="/privacy-policy" className="text-body-small text-black">Privacy Policy</a>
                  <span>|</span>
                  <a href="/imprint" className="text-body-small text-black">Imprint</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
