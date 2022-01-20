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
                                <div className="staff-img"></div>
                            </div>
                            <div className="staff-row-two">
                                <h1>Emil Lundvall</h1>
                                <p>Ägare</p>
                            </div>
                            <div className="staff-row-three">
                                <div className="social-container">
                                    <div className="social-item" id="instagram"><a><i></i></a></div>
                                    <div className="social-item" id="linkedin"><a><i></i></a></div>
                                    <div className="social-item" id="facebook"><a><i></i></a></div>
                                </div>
                            </div>
                        </div>

                        <div className="team-staff-item">
                            <div className='staff-row-one'>
                                <div className="staff-img"></div>
                            </div>
                            <div className="staff-row-two">
                                <h1>Noah Karlberg</h1>
                                <p>Del-ägare</p>
                            </div>
                            <div className="staff-row-three">
                                <div className="social-container">
                                    <div className="social-item" id="instagram"><a><i></i></a></div>
                                    <div className="social-item active-social" id="linkedin"><a><i></i></a></div>
                                    <div className="social-item" id="facebook"><a><i></i></a></div>
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
