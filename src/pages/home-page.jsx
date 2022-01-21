import React from 'react';
import './../../src/index.css';
import './../css/component.css';
import './../css/point.css';
import './../css/sticky-header.css';
import Home from '../components/home';
import Team from '../components/team';
import Services from '../components/services';
import Review from '../components/review';
import Projects from '../components/projects';
import Contact from '../components/contact';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../javascript/headerEffect.js';

function Homepage() {
  return (
    <div className="home-page">
      <div className="header-container">
        <div className="header-inner-container">
          <div className="header-logo">
            <h1>ESPORT AGENCY</h1>
          </div>
          <div className="header-nav-bar">
            <ul>
              <li><a data-scroll-nav="0" href="#" className="active2">Home</a></li>
              <li><a data-scroll-nav="1" href="#">About</a></li>
              <li><a data-scroll-nav="2" href="#">Costumers</a></li>
              <li><a data-scroll-nav="3" href="#">Projects</a></li>
              <li><a data-scroll-nav="4" href="#">Our Team</a></li>
              <li><a data-scroll-nav="5" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="point-container">   
        <ul>
          <li className="point-item"><a className="point-link active" data-scroll-nav="0" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="1" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="2" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="3" href="#"></a></li>
          <li className="point-item"><a className="point-link" data-scroll-nav="4" href="#"></a></li>
          <li className="point-item-last"><a className="point-link" data-scroll-nav="5" href="#"></a></li>
        </ul>     
      </div>
      <div className="website-container" id="fullpage">
        <Home />
        <Services />
        <Projects />
        <Review />
        <Team />
        <Contact />
      </div>
    </div>
  );
}

export default Homepage;
