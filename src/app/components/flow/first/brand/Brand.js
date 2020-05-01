import React from 'react';
import Typewriter from '../../../shared/typewriter/Typewriter';

import './Brand.css';

const Brand = () => {
    return (
        <div className="container">
            <div className="label">
                <span className="name">
                    Juan Luis Vazquez
                </span>
                <span className="surname">
                    <Typewriter steps={['Full-Stack Software Engineer', 1000]}/>
                </span>
            </div>
        </div>
    );
};

export default Brand;