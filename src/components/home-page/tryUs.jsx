import React from 'react';
import './../../../src/css/component.css';
import './../../scroll-it/scrollIt.js';
import './../../css/home-page/tryUs.css';
import ContactUs from '../../javascript/ContactUs.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function tryUs() {

    return (
        <div className="default-section-contact" data-scroll-index="6">
            <div className="contact-container">
                <div className="contact-inner-container">
                    <div className="contact-left">
                        <div className="cl-contact-container">
                            <div className="cl-text-container">
                                <h1>Get in touch with us<b>.</b></h1>
                                <p>Fill upp the form and our Team will get back to you within 24 hours.</p>
                            </div>

                            <div className="cl-contact-info-container">
                                <div className="cl-contact-info-inner-container">
                                    <a className="cl-contact-item">
                                        <i class="bi bi-telephone-fill"></i>
                                        <p>+46 76-127 01 02</p>
                                    </a>

                                    <a className="cl-contact-item">
                                        <i class="bi bi-envelope-fill"></i>
                                        <p>info@e-sportagency.com</p>
                                    </a>

                                    <a className="cl-contact-item">
                                        <i class="bi bi-geo-alt-fill"></i>
                                        <p>Uddvägen 28A, Lidingö</p>
                                    </a>
                                </div>
                            </div>
                            <div className="cl-social-media-container">
                                <a className="social-item"><i className="bi bi-instagram"></i></a> 
                                <a className="social-item"><i className="bi bi-facebook"></i></a> 
                                <a className="social-item"><i className="bi bi-linkedin"></i></a> 
                            </div>
                        </div>
                    </div>

                    <div className="contact-right">
                        <div className="cr-form-container">
                            <ContactUs />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-upper-container">
                    <div className="footer-upper-inner-container">
                        <i>"Quote here"</i>
                    </div>
                </div>
                <div className="copyright-footer">
                    <p>© 2022 ESPORT AGENCY AB. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    );
}

export default tryUs