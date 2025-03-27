import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="navigation" appearance="light" className="navigation">
       <div className="fixed-nav">
      <div className="w-layout-blockcontainer container w-container">
        <div className="container-fixed-nav">
      <Link to="/" className="brand-fixed-nav w-inline-block">
            
            <div className="white-brand-fixed-nav w-embed">
              <img 
                src="/images/logo_linengrass_01.png" 
                alt="Linengrass Logo" 
                width="200" 
                height="84" 
                style={{display: "block"}}
              />
            </div>
          </Link>
          <div className="actions-fixed-nav">
           
            {/* <button 
              className="button-open-trigger-nav"
              data-el="main-nav-open-trigger">
              <div className="line-open-trigger-nav"></div>
              <div className="line-open-trigger-nav"></div>
              <div className="line-open-trigger-nav"></div>
              <div className="line-open-trigger-nav"></div>
              <div className="layer-open-trigger-nav"></div>
            </button> */}
            <div className="join-button-open-trigger-nav">
              <a 
                href="https://admin.linengrass.com/login" 
                target="_blank" 
                rel="noreferrer"
                className="button-secondary small w-inline-block"
              >
                <p className="text-button-secondary">Login</p>
                <div className="layer-button-secondary"></div>
              </a>
            </div>
         
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Header;