import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <section className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Link to="/rental" className="product-card">
              <div className="product-content">
                <h2>Rental</h2>
                <p>Explore our rental solutions</p>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/laundry" className="product-card">
              <div className="product-content">
                <h2>Laundry</h2>
                <p>Discover our laundry services</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product; 
