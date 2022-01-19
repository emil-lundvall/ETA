import React from 'react';
import './../../src/css/component.css';
import '../scroll-it/scrollIt.js';
import './../css/component-css/contact.css';
import './../css/component-css/loading.css';

const loading = () => {
    return (
    <div className="">
        <div className="loader-wrapper">
            <span className="loader"><span className="loader-inner"></span></span>
        </div>
    </div>
    )
}

export default loading