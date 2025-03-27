import React from 'react';
import { Link } from 'react-router-dom';

// Arrow icon component for reusability
const ArrowIcon = () => (
  <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.000774384 15.0008C0.000774384 15.3987 0.15881 15.7802 0.440113 16.0615C0.721416 16.3428 1.10295 16.5008 1.50077 16.5008H30.8801L19.9395 27.4396C19.8002 27.579 19.6896 27.7444 19.6142 27.9265C19.5388 28.1086 19.4999 28.3037 19.4999 28.5008C19.4999 28.6979 19.5388 28.8931 19.6142 29.0752C19.6896 29.2573 19.8002 29.4227 19.9395 29.5621C20.0789 29.7015 20.2443 29.812 20.4264 29.8874C20.6085 29.9628 20.8037 30.0017 21.0008 30.0017C21.1979 30.0017 21.393 29.9628 21.5751 29.8874C21.7572 29.812 21.9227 29.7015 22.062 29.5621L35.562 16.0621C35.7015 15.9228 35.8121 15.7573 35.8876 15.5752C35.9631 15.3931 36.002 15.198 36.002 15.0008C36.002 14.8037 35.9631 14.6085 35.8876 14.4264C35.8121 14.2443 35.7015 14.0789 35.562 13.9396L22.062 0.439584C21.7806 0.158123 21.3988 -2.96567e-09 21.0008 0C20.6027 2.96567e-09 20.221 0.158123 19.9395 0.439584C19.6581 0.721045 19.4999 1.10279 19.4999 1.50083C19.4999 1.89888 19.6581 2.28062 19.9395 2.56208L30.8801 13.5008H1.50077C1.10295 13.5008 0.721416 13.6589 0.440113 13.9402C0.15881 14.2215 0.000774384 14.603 0.000774384 15.0008Z" fill="currentColor" />
  </svg>
);

// Product CTA Card component
const ProductCard = ({ to, className, title, description, isReversed = false }) => (
  <Link to={to} className={`${className} w-inline-block`}>
    {!isReversed && <div className="businesses-card-button__bg" />}
    <div className="businesses-card-button__content">
      <div className="text-h2 font-medium">{title}</div>
      <div className="text-body1 businesses-card-button__description">{description}</div>
      <div className="w-embed">
        <ArrowIcon />
      </div>
    </div>
    {isReversed && <div className="businesses-card-button__bg" />}
  </Link>
);

// Product CTAs section component
const ProductCTAs = () => {
  return (
    <section id="products-ctas" className="products-ctas">
      <ProductCard
        to="/rental"
        className="businesses-card---products-ctas"
        title="Hotels"
        description="The linengrass platform automates ESG reporting by tracking and validating the environmental impact of your linen operations, including water, energy, and CO₂ savings."
      />
      <ProductCard
        to="/laundry"
        className="commuters-card---products-ctas"
        title="Laundries"
        description="Optimize linen care, reduce waste, and enhance operational efficiency with Linengrass."
        isReversed
      />
    </section>
  );
};

// Main Product component
const Product = () => {
  return <ProductCTAs />;
};

export default Product; 
