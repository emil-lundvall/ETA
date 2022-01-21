import React from 'react';
import './../../src/css/component.css';
import './../scroll-it/scrollIt.js';
import './../css/component-css/team.css';

function team() {
    return (
        <div className="default-section team" data-scroll-index="4">
            <div className="default-inner-section">
                <div className="team-text-container">
                    <div className="team-text-title">
                        <h1>Meet our team<b>.</b></h1>
                    </div>
                    <div className="team-text-under">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    </div>
                </div>
                <div className="team-staff-container">
                    <div className="team-staff-inner-container">
                        <div className="team-staff-item">
                            <div className="staff-row-one">
                                <div className="staff-img" id="staff-two"></div>
                            </div>
                            <div className="staff-row-two">
                                <div className="row-two-inner-container-text">
                                    <h1>Emil Lundvall</h1>
                                    <p>Ägare</p>
                                </div>
                            </div>
                            <div className="staff-row-three">
                                <div className="social-container">
                                    <a className="social-item" id="instagram"><i class="bi bi-instagram"></i></a>
                                    <a className="social-item active-social" id="linkedin"><i class="bi bi-linkedin"></i></a>
                                    <a className="social-item" id="facebook"><i class="bi bi-facebook"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="team-staff-item">
                            <div className='staff-row-one'>
                                <div className="staff-img" id="staff-one"></div>
                            </div>
                            <div className="staff-row-two">
                                <div className="row-two-inner-container-text">
                                    <h1>Noah Karlberg</h1>
                                    <p>Del-ägare</p>
                                </div>
                            </div>
                            <div className="staff-row-three">
                                <div className="social-container">
                                    <a className="social-item" id="instagram"><i class="bi bi-instagram"></i></a>
                                    <a className="social-item active-social" id="linkedin"><i class="bi bi-linkedin"></i></a>
                                    <a className="social-item" id="facebook"><i class="bi bi-facebook"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default team
