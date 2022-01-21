import React from 'react';
import './../../src/css/component.css';
import './../scroll-it/scrollIt.js';
import './../css/component-css/contact.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function contact() {
    return (
        <div className="default-section-contact" data-scroll-index="5">
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
                                        <p>+46 70-123 45 67</p>
                                    </a>

                                    <a className="cl-contact-item">
                                        <i class="bi bi-envelope-fill"></i>
                                        <p>contact@e-sportagency.com</p>
                                    </a>

                                    <a className="cl-contact-item">
                                        <i class="bi bi-geo-alt-fill"></i>
                                        <p>Sweden, Stockholm</p>
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
                            <form actions="/action_form.php">
                                <label for="f-name">Your name</label>
                                <input name="f-name" type="text"></input>

                                <label for="f-mail">Mail</label>
                                <input name="f-mail" type="email"></input>

                                <label for="f-company">Company</label>
                                <input name="f-company" type="text"></input>

                                <label for="f-message">Message</label>
                                <textarea name="f-message" type="text" id="message-box"></textarea>

                                <button type="submit">Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-upper-container">
                    <div className="footer-upper-inner-container">
                        <div className="footer-section-one">
                            <div className="location-container">
                                <h1>Adressvägen 2B</h1> 
                                <h1>Stockholm</h1> 
                            </div>
                        </div> 
                        <div className="footer-section-two">
                            <div className="social-container">
                                <a className="social-item"><i className="bi bi-instagram"></i></a> 
                                <a className="social-item"><i className="bi bi-facebook"></i></a> 
                                <a className="social-item"><i className="bi bi-linkedin"></i></a> 
                            </div>
                        </div> 
                        <div className="footer-section-three">
                            <div className="footer-contact-container">
                                <h1>Contact</h1> 
                                <h1>contact@e-sportagency.com</h1> 
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="copyright-footer">
                    <p>© 2022 ESPORT AGENCY AB. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    )
}

export default contact
