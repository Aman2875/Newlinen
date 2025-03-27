import React from 'react';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import Benefits from './Benefits/Benefits';
import Dashboard from './Dashboard/Dashboard';
import Product from './Product/Product';
import WhyCode from './Whycode/WhyCode';
import StartJourney from './Startjourney/Journey';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <Dashboard />
      <Product />
      <WhyCode />
      <StartJourney />
    </>
  );
};

export default Home; 