import React from 'react';
import './../../../src/css/component.css';
import '../../scroll-it/scrollIt.js';
import './../../css/home-page/testimonials.css';

function testimonials() {
    return (
        <div className="default-section review" data-scroll-index="3">
            <div className="inner-section-review">
                <div className="left-review-text-container">
                    <div className="lr-inner-container">
                        <h1>Trusted by thousands of organisations and company's all across the globe<b>.</b></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to 
                        make a type specimen book.</p>
                        <div className="lr-btn-container">
                            <a>Contact us ><li></li></a>
                        </div>
                    </div>
                </div>
                <div className="right-reviews-container">
                    
                </div>
            </div>
        </div>
    )
}

export default testimonials
