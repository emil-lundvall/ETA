import React from 'react';
import './../../src/css/component.css';
import './../scroll-it/scrollIt.js';
import './../css/component-css/contact.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function contact() {
    return (
        <div className="default-section contact" data-scroll-index="5">
            <div className="contact-container">
                <div className="container-md">
                    <div className="contact-inner-container">
                        <div className="contact-section-one">
                            <div className="inner-section-one">
                                <div className="contact-info-title">
                                    <h1>Title here</h1>
                                    <p>Under text here about how fast you respond.</p>
                                </div>
                                <div className="contact-info">
                                    <a className="cont-info info-phone"><i class="bi bi-telephone"></i><p>+46 70-146 74 11</p></a>
                                    <a className="cont-info info-email"><i class="bi bi-envelope"></i><p>epost@företag.com</p></a>
                                    <a className="cont-info info-adress"><i class="bi bi-geo-alt"></i><p>Adressvägen 2B, Stockholm</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-section-two">
                            <div className="inner-section-two">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="container footer-inner-container">
                    <div className="footer-section-one">
                        <div className="location-container">
                            <h1>Adressvägen 2B</h1> 
                            <h1>Stockholm</h1> 
                        </div>
                    </div> 
                    <div className="footer-section-two">
                        <ul className="social-container">
                            <li className="social-item"><a><i className="bi bi-instagram"></i></a></li> 
                            <li className="social-item"><a><i className="bi bi-facebook"></i></a></li> 
                            <li className="social-item"><a><i className="bi bi-linkedin"></i></a></li> 
                        </ul>
                    </div> 
                    <div className="footer-section-three">
                        <div className="footer-contact-container">
                            <h1>Contact</h1> 
                            <h1>contact@företag.se</h1> 
                        </div>
                    </div> 
                </div>
                <div className="copyright-footer">
                    <p>© 2021 FÖRETAG AB. ALLA RÄTTIGHETER FÖRBEHÅLLNA.</p>
                </div>
            </div>
        </div>
    )
}

export default contact
