import React from 'react';
import './../../src/index.css';
import './../css/component.css';
import './../css/point.css';
import './../css/sticky-header.css';
import Home from '../components/home-page/home';
import WhatWeDo from '../components/home-page/whatWeDo';
import Cases from '../components/home-page/cases';
import Testimonials from '../components/home-page/testimonials';
import OurStory from '../components/home-page/ourStory';
import Team from '../components/home-page/team';
import TryUs from '../components/home-page/tryUs';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../javascript/headerEffect.js';
import LogoIcon from '../images/LOGO-C1.png'

function Homepage() {
  return (
    <div className="home-page">
      <div className="header-container">
        <div className="header-inner-container">
          <div className="header-logo">
            <img src={LogoIcon}></img>
            <h1>E-SPORT AGENCY</h1>
          </div>
          <div className="header-nav-bar">
            <ul>
              <li><a data-scroll-nav="0" href="#" className="active2">Home</a></li>
              <li><a data-scroll-nav="1" href="#">What we do</a></li>
              <li><a data-scroll-nav="2" href="#">Cases</a></li>
              <li><a data-scroll-nav="3" href="#">Testimonials</a></li>
              <li><a data-scroll-nav="4" href="#">Our Story</a></li>
              <li><a data-scroll-nav="5" href="#">Team</a></li>
              <li><a data-scroll-nav="6" href="#">Try us</a></li>
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
          <li className="point-item"><a className="point-link" data-scroll-nav="5" href="#"></a></li>
          <li className="point-item-last"><a className="point-link" data-scroll-nav="6" href="#"></a></li>
        </ul>     
      </div>
      <div className="website-container" id="fullpage">
        <Home />
        <WhatWeDo />
        <Cases />
        <Testimonials />
        <OurStory />
        <Team />
        <TryUs />
      </div>
    </div>
  );
}

export default Homepage;
