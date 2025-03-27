import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section data-el="team-section-component" className="team-image__section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="team-image__title">
          <h4 
            data-animate="title" 
            className="text-h2 font-medium no-margins words splitting" 
            style={{ '--word-total': 7 }} 
            data-in-view="true"
          >
            <span className="word" data-word="Meet" style={{ '--word-index': 0 }}>Meet</span>
            <span className="whitespace"> </span>
            <span className="word" data-word="the" style={{ '--word-index': 1 }}>the</span>
            <span className="whitespace"> </span>
            <span className="word" data-word="team" style={{ '--word-index': 2 }}>team</span>
            <span className="whitespace"> </span>
            <span className="word" data-word="and" style={{ '--word-index': 3 }}>and</span>
            <span className="whitespace"> </span>
            <span className="word" data-word="partners" style={{ '--word-index': 4 }}>partners</span>
            <span className="whitespace"> </span>
            <span className="word" data-word="behind" style={{ '--word-index': 5 }}>behind</span>
            <span className="whitespace"> </span>
            <span className="word" data-word="Codos" style={{ '--word-index': 6 }}>Codos</span>
          </h4>
        </div>
        <div data-w-id="8b8b5352-3994-e5c4-48b8-90e9304b7300" className="team-image__button-wrap" style={{ opacity: 1 }}><a full="false" href="/team" className="button-secondary medium w-inline-block"><p className="text-button no-margins">Meet the Team</p><div className="div-block-3"></div></a></div>
      </div>
      <div className="team-image__shadow"></div>
      <div className="team-image__image" style={{ transform: 'translate(0px, 10%)' }}></div>
    </section>
  );
};

export default Team;  
